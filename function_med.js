// 1-Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5

// function pop(){
//     var arr1 = [1,2,3,4,5,6,887]
//     var my = arr1.length;
//     console.log(my);
// }
// pop();

//------------------------------------------------------------------------------------------------

// 2-Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

// var arr1 = [2,3,4,5,6,7,99];
// var a = 7;
// function pop(){
// console.log(arr1.indexOf(a));
// }

// pop();

//------------------------------------------------------------------------------------------



// 3-Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

// var arr1 = [1,2,3,4,5,88,66,5,44,33];
// var a = 5;
// var b = 99;
// function replace(){
//     for(var i=0;i<arr1.length;i++){
//         if(arr1[i]==a){
//             arr1[i]=b;           
//         }
        
//     }
//     console.log(arr1);
// }
// replace();

//--------------------------------------------------------------------------------------------------------------

// 4-Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]


// var arr1 = [11,22,33];
// var arr2 = [44,55,66];

// function merge(){
//     const joined = arr1.concat(arr2);
//     console.log(joined);
// }

// merge();

//-----------------------------------------------------------------------------------------------------

// 5-Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c

// var char1 = "hello how are you"
// var i = 1;
// function returnChar(){
//     let arr1 = char1.split('');
//     console.log(arr1[i]);
//     console.log(arr1);

// }
// returnChar();

// -----------------------------------------------------------------------------------------------------------


// 6-Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

var dates = [];
          
        dates.push(new Date("2019/06/25"));
        dates.push(new Date("2019/06/26"));
        dates.push(new Date("2019/06/27"));
        dates.push(new Date("2019/06/28"));

function minDate(){
const date1 = new Date(Math.min.apply(null,dates));
const date2 = new Date(Math.max.apply(null,dates));
console.log(date1);
console.log(date2);
}
minDate();
