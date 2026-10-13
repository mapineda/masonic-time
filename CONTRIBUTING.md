# Contributing to masonic-time

Thanks for your interest in improving masonic-time! This document covers how to get set up, the expectations for a pull request, and the project's conventions.

## Getting started

```bash
git clone https://github.com/mapineda/masonic-time.git
cd masonic-time
npm install
```

Useful scripts while you work:

```bash
npm test            # run the Jest test suite
npm run build        # compile src/ to dist/
npm run lint         # run ESLint
npm run format       # apply Prettier formatting
npm run format:check # check formatting without writing
```

## Making a change

1. Fork the repo and create a branch off `main` (e.g. `feature/add-x` or `fix/y`).
2. Make your change in `src/index.ts`.
3. Add or update tests in `tests/` — this project follows a test-driven approach, so a behavior change without a test won't be merged.
4. Update `README.md` if you're adding or changing public API, and add an entry to `CHANGELOG.md` under an `[Unreleased]` heading (see [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)).
5. Run `npm run lint`, `npm run format:check`, `npm run build`, and `npm test` locally — the same checks run in CI on every PR.
6. Open a pull request describing what changed and why.

## Code conventions

- All dates are handled in UTC — use the UTC getters/setters (`getUTCFullYear`, `setUTCDate`, etc.), never the local-time equivalents. Mixing the two has caused real bugs here before.
- Public methods validate their inputs and throw a `TypeError` on invalid input (a non-finite year, an invalid `Date`) rather than silently returning `NaN`-filled output.
- Keep the calendar-system methods (`to*`, `format*`, `parse*`, `isValid*`) symmetric — if you add a new calendar system, implement all four.

## Reporting bugs / requesting features

Please use the [issue templates](https://github.com/mapineda/masonic-time/issues/new/choose) — they ask for the information needed to reproduce a bug or evaluate a feature request.

## Code of Conduct

This project follows the [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to abide by it.
