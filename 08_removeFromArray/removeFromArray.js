const removeFromArray = function(array, ...toRemove) {
    toRemove.forEach(function(arg){
        while(true){
            const index = array.indexOf(arg);
            if (index == -1){
                break;
            }
            if (index >= -1){
                array.splice(index,1)
            }
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
