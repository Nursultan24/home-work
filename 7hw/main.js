//Task 1
// Напишите функцию, которая принимает любое значение и возвращает шаблон ${val} typeof ${тип переменной val}. Для того, чтобы получить тип переменной - используйте конструкцию typeof val

//
// Input: 1
// Output: '1 typeof number'
// Input: true
// Output: 'true typeof boolean'

// function task1(val) {
// return ` ${val} typeof ${typeof val}`
// }
//
// console.log(task1( true))
//Task 2
// Напишите функцию, которая принимает строку-число, а возвращает квадрат этого числа.

// function str(a) {
//
//    return a * a
// }
//
// console.log(str('3'))

//Task 3
//Напишите функцию, которая принимает в себя три строки, поочередно берет по символу с каждой строки и возвращает одну строку.


// Task 4
// Напишите функцию, которая принимает в качестве параметра строку, содержащую имя и фамилию человека, а возвращает инициалы, разделенные точкой.
//
//     Input: 'Сергей Семёнов'
// Output:  'С.С'
//
// Input: 'Анастасия Черданцева'
// Output:'А.Ч'
//
// Input: 'Горинов Максим'
// Output:'Г.М'
//
// function task4(str,name) {
//
//     return str.charAt(0).toUpperCase() +
//         name.charAt(0).toUpperCase();
// }
//
// console.log(task4('Горинов','Максим'));

//Task 5
// Напишите функцию, которая принимает в себя три параметра: name, city, region. Name - массив, с именем, именем фамилией или ФИО человека. City - город, region - область, куда отправился путешественник. Функция должна возвращать строку-приветствие путешественника. Смотрите пример ниже:
//
//
// Input: ['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'
// Output:Привет, Дмитрий Серебров! Добро пожаловать в Ишим, Тюменская обл!
//
// Input: ['Анастасия'], 'Миасс', 'Челябинская обл'
// Output:Привет, Анастасия! Добро пожаловать в Миасс, Челябинская обл!
//
// Input: ['Горинов', 'Максим', 'Владимирович'], 'Чернушка', 'Свердловская обл'
// Output:Привет, Горинов Максим Владимирович! Добро пожаловать в Чернушка, Свердловская обл!

// function task5(name,city,region) {
//
//     return `Привет,` + name + `!` + `Добро пожаловать в-` + city +`_` + region
// }
//
// console.log(task5(['Дмитрий', 'Серебров'], 'Ишим', 'Тюменская обл'))

//Task 6
// Напишите функцию, которая принимает число и возвращает Negative если число меньше нуля, Positive если больше нуля, Zero если равно нулю
//
// Input: 1
// Output: 'Positive'
// Input: -1
// Output: 'Negative'
// Input: 0
// Output: 'Zero'

// function task6(num) {
//
//     if (num < 0){
//         return 'Negative'
//     }else if (num > 0){
//         return 'Positive'
//     }else if (num === 0){
//         return 'Zero'
//     }
// }
//
// console.log(task6(0))


//Task 7
//
// Напишите функцию, которая принимает строку и из строчных букв делает прописные, а прописные - строчными.
//Input: 'hello world'
// Output: 'HELLO WORLD'
// Input: 'HELLO WORLD'
// Output: 'hello world'
// Input:'hello WORLD'
// Output: 'HELLO world'
// Input:'HeLLo WoRLD'
// Output: 'hEllO wOrld'

// function task7(str) {
//   if (str === str.toLowerCase() ){
//      return str.toUpperCase()
//   }else if(str === str.toUpperCase() ){
//      return str.toLowerCase()
//   }
// }
//
// console.log(task7('HELLO WORLD'));

//Task 8
// Напишите функцию, которая принимает объект с полем id например {id:0} и возвращает значение этого айди - 0
//
// Input: {id: 10}
// Output: 10
// Input: {id: true}
// Output: true


//Task 9
// Напишите функцию, которая принимает объект с полем name и возвращает 0 если длина этого поля четная и 1 если нечетная
// Input: {name: 'xxxx'}
// Output: 0
//
// Input: {name: 'alpha'}
// Output: 1

// function task9(obj) {
//
//     if (obj['name'].length % 2 === 0){
//         return 0
//     }else  {
//         return 1
//     }
// }
//
// console.log(task9({name: 'alpha'}));

//Task 10
// Напишите функцию, которая принимает два числа. Если первое число больше - возвращает 1, Если меньше -1, если равны, то ноль
//Input: 5,2
// Output: 1
//
// Input: 1,2
// Output: -1
//
// Input: 2,2
// Output: 0

// function task10(num) {
//
//     if (num.length[0] > num.length[1]){
//         return 1
//     }else if (num.length[0] < num.length[1]){
//         return -1
//     }else if  (num.id[0] === num.length[1]){
//         return 0
//     }
// }
//
// console.log(task10(5,2))


//Напишите функцию MasterYoda, которая будет возвращать
// 'Master' если передаваемый параметр кратен 3,
// 'Yoda', если передаваемый параметр кратен 5,
// 'MasterYoda' - если параметер кратен 3 и 5.
// Если передаваемое число не кратно 3 или 5, то вернуть указанный параметр


// /**
//  * @return {string}
//  */
// function MasterYoda(a) {
//
//    if (a % 3 === 0 && a % 5 === 0) {
//       return 'MasterYoda'
//    } else if (a % 5 === 0) {
//     return 'Yoda'
//  }else if (a % 3 === 0){
//     return  'Master'
//    }
//  return a
//
// }
// console.log(MasterYoda(9));



