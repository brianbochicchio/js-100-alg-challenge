/*
Given the array ["abc", "ded"] add a border of * around the text.
Calling addBorder would result in the following array in the console ["*****", "*abc*", "*ded*", "*****"]

Two ways to make this better would be to base the border mark on the longest array element and 
have it pad shorter ones with spaces so it would always render as a square or rectangle. 
   


*/

function addBorder(picture :string[]) : any {
    const maxBorderLen = picture.length + 2;
    const borderMark = "*"
    const longBorder = borderMark.repeat(maxBorderLen);

    for (let i = 0; i < picture.length; i++) {
        picture[i] = `${borderMark}${picture[i]}${borderMark}`;  
    }
    picture.push(longBorder);
    picture.unshift(longBorder);


    return picture;
}
console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abc"]));
console.log(addBorder(["abc", "def", "ghi", "nachos"]));
