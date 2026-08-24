# Smooth Sailing

Smooth Sailing is a browser-based sailing simulator for learning wind angle, tacking, no-go zones, VMG, and simple regatta navigation.

It is designed as an approachable educational toy: visual first, fast to start, and intentionally simplified enough to make the core sailing ideas easy to see.

## Play

https://galwiner.github.io/smooth_sailing/

## What it teaches

- How true wind direction affects where you can sail
- Why the red no-go sector matters
- How tacking lets you work upwind
- Why VMG matters more than simply pointing at the target
- How currents, waves, scenery, and obstacles change route planning
- How basic right-of-way rules affect traffic avoidance
- How sail trim and rudder input interact

## Controls

### Keyboard

| Key       | Action                                         |
| --------- | ---------------------------------------------- |
| `A` / `D` | Steer rudder port / starboard                  |
| `←` / `→` | Steer rudder port / starboard                  |
| `W` / `S` | Trim main sheet in / out when auto-trim is off |
| `↑` / `↓` | Trim main sheet in / out when auto-trim is off |
| `Space`   | Tack                                           |
| `R`       | Reset                                          |
| `P`       | Toggle autopilot demo                          |
| `T`       | Toggle auto-trim                               |
| `V`       | Toggle force vectors                           |
| `C`       | Toggle currents where available                |
| `M`       | Toggle variable waves where available          |
| `G`       | Toggle variable wind                           |
| `L`       | Toggle shoreline/island scenery                |

### Mouse / touch

- Use the on-screen helm buttons or click/tap left/right on the water to steer.
- Use the sliders for rudder angle and main sheet trim.
- On mobile, the interface is simplified for regatta play with rudder, sail trim, tack, reset, speed, and vector controls.

## Modes

- **Basic Wind Mode** — starts with steady wind only. Currents, waves, ghost competition, and comfort challenge are off.
- **Manual Wind Direction** — lets you set the true wind direction directly.
- **Endless Navigator** — adds changing courses, currents, and wind shifts.
- **Regatta Training** — fixed-course buoy sailing.
- **Right-of-Way Trainer** — sail to the target while avoiding traffic and respecting simplified give-way rules.
- **Passenger Comfort Challenge** — adds waves and a comfort objective.

## Mobile experience

Mobile is intentionally “usable enough,” not a full simulator cockpit. The phone layout focuses on a simplified regatta experience:

- rudder control
- main sheet control
- tack
- reset
- speed control
- vectors on/off

Advanced environment controls are hidden on small screens to keep the water, wind, boat, no-go sector, and target visible.

## Physics note

This is an educational toy simulator, not a physically exact sailing model or a complete racing-rules reference. The goal is to make wind angle, no-go zones, tacking, VMG, route planning, and basic give-way rules intuitive. Some sailing dynamics and rules interactions are simplified for clarity and playability.

## License

MIT License. See [`LICENSE`](LICENSE).

Copyright (c) 2026 Gal Winer
