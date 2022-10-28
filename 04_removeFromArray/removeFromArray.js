const removeFromArray = function(baseArray, ...valuesToRemove) {
    return baseArray.filter(v => !valuesToRemove.includes(v));
};

// Do not edit below this line
module.exports = removeFromArray;
