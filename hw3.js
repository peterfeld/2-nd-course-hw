//Задание 1

let password = 'пароль';
let inputPassword = prompt('Введите пароль');

if (inputPassword === password) {
    console.log("Пароль введен верно");
} else {
    console.log("Пароль введен неправильно");
}

//Задание 2

let hwThreeC = 20;

(hwThreeC > 0 && hwThreeC <10) ? console.log ("Верно") : console.log ("Неверно");

//Задание 3

let hwTreeD = 8;
let hwTreeE = 10;

(hwTreeD > 100 || hwTreeE > 100) ? console.log ("Верно") : console.log ("Неверно");

// Задание 4

let a = '2';
let b = '3';

alert(Number(a) + Number(b));

//Задание 5

let monthNumber = Number(prompt("Введите номер месяца"));

if (monthNumber >=13) {
    console.log ("Введите число от 1 до 12")
} else {
    switch (monthNumber) {
        case 1:
        case 2:
        case 12:
            console.log ("Этот месяц - зима")
            break; 
        case 3:
        case 4:
        case 5:
            console.log ("Этот месяц - весна")
            break;  
        case 6:
        case 7:
        case 8:
            console.log ("Этот месяц - лето")
            break;
        case 9:
        case 10:
        case 11:
            console.log ("Этот месяц - осень")
            break;

        default:
            console.log ("Введено некорректное значение")
            break;
    }
}

//Задание 7

let hwTreeNum = prompt("Пожалуйста, введите любое число");

if (isNaN(hwTreeNum) || hwTreeNum === null || hwTreeNum.trim() === '') {
    console.log ("Некорректный ввод");
} else {
    if (hwTreeNum % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
}
