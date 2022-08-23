//Task 1
// На входе два одномерных массива. В каждом массиве всегда по два элемента. Верните третий массив результат которого будет сумма элементов предыдущих
// Input: [2,4], [1,3]
// Actions:
// Output: [3,7]
// Input: [1,7], [9,3]
// Actions:
// // // Output: [10, 10]

// const task1 = (arr,arr2) => {
//
//     return arr.reduce((acc, rec, idx) => {
//         return [...acc , rec + arr2[idx]]
//     },[])
// };
// console.log(task1([1,7], [9,3]));

//Task 2
// Напишите функцию, которая принимает массив чисел и возвращает массив этих чисел умноженных на два
// Input: [1,2,3,4,5]
// Output: [2,4,6,8,10]

// const task2 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         return [...acc, rec * 2]
//         },[])
// };
// console.log(task2([1,2,3,4,5]));

//Task 3
// Напишите функцию, которая принимает массив объектов с полем id. Например [{id: '100'}, {id: 2}] и возвращает массив этих id
// Input: [{id: 1},{id: 2},{id: 3},{id: 4}]
// Output: [1,2,3,4]
// Input: [{id: true}]
// Output: [true]
//
// const task3 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         return {...acc,acc[rec
//         },{})
// };
// console.log(task3([{id: 1},{id: 2},{id: 3},{id: 4}]));

//Task 4
// Напишите функцию, которая принимает массив чисел и возвращает массив строк по шаблону <div>{number}</div>
// Input: [1,2]
// Output: ['<div>1</div>','<div>2</div>']
// Input: ['Anakin']
// Output: ['<div>Anakin</div>']

// const task4 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         return [...acc,`<div>`+ rec +`</div>`]
//     },[])
// }
// console.log(task4(['Anakin']))

//Task 5
// Напишите функцию, которая принимает массив строк и возвращает массив строк с четным количеством букв
// Input: ['ab','abc','abcd']
// Output: ['ab','abcd']
// Input: ['abc','abcde']
// Output: []
//
// const task5 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         if (rec.length % 2 === 0){
//             return [...acc, rec]
//         }
//         return acc
//     },[])
// }
// console.log(task5( ['ab','abc','abcd']))

//Task 6
// Напишите функцию, которая принимает массив чисел и возвращает массив чисел умноженных на два, которые делятся на 10 без остатка
// Input: [1,2,3,7,10,5]
// Output: [20,10]
// Input: [1,2,3,7,9,4]
// Output: []

// const task6 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         if (rec % 10 === 0){
//             return [...acc,rec * 2]
//         }
//         return acc
//         },[])
// };
// console.log(task6([1,2,3,7,10,5]));

//Task 7
// Напишите функцию, которая принимает массив булевых значений и возвращает массив только со значениями true
// Input: [true,false,true,true]
// Output: [true,true,true]
// Input: [false,true]
// Output: [true]

// const task7 = (arr) =>{
//     return arr.reduce((acc,rec) => {
//         if (rec !== false){
//             return [...acc,rec]
//         }
//     },[])
// }
// console.log(task7([true,false,true,true]))

//Task 8
// Напишите функцию, которая принимает массив значений в тч и значения undefined и возвращает массив только без значений undefined
// Input: [true, false, true,true, undefined, true, undefined]
// Output: [true, false, true, true, true]
// Input: [undefined, true, undefined]
// Output: [true]

// const task8 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         if (rec !== undefined){
//             return [...acc,rec]
//         }
//         return acc
//     },[])
// }
// console.log(task8([undefined, true, undefined]))

//Task 9
// Напишите функцию, которая принимает массив чисел и возвращает их сумму. Использовать reduce
// Input: [1,2,3,4,5]
// Output: 15
// Input: [2, 11, 5]
// Output: 18
//
// const task9 = (arr) => {
//     return arr.reduce((acc,rec) => {
//         return acc + rec
//     },0)
// }
// console.log(task9([1,2,3,4,5]))

