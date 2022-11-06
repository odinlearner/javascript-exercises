const palindromes = function (s) {
    const sBase = s.toLowerCase().replace(/[^a-z]+/g, "");
    for (let i=0; i < sBase.length; i++) {
        if (sBase[i] !== sBase[sBase.length-(i+1)]) return false;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
