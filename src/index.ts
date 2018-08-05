import * as AsyncScrambleWorker from "./old/index.worker";
const {
  version,
  getRandomScramble
} = (AsyncScrambleWorker as any)() as typeof AsyncScrambleWorker;

const f = async function() {
  for (var s of ["222", "333", "sq1", "clock", "pyram", "minx"]) {
    console.log(await version(s));
    console.log(await getRandomScramble(s));
  }
}

f();
