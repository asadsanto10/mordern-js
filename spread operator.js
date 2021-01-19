// sparade oprator
let number = [1, 2, 3, 4];
let newNumber = [...number, 5, 6, 7];
console.log(newNumber);

// rest oprator
function myfun(...params){
    console.log(params);
}
console.log(myfun(1, 2, 3, 4, 5, 6));