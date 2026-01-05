const removeFromArray = function(array, ...toRemove) {
  /*  toRemove.forEach(function(arg){
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
*/
    for (let item of toRemove){
        while(true){
            if (array.indexOf(item)>=0){
                array.splice(array.indexOf(item),1)
            }
            else{
                break;
            }
        }
    }
/*
    for (let item of array){
        if(toRemove.indexOf(item)>=0){
            array.splice(array.indexOf(item),1)
        }
    }
*/
    return array; }

// Do not edit below this line
module.exports = removeFromArray;
