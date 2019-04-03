// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
   return str.split('').every((character, index)=>{
        return character === str[str.length - index - 1]
    })
}

module.exports = palindrome;


// function palindrome(str) {
//     let newStr = str.split('').reverse().join(''); //new variable that takes the original str, splits it into an array, reverses it, and joins it back into a string

//     return str === newStr;
//         // OR
//     // if(newStr === str){
//     //     return true
//     // } else {
//     //     return false
//     // }
// }
