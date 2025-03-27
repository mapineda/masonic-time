export class FMTime {
  private yearALOffset: number = 4000;
  private yearAMOffset: number = 3760;
  private yearAIOffset: number = 530;
  private yearADepOffset: number = 1000;
  private yearAOrOffset: number = 1118;
  private yearABOffset: number = 1911;

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
    return year - this.yearAOrOffset;
  }

  toAB(year: number): number {
    return year + this.yearABOffset;
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
}
