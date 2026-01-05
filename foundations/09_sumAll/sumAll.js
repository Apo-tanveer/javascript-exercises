const sumAll = function(a, b) {
    let sum = 0;
    for (let i = 0; i<=b; i++){
        if (i>=a && i<=b){
            sum += i;
        }else{
            continue;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
