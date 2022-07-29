module.exports = function reverse (n) {
    let b = '';
    strN = String (Math.abs(n));
    for (let i = strN.length - 1; i >= 0; i--){
        console.log(strN[i]);
        b = b + strN[i];
    }
    return +b
}
