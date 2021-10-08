const add = (x, y) => {
    return x + y;
}
const sub = (a, b) => {
    return a - b;
}
const mul = (a, b) => {
    return a * b;
}

// module.exports = add; 
//to export 1 func
// module.exports.sub = sub;
// module.exports.mul = mul;

module.exports = { add, sub, mul };