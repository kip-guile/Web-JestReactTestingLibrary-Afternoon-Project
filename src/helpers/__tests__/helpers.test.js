import * as helpers from '../helpers';

jest.mock('uuid', () => {
  return () => '123';
});

describe('sum', () => {
  it('returns null if fed no arguments', () => {
    expect(helpers.sum()).toBe(null);
  });
  it('returns null if fed a single argument', () => {
    expect(helpers.sum(1)).toBe(null);
  });
  it('adds positive number correctly', () => {
    expect(helpers.sum(1, 1)).toBe(2);
  });
  it('adds negative number correctly', () => {
    expect(helpers.sum(-1, -1)).toBe(-2);
  });
  it('throws if fed something which is not a number', () => {
    expect(() => helpers.sum('1', '2')).toThrow();
  });
  it('can add three positive numbers', () => {
    expect(helpers.sum(1, 2, 3)).toBe(6);
    expect(helpers.sum(1, 2, 3)).not.toBe(7);
  });
});

describe('multiply', () => {
  // write tests! <================================================
  it('multiply negative numbers', () => {
    expect(helpers.multiply(-3, -4)). toBe(12);
  });
  it('multiply +ve numbers', () => {
    expect(helpers.multiply(2, 5)).toBe(10);
  });
  it('multiply +ve and -ve args', () => {
    expect(helpers.multiply(-3, 7)).toBe(-21);
  });
  it('throws error when arguments arent numbers', () => {
    expect(() => helpers.multiply('girl', 'boy')).toThrow();
  });
});

describe('personMaker', () => {
  it('makes a person with name and age', () => {
    expect(helpers.personMaker('peter', 4))
      .toMatchObject({
        id: '123',
        name: 'peter',
        age: 4,
      });
  });
  it('matches', () => {
    expect(helpers.personMaker('james', 4)).toEqual({
      id: '123',
      name: 'james',
      age: 4,
    });
  })

  // write more tests! <===========================================
});

describe('bool', () => {
  it('returns true if an arg is passed', () => {
    expect(helpers.bool(1)).toBe(true);
  });
  it('returns true if no arg is passed', () => {
    expect(helpers.bool()).toBe(true);
  });
})
