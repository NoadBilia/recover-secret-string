/* Recover secret string */
// Noad Bilia

function recoverSecret(triplets) {
      script = [];
      for (let i in triplets) {
            let x = triplets[i][0];
            let y = triplets[i][1];
            let z = triplets[i][2];
      }
}


secret1 = "whatisup";
triplets = [['t', 'u', 'p'],['w', 'h', 'i'],['t', 's', 'u'],['a', 't', 's'],['h', 'a', 'p'],['t', 'i', 's'],['w', 'h', 's']];

recoverSecret(triplets);

export {recoverSecret};