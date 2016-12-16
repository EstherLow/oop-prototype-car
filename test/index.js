// load all specs for testing

require('./carTest');

function Car (make, model, year, color, seats) {
  this.make = make
  this.model = model
  this.year = year
  this.color = color
  this.seats = seats
  this.previousOwners = []
  this.owner = 'manufacturer'
  this.running = false
  this.sell = function (newOwner) {
    this.previousOwners.push(this.owner)
    console.log(this.previousOwners);
    this.owner += newOwner
  }
  this.paint = function (newColor) {
    this.color += newColor
    console.log(this.color);
  }

}
