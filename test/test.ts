import {
  version,
  initialize,
  getRandomScramble
} from "../src"

import { expect } from "chai";

describe("Scramble222", () => {
  it("should invert", () => {
    expect(version("222")).to.equal("2");
    expect(initialize("222")).to.not.throw();
    expect(getRandomScramble("222")).to.equal(3);
  });
});
