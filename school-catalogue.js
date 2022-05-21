class School {
    constructor(name, level, numberOfStudents)
    {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(NewNumOfStudents) {
      if(typeof NewNumOfStudents !== 'number') {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
      else {
        this._numberOfStudents = NewNumOfStudents;
      }
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      let myIndex = Math.floor(substituteTeachers.length * Math.random());
      return console.log(`Substitute teacher is: ${substituteTeachers[myIndex]}`);
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents)
      this._sportsTeams = sportsTeams;
    }
  
    get sportsTeams() {
      for(let STIndex = 0; STIndex < this._sportsTeams.length; STIndex++) {
        console.log(this._sportsTeams[STIndex]);
      }
    }
  }
  
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  console.log(lorraineHansbury);
  console.log('\n');
  lorraineHansbury.quickFacts();
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E. Smith', 150, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log('\n');
  console.log(alSmith);
  
  console.log('\n');
  alSmith.sportsTeams;
  alSmith.quickFacts();
  
  console.log('\n');
  alSmith.numberOfStudents = 200;
  console.log(alSmith);
  
  console.log('\n');
  alSmith.quickFacts();
  School.pickSubstituteTeacher(['James Brown', 'William Smith', 'Natasha Mishra', 'Julie Cohen', 'Jason Terry', 'Mira Sethi']);
  
  console.log('\n');
  alSmith.numberOfStudents = '450';
  console.log(alSmith);
  
  console.log('\n');
  alSmith.quickFacts();
  
  
  
  