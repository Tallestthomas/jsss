# `jsss`

PLEASE NOTE: There is code in this repository that is unlicensed. The goal is to replace it with properly licensed code, but that may take a while.

## Usage
    
    await jsss.offThread.version("333")
    await jsss.offThread.initialize("333")

    // getRandomScramble automatically calls `initialize()` if it wasn't called ahead of time.
    await jsss.offThread.getRandomScramble("333")
    
`jsss` works best in the browser right now. `jsss.offThread` will use a (single) separate thread for calculations, `jsss.onThread` does calculations on the thread.

`jsss.onThread` works in `node`, but currently falls back to insecure random number generation.

## Future Goals

- Properly licensed code for all scramblers.
- Return semantic algs (using `alg.js`)
- Use secure random numbers in `node`.
- Support using workers in `node`?
- Restore big cube support.
