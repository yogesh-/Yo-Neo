// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8

// function power(a,b){
//     var c = Math.pow(a,b);
//     console.log(c);
// }

// power(2,3);

// ---------------------------------------------------------------------------------------------



// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
// Area of hexagon = ((3*root3)/2)*a2

// function areaOfHexagon(a){
//     var b = ((3*Math.sqrt(3)/2)*(a*a));
//     console.log(`The area of hexagon is ${b}`);
// }

// areaOfHexagon(4);

//----------------------------------------------------------------------------------------------

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3


// const readline = require("readline-sync");
// let pop = readline.question("Enter a string or sentence ");

// function numberOfWords(a){
//     let text = a.split(" ");
//     let lens = text.length;
//     console.log(text);
//     console.log(lens);

// }

// numberOfWords(pop);

//------------------------------------------------------------------------------------------------------


// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)



// function findMin(...some){
    
//     var musk = Math.min(...some);
//     console.log(musk);
// }

// findMin(1,2,3,4,5,6,7,8);


// -------------------------------------------------------------------------------------------------------

// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)




// function findMax(...pop){
    
//     var musk = Math.max(...pop);
//     console.log(musk);
// }

// findMax(1,2,3,4,5,6,7,8);


//----------------------------------------------------------------------------------------------------


// Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalene Triangle


function typeOfTriangle(a,b,c){
    if(a == b && b == c){
        console.log("equilateral triangle");
    }else if(a==b || b==c){
        console.log("Isoceles triangle");
    }else if(a!=b && b!=c){
        console.log("scalene triangle")
    }else{
        console.log("not a triangle");
    }
}
typeOfTriangle(60,60,60);
typeOfTriangle(45,23,12);
typeOfTriangle(45,45,90);
