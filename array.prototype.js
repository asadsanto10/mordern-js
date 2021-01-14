/* array prototypee find*/
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var result = number.find(function (currentValue, currentIndex, arr) { 
    return currentValue > 4;
});
// console.log(result);

/* array prototypee find index*/
let findIndex = number.findIndex((currentValue, currentIndex, arr)=> {
    return currentValue > 4;
});
// console.log(findIndex);

/* array prototypee filter*/

var filter = number.filter((currentValue, currentIndex, arr)=>{
    // console.log(currentIndex);
    // console.log(arr);
    return currentValue > 4;
})
// console.log(filter);

/* array prototypee slice*/

var slice = number.slice(1, 3);
// console.log(slice);

/*
* array prortotype splice
*/ 
var splice = number.splice(1, 2, 10, 15, 19);
// console.log(number);
// console.log(splice);

/*
* array prortotype concat
*/
var number2 = [11, 12, 13];
var result = number.concat(number2);
// console.log(result);


/*
* array prortotype push
*/
number.push(14, 15, 17);
// console.log(number);

/*
* array prortotype map
*/ 
let mapResult = number.map((num) => {
    return num * 2;
})
// console.log(mapResult);


/*
* array prortotype reduce
*/

let reduceResult = number.reduce((prevVlue, currentValue, curIndex, arr) => {
    return prevVlue + currentValue;
}, 0);
console.log(reduceResult);