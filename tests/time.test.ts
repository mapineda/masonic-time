import { FMTime } from '../src/index';

describe('FMTime', () => {
  let fmTime: FMTime;

  beforeEach(() => {
    fmTime = new FMTime();
  });

  test('should correctly calculate Anno Lucis (A.L.) year', () => {
    expect(fmTime.toAL(2025)).toBe(6025);
  });

  test('should correctly calculate Anno Mundi (A.M.) year', () => {
    expect(fmTime.toAM(2025)).toBe(5785);
  });

  test('should correctly calculate Anno Inventionis (A.I.) year', () => {
    expect(fmTime.toAI(2025)).toBe(2555);
  });

  test('should correctly calculate Anno Depositionis (A.Dep.) year', () => {
    expect(fmTime.toADep(2025)).toBe(3025);
  });

  test('should correctly calculate Anno Ordinis (A.O.) year', () => {
    expect(fmTime.toAO(2025)).toBe(907);
  });

  test('should correctly calculate Anno Ordinis (A.O.) year', () => {
    expect(fmTime.toAB(2025)).toBe(3936);
  });

  test('should correctly format date in Anno Lucis (A.L.)', () => {
    const date = new Date('2024-01-01');
    expect(fmTime.formatALDate(date)).toBe('1/1/6024');
  });

  test('should correctly format date in Anno Mundi (A.M.)', () => {
    const date = new Date('2024-01-01');
    expect(fmTime.formatAMDate(date)).toBe('1/1/5784');
  });
  test('should correctly format date in Anno Inventionis (A.I.)', () => {
    const date = new Date('2024-01-01');
    expect(fmTime.formatAIDate(date)).toBe('1/1/2554');
  });

  test('should correctly format date in Anno Depositionis (A.Dep.)', () => {
      const date = new Date('2024-01-01');
      expect(fmTime.formatAdepDate(date)).toBe('1/1/3024');
  });

  test('should correctly format date in Anno Ordinis (A.O.)', () => {
      const date = new Date('2024-01-01');
      expect(fmTime.formatAODDate(date)).toBe('1/1/906');
  });

  test('should correctly format date in Anno Benefacio (A.B.)', () => {
      const date = new Date('2024-01-01');
      expect(fmTime.formatABDate(date)).toBe('1/1/3935');
  });
});

describe('FMTime parsing, validating, and manipulation', () => {
  let fmTime: FMTime;

  beforeEach(() => {
    fmTime = new FMTime();
  });

  // parsing tests
  test('parseALDate should convert A.L. date string to Javascript Date', () => {
    expect(fmTime.parseALDate("1/1/6024 A.L")).toEqual(new Date(2024, 0, 1));
  });

  test('parseAMDate should convert A.M. date string to Javascript Date', () => {
    expect(fmTime.parseAMDate("1/1/5784 A.M")).toEqual(new Date(2024, 0, 1));
  });

  test('parseAIDate should convert A.I. date string to Javascript Date', () => {
    expect(fmTime.parseAIDate("1/1/2554 A.I")).toEqual(new Date(2024, 0, 1));
  });

  test('parseADepDate should convert A.Dep. date to JavaScript Date', () => {
    expect(fmTime.parseADepDate("1/1/3024 A.Dep.")).toEqual(new Date(2024, 0, 1));
  });

  test('parseAODate should convert A.O. date to JavaScript Date', () => {
    expect(fmTime.parseAODate("1/1/906 A.O")).toEqual(new Date(2024, 0, 1));
  });

  test('parseABDate should convert A.B. date to JavaScript Date', () => {
    expect(fmTime.parseABDate("1/1/3935 A.B.")).toEqual(new Date(2024, 0, 1));
  });
});

describe('Masonic date manipulation', () => {
  let fmTime: FMTime;

  beforeEach(() => {
    fmTime = new FMTime();
  });

  test('addDays should correctly add days to a Masonic date', () => {
    const date = fmTime.parseALDate("1/1/6025 A.L.");
    expect(date).not.toBeNull();
    expect(fmTime.addDays(date as Date, 10)).toEqual(new Date(2025, 0, 11));
  });

  test('subtractDays should correctly substract days to a Masonic date', () => {
    const date = fmTime.parseALDate("1/11/6025 A.L.");
    expect(fmTime.subtractDays(date as Date, 10)).toEqual(new Date(2025, 0, 1));
  });
});
