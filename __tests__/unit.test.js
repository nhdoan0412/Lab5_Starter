// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me.js';

// Phone number tests
test('valid phone number with dashes returns true', () => {
  expect(isPhoneNumber('123-456-7890')).toBe(true);
});

test('valid phone number with parentheses returns true', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('phone number with letters returns false', () => {
  expect(isPhoneNumber('123-abc-7890')).toBe(false);
});

test('plain text is not a phone number', () => {
  expect(isPhoneNumber('hello')).toBe(false);
});

// Email tests
test('valid UCSD email returns true', () => {
  expect(isEmail('student@ucsd.edu')).toBe(true);
});

test('valid simple email returns true', () => {
  expect(isEmail('name@example.com')).toBe(true);
});

test('email without at symbol returns false', () => {
  expect(isEmail('student.ucsd.edu')).toBe(false);
});

test('email without domain returns false', () => {
  expect(isEmail('student@')).toBe(false);
});

// Strong password tests
test('password with uppercase lowercase and number returns true', () => {
  expect(isStrongPassword('Password1')).toBe(true);
});

test('another password with uppercase lowercase and number returns true', () => {
  expect(isStrongPassword('Hello123')).toBe(true);
});

test('empty password returns false', () => {
  expect(isStrongPassword('')).toBe(false);
});

test('short password returns false', () => {
  expect(isStrongPassword('Hi1')).toBe(false);
});

// Date tests
test('valid date with slashes returns true', () => {
  expect(isDate('12/25/2026')).toBe(true);
});

test('another date with slashes returns true', () => {
  expect(isDate('01/01/2026')).toBe(true);
});

test('date with hyphens returns false', () => {
  expect(isDate('2026-12-25')).toBe(false);
});

test('non-date text returns false', () => {
  expect(isDate('not a date')).toBe(false);
});

// Hex color tests
test('valid six digit hex color with hashtag returns true', () => {
  expect(isHexColor('#ffffff')).toBe(true);
});

test('valid six digit hex color without hashtag returns true', () => {
  expect(isHexColor('ffffff')).toBe(true);
});

test('hex color with invalid letters returns false', () => {
  expect(isHexColor('#gggggg')).toBe(false);
});

test('plain color word returns false', () => {
  expect(isHexColor('blue')).toBe(false);
});