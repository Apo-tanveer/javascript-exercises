const reverseString = function(string) {
    let reversedString = "";
    let i = 0;
    let length = string.length -1;

    while(length>=0){
        reversedString += string[length];
        length-=1;
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
