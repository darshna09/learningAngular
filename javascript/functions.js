// Function expression

// The function keyword beings an expression, function name is omitted.
const getRectArea = function (width, height) {
    return width * height;
};

console.log(getRectArea(3, 4)); // 12

// Function expression Hoisting

// Function expressions in JavaScript are not hoisted, unlike function declarations.
console.log(notHoisted); // undefined
notHoisted(); // TypeError: notHoisted is not a function

const notHoisted = function () {
    console.log('function expression');
};

// --------------------------------------------

// Function declaration

// The function keyword begins a statement, function name is required.
function calcRectArea(width, height) {
    return width * height;
}

console.log(calcRectArea(3, 4)); // 12