//////////////Person//////////////

class Person {
    constructor(personAttributes){
    this.name = personAttributes.name;
    this.age = personAttributes.age;
    this.location = personAttributes.location
    }
    Speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
} ;



//////////////Instructor//////////////

class Instructor extends Person{
    constructor(instructorInfo){
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    demo(){
        return `Today we are learning about ${this.favLanguage}`;
    }
    grade(){
        return `${this.name} receives a perfect score on ${this.subject}`;
    }
}



//////////////Student//////////////

class Student extends Person{
    constructor(studentInfo){
        super(studentInfo)
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.subject = studentInfo.subject;
    }
    listsSubjects(){
        return `${this.subject}`;
    }
    PRAssignment(){
        return `${this.name} has submitted a PR for ${this.subject}`;
    }
    sprintChallenge(){
        return `${this.name} has begun sprint challenge on ${this.subject}`;
    }
}



//////////////Project Manager//////////////

class ProjectManager extends Instructor{
    constructor(managerInfo){
        super(managerInfo);
        this.gradClassName = managerInfo.gradClassName;
        this.favInstructor = managerInfo.favInstructor;
    }
    standUp(){
        return `${this.name} announces to ${this.channel}, @channel standy times!​​​​​`;
    }
    debugsCode(object,subject){
        return `${object}'s code on ${subject}`;
    }
}



//////////////Objects//////////////

const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    subject: 'Math',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    channel: 69,
    favInstructor: 'John Johnes',
    gradClassName: 'web_24A',
    previousBackground: 'cook',
    className: 'web_24'

  })

  const john = new Student({
    name: 'John',
    location: 'LA',
    age: 25,
    favLanguage: 'C++',
    subject: 'English',
    specialty: 'Back-end',
    catchPhrase: `I dont have one`,
    channel: 77,
    favInstructor: 'Steve Stevenson',
    gradClassName: 'UI_04A',
    previousBackground: 'driver',
    className: 'UI_04',
  })

  const bob = new Instructor({
    name: 'Bob',
    location: 'Miami',
    age: 37,
    favLanguage: 'Java',
    subject: 'Science',
    specialty: 'Front-end',
    catchPhrase: `I like turtles`,
    channel: 20,
    favInstructor: 'Chad Smith',
    gradClassName: 'CS_17A',
    previousBackground: 'teacher',
    className: 'CS_17'
  })

  const jane = new ProjectManager({
    name: 'Jane',
    location: 'London',
    age: 27,
    favLanguage: 'Swift',
    subject: 'History',
    specialty: 'Front-end',
    catchPhrase: `I also like turtles`,
    channel: 30,
    favInstructor: 'Chad Smith',
    gradClassName: 'UX_20A',
    previousBackground: 'teacher',
    className: 'UX_20'
  });

  console.log(fred.Speak());
  console.log(bob.demo());
  console.log(bob.grade());//////
  console.log(john.listsSubjects());
  console.log(john.PRAssignment());
  console.log(john.sprintChallenge());/////^^^^^
  console.log(jane.standUp());
  console.log(jane.debugsCode());/////