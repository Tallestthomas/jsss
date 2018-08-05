import {Scramble, Scrambler} from "./shared"

import Scrambler222 from "./scramble_222.js"
import Scrambler333 from "./scramble_333.js"
import ScramblerSq1 from "./scramble_sq1.js"
import ScramblerClock from "./scramble_clock.js"
import ScramblerPyram from "./scramble_pyram.js"
import ScramblerMinx from "./scramble_minx.js"

const scramblers: {[s: string]: Scrambler} = {
  "222": Scrambler222,
  "333": Scrambler333,
  "sq1": ScramblerSq1,
  "clock": ScramblerClock,
  "pyram": ScramblerPyram,
  "minx": ScramblerMinx
}

export function syncVersion(scramblerID: string): string {
  return scramblers[scramblerID].version;
}

export function syncInitialize(scramblerID: string): void {
  return scramblers[scramblerID].initialize();
}

export function syncGetRandomScramble(scramblerID: string): Scramble {
  return scramblers[scramblerID].getRandomScramble();
}
