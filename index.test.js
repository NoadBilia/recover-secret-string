import {recoverSecret, locationSearch} from './index.js';

// Main func - Testing Recover Secret
test('Testing Recover Secret', () => {
  let input = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];
  expect(recoverSecret(input)).toBe('whatisup');
});

// func - Testing Location Search
test('Testing Location Search', () => {
  let input = ['h', 'a', 'p']
  expect(locationSearch(input)).toBe('h');
});

