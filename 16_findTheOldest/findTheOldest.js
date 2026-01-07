const findTheOldest = function(arr) {
    let oldestAge = 0
    let indexOfOldest = -1;
    for(let i = 0; i<arr.length;i++){
        if (arr[i].yearOfDeath > 0){
            age = arr[i].yearOfDeath -arr[i].yearOfBirth;
            
        }
        else{
            age = new Date().getFullYear() - arr[i].yearOfBirth;
            
            
        }

        if(age>oldestAge){
                oldestAge = age
                indexOfOldest = i;
            }

    }
    return arr[indexOfOldest];
}


// Do not edit below this line
module.exports = findTheOldest;
