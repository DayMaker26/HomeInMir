let person = {
  _name: 'Olvin',
  _age:411300000 ,

  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    } else {
      console.log(`Olvin is not ${ageIn} to a Blue Moon.`)
    }
  },

  get age() {
    console.log(`Olvin is ${this._age} years old.`);
    return this._age;
    person.age = 411300000
  }

};
console.log(person.age);
person.age = 'One-Hundred';
person.age = 411300000;
