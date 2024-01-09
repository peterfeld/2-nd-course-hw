// Задание 1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

function compareNumbers(a, b) {
    return a.age - b.age;
  }

console.log(people.sort(compareNumbers))

 // Задание 2

const peopleTwo = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
 ];

function isPositive(num) {
    if (num > 0) {
        return true
    }
}

function isMale(obj) {
    if (obj.gender === 'male') {
        return true
    }
    
}  

function filter(arr, ruleFun) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFun(arr[i])) {
            result.push(arr[i])
        }
    }
    return result
}
    
console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
console.log(filter(peopleTwo, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3

const timer = () => {
    let deadline = 30000;
	const interval = setInterval(() => {
		console.log(Date());
	}, 3000);


	setTimeout(() => {
    clearInterval(interval);
    console.log('30 секунд прошло')
  }, deadline)
};

// timer();

// Задание 4

function delayForSecondOne(callback) {
   setTimeout(callback, 1000);
}

delayForSecondOne(function () {
  console.log('Привет, Глеб!');
})

// Задание 5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}

// Нужно изменить код ниже:
delayForSecond(setTimeout(() => {sayHi('Глеб')}))