
class Foo {
  constructor(value) {
    this.bar = value
  }
  // bar = "baz"
  getName(name) {
    return name
  }
  greetMe() {
    return `Hello ${this.getName('Lucas')}`
  }

} 

module.exports = Foo
