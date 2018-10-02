class BoardMember {
  constructor(name, homeState, training) {
    this.name = name;
    this.homeState = homeState;
    this.training = training;
  }
 
  veto() {
    console.log(`No, I must disagree`);
  }
  approve() {
    console.log('You can do that!');
  }
  
}
 
 
class Teacher extends User {
  sayHello(){
    super.sayHello()
    console.log('hello')
  }
}
 
tom.sayHello()