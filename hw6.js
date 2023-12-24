// Задание 1

const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] ===10) {
        console.log(arr[i])
        break
    }

    console.log(arr[i]);
}

// Задание 2

const arr2 = [1, 5, 4, 10, 0, 3];

console.log(arr2.indexOf(4))

// Задание 3

const arr3 = [1, 3, 5, 10, 20];

console.log(arr3.join(' '));

// Задание 4

const arr4 = [];
const element = 1;
for (let i = 0; i < 3; i++) {
    let arr4Contain = [];
    arr4.push(arr4Contain)
    for (let j = 0; j < 3; j++) {
        arr4Contain.push(element)
    }
}

console.log(arr4);

// Задание 5

const arr5 = [1, 1, 1];

for (let i = 0; i < 3; i++) {
    arr5.push(2);
}

// Задание 6

const arr6 = [9, 8, 7, 'a', 6, 5]; 

arr6.shift(arr6.reverse(arr6.sort()));
console.log(arr6);

// Задание 7

const arr7 = [9, 8, 7, 6, 5];

let num = Number(prompt('Угадай число'));

if (isNaN(num)) {
    alert('Переданный параметр не является числом')
} else {
    arr7.includes(num) ? alert('Угадал') : alert('Не угадал'); }

// Задание 8

let str = 'abcdef';
let strArr = str.split('');
console.log((strArr.reverse()).join(''));

// Задание 9

const arr9 = [[1, 2, 3,],[4, 5, 6]];

const arr9Join = [];

for ( let element of arr9) {
    for (let i = 0; i < element.length; i++){
        arr9Join.push(element[i]);
    }
}

console.log(arr9Join);

// Задание 10

const arr10 = [1, 2, 3, 4];

const sum10 = (a, b) => {
    let result = a + b;
    return result
}

for (let i = 0; i < arr10.length - 1;i++) {
    console.log(sum10(arr10[i], arr10[i+1]))
}

// Задание 11

const squareArr = function (arr) {
    const result = arr.map((num) => num ** 2);

    return result
}

let arr11 = [2, 2, 3, 4]

console.log(squareArr(arr11));

// Задание 12

let strLength2 = function (arr) {
    const result = arr.map((element) => element.split('').length);
    return result
}

let arr12 = ['слово', '', 'слог', 'длинное предложение', 'буква'];

console.log(strLength2(arr12));

// Задание 13

let filterPositive = function (arr) {
    const result = arr.filter(numbs => numbs < 0)
    return result
}

// Задание 14

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomArr(length) {
    const RandomArr = [];
    for (let i = 0; i < length; i++) {
        RandomArr.push(getRandomInt(1, 10))
    }

    return RandomArr
}

const arr14 = getRandomArr(10);
const arr14Even = arr14.filter(numbs => numbs % 2 === 0)

console.log(arr14);
console.log(arr14Even);

// Задание 15

const arr15 = getRandomArr(6);
const result = (arr15.reduce((intermediate, value) => intermediate + value)) / arr15.length

console.log(result);
