const repeatString = function(string,num) {
    let combined = "";
    if (num < 0){
        return "ERROR";
    }
    else{
        for(let i = 0; i<num; i++){
            combined += string;
        }
        return combined;
    }
};

// Do not edit below this line
module.exports = repeatString;
