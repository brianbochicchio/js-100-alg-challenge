/*
Given the array ["abc", "ded"] add a border of * around the text.
Calling addBorder would result in the following array in the console ["*****", "*abc*", "*ded*", "*****"]

Two ways to make this better would be to base the border mark on the longest array element and 
have it pad shorter ones with spaces so it would always render as a square or rectangle. 

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
        let padding = maxBorderLen - picture[i].length;
        picture[i] = picture[i].padStart(padding, " ");
        picture[i] = picture[i].padEnd(padding +2, " ");

        // now have a thread to tug on, need to work on padding formula some more

        picture[i] = `${borderMark}${picture[i]}${borderMark}`;
    }
    picture.push(longBorder);
    picture.unshift(longBorder);


    return picture;
}
//console.log(addBorder(["abc", "ded"]));
//console.log(addBorder(["abc"]));
console.log(addBorder(["abc", "def", "ghi", "nachos", 'z']));
