import {Scramble} from "./unlicensed/shared"

import {
  syncVersion,
  syncInitialize,
  syncGetRandomScramble
} from "./unlicensed"


export async function version(scramblerID: string): Promise<string> {
  return syncVersion(scramblerID);
}

export async function initialize(scramblerID: string): Promise<void> {
  return syncInitialize(scramblerID);
}

export async function getRandomScramble(scramblerID: string): Promise<Scramble> {
  return syncGetRandomScramble(scramblerID);
}
