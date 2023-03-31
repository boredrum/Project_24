                                // EXCERCISE 1
let users = [
    'Mike', 
    'Nikola', 
    'Tom',
];
console.log(users);
console.log(users[1]);
users.splice(1, 1, 'Alex');
console.log(users);
users.splice(-2, 2,);
console.log(users);
console.log(users.length);


                                // EXCERCISE 2
// let a = [
//     5,
//     3,
//     -4,
//     25,
//     32,
//     -16,
//     6,
// ];
// let b = [
//     21,
//     -30,
//     9,
//     5,
//     12,
//     -19,
//     5,
//     25,
// ];
// let aOrb = function(ArrayA, ArrayB){            // method 1
//     let sum_a = 0;
//     let sum_b = 0;
//     ArrayA.forEach(ArrayA => sum_a += ArrayA );
//     console.log(`Sum of first array: ${sum_a}`);
//     ArrayB.forEach(ArrayB => sum_b += ArrayB );
//     console.log(`Sum of second array: ${sum_b}`);
//     if (sum_a > sum_b){
//         console.log('a > b')
//     }else if (sum_a < sum_b){
//         console.log('a < b')
//     }else if (sum_a == sum_b){
//         console.log('a == b')
//     }else{
//         console.log('Comparing not a numbers')
//     }
// }
// aOrb(a, b);

// let aOrb = function(ArrayA, ArrayB){            // method 2
//     let sum_a = 0;
//     let sum_b = 0;
//     for (const num of ArrayA){
//         sum_a += num;
//     }
//     console.log(`Sum of first array: ${sum_a}`);
//     for (const num of ArrayB){
//         sum_b += num;
//     }
//     console.log(`Sum of second array: ${sum_b}`);
//     if (sum_a > sum_b){
//         console.log('a > b')
//     }else if (sum_a < sum_b){
//         console.log('a < b')
//     }else if (sum_a == sum_b){
//         console.log('a == b')
//     }else{
//         console.log('Comparing not a numbers')
//     }
// }
// aOrb(a, b);


                                // EXCERCISE 3
// let phrase = 'I am learning JavaScript right now';
// let phraseArray = phrase.split(' ');
// console.log(phraseArray);


                                // EXCERCISE 4
// let a = [
//     5,
//     3,
//     8,
//     5,
//     3,
//     2,
//     1,
//     2,
// ];
// let b =[];
// a.forEach((num) => {
//     if (!b.includes(num, 0)){
//         b.push(num);
//     }
// });
// console.log(b);


                                // EXCERCISE 5
// let users = [
//     {id: 1, age: 17},
//     {id: 2, age: 18},
//     {id: 3, age: 19},
//     {id: 4, age: 21},
//     {id: 5, age: 17},
//     {id: 6, age: 20},
//     {id: 7, age: 25},
// ];
// let selectionAge = function (Array){
//     let selectionId = [];
//     Array.filter(user => {
//         if ((user.age > 18) && (user.age < 21)){
//             selectionId.push(user.id);
//         }
//     });
//     console.log(selectionId.join(', '));
// };
// selectionAge(users);