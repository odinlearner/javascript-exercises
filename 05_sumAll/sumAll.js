const sumAll = function(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number")
        return "ERROR"
    if (n1 < 0 || n2 < 0) return "ERROR"

    const lowerbound = Math.min(n1,n2);
    const upperbound = Math.max(n1,n2);

    let sum = 0;
    for (let i = lowerbound; i <= upperbound; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
