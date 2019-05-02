// uncomment for JavaScript version
// import { tolowercase } from './tolowercase.js';
import { tolowercase } from './tolowercase.ts';

test('handles empty string', () => {
    expect(tolowercase('')).toBe('');
});

test.skip('handles trivial case', () => {
    const input = 'A';
    const expected = 'a';
    expect(tolowercase(input)).toBe(expected);
});

test.skip('handles mixed upper and lowercase letters', () => {
    const input = 'AbCdEfGhIJklMnOpQrStUVwXyZ';
    const expected = 'abcdefghijklmnopqrstuvwxyz';
    expect(tolowercase(input)).toBe(expected);
});

test.skip('handles numerical characters', () => {
    const input = 'A99';
    const expected = 'a99';
    expect(tolowercase(input)).toBe(expected);
});

test.skip('handles punctuation characters', () => {
    const input = 'A-99.1B';
    const expected = 'a-99.1b';
    expect(tolowercase(input)).toBe(expected);
});

test.skip('handles multibyte utf-8 character', () => {
    const input = 'A-99🚀1B';
    const expected = 'a-99🚀1b';
    expect(tolowercase(input)).toBe(expected);
});