import {recoverSecret, deleteCharacter, searchCharacter, emptyArray} from './index.js';

// Main func - Testing Recover Secret
test('Testing Recover Secret', () => {
  let arr = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];
  expect(recoverSecret(arr)).toBe('whatisup');
});

// func - Search Character
test('func - Search', () => {
  let arr = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];
  expect(searchCharacter('w', arr)).toBe(true);
});

// func - Empty Array 1
test('func - emptyArray 1', () => {
  let arr = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];
  expect(emptyArray(arr)).toBe(true);
});

// func - Empty Array 2
test('func - emptyArray 2', () => {
  let arr = [[],[],[],[],[],[],[]];
  expect(emptyArray(arr)).toBe(false);
});


// func - Delete Character
test('func - Delete 1', () => {
  let arr = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];
  expect(deleteCharacter('w', arr)).toStrictEqual([
    [ 't', 'u', 'p' ],
    [ 'h', 'i' ],
    [ 't', 's', 'u' ],
    [ 'a', 't', 's' ],
    [ 'h', 'a', 'p' ],
    [ 't', 'i', 's' ],
    [ 'h', 's' ]
  ]);
});

// func - Delete Character
test('func - Delete 2', () => {
  let arr = [
    [ 't', 'u', 'p' ],
    [ 'h', 'i' ],
    [ 't', 's', 'u' ],
    [ 'a', 't', 's' ],
    [ 'h', 'a', 'p' ],
    [ 't', 'i', 's' ],
    [ 'h', 's' ]
  ];
  expect(deleteCharacter('h', arr)).toStrictEqual([
    [ 't', 'u', 'p' ],
    [ 'i' ],
    [ 't', 's', 'u' ],
    [ 'a', 't', 's' ],
    [ 'a', 'p' ],
    [ 't', 'i', 's' ],
    [ 's' ]
  ]);
});