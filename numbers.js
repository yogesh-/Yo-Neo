// 1 - Write a program to input 2 numbers and display the sum of the numbers to the console.

// Input Number 1: 20
// Input Number 2: 40
// Sum : 60

// const readline = require('readline-sync');
// var num1 = Number(readline.question('Enter the first number '));
// var num2 = Number(readline.question('enter the second number '));

// let sum = (num1,num2) => num1+num2;
// console.log(sum);
// sum(num1,num2);

// function sum(num1,num2){
//     var final = num1+num2;  // alternate function
//     console.log(final);
// }

//----------------------------------------------------------------------------------------------------------

// 2 - Write a JavaScript program to calculate the simple interest given P,R,T with the given formula. Formula: SI = (P * T * R) / 100 Where: P = principal amount T = time R = rate SI = simple interest

// Input: P=100, R=6%, T=2
// Output: 12


// const readline = require('readline-sync');
// let P = readline.question("Enter the Principal Amount ");
// let R = readline.question("Enter the Rate  ");
// let T = readline.question("Enter the Time  ");

// const SI = (P,R,T) => (P*T*R)/100;
// console.log(SI(P,R,T));


//--------------------------------------------------------------------------------------------------------



// 3 - Write a program to calculate the kinetic energy of a body with mass 'm' and volume 'v'.

// Formula : 0.5 * m * v * v


// const ke = (m,v) => 0.5*m*v;
// console.log(ke(2,2));

//---------------------------------------------------------------------------------------------------------

// 4 - Write a program to convert Fahrenheit to Celsius. For Fahrenheit to Celsius conversion use: C = (F - 32) * 5/9 'F' and 'C' are the temperatures on the Fahrenheit scale and Celsius scale respectively.

// Input: 56
// Output: 13.33333

// var F = 56;
// var toCelsius = () => (F - 32)*5/9;
// console.log(toCelsius(F));

//---------------------------------------------------------------------------------------------------------


// 5 - Calculate the area, perimeter of a square of side 'a'. Also, calculate the surface area and the volume of a cube of side 'a'.
// Formula :
// Area: a*a
// Perimeter: 4*a
// Surface Area: 6*a*a
// Volume: a*a*a

// const readline = require('readline-sync');
// const a = readline.question('Enter the value of side a');

// const calc = () => {
//     var Area = a*a;
//     var Perimeter = 4*a;
//     var Surface_Area = 6*a*a;
//     var Volume = a*a*a;
//     console.log(`The are of square is ${Area}. Perimeter is ${Perimeter}. Surface Area is ${Surface_Area} and volume is ${Volume}`);
// }
// calc();

//---------------------------------------------------------------------------------------------------------


// 6 - Given the Cost Price(CP) and Selling Price(SP) of a product. Write a Program to Calculate the Profit or Loss.

// Input: CP = 1500, SP = 2000
// Output: 500 Profit

// Input: CP = 3125, SP = 1125
// Output: 2000 Loss

// // var CP = 2000;
// // var SP = 2199;

// const calc = (SP,CP) => {
//     var num = SP-CP;
//     if(num > 0){
//         console.log(`${num} Profit`);
//     }else{
//         console.log(`${num} Loss`);
//     }
// }

// calc(1100,1800);


//---------------------------------------------------------------------------------------------------------


// 7 - Write a program to calculate sum of N natural digits, as input by the users?

// Enter a positive integer: 100
// Sum = 5050

// const readline = require('readline-sync');
// const number = readline.question('Enter the number');
// let sum = 0;
// const calcSum = () => {
//     for(let i =1;i<=number;i++){
//         sum = sum + i;
//     }
//     console.log(sum);
// }
// calcSum(number);

//---------------------------------------------------------------------------------------------------------


// 8 -  Write a Program to Print N Odd Number in Descending Order.

// Input : 4
// Output : 7
// 5
// 3
// 1

// var n;
// function oddstream(n) {
//     while (n >= 0) {
//         var odd = 2 * n + 1; 
//         console.log(odd);
//         n--;
//     }
// }
// oddstream(5);

//---------------------------------------------------------------------------------------------------------

// 9 - Write a JavaScript program to compute the sum of all digits that occur in a given string.

// Input: 1234
// Output: 1+2+3+4 = 10
// Solution -> convert to string, then split, then iterate over each number and add them all while using Number() to convert indeks to number.


// var num = 1234;
// const sumofdig = ()=>{
//     var newnum = num.toString().split('');
//     console.log(newnum);
//     var sumTotal = 0;
//     for(i=0;i<newnum.length;i++){
//         sumTotal = sumTotal+Number(newnum[i]);
//     }
//     console.log(sumTotal);
// }

// sumofdig();

//---------------------------------------------------------------------------------------------------------


// 10 - Write a JavaScript program that reverses a number.
// Example:
// Input:  32243;
// Output:  34223

// var input = 1234;

// function reverse() {
//     var newinput = input.toString().split('').reverse().join("");
//     console.log(newinput);
//     }
//     reverse();

//---------------------------------------------------------------------------------------------------------

// 11 - Write a Program to cyclically Rotate a Number by X positions in the left direction, as provided by the user.
// Example-
// Enter a Number : 1234
// Enter the Number of Rotations : 2
// Output : 3412

// var number = 1234;
// var rota = 2;

// function final() {
//     var newnum = number.toString().split('');
//     for(i=0;i<rota;i++){
//         var new_newnum = newnum.shift();
//         newnum.push(new_newnum);
//     }
//     console.log(newnum.join(''));

// }
// final();

//---------------------------------------------------------------------------------------------------------


// 12 - Write a Program to convert Decimal to Binary.
// Enter the number to convert: 5
// Binary of Given Number is=101

// var num = 5;
// const dec2binary = ()=>{
//     var bin = num.toString(2);
//     console.log(bin);
// }
// dec2binary();

// 13 - Follow up Question : Write a Program to Convert Octal to Decimal.
// Enter an octal number: 116
// Octal of Given Number = 78 in decimal

var number = 116;
var sum = 0;
function conv() {
    var dec = parseInt(number,8);
    console.log(dec);

}

conv();