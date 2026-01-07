const palindromes = function (str) {
    noSpaces = str.split(" ")
    noSpaces = noSpaces.join()
    noCommas = noSpaces.split(",");
    noCommas = noCommas.join("");
    noCaps = noCommas.toLowerCase();
    noExclamations = noCaps.split("!").join("")
    noPeriods = noExclamations.split(".").join("")
    lengthString = noPeriods.length;
    halfLength = lengthString / 2;
    
    if (lengthString % 2 ==0){
        firstHalf = noPeriods.split("").slice(0,halfLength).join("")
        secondHalf = noPeriods.split("").slice(halfLength).reverse().join("")
    }
    else{
        firstHalf = noPeriods.split("").slice(0,halfLength).join("")
        secondHalf = noPeriods.split("").slice(halfLength+1).reverse().join("")
    }

    console.log(firstHalf);
    console.log(secondHalf);
    console.log(firstHalf == secondHalf)

    if (firstHalf == secondHalf){
        return true;
    }

    else{
        return false;
    }
}

// Do not edit below this line
module.exports = palindromes;
