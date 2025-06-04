import healthIndicator from '../src/healthIndicator';

describe('healthIndicator function', () => {
  test('should return "healthy" when health > 50', () => {
    const character = { name: 'Маг', health: 90 };
    expect(healthIndicator(character)).toBe('healthy');
  });

  test('should return "wounded" when health between 50 and 15', () => {
    expect(healthIndicator({ name: 'Маг', health: 50 })).toBe('wounded');
    expect(healthIndicator({ name: 'Маг', health: 30 })).toBe('wounded');
    expect(healthIndicator({ name: 'Маг', health: 15 })).toBe('wounded');
  });

  test('should return "critical" when health < 15', () => {
    expect(healthIndicator({ name: 'Маг', health: 10 })).toBe('critical');
  });

  test('should throw error for invalid character object', () => {
    expect(() => healthIndicator(null)).toThrow('Invalid character object');
    expect(() => healthIndicator({})).toThrow('Invalid character object');
    expect(() => healthIndicator({ name: 'Маг' })).toThrow('Invalid character object');
  });
});