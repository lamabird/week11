// function greet(name, time = "day") {
//     console.log('good ${time} ${name}');
// }
//
// greet("tim", "night")

// let greet = function (name) {
//     console.log('hello $(name)');
// }
//
// greet("tim")

// let greet = (name) => {
//     console.log('hello $(name)');
// }
// greet("tim")

function circlearea(radius) {
    if (isNaN(radius)) {
        alert("this is not a string");
    } else {
        let area = Math.PI * radius * radius;
        return area
    }
}

let userValue = prompt("enter a number");
let result = circlearea(<input type="text"/>)
alert = ('the area of a circle with radius ${userValue} is ${result}');
document.querySelector("#radius")
console.log(RadiusPara);
document.querySelector("#result")
console.log(ResultPara)
RadiusPara.textContent = userValue;
let result = circlearea(userValue)
if (result !== undefined) {

}