const fibonacci = function(num) {
    let firstPrev = 1;
    let secondPrev = 0;
    if (num == 0){
        return 0;
    }
    if (num < 0){
        return "OOPS";
    }
    num = +num;
    for (let i = 1; i<= num; i++){
        
        
        let currentValue = firstPrev + secondPrev
        
        secondPrev = firstPrev
        console.log(secondPrev);
        firstPrev = currentValue
        
    }

    return secondPrev;
    
}

        

// Do not edit below this line
module.exports = fibonacci;
