//Задание 1
let a = 10;

alert(a);
a = 20;
alert(a);

//Задание 2

let firstIphone = 2007;
alert(firstIphone);

//Задание 3

let creatorJS = 'Брендан Эйх';
alert(creatorJS);

//Задание 4

let numberOne = 10;
let numberTwo = 2;

alert(numberOne + numberTwo);
alert(numberOne - numberTwo);
alert(numberOne * numberTwo);
alert(numberOne / numberTwo);

//Задание 5

let exrcsFiveNum = 2;
let result = Number;

result = exrcsFiveNum ** 5;

alert(result);

//Задание 6

let exrcsSixA = 9;
let exrcsSixB = 2; 
let exrcsSixResult = exrcsSixA % exrcsSixB;

alert(exrcsSixResult);

//Задание 7

let exrcsSevenNum = 1;
exrcsSevenNum = exrcsSevenNum + 5;
exrcsSevenNum = exrcsSevenNum - 3;
exrcsSevenNum = exrcsSevenNum * 7;
exrcsSevenNum = exrcsSevenNum / 3;
exrcsSevenNum++;
exrcsSevenNum--;
alert(exrcsSevenNum);

//Задание 8

let age = Number(prompt("Сколько Вам лет?"));
alert(age);

//Задание 9.0

const user = {
	name: 'Брендан Эйх',
	age: 20,
	isAdmin: true,
}

//Задание 9.1

user['city of residence'] = 'Moscow';

//Задание 9.2

user.age = 40;

//Задание 9.3

delete user['city of residence'];

//Задание 9.4

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

//Задание10

let userName = prompt("Как Вас зовут?");
alert(`Привет, ${userName} !`);
