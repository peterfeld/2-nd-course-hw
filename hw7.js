// Задание 1

let str1 = 'js';
str1.toUpperCase();

// Задание 2

let searchStart = function (strsArr, str) {
    newStrArr = [];

    strsArr.forEach(strArr => {
        if (strArr.toLowerCase().startsWith(str.toLowerCase())) {
            newStrArr.push(strArr)
        }
    });

    return newStrArr
}

searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');