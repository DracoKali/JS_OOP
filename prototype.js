function Cat(catName) {
  const name = catName;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function() {
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
const muffin = new Cat('muffin');
const biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will mess up all the cats!