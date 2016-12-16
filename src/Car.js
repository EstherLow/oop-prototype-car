function Car(make, model, year, color, seats, passengers) {
  this.make = make;
  this.model = model;
  this.year = year;
  // TODO: add color, seats here
  this.color = color;
  this.seats = seats;
  this.running = false;
  this.owner = 'manufacturer';
  this.previousOwners = [];
  this.sell = function (newOwner) {
    this.previousOwners.push(this.owner)
    this.owner = newOwner
  };
  this.paint = function (newColor) {
    this.color = newColor
    console.log(this.color);
  };
  this.passengers = passengers || [];
}

Car.prototype.start = function() {
  if(this.running === false){
   return this.running = true;
 }
 };

 Car.prototype.off = function() {
   if(this.running === true) {
    return this.running = false;
  }
  };

  Car.prototype.driveTo = function (destination) {
    if (this.running === true) {
      console.log("Driving to " + destination);
      return true;
    } else {
      return false;
    }
  }

Car.prototype.park = function () {
  if (this.running === false) {
    console.log("Parked!");
    return true;
  } else {
    return false;
  }
}


Car.prototype.pickUp = function (name) {
  availSeats = this.seats - 1
  if ((this.running === true) && (availSeats > this.passengers.length) ){
    console.log("Driving to pick up " + name);
    this.passengers.push(name);
    console.log(this.passengers);
    return true;
  } else {
    return false;
  }
}

Car.prototype.dropOff = function (name) {
  //console.log(this.passengers);
  for (var i = 0; i < this.passengers.length; i++){
    if ((this.passengers[i] === name) && (this.running === true)) {
      console.log("Driving to drop off " + name);
      this.passengers.splice(i, 1);
      //console.log(this.passengers);
      return true;
    } else {
      return false
    }
  }
}

Car.prototype.passengerCount = function () {
  if (this.passengers.length !== 0) {
      return this.passengers.length
        } else {
  return passengerCount = 0;
    }
}




// Car.prototype.paint = function(newColor) {
//   return newColor;
// };

// export the Car function for use in node //
// this is required for the test.js to load this //
module.exports = Car;
