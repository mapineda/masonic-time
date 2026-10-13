# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0]

### Added

- `subtractMonths`, `addYears`, and `subtractYears` for symmetry with the existing `addDays`/`subtractDays`/`addMonths`.
- `exports` field in `package.json` alongside `main`/`types`.
- Input validation: `to*` methods throw a `TypeError` on a non-finite year, and `format*`/`add*`/`subtract*` methods throw a `TypeError` on an invalid `Date` (previously these silently produced `NaN`-filled output).
- ESLint and Prettier configs, plus `lint`/`format`/`format:check` scripts.
- GitHub Actions CI workflow running lint, format check, build, and tests on push/PR.

### Fixed

- All date parsing, formatting, and manipulation now consistently use UTC. Previously `parseMasonicDate` built dates in local time while `format*Date` read them with UTC getters, and `addDays`/`subtractDays`/`addMonths` mixed a UTC getter with a local setter in the same call — both could silently shift results by a day depending on the host timezone.
- Masonic dates that resolve to a Gregorian year between 0-99 (e.g., early A.I./A.O. dates) no longer get misinterpreted as 1900-1999, a quirk of the `new Date(year, month, day)` constructor.
- README example used `toAdep` (lowercase `dep`); the method is `toADep`.

### Changed

- `parseMasonicDate` and `isValidMasonicDate` now share a single regex-building helper instead of duplicating the pattern.

## [1.2.0]

### Added

- Date validation: `isValidALDate`, `isValidAMDate`, `isValidAIDate`, `isValidADepDate`, `isValidAODate`, `isValidABDate`, and `isValidARDate`, checking both the date string's format and whether the day actually exists in that month/year (leap years included).

## [1.1.0]

### Added

- Anno Renascent (A.R.) calendar system support: `toAR`, `formatARDate`, `parseARDate`.

### Fixed

- `main`/`types` in `package.json` pointed at an empty root `index.ts` with no build step, so the published package had no usable entry point. Now builds to and ships `dist/`.
- Resolved all `npm audit` findings (jest/`@types/jest`/`ts-jest` upgrade, plus a `js-yaml` override for an unresolved transitive advisory).
- Removed a leftover debug `console.log` in the date parser.

### Changed

- Added a `files` whitelist so the published tarball only ships `dist/`, `README.md`, and `LICENSE` (previously included tests, `tsconfig.json`, and `jest.config.js`).
- Added `description`, `repository`, `bugs`, and `homepage` metadata for the npm registry page.
- Removed the stray empty root `index.ts`.

## [1.0.2]

### Added

- Parsing: `parseALDate`, `parseAMDate`, `parseAIDate`, `parseADepDate`, `parseAODate`, `parseABDate`, converting a formatted Masonic date string back into a JavaScript `Date`.

## [1.0.1]

### Added

- Formatting: `formatALDate`, `formatAMDate`, `formatAIDate`, `formatAdepDate`, `formatAODDate`, `formatABDate`.

## [1.0.0]

### Added

- Initial release: Gregorian-to-Masonic year conversion (`toAL`, `toAM`, `toAI`, `toADep`, `toAO`, `toAB`).
