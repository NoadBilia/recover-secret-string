import {recoverSecret} from './recover-secret-string/index.js';


test('testing recover Secret', () => {
  let input = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];
  expect(recoverSecret(input)).toBe('whatisup');
});