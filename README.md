# masonic-time
A Javascript date library for parsing, validating, manipulating, and formatting Masonic dates.

# Installation

Install via npm:

```bash
npm install masonic-time
```

Install via yarn:

```bash
yarn install masonic-time
```

# Usage

## Importing the library
```typescript
import FMTime from 'masonic-time';

const fmTime = new FMTime();
```

## Convert Gregorian Year to Masonic Calendar Years
```typescript
console.log(fmTime.toAL(2024)); // 6024 (Anno Lucis)
console.log(fmTime.toAM(2024)); // 5784 (Anno Mundi)
console.log(fmTime.toAI(2024)); // 2554 (Anno Inventionis)
console.log(fmTime.toAdep(2024)); // 3024 (Anno Depositionis)
console.log(fmTime.toAO(2024)); // 906 (Anno Ordinis)
console.log(fmTime.toAB(2024)); // 3935 (Anno Benefacio)
```

## Format Dates Using Masonic Calendar Systems

```typescript
const date = new Date('2024-01-01');

console.log(fmTime.formatALDate(date)); // '1/1/6024'
console.log(fmTime.formatAMDate(date)); // '1/1/5784'
console.log(fmTime.formatAIDate(date)); // '1/1/2554'
console.log(fmTime.formatAdepDate(date)); // '1/1/3024'
console.log(fmTime.formatAODDate(date)); // '1/1/906'
console.log(fmTime.formatABDate(date)); // '1/1/3935'

```
## Parse Dates Masonic Calendar Strings to Javascript Date

```typescript

console.log(fmTime.parseALDate("1/1/6024 A.L")); // '1/1/2024'
console.log(fmTime.parseAMDate("1/1/5784 A.M")); // '1/1/2024'
console.log(fmTime.parseAIDate("1/1/2554 A.M")); // '1/1/2024'
console.log(fmTime.parseADepDate("1/1/3024 A.M")); // '1/1/2024'
console.log(fmTime.parseAODate("1/1/906 A.M")); // '1/1/2024'
console.log(fmTime.parseABDate("1/1/3935 A.M")); // '1/1/2024'
```


# API Reference

### **Methods**
| Method | Description | Example |
|--------|-------------|---------|
| `toAL(year: number)` | Converts Gregorian year to Anno Lucis (A.L.) | `toAL(2024) → 6024` |
| `toAM(year: number)` | Converts Gregorian year to Anno Mundi (A.M.) | `toAM(2024) → 5784` |
| `toAI(year: number)` | Converts Gregorian year to Anno Inventionis (A.I.) | `toAI(2024) → 2554` |
| `toAdep(year: number)` | Converts Gregorian year to Anno Depositionis (A.Dep.) | `toAdep(2024) → 3024` |
| `toAO(year: number)` | Converts Gregorian year to Anno Ordinis (A.O.) | `toAO(2024) → 906` |
| `toAB(year: number)` | Converts Gregorian year to Anno Benefacio (A.B.) | `toAB(2024) → 3935` |
| `formatALDate(date: Date)` | Formats a date in Anno Lucis (A.L.) | `formatALDate(new Date())` |
| `formatAMDate(date: Date)` | Formats a date in Anno Mundi (A.M.) | `formatAMDate(new Date())` |
| `formatAIDate(date: Date)` | Formats a date in Anno Inventionis (A.I.) | `formatAIDate(new Date())` |
| `formatAdepDate(date: Date)` | Formats a date in Anno Depositionis (A.Dep.) | `formatAdepDate(new Date())` |
| `formatAODDate(date: Date)` | Formats a date in Anno Ordinis (A.O.) | `formatAODDate(new Date())` |
| `formatABDate(date: Date)` | Formats a date in Anno Benefacio (A.B.) | `formatABDate(new Date())` |


# Tests
masonic-time follows a Test-Driven Development (TDD) approach using Jest.

## Running Tests
To run tests, use the following command:
```bash
npm test
```
Jest will execute the test cases defined in __tests__ to ensure all conversions and formatting methods work as expected.

# TODO:

- [X] *Parsing* (i.e., converting a formatted Masonic date back into a JavaScript Date object).
- [] *Validating* (i.e., checking if a given Masonic date is valid).
- [] *Manipulating*  (i.e., adding/subtracting days, months, or years in Masonic time).

# License
This package is licensed under the MIT License.
