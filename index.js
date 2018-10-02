class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
 
  veto() {
    return `No, I must disagree`;
  }
  approve() {
    return 'You can do that!';
  }
  doCharity() {
    return 'I like to help people.';
  }
  releasePressStatement() {
    return 'You will see great things fro Scuber.';
  }
  sayHi() {
    return 'Hi, my name is ${this.name} I am from <homestate>, and I was trained in <training>.';
  }
}
 
 
class Teacher extends User {
  sayHello(){
    super.sayHello()
    console.log('hello')
  }
}
 
tom.sayHello()