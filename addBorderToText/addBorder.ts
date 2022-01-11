/*
Original Challenge: 
Given the array ["abc", "ded"] add a border of * around the text.
Calling addBorder would result in the following array in the console ["*****", "*abc*", "*ded*", "*****"]

Expanding on the Challenge:

[ '************',
  '*   the    *',
  '*   cow    *',
  '* ran away *',
  '*   with   *',
  '*   the    *',
  '*  spoon   *',
  '************' ]

Have the function accept strings of various lengths and center align the output with some extra padding for a clean border frame.

*/

const borderMark : string = '*';

// Need this to calculate the top and bottom border lengths and padding amount
const getLongestStringLength = (wordsToBorder : string[]) : number => {
    let longestStringLength = 0;
    for (let i = 0; i < wordsToBorder.length; i++) {
        if (wordsToBorder[i].length > longestStringLength) {
            longestStringLength = wordsToBorder[i].length;
        }  
    }   
    return longestStringLength;
}

const addTopBottomBorders = (wordsToBorder : string[], longestStringLength: number) : any =>  {
    longestStringLength += 4;    
    const border : string = borderMark.repeat(longestStringLength);
    wordsToBorder.push(border);
    wordsToBorder.unshift(border);
}

function addBorder(wordsToBorder :string[]) : any {
    let longestStringLength = getLongestStringLength(wordsToBorder);

    for (let i = 0; i < wordsToBorder.length; i++) {
        
        let totalPadding : number = longestStringLength - wordsToBorder[i].length;
        let leftPad : number = Math.floor(totalPadding / 2);
        let rightPad : number = Math.ceil(totalPadding / 2);
    
        wordsToBorder[i] = wordsToBorder[i].padStart(wordsToBorder[i].length + leftPad + 1, " "); 
        // adding padding changed the current item's length
        wordsToBorder[i] = wordsToBorder[i].padEnd(wordsToBorder[i].length + rightPad + 1, " ");  
        wordsToBorder[i] = `${borderMark}${wordsToBorder[i]}${borderMark}`;
    }

    addTopBottomBorders(wordsToBorder, longestStringLength);

    return wordsToBorder;
}
//console.log(addBorder(["123", "456"]));
//console.log(addBorder(["w", "x", "y", "z"]));
console.log(addBorder(["the", "cow", "ran away", "with", "the", "spoon"]));
