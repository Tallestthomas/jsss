export type State = any;

export type Scramble = {
  state: State,
  scramble_string: string
}

export type Scrambler = {
  version: string;
  initialize: () => void;
  getRandomScramble: () => Scramble;
  drawScramble: (parentElement: HTMLElement, state: State, w: number, h: number) => void;
}

// export enum ScramblerID {
//   _222 = "222",
//   _333 = "333",
//   _sq1 = "sq1",
// }
