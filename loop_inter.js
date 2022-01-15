// 1 Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", 
// for every multiple of 5, 
// replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// var ar1 = [];
// var i;
// for(i=1;i<=100;i++){
//    if(i%3==0 && i%5==0){
//        ar1.push("FizzBuzz");
//       }
//    else if(i%5==0){
//       ar1.push("Buzz");
//    }
//    else if(i%3==0){
//       ar1.push("Fizz");
//    }
//    else{
//       ar1.push(i);
//    }
// }
// console.log(ar1);

// 2 - Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// console did not show proper output so need to put this in script tag in the html body.

// var i,j;
// for (i=1;i<=5;i++){
//    for(j=1;j<=i;j++){
//       document.write("* ");
//    }
//    document.write("<br>");
// }  

// 3 - Write a program to take a number input from user and print multiplication table 12 times for that number.

// var readline = require("readline-sync");
// const user1 = readline.question("Enter a number");
// var i;
// var disk = [];
// for(i=1;i<=12;i++){
//    disk.push(i*user1);
// }
// console.log(disk);


// 4 - Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

// var readline = require("readline-sync");
// var disk = [0,1];
// var n = readline.question("Enter a number");
// for(i=2;i<n;i++){
//    disk.push(disk[i-2]+disk[i-1])
   
// }
// console.log(disk);

// 5 - Write a program to take an input from a user and find its Factorial. Example: Factorial of 5 is 120

// var readline = require("readline-sync");
// var n = readline.question("Enter a number ");
// var i;
// var bun = 1;
// for(i = n;i>=1;i--){  
// var bun = bun * i;
// }
// console.log(bun);


// 6 - Write a Program to take a number input from user and find if the number is Prime or not.

// var readline = require("readline-sync");
// var n = readline.question("Enter a number ");
// var i;
// if(n%2==0 || n%3==0){
//       console.log("not prime");
//    }else{
//       console.log(" prime"); // another full proof approach divide the input by n-i till i=2
//    }


// 7 - Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.
var readline = require("readline-sync");
var eday = readline.question("Enter day ");

const days = {
monday:"weekday",
tuesday:"weekday",
wednesday:"weekday",
thursday:"weekday",
friday:"weekday",
saturday:"weekend",
sunday:"weekend"
}

for(i=0;i<Object.keys(days).length;i++){
   if(eday.toLowerCase()==Object.keys(days)[i]){
      console.log(`${eday} is ${Object.values(days)[i]}`);
   }
}
