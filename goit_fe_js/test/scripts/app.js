const User = function(name, age, friends){
  this.name = name;
  this.age = age;
  this.friends = friends;
  
  this.getInfo = function(){
    return `User ${this.name} is ${this.age} years old and has ${this.friends} friends`;
  }
}
const mango = new User("Mango", 2, 20 );
mango.getInfo(); // User Mango is 2 years old and has 20 friends
console.log(mango.getInfo());

const poly = new User("Poly", 3, 17 );
poly.getInfo(); // User Poly is 3 years old and has 17 friends
console.log(poly.getInfo());