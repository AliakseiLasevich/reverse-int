module.exports = function reverse(n) {
    if (n < 0) {
        n *= -1;
    }
    let array = n.toString().split("");
    let reverse = [];
    for (let i = array.length - 1; i > -1; i--) {
        reverse.push(+array[i]);
    }
    return reverse.join("");
}
