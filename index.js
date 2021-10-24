/* Recover secret string */
// Noad Bilia

const recoverSecret = (triplets) => {
      script = [];
      for (let i in triplets) {
            let x = triplets[i][0];
            let y = triplets[i][1];
            let z = triplets[i][2];

            // If the first character does not exist in the array
            if (script.indexOf(x) === -1)       
                  script.unshift(x);
                  
            // If the second character does not exist in the array
            if (script.indexOf(y) === -1) {      
                  script.splice(script.indexOf(x)+1, 0,y);
            }
            // If there is a Y in the array, and also that Y is less than X 
            if (script.indexOf(y) !== -1 && script.indexOf(y) < script.indexOf(x)) { 
                  script.splice(script.indexOf(y), 1);
                  var tav = locationSearch(triplets, triplets[i],y);
                  script.splice((script.indexOf(tav)+1), 0,y);
            }
            // If the third character does not exist in the array
            if (script.indexOf(z) === -1)            
                  script.splice(script.indexOf(y)+1, 0,z);
                  
            // If there is a Z in the array, and also that Z is less than Y  
            if (script.indexOf(z) !== -1 && script.indexOf(z) < script.indexOf(y)) {
                  script.splice(script.indexOf(y), 1)
                  var tav = locationSearch(triplets, triplets[i])
                  script.splice((script.indexOf(tav)-1), 0,z);
            }
      }
      return script.join("");
}

const locationSearch = (triplets, arr,i) => {
      // Check if there are 2 characters in the array
      const result = triplets.filter(word => (word == arr[0] && word == arr[1]) || (word == arr[0] && word == arr[2]) || (word == arr[1] && word == arr[2]));
      if (result.length == 0) { // Check if there are 1 characters in the array            
            const res = triplets.filter(word => (word[0] == i || word[1] == i || word[2] == i));
            const rest = res.filter(word => word == arr);
            var num = rest[0].indexOf(i)
            return (rest[0][num-1])
      }
      let location = []
            for (let j in result) {
                  if (arr[j] == result[0]) {
                        location.push(arr[j], j, result[0], 0)
                  }
                  else if (arr[j] == result[1]) {
                        location.push(arr[j], j, result[1], 1)
                  }
                  else if (arr[j] == result[2]) {
                        location.push(arr[j], j, result[2], 2)
                  }
      }
      return location[7];

}


secret1 = "whatisup";
triplets = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];

recoverSecret(triplets);

export {recoverSecret};