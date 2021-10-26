/* Recover secret string */
// Noad Bilia

// func Recover Secret
function recoverSecret(triplets) {
      let script = []; // Array Recover Secret
      for (let indexOfArrayNum in triplets) {
            let firstTav = triplets[indexOfArrayNum][0];
            let secondTav = triplets[indexOfArrayNum][1];
            let thirdTav = triplets[indexOfArrayNum][2];

            // If the first character does not exist in the array
            if (script.indexOf(firstTav) === -1)       
                  script.unshift(firstTav);
                  
            // If the second character does not exist in the array
            if (script.indexOf(secondTav) === -1) {      
                  script.splice(script.indexOf(firstTav)+1, 0,secondTav);
            }
            // If there is a Y in the array, and also that Y is less than X 
            if (script.indexOf(secondTav) !== -1 && script.indexOf(secondTav) < script.indexOf(firstTav)) { 
                  script.splice(script.indexOf(secondTav), 1);
                  let tav = locationSearch(triplets[indexOfArrayNum],secondTav)
                  script.splice((script.indexOf(tav)+1), 0,secondTav);
            }
            // If the third character does not exist in the array
            if (script.indexOf(thirdTav) === -1)            
                  script.splice(script.indexOf(secondTav)+1, 0,thirdTav);
                  
            // If there is a Z in the array, and also that Z is less than Y  
            if (script.indexOf(thirdTav) !== -1 && script.indexOf(thirdTav) < script.indexOf(secondTav)) {
                  script.splice(script.indexOf(secondTav), 1)
                  let tav = locationSearch(triplets[indexOfArrayNum], thirdTav)
                  script.splice((script.indexOf(tav)+1), 0,thirdTav);
            }
      }      
      //console.log("Line:39 - whatisup = ", script.join(""));
      return script.join("");
}

// func Location Search Tav
function locationSearch(arr,indexOfTavInArray) {
      let num = arr.indexOf(indexOfTavInArray);
      return (arr[num-1]); // Return Tav
}

let answerRecoverSecret = "whatisup";
let triplets = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];

recoverSecret(triplets);

export {recoverSecret, locationSearch};