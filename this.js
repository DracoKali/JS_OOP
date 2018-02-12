// the naming convention for Classes and Object Constructors is that they're capitalized and singular
function Person(name, age) {
    const privateVariable = "This variable is private";
    const privateMethod = function () {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    }
}
const eliza = new Person("Eliza", 48);
console.log(eliza.privateVariable);
// undefined!
< div id = "copy-toolbar-container" style = "cursor: pointer; position: absolute; top: 359px; right: 35px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;" > <span id="copy-toolbar">copy</span></div >

console.log(this);