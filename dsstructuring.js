// destructuring
const user = {
  id: 339,
  name: "santo",
  age: 23,
  // education: {
  //    degree: 'BSC'
  // },
};

const { name } = user;
// console.log(name);
const { education: { degree } = {} } = user; //jokhon kno api thke call kora hobe tokon dheka gelo je kno ekta object nai tokon jate error na khai tar jonno ekta object r initial kore dite hoy
// console.log(degree);

//  array destructurion
let number = [1, 2, 3, 4];
let [a, b, c] = number;
console.log(a, b, c);
