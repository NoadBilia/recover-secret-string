/* Recover secret string */
// Noad Bilia

// func Recover Secret
const recoverSecret = (array) => {
      let indexOfArray = 0;
      let flagWeFound = false;
      let scriptSrt = "";
      let twoDimensionalArray = array;
      while (emptyArray(twoDimensionalArray)) {
            for (let valueOfArrayNum of twoDimensionalArray[indexOfArray]) {
                  if (searchTav(valueOfArrayNum, twoDimensionalArray)) {
                        scriptSrt += valueOfArrayNum;
                        twoDimensionalArray = deleteTav(valueOfArrayNum, twoDimensionalArray)
                        flagWeFound = true
                        break;
                  }
            }
            if (flagWeFound) {
                indexOfArray = 0;
                flagWeFound = false; 
            } else {
                  indexOfArray++
            }
      }  
      return scriptSrt;
}

// func delete Character
const emptyArray = (twoDimensionalArray) => {
      let flagEmptyArray = false; 
      twoDimensionalArray.forEach(arr => {
            if (arr.length != 0) {
                  flagEmptyArray = true;
            }
      });
      return flagEmptyArray;
}

// func delete Character
const deleteCharacter = (character, twoDimensionalArray) => {
      let array = []
      twoDimensionalArray.forEach(arr => {
            arr = arr.filter(val => {
                  return val != character
            })
            array.push(arr)
      });
      return array // Return Array
}

// func search Character
const searchCharacter = (character, twoDimensionalArray) => {
      for (let indexOfArray in twoDimensionalArray) {
            for (let indexOfArrayNum = 1; indexOfArrayNum < twoDimensionalArray[indexOfArray].length; indexOfArrayNum++) { // מנפה בתוך המערך
                  if (character == twoDimensionalArray[indexOfArray][indexOfArrayNum]) {
                        return false;
                  }
            }  
      }
      return true;
}

recoverSecret(array);

export {recoverSecret, deleteCharacter, searchCharacter, emptyArray};