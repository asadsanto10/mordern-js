/*
* es6 arro function
*/

const fun = (a, b) => a + b;
// console.log(5 + 4 );

var js = {
    name: 'javascript',
    libraries: ['React', 'AngularJS', 'Vue'],
    printLibraries: function() {
        // console.log(this);
        this.libraries.forEach((e)=> console.log(`${this.name} loves ${e}`));
    }
};
js.printLibraries();
 