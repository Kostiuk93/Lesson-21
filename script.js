"use strict";

const arr = [2, 12, 23, 26, 8];
// Cортировка чисел массива по порядку
arr.sort(compareNum);
console.log(arr);
function compareNum(a, b){
    return a -b;
}

// arr[99] = 0;
// console.log(arr.length); // Свойство length состоит из последнего индекса массива +1
// console.log(arr);

// Медод forEach позволяет гибко перебрать все элементы массива
// В forEach можно выполнить callback функцию. Может принимать 3 аргумента:
// // Первый аргумент: тот эемент, который мы сейчас перербираем прим.[2, 3, 6, 8]
// // Второй аргумент: номер по порядку
// // Третий аргумент: это ссылка на тот тип, который мы перебираем 
// arr.forEach(function(item, i, arr) { 
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });


// arr.pop();  // .pop удаляет последний последний элемент массива
// arr.push(10); // .push добавляет в конец массива элемент

// console.log(arr);
// // Перечисление элементов в массиве
// // for (let i=0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // Аналог предыдущего кодa. for ... of работает только с массиво подобными сущностями:
// // массив, строка, псевдомассив, get, set
// for (let value of arr) {
//     console.log(value);
// }


// const str = prompt("", '');
// const products  = str.split(", ");
// products.sort();  //сортировка
// console.log(products.join(';'));