// Задание 1

for (let i = 0; i < 2; i++) {
    console.log ('Привет');
}

// Задание 2

for (let i = 1; i < 6; i++) {
    console.log(i);
}

// Задание 3

for (let i = 7; i < 23; i++) {
    console.log(i);
}

// Задание 4

let obj = {
    'Коля' : '200',
    'Вася' : '300',
    'Петя' : '400'
}

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]} долларов.`);
}

// Задание 5

let n = 1000;
let t = 2;
let del = n/t;
let sum = 0;

while (del > 50) {
    n = del;
    del = n/t;
    sum+= 1;
}
console.log(sum)
console.log(del);

//Задание 6 

let firstFriday = 1;

for (let i = 0; i < 32; i++) {

    if ((firstFriday + 7)  === i || i === firstFriday) {
        firstFriday = i;
        console.log (`Сегодня пятница,` + i + `-е число. Необходимо подготовить отчет.`);
    } 
}