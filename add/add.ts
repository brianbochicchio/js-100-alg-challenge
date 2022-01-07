/*
Write a function that returns the sum of two numbers.
Write a function that returns the sum of all numbers regardless of # of params.

*/

function sum(x: number, y:number) : number {
    return x + y;
}

function sumAll(...theNums: number[]) : number {
    let theSum = 0;
    theNums.forEach( x =>  theSum += x)
    return theSum;
}


console.log(sum(5,7));
console.log(sumAll(1,2,3,5, 7, 100))