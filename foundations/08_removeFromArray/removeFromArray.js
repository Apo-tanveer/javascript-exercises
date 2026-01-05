const removeFromArray = function(arr, times) {
    let array = [];
    for(let i = 0; i<arr.length; i++){
        if(arr[i]===times){
            continue;
        }
        else{
            array.push(arr[i]);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
// console.log(removeFromArray([1, 2, 3, 3, 4, 5, 6, 4, 7], ))