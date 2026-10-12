export class FMTime {
  private yearALOffset: number = 4000;
  private yearAMOffset: number = 3760;
  private yearAIOffset: number = 530;
  private yearADepOffset: number = 1000;
  private yearAOrOffset: number = -1118;
  private yearABOffset: number = 1911;
  private yearAROffset: number = 1678;

  private parseMasonicDate(dateStr: string, offset: number, suffix: string): Date | null {
    const regex = new RegExp(`^(\\d{1,2})/(\\d{1,2})/(\\d{1,4}) ${suffix}\\.?$`);
    const match = dateStr.match(regex);
    if (!match) return null;
    
    const [, month, day, masonicYear] = match.map(Number);
    const gregorianYear = masonicYear - offset;

    return new Date(gregorianYear, month - 1, day);
  }

  private isValidMasonicDate(dateStr: string, offset: number, suffix: string): boolean {
    const regex = new RegExp(`^(\\d{1,2})/(\\d{1,2})/(\\d{1,4}) ${suffix}\\.?$`);
    const match = dateStr.match(regex);
    if (!match) return false;

    const [, month, day, masonicYear] = match.map(Number);
    if (month < 1 || month > 12) return false;

    const gregorianYear = masonicYear - offset;
    const daysInMonth = new Date(gregorianYear, month, 0).getDate();
    return day >= 1 && day <= daysInMonth;
  }

  toAL(year: number): number {
    return year + this.yearALOffset;
  }

  toAM(year: number): number {
    return year + this.yearAMOffset;
  }

  toAI(year: number): number {
    return year + this.yearAIOffset;
  }

  toADep(year: number): number {
    return year + this.yearADepOffset;
  }

  toAO(year: number): number {
    return year + this.yearAOrOffset;
  }

  toAB(year: number): number {
    return year + this.yearABOffset;
  }

  toAR(year: number): number {
    return year + this.yearAROffset;
  }

  formatALDate(date: Date): string {
    const year = date.getUTCFullYear();
    const alYear = this.toAL(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${alYear}`;
  }

  formatAMDate(date: Date): string {
    const year = date.getUTCFullYear();
    const amYear = this.toAM(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${amYear}`;
  }

  formatAIDate(date: Date): string {
    const year = date.getUTCFullYear();
    const aiYear = this.toAI(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${aiYear}`;
  }

  formatAdepDate(date: Date): string {
    const year = date.getUTCFullYear();
    const adepYear = this.toADep(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${adepYear}`;
  }

  formatAODDate(date: Date): string {
    const year = date.getUTCFullYear();
    const toAO = this.toAO(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${toAO}`;
  }

  formatABDate(date: Date): string {
    const year = date.getUTCFullYear();
    const toAB = this.toAB(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${toAB}`;
  }

  formatARDate(date: Date): string {
    const year = date.getUTCFullYear();
    const arYear = this.toAR(year);
    return `${date.getUTCMonth() + 1}/${date.getUTCDate()}/${arYear}`;
  }

  parseALDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearALOffset, "A\\.L");
  }

  parseAMDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAMOffset, "A\\.M");
  }

  parseAIDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAIOffset, "A\\.I");
  }

  parseADepDate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearADepOffset, "A\\.Dep");
  }

  parseAODate(dateStr: string): Date | null {
    return this.parseMasonicDate(dateStr, this.yearAOrOffset, "A\\.O");
  }

  parseABDate(dateStr: string): Date | null {
      return this.parseMasonicDate(dateStr, this.yearABOffset, "A\\.B");
  }

  parseARDate(dateStr: string): Date | null {
      return this.parseMasonicDate(dateStr, this.yearAROffset, "A\\.R");
  }

  isValidALDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearALOffset, "A\\.L");
  }

  isValidAMDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAMOffset, "A\\.M");
  }

  isValidAIDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAIOffset, "A\\.I");
  }

  isValidADepDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearADepOffset, "A\\.Dep");
  }

  isValidAODate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAOrOffset, "A\\.O");
  }

  isValidABDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearABOffset, "A\\.B");
  }

  isValidARDate(dateStr: string): boolean {
    return this.isValidMasonicDate(dateStr, this.yearAROffset, "A\\.R");
  }

  addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getUTCDate() + days);
    return newDate;
  }

  subtractDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getUTCDate() - days);
    return newDate;
  }

  addMonths(date: Date, months: number): Date {
    const newDate = new Date(date);
    newDate.setMonth(newDate.getUTCMonth() + months);
    return newDate;
  }
}
