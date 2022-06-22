let result = 0;
let resultTwo = 0;

class Car {
  constructor(numOfRims, engineCapacity, color) {
    this.numOfRims = numOfRims;
    this.engineCapacity = engineCapacity;
    this.color = color;
  }
  printDetiles() {
    return `${this.numOfRims}${this.engineCapacity}${this.color}`;
  }

  static getCarsEC(carNumOne, carNumTwo) {
    carNumOne.forEach((enging) => {
      result = enging.engineCapacity;
    //   console.log(result);
    });

      carNumTwo.forEach((enging) => {
        resultTwo = enging.engineCapacity;
    //   console.log(resultTwo);
      });
      
      if (result > resultTwo) {
          console.log(result);
          return result;

      }
      else {
          console.log(resultTwo);
          return resultTwo;
          
      }
  }
}

// ONE

class Bus extends Car {
  constructor(numOfRims, engineCapacity, color, busType) {
    super(numOfRims, engineCapacity, color);
    this.busType = busType;
  }
  printDetiles() {
    return `${this.printDetiles}${this.busType}`;
  }
}

const busTypeOne = new Bus(8, 10000, "Red", "Big-Bus");
// console.log(busTypeOne);

// TWO

class Track extends Car {
  constructor(numOfRims, engineCapacity, color, CarType) {
    super(numOfRims, engineCapacity, color);
    this.CarType = CarType;
  }
  printDetiles() {
    return `${this.printDetiles}${this.CarType}`;
  }
}

const tracksTypes = new Track(6, 7000, "black", "GMC");
// console.log(tracksTypes);

let carArrayOne = [busTypeOne];
let carArrayTwo = [tracksTypes];
// console.log(carArray);

Car.getCarsEC(carArrayOne, carArrayTwo);

// THREE

class Van extends Car {
  constructor(numOfRims, engineCapacity, color, CarType) {
    super(numOfRims, engineCapacity, color, CarType);
    this.CarType = CarType;
  }
  printDetiles() {
    return `${this.printDetiles}${this.CarType}`;
  }

  firstAndLastNameToUpperCase() {
    let nameString =
      this.CarType.charAt(0).toUpperCase() +
      this.CarType.slice(1, this.CarType.length - 1) +
      this.CarType.charAt(this.CarType.length - 1).toUpperCase();
    return nameString;
  }

  get results() {
    return this.firstAndLastNameToUpperCase;
  }
}
   