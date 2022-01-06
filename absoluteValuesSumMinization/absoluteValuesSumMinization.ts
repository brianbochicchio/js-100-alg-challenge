/* In the video provided by the challenge editor we are seeking the median value of the sorted arrays below
    I'm not sure that is really what the challenge is asking... 
    https://github.com/PacktPublishing/100-JavaScript-Algorithm-Challenges/tree/master/absoluteValuesSumMinization

    Per my reading from a few differnt sources: If an array is sorted, median is the middle element of an array
     in case of odd number of elements in an array and when number of elements in an array is even than 
     it will be an average of two middle elements. If the array is not sorted first task is to sort the 
     array and then only the given logic can be applied    
  
    In the authors solution, he doesn't sort the array or seek an average of the two middle values.  He simply
    divides the lenth of the array by 2.  In the case of even he subtracts 1 and in the case of of odd he 
    uses the floor.  The resulting answers are 4,4,7,7

    My results using the logic above are 4,6,6,6  using floor to round down the number and 4, 7, 7, 6 if I use ceil


    I need to re-visit this 
*/

function absoluteValuesSumMinimization(a: number[]): number {
    //a.sort();
    const middle = Math.floor(a.length / 2);
    if (a.length % 2 === 0) {
        return Math.ceil((a[middle] + a[middle + 1]) / 2);
        
    } else {
        return a[middle];
    }

}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));