import {Scramble} from "./unlicensed/shared"

export interface ScrambleSource {
  version: (scramblerID: string) => Promise<string>;
  initialize: (scramblerID: string) => Promise<void>;
  getRandomScramble: (scramblerID: string) => Promise<Scramble>;
}
