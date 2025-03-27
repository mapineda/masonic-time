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
});
