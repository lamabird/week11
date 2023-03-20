function greet(name, time = "day") {
    console.log('good ${time} ${name}');
}

greet("tim", "night")

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

let uservalue = prompt("enter a number");
let result = circlearea(<input type="">)
alert('the are of a circle with radius ${userValue} is ${result}')