const fibonacci = function(input) {
    let n = Number.parseInt(input);
    if (n === undefined || n < 0) return "OOPS";

    const aFib = [1,1];
    for (let i=2; i<n; i++) {
        aFib.push(aFib[i-2]+aFib[i-1]);
    }
    return aFib[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
