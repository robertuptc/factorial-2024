factorial = function(num) {
    if (num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1)
    }
};

module.exports = {factorial}