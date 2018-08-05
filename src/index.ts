import * as myWorker from "./test.worker";
const { expensive } = (myWorker as any)() as typeof myWorker;
const f = async function() {
  console.log(await expensive(1000));
}

f();
