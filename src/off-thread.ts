import {Scramble} from "./unlicensed/shared"
import {ScrambleSource} from "./scramble-source"

import * as _AsyncScrambleWorker from "./index.worker";
export const AsyncScrambleWorker = _AsyncScrambleWorker;

// TODO: Support multiple workers?
var asyncWorker: typeof AsyncScrambleWorker | undefined = undefined;
function worker(): typeof AsyncScrambleWorker {
  if (!asyncWorker) {
    asyncWorker = (AsyncScrambleWorker as any)();
  }
  return <typeof AsyncScrambleWorker>asyncWorker;
}

export const offThread: ScrambleSource = {
  version: async function(scramblerID: string): Promise<string> {
    return worker().version(scramblerID);
  },
  initialize: async function(scramblerID: string): Promise<void> {
    return worker().initialize(scramblerID);
  },
  getRandomScramble: async function(scramblerID: string): Promise<Scramble> {
    return worker().getRandomScramble(scramblerID);
  }
}
