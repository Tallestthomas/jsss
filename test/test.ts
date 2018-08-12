import {
  onThread
} from "../src"

import {Scramble} from "../src/unlicensed/shared"

import {expect} from "chai";

describe("Scramble222", () => {
  it("should allow function calls", async () => {
    expect(await onThread.version("222")).to.equal("July 05, 2015");
    expect(async () => await onThread.initialize("333")).to.not.throw();
    expect(await onThread.getRandomScramble("222")).to.satisfy((scramble: Scramble) => "state" in scramble && "scramble_string" in scramble);
  });
});