//Task 10
// Напишите функцию, которая принимает массив булевых значений и возвращает результат логичского И над ними. Использовать reduce
// Логическое И - это операция &&
// Input: [true,true,true,true]
// Output: true
// Input: [true,false,true]
// Output: false



//Task 11
// Напишите функцию, которая принимает массив чего угодно и возвращает объект с полями {field1, field2, field3, field4}. Использовать reduce. Читайте описание наверху страницы, перед тем, как отчаиваться.
// Input: [true,1,'wow','you are smart, bro']
// Output: {field1: true, field2:1, field3: 'wow', field4: 'you are smart, bro'}
//
// const task11 = (arr) => {
//     return arr.reduce((acc,rec,idx) => {
//         return {...acc, [`field${idx + 1} `]: rec}
//         },{})
// }
// console.log(task11([true,1,'wow','you are smart, bro']))

//Task 12
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый объект. Только с полями, у которых тип значения - строка;
// Input: { name: 'pilot', isActive: true }
// Actions:
// Output: { name: 'pilot' }
// Input: { isActive: true }
// Actions:
// Output: {}
//
// const task12 = (obj) => {
//     return Object.keys(obj).reduce((acc,rec) => {
//         if (typeof obj[rec] === 'string'){
//             return {...acc,[rec]: obj[rec]}
//         }
//         return acc
//     },{})
// }
//
//
// console.log(task12( { name:'pilot',isActive:true }));

//Task 13
// Напишите функцию, которая принимает объект, как аргумент и возвращает новый массив с именами ключей - значение, которых false
// Input: { isActive: false, isPilot: true }
// Actions:
// Output: ['isActive']
//
// const task13 = (obj) => {
//    return Object.keys(obj).reduce((acc,rec) => {
//            if (obj[rec] === false){
//                return{...acc,[rec]: obj[rec]}
//            }
//            return acc
//     },{})
//
//
// }
// console.log(task13 ({ isActive: false, isPilot: true }) )

//Task 14
// Вам задан массив - верните среднее число массива. (сумма всех элементов деленное на количество элементов)
// Input: [4, 6]
// Actions:
// Output: 5
// Input: [2, 4]
// Actions:
// Output: 3

// const task14 = (arr) => {
//     return arr.reduce((acc,rec,idx) => {
//        return  [...acc, rec + rec[idx] % 2]
//     },[])
//
// }
// console.log(task14([4, 6]))

//Task 15
// Напишите функцию, которая получает массив функций и начальное значение, как аргументы. Функция должна вернуть результат выполнения всех функций в массиве поочередно, используя начальное значение. Используйте reduce.
// Например
// [
// (a) => a+ 1,
// (a) => a * 2
// ],
// 5
// 5 начальное значение.
// Сначала запускается функция с ((a) => a+ 1)(5). Результат будет 6. теперь 6 используется во второй функции
// ((a) => a * 2)(6)
// Итог 12
// Количество функций в начальном массиве не ограничено
// Чтобы решить эту задачу - четко решите, что будет являться аккумулятором, что будет являться ресивером в редьюсе. Какие у них типы. Как пройдет редьюс в первом шаге и что он вернет.
// Задача решается в одну строчку, но тяжела для понимания. Ключ решения - ясность.
// Input: [ (a) => a+ 1, (a) => a * 2 ], 5
// Actions:
// Output: 12
// Input: [ (a) => a - 1, (a) => a * 2 ], 5
// Actions:
// Output: 8
// Input: [ (a) => a + 2, (a) => a * 5, (a) => a - 5 ], 3
// Actions:
// Output: 20
//
// const task15 = (arr, num) => {
//     return arr.reduce((acc,rec)=> {
//         return rec(acc)
//     },num)
// }
// console.log(task15([ (a) => a+ 1, (a) => a * 2 ], 5))

