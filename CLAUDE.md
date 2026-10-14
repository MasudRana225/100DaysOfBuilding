# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

This is a personal "100 Days of Building with TypeScript" challenge repo. Each day is a small, self-contained TypeScript script (a mini project), usually with a crypto/blockchain theme (wallet validators, token converters, portfolio trackers, gas formatters, etc). Progress and learnings are journaled in `developer_journey.md`, organized by day with sections like **What I learned**, **One difficulty/How I solved it**, and **Tomorrow's project**.

Days are grouped into weekly folders: `src/week1`, `src/week2`, `src/week3`, `src/week4`, each containing `dayN.ts` files.

## Commands

Run a specific day's script via its npm script, e.g.:
```
npm run day21
npm run day22
```
Scripts are defined per-day in `package.json` (`"dayN": "ts-node src/weekX/dayN.ts"`). **New day files need a corresponding script added to `package.json`** — scripts are not auto-generated from the file list, so new files (e.g. `day24.ts`) won't run via `npm run` until added.

To run a file directly without adding a script entry:
```
npx ts-node src/weekX/dayN.ts
```

There is no test suite (`npm test` is a placeholder that exits with an error) and no lint command configured.

## Architecture notes

- **Shared modules live at `src/` root**, not per-week: `src/types.ts` (the `Chain` enum, `Token` and `PortfolioItem` interfaces), `src/config.ts` (CLI menu config), and `src/mockPortfolio.ts` (shared sample portfolio data importing from `types.ts`). Day files import these with relative paths like `../types` or `../mockPortfolio` from within a week folder.
- **Env vars**: `.env` lives at the project root (gitignored) and is loaded via `dotenv.config()`. Scripts must be run from the project root (`npm run dayN` does this correctly) — running a day file directly from inside a week subfolder breaks `.env` loading since dotenv resolves relative to `cwd`, not the project root.
- **CLI input pattern**: interactive scripts use Node's built-in `readline` module, chaining `rl.question()` calls inside callbacks to prompt multiple times sequentially, then `rl.close()`.
- **Portfolio persistence pattern** (see `src/week3/day21.ts`): uses Node's `fs` module directly (`fs.existsSync`, `fs.readFileSync`, `fs.writeFileSync`) to read/write `src/week3/portfolio.json`. When a data file doesn't exist, functions return `[]` (a truthy empty array) rather than `undefined`, so downstream code can treat "no data" and "empty data" uniformly without extra undefined-checks.
- `tsconfig.json`: `rootDir` is `./src`, `outDir` is `./dist`, target `ES2022`, `strict` mode is on, module system is `commonjs`.
