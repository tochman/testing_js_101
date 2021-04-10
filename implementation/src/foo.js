
class Foo {
  constructor(value) {
    this.bar = value
  }
  // bar = "baz"
  getName() {
    return this.bar
  }
  greetMe() {
    return `Hello ${this.getName()}`
  }

} 

module.exports = Foo
