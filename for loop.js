/*
* for loop, for in, for of
*/
for(let i = 0; i <= 5; i++){
    // console.log(i);
}

// for in 
const obj = {
    name: 'js',
    estd: 1995,
    founder: 'Brendan Eich'
}
for( property in obj ){
    // console.log(property);
}

// for of
const myArr = [1, 2, 3, 4, 5, 6, 7];
for (element of myArr){
    console.log(element);  // in dile array index pabo ar of dile arry gulo pabo
}