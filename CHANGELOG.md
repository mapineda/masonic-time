# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
