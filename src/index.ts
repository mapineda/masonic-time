function buildMasonicDateRegex(suffix: string): RegExp {
  return new RegExp(`^(\\d{1,2})/(\\d{1,2})/(\\d{1,4}) ${suffix}\\.?$`);
}

/**
 * Builds a UTC date without going through the `new Date(year, month, day)`
 * constructor, which maps a `year` of 0-99 to 1900-1999.
 */
function toUTCDate(year: number, monthIndex: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, monthIndex, day);
  return date;
}

function daysInUTCMonth(year: number, monthIndex: number): number {
  return toUTCDate(year, monthIndex + 1, 0).getUTCDate();
}

export class FMTime {
  private yearALOffset: number = 4000;
  private yearAMOffset: number = 3760;
  private yearAIOffset: number = 530;
  private yearADepOffset: number = 1000;
  private yearAOrOffset: number = -1118;
  private yearABOffset: number = 1911;
  private yearAROffset: number = 1678;

  private parseMasonicDate(dateStr: string, offset: number, suffix: string): Date | null {
    const regex = buildMasonicDateRegex(suffix);
    const match = dateStr.match(regex);
    if (!match) return null;

    const [, month, day, masonicYear] = match.map(Number);
    const gregorianYear = masonicYear - offset;

    return toUTCDate(gregorianYear, month - 1, day);
  }

  private isValidMasonicDate(dateStr: string, offset: number, suffix: string): boolean {
    const regex = buildMasonicDateRegex(suffix);
    const match = dateStr.match(regex);
    if (!match) return false;

    const [, month, day, masonicYear] = match.map(Number);
    if (month < 1 || month > 12) return false;

    const gregorianYear = masonicYear - offset;
    const daysInMonth = daysInUTCMonth(gregorianYear, month - 1);
    return day >= 1 && day <= daysInMonth;
  }

  private static assertFiniteYear(year: number): void {
    if (!Number.isFinite(year)) {
      throw new TypeError(`Expected a finite year, received: ${year}`);
    }
  }

  private static assertValidDate(date: Date): void {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      throw new TypeError(`Expected a valid Date, received: ${date}`);
    }
  }

  toAL(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearALOffset;
  }

  toAM(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearAMOffset;
  }

  toAI(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearAIOffset;
  }

  toADep(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearADepOffset;
  }

  toAO(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearAOrOffset;
  }

  toAB(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearABOffset;
  }

  toAR(year: number): number {
    FMTime.assertFiniteYear(year);
    return year + this.yearAROffset;
  }

  formatALDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const alYear = this.toAL(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${alYear}`;
  }

  formatAMDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const amYear = this.toAM(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${amYear}`;
  }

  formatAIDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const aiYear = this.toAI(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${aiYear}`;
  }

  formatAdepDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const adepYear = this.toADep(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${adepYear}`;
  }

  formatAODDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const toAO = this.toAO(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${toAO}`;
  }

  formatABDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const toAB = this.toAB(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${toAB}`;
  }

  formatARDate(date: Date): string {
    FMTime.assertValidDate(date);
    const year = date.getUTCFullYear();
    const arYear = this.toAR(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${arYear}`;
  }

  parseALDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearALOffset, 'A\\.L');
  }

  parseAMDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAMOffset, 'A\\.M');
  }

  parseAIDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAIOffset, 'A\\.I');
  }

  parseADepDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearADepOffset, 'A\\.Dep');
  }

  parseAODate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAOrOffset, 'A\\.O');
  }

  parseABDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearABOffset, 'A\\.B');
  }

  parseARDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAROffset, 'A\\.R');
  }

  isValidALDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearALOffset, 'A\\.L');
  }

  isValidAMDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAMOffset, 'A\\.M');
  }

  isValidAIDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAIOffset, 'A\\.I');
  }

  isValidADepDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearADepOffset, 'A\\.Dep');
  }

  isValidAODate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAOrOffset, 'A\\.O');
  }

  isValidABDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearABOffset, 'A\\.B');
  }

  isValidARDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAROffset, 'A\\.R');
  }

  addDays(date: Date, days: number): Date {
    FMTime.assertValidDate(date);
    const newDate = new Date(date);
    newDate.setUTCDate(newDate.getUTCDate() + days);
    return newDate;
  }

  subtractDays(date: Date, days: number): Date {
    return this.addDays(date, -days);
  }

  addMonths(date: Date, months: number): Date {
    FMTime.assertValidDate(date);
    const newDate = new Date(date);
    newDate.setUTCMonth(newDate.getUTCMonth() + months);
    return newDate;
  }

  subtractMonths(date: Date, months: number): Date {
    return this.addMonths(date, -months);
  }

  addYears(date: Date, years: number): Date {
    FMTime.assertValidDate(date);
    const newDate = new Date(date);
    newDate.setUTCFullYear(newDate.getUTCFullYear() + years);
    return newDate;
  }

  subtractYears(date: Date, years: number): Date {
    return this.addYears(date, -years);
  }
}
