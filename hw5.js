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
    if (a % 0 === 0) {
        return console.log('Число четное')
    } else {
        return console.log('Число нечетное')
    }
}

// Задание 3.1

const fun3 = (a) => {
    return console.log(a ** 2);
}
 
// Задание 3.2

const fun4 = (a) => {
    let b = a ** 2;
    return b;
}

// Задание 4

const fun5 = function () {
    let a = prompt('Сколько Вам лет');

    if (a < 0) {
       return console.log('Вы ввели неправильное значение')
    } else {
        if (a >= 0 && a < 13) {
           return console.log('Привет, друг!')
        } else {
            return console.log('Добро пожаловать!');
        }
    }
}

// Задание 5

const fun6 = (a, b) => {
    if (isNaN(a) && isNaN(b)) {
        return a*b;
    } else {
        return console.log('Одно или оба значения не являются числом');
    }
}

// Задание 6

const fun7 = function () {
    let a  = prompt('Введите любое число');

    if (!isNaN(a)) {
        let b = a ** 3;
        return console.log(`${a} в кубе равняется ${b}`);
    } else {
        return console.log('Переданный параметр не является числом');
    }
}

// Задание 7

let circle1 = {
    radius : 4,
    getArea() {
                let a = 3.14*this.radius**2
                console.log(`${a} - площадь окружности`);
    },
    getPerimeter() {
                let a = 3.14*this.radius*2
                console.log(`${a} - периметр окружности`);
    }
}

let circle2 = {
    radius : 10,
    getArea() {
                let a = 3.14*this.radius**2
                console.log(`${a} - площадь окружности`);
    },
    getPerimeter() {
                let a = 3.14*this.radius*2
                console.log(`${a} - периметр окружности`);
    }
}