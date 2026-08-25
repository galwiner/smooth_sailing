const assert = require("assert");
const fs = require("fs");
const vm = require("vm");

const html = fs.readFileSync("index.html", "utf8");

function extractFunction(name) {
    const start = html.indexOf(`function ${name}(`);
    assert.notStrictEqual(start, -1, `Missing function ${name}`);

    let depth = 0;
    let end = start;
    let seenBody = false;

    for (; end < html.length; end++) {
        if (html[end] === "{") {
            depth++;
            seenBody = true;
        } else if (html[end] === "}") {
            depth--;
            if (seenBody && depth === 0) {
                end++;
                break;
            }
        }
    }

    return html.slice(start, end);
}

const context = {
    Math,
    DEG_TO_RAD: Math.PI / 180,
};

vm.createContext(context);
vm.runInContext(
    `${extractFunction("normalizeAngle")}\n${extractFunction("getTackTargetHeading")}`,
    context,
);

function deg(rad) {
    return rad * 180 / Math.PI;
}

function normDeg(rad) {
    return deg(context.normalizeAngle(rad));
}

function targetDeltaDeg(headingDeg, windDeg, spinnakerHoisted) {
    const heading = headingDeg * context.DEG_TO_RAD;
    const wind = windDeg * context.DEG_TO_RAD;
    const target = context.getTackTargetHeading(
        heading,
        wind,
        spinnakerHoisted,
    );
    return normDeg(target - heading);
}

// Existing upwind behavior: switch between wind.dir ±45°.
assert(Math.abs(targetDeltaDeg(45, 0, false) + 90) < 0.001);
assert(Math.abs(targetDeltaDeg(-45, 0, false) - 90) < 0.001);

// Spinnaker/downwind behavior: controlled ~90° turn, not 165–180°.
assert(Math.abs(targetDeltaDeg(150, 0, true) + 90) < 0.001);
assert(Math.abs(targetDeltaDeg(-150, 0, true) - 90) < 0.001);
assert(Math.abs(targetDeltaDeg(180, 0, true) + 90) < 0.001);

console.log("tack target regression tests passed");
