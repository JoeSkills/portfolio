const data = {
  name: 'Joseph oritseweyinmi',
  age: 17,
};
class stuff {
  constructor(age) {
    this.age = age;
  }
  howOld() {
    console.log(`I am ${this.age} years old`);
  }
}
module.exports = stuff;
