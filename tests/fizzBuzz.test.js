const fizzBuzz = require('../src/index');

describe('Fizz Buzz', () => {
  test('should return "Fizz" for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
    expect(fizzBuzz(27)).toBe('Fizz');
  });

  test('should return "Buzz" for multiples of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
    expect(fizzBuzz(20)).toBe('Buzz');
  });

  test('should return "FizzBuzz" for multiples of both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(45)).toBe('FizzBuzz');
  });

  test('should return the number as string for non-multiples', () => {
    expect(fizzBuzz(2)).toBe('2');
    expect(fizzBuzz(7)).toBe('7');
    expect(fizzBuzz(13)).toBe('13');
  });
});
