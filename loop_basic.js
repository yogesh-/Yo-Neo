// 1 Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.


// const numbers = [5,13,7,21,48]
// const sumnum = (numbers[0]+numbers[1]+numbers[2]+numbers[3]+numbers[4]);

// console.log(sumnum);


// ----------------------------------------------------------------------------------


// 2 Write a program to take a number input from user and determine whether the number is odd or even.

// var input1 = prompt("enter a number");

// if(input1%2 !== 0){
//     console.log("The number is odd");
// }else{
//     console.log("The number is even");
//     }

//-------------------------------------------------------------------------------------

// 3 Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.


// var num1 = 129;
// var num2 = 251;

// if (num1 > num2){
//     console.log(`${num1} is the max and ${num2} is the min`);
// }else{ 
//     console.log(`${num2} is the max and ${num1} is the min`);
// }

// -------------------------------------------------------------------------------------------------------------

// 4 Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// num1 = 8;
// num2 = 23;
// num3 = 17;

// if (num1 > num2 && num1 > num3) {
//         console.log(`${num1} is the biggest number`);
//     }else if(num2 > num1 && num2 > num3){
//         console.log(`${num2} is the biggest number`);
//     }else{
//         console.log(`${num3} is the biggest number`);
// }

// -------------------------------------------------------------------------------------------------------------

// 5 Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

// num1 = 35;
// num2 = 29;
// num3 = 46;

// if (num1 < num2 && num1 < num3) {
//         console.log(`${num1} is the smol number`);
//     }else if(num2 < num1 && num2 < num3){
//         console.log(`${num2} is the smol number`);
//     }else{
//         console.log(`${num3} is the smol number`);
// }

// ---------------------------------------------------------------------------------------------------------------

// 6 Write program to take a month as an input from the user and find out whether the month has 31 days or not.

var readline = require("readline-sync");
var month = {
    Jan:30,
    Feb:28,
    Mar:30,
    Apr:31,
    May:30,
    Jun:31,
    Jul:30,
    Aug:31,
    Sep:30,
    Oct:31,
    Nov:30,
    Dec:31
}

// const userinp = prompt("Enter the month");

const userinp = readline.question("Enter the month");

for(var i=0;i<Object.keys(month).length;i++){
    if (userinp == Object.keys(month)[i]){
        console.log(`${userinp} has ${Object.values(month)[i]} days`);
    }
}
