var _ = require('underscore');

module.exports = function(num, word1, word234, word5) {
    if (!_.isNumber(num)) {
        return word5;
    }

    var decimalDigit = Math.floor(num / 10) % 10;
    var lastDigit = num % 10;

    if (decimalDigit !== 1) {
        if (lastDigit === 1) {
            return word1;
        }
        if (lastDigit >= 2 && lastDigit <= 4) {
            return word234;
        }
    }

    return word5;
}
// chooseRussianCaseByInt(publishing.indexesCount, "индекс", "индекса", "индексов")