// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
   let reversedString = n.toString().split('').reverse().join('')

   return parseInt(reversedString) * Math.sign(n);
        // OR
//    if(n < 0){
//        return parseInt(reversedString)/-1;
//    } else {
//        return parseInt(reversedString)
//    }
}

module.exports = reverseInt;
