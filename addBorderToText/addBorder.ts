/*
Given the array ["abc", "ded"] add a border of * around the text.
Calling addBorder would result in the following array in the console ["*****", "*abc*", "*ded*", "*****"]

Two ways to make this better would be to base the border mark on the longest array element and 
have it pad shorter ones with spaces so it would always render as a square or rectangle. 

Got the logic in for the comment above. Need to re-factor the code. Code associated with maxBorderLen is a 
little klugdy because in one case I am adding 2 to it only to take those two away. I think it could be better 
organized too.  

*/

function addBorder(picture :string[]) : any {
    const borderMark : string = "*"
    let maxBorderLen :number = 0;
    for (let i = 0; i < picture.length; i++) {
        if (picture[i].length > maxBorderLen) {
            maxBorderLen = picture[i].length;
        }  
        
    }
    maxBorderLen += 2;    
    const longBorder : string = borderMark.repeat(maxBorderLen);

    for (let i = 0; i < picture.length; i++) {
        let whiteSpace = ( maxBorderLen - 2) - picture[i].length;
        console.log(whiteSpace)
        let leftPad = Math.floor(whiteSpace / 2);
        let rightPad = Math.ceil(whiteSpace / 2);
        console.log(leftPad,rightPad);
        picture[i] = picture[i].padStart(picture[i].length + leftPad, " ");
        picture[i] = picture[i].padEnd(picture[i].length + rightPad, " ");
      
        picture[i] = `${borderMark}${picture[i]}${borderMark}`;
    }
    picture.push(longBorder);
    picture.unshift(longBorder);


    return picture;
}
//console.log(addBorder(["abc", "ded"]));
//console.log(addBorder(["abc"]));
console.log(addBorder(["ghi", "nachos", 'z', 'says', "Cracker Barrel"]));
