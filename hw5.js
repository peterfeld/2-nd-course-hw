// Задание 1

const fun1 = (a, b) => {
    if ( a >= b ) {
        return b
    } else {
        return a
    }
}

// Задание 2

const fun2 = (a) => {
    if (a % 2 === 0) {
        return console.log('Число четное')
    } else {
        return console.log('Число нечетное')
    }
}

// Задание 3.1

const fun3 = (a) => {
     console.log(a ** 2);
}
 
// Задание 3.2

const fun4 = (a) => {
    let b = a ** 2;
    return b;
}

// Задание 4

const fun5 = function () {
    let a = prompt('Сколько Вам лет');

    if  (isNaN(a)) {
        console.log('Вы ввели неправильное значение')
    } else {
        if (a < 0) {
            console.log('Вы ввели неправильное значение')
        } else {
            if (a >= 0 && a < 13) {
                console.log('Привет, друг!')
            } else {
                console.log('Добро пожаловать!');
            }
        }
    }    
}

// Задание 5

const fun6 = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
        return a*b;
    } else {
         console.log('Одно или оба значения не являются числом');
    }
}

// Задание 6

const fun7 = function () {
    let a  = prompt('Введите любое число');

    if (!isNaN(a)) {
        let b = a ** 3;
         console.log(`${a} в кубе равняется ${b}`);
    } else {
         console.log('Переданный параметр не является числом');
    }
}

// Задание 7

let getArea = function () {
    let a = Math.PI * this.radius**2
    console.log(`${a} - площадь окружности`);
}

let getPerimeter = function () {
    let a = Math.PI * this.radius*2
    console.log(`${a} - периметр окружности`);
}

let circle1 = {
    radius : 4,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

let circle2 = {
    radius : 10,
    getArea: getArea,
    getPerimeter: getPerimeter,
}

// Задание 8

const seasonsGame = function () {
    let seasonsNum = Number(prompt('Введите номер месяца от 1 до 12'));

    if (seasonsNum >=13) {
        alert("Введите число от 1 до 12")
    } else {
        switch (seasonsNum) {
            case 1:
            case 2:
            case 12:
                alert("Этот месяц - зима")
                break; 
            case 3:
            case 4:
            case 5:
                alert("Этот месяц - весна")
                break;  
            case 6:
            case 7:
            case 8:
                alert("Этот месяц - лето")
                break;
            case 9:
            case 10:
            case 11:
                alert("Этот месяц - осень")
                break;
    
            default:
                alert("Введено некорректное значение")
                break;
        }
    }
}