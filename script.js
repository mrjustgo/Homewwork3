//Задание 1
let password = String(prompt('Введите пароль'));
if (password ==='пароль') {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен не верно');
}
//Задание 2 
let с =4 
if (с<=10) {
    console.log('верно');
} else {
    console.log('неверно');
}
//Задание 3
let g = String(prompt('Введите число'));
let d = 85
let e = 350
if (d < 85 || e <350) {
    console.log('Верно');
} else {
    console.log('неверно');
}
//Задание 4 
let j = '2';
let k = '3';
const result = Number(j);
const result1 = Number(k);
alert(result+result1);
//Задание 5
switch (month) {
    case 'декабрь':
        console.log('зима')
        break;
    case 'январь':
        console.log('зима')
        case 'февраль':
        console.log('зима')
        break;

        case 'март':
        console.log('весна')
        break;

        case 'апрель':
        console.log('весна')
        break;

        case 'май':
        console.log('весна')
        break;

        case 'июнь':
        console.log('лето')
        break;

        case 'июль':
        console.log('лето')
        break;

        case 'август':
        console.log('лето')
        break;

        case 'сентябрь':
        console.log('осень')
        break;

        case 'октябрь':
        console.log('осень')
        break;

        case 'ноябрь':
        console.log('осень')
        break;

    default: console.log('Такого месяца не бывает');
        break;
} 