module.exports = function reverse (n) {
    const integer = Math.abs(n);
    const splitString = String(integer).split('');
    let result = '';
    for (let i = 0; i < splitString.length; i++) {
        result = splitString[i] + result;
    }
    return +result;
}
