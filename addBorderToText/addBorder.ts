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

Have the function accept strings of various lengths and center align the output with some extra padding for a clean

*/

const borderMark : string = '*';

// Need this to calculate the top and bottom border lengths and padding amount
const getLongestStringLength = (picture : string[]) : number => {
    let longestStringLength = 0;
    for (let i = 0; i < picture.length; i++) {
        if (picture[i].length > longestStringLength) {
            longestStringLength = picture[i].length;
        }  
    }   
    return longestStringLength;
}

const addTopBottomBorders = (picture : string[], longestStringLength: number) : any =>  {
    longestStringLength += 4;    
    const border : string = borderMark.repeat(longestStringLength);
    picture.push(border);
    picture.unshift(border);
}

function addBorder(picture :string[]) : any {
    let longestStringLength = getLongestStringLength(picture);

    for (let i = 0; i < picture.length; i++) {
        
        let totalPadding : number = longestStringLength - picture[i].length;
        let leftPad : number = Math.floor(totalPadding / 2);
        let rightPad : number = Math.ceil(totalPadding / 2);
    
        picture[i] = picture[i].padStart(picture[i].length + leftPad + 1, " "); 
        // adding padding changed the current item's length
        picture[i] = picture[i].padEnd(picture[i].length + rightPad + 1, " ");  
        picture[i] = `${borderMark}${picture[i]}${borderMark}`;
    }

    addTopBottomBorders(picture, longestStringLength);

    return picture;
}
//console.log(addBorder(["123", "456"]));
//console.log(addBorder(["w", "x", "y", "z"]));
console.log(addBorder(["the", "cow", "ran away", "with", "the", "spoon"]));
