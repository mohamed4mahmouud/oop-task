function Person(fullname, money, sleep, health) {
  this.fullname = fullname;
  this.money = money;
  this.sleepMood = sleep;
  this.healthRate = health;

  this.sleep = function (hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else if (hours > 7) {
      this.sleepMood = "lazy";
    }
  };
  this.eat = function (meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  };

  this.buy = function (items) {
    this.money -= items * 10;
  };
}

const user1 = new Person("Mohamed", 100, "neutral", 50);
user1.sleep(8);
user1.eat(2);
user1.buy(3);
console.log(user1);

//class
class Person {
  constructor(fullName, money, sleep, health) {
    this.fullname = fullName;
    this.money = money;
    this.sleepMood = sleep;
    this.healthRate = health;
  }
  sleep(hours) {
    if (hours === 7) {
      this.sleepMood = "Happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else if (hours > 7) {
      this.sleepMood = "lazy";
    }
  }

  eat(meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else {
      this.healthRate = 50;
    }
  }

  buy(items) {
    this.money -= items * 10;
  }
}
const user = new Person("mohamed", 200, "lazy", 50);
user.buy(2);
user.sleep(3);
user.eat(1);
console.log(user);

//OLOO
const personMethods = {
  sleep: function (hours) {
    if (hours === 7) {
      this.sleepMood = "happy";
    } else if (hours < 7) {
      this.sleepMood = "tired";
    } else {
      this.sleepMood = "lazy";
    }
  },

  eat: function (meals) {
    if (meals === 3) {
      this.healthRate = 100;
    } else if (meals === 2) {
      this.healthRate = 75;
    } else if (meals === 1) {
      this.healthRate = 50;
    }
  },

  buy: function (items) {
    this.money -= items * 10;
  },
};

function createPerson(name, money, sleepMood, healthRate) {
  const person = Object.create(personMethods);
  person.fullName = name;
  person.money = money;
  person.sleepMood = sleepMood;
  person.healthRate = healthRate;
  return person;
}

const user3 = createPerson("Mohamed", 200, "neutral", 70);
user3.sleep(7);
user3.eat(1);
user3.buy(4);
console.log(user3);

//Fcatory
function createPersonFactory(name, money, sleepMood, healthRate) {
  return {
    fullName: name,
    money: money,
    sleepMood: sleepMood,
    healthRate: healthRate,

    sleep: function (hours) {
      if (hours === 7) {
        this.sleepMood = "happy";
      } else if (hours < 7) {
        this.sleepMood = "tired";
      } else {
        this.sleepMood = "lazy";
      }
    },

    eat: function (meals) {
      if (meals === 3) {
        this.healthRate = 100;
      } else if (meals === 2) {
        this.healthRate = 75;
      } else if (meals === 1) {
        this.healthRate = 50;
      }
    },

    buy: function (items) {
      this.money -= items * 10;
    },
  };
}

const user4 = createPersonFactory("Mohamed", 50, "tired", 90);
user4.sleep(6);
user4.eat(2);
user4.buy(1);
console.log(user4);
