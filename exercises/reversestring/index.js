// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


function reverse(str){
    return str.split('').reduce((reversed,character)=>{
        return character + reversed;
    },'');
}

module.exports = reverse;

// SOLUTIONS //

// function reverse(str) {
//     // let newStr = str.split('');
//     // newStr.reverse();
//     // return newStr.join('');
//         // both work
//     return str.split('').reverse().join('');
// }


// function reverse(str){
//     let reversed = '';

//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }