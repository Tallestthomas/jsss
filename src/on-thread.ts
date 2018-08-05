import {Scramble} from "./unlicensed/shared"
import {ScrambleSource} from "./scramble-source"

import {
  syncVersion,
  syncInitialize,
  syncGetRandomScramble
}  from "./unlicensed"

export const onThread: ScrambleSource = {
  version: async function(scramblerID: string): Promise<string> {
    return syncVersion(scramblerID);
  },
  initialize: async function(scramblerID: string): Promise<void> {
    return syncInitialize(scramblerID);
  },
  getRandomScramble: async function(scramblerID: string): Promise<Scramble> {
    return syncGetRandomScramble(scramblerID);
  }
}
