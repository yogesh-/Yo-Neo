// 1 - Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
// Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.

// var readline = require("readline-sync");
// var input = readline.question("Enter a word ");
// var shiftdigit = Number(readline.question("Enter shift digit "));

// function shiftstr(){
//     var poppy = input.split('');
//     console.log(poppy);
//     var new_arr = [];
//     for(var i=0;i<poppy.length;i++){
//        var input16 = input.charCodeAt(i);
//        var output17 = String.fromCharCode(input16+shiftdigit);
//        new_arr[i]=output17;
//     }
//     console.log(new_arr);
// }
// shiftstr();

// ---------------------------------------------------------------------------------------------------

// 2 - Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers

// const str = "i am lowercase sentence";

// function camelcase(){
// var word = str.split(" ");
// console.log(word);
// var chars = [];
// for(var i=0;i<word.length;i++){
//     var chars = word[i].split("");
//     chars[0]=chars[0].toUpperCase();
//     console.log(chars.join(""));
// }
// //console.log(chars);
// }
// camelcase();


// --------------------------------------------------------------------------------------------


// 3 - Given an array of numbers, your function should return an array in the ascending order.
// Example:
// Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]

// var arr1 = [23,65,11,22,44,88,99];

// function ascend(){
// arr1 = arr1.sort();
// console.log(arr1);
// }
// ascend();


// 4 - Given a sentence, your function should reverse the order of characters in each word, keeping same sequence of words.
// Example:
// Input: reverseCharactersOfWord('we are neoGrammers') –––> Output: ew era sremmarGoen

var str = "I am home alone";

function revstr(){
    var word = str.split(" ");
    console.log(word);
    for(var i=0;i<word.length;i++){
    word[i] = word[i].split("").reverse().join("");
    
    }
    console.log(word.join(" "));
}

revstr();