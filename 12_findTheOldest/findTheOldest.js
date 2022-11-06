const findTheOldest = function (people) {
    const yr = new Date().getFullYear();
    let oldestAge = -1;
    return people.reduce((prev, cur) => {
        const age = (cur.yearOfDeath || yr) - cur.yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            return cur;
        }
        return prev;
    },null)
};

// Do not edit below this line
module.exports = findTheOldest;
