
// ES5
var name5 = "Fred Bob"
var age5 = 23;
name5 = "Burt Larry"
console.log(name5)

// ES6
let name6 = "Dean Barry"
let age6 = 34
name6 = "Gordon Larry"
console.log(name6)

// ES5
function driversLicense5(passedTest) {
  if (passedTest) {
    console.log(firstName)
    var firstName = "John"
    var yearOfBirth = 1990
  }
  console.log(firstName + ", born in " + yearOfBirth + " can drive a car")
}

driversLicense5(true)

// ES6
function driversLicense6(passedTest) {
  let firstName
  const yearOfBirth = 1990
  if (passedTest) {
    firstName = "John"
  }
  console.log(firstName + ", born in " + yearOfBirth + " can drive a car")
}

driversLicense6(true)

var i = 23

for (var i = 0; i < 5; i++) {
  console.log(i)
}
console.log(i)

// IIFE
{
  const a = 1
  let b = 2
}
//console.log(a + b)

// Strings

let firstName = "John"
let lastName = "Smith"
const yearBirth = 1990

function calcAge(year) {
  return 2016 - year
}

console.log(`This is ${firstName} ${lastName} with age ${calcAge(yearBirth)}`)

// Arrow fns

const years = [1990, 1965, 1968, 2019]

// ES5
var ages5 = years.map(function (el) {
  return 2016 - el
})
console.log(ages5)

// ES6
let ages6 = years.map(el => 2020 - el)
console.log(ages6)

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}`)
console.log(ages6)

ages6 = years.map((el, index) => {
  `Age element ${index + 1}: ${2020 - el}`
  const now = new Date().getFullYear()
  const age = now - el
  return `Age element ${index + 1}: ${age}`
})
console.log(ages6)

// Arrows 2

// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe() {
    var self = this
    document.querySelector(".green").addEventListener("click", function () {
      var str = "This is box number " + self.position + " and it is " + self.color
      alert(str)
      console.log(this)
      console.log(self)
    })
  }
}
//box5.clickMe()

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str = "This is box number " + this.position + " and it is " + this.color
      alert(str)
      console.log(this)
    })
  }
}
box5.clickMe()


function Person(name) {
  this.name = name
}

var friends = ["Bob", "Burt", "Larry"]

// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(function (el) {
    return this.name + " is friends with " + el
  }.bind(this))
  console.log(arr)
}

// ES6
Person.prototype.myFriends6 = function (friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`)
  console.log(arr)
}

new Person("John").myFriends5(friends)
new Person("Barry").myFriends6(friends)

// Destructuring

// ES5
var john = ["John", 26]
var name5 = john[0]
var age5 = john[1]

// ES6
const [name, age] = john
console.log(name)
console.log(age)

const obj = {
  first: "Fred",
  last: "Bob"
}

const { first, last } = obj
console.log(first)
console.log(last)

const { first: a, last: b } = obj
console.log(a)
console.log(b)

function calcAgeRetire(year) {
  const age = new Date().getFullYear() - year
  return [age, 65 - age]
}

const [ageAgain, retirement] = calcAgeRetire(1968)
console.log(ageAgain)
console.log(retirement)

// Arrays

const boxes = document.querySelectorAll(".box")

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes)
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue"
})

// ES6
Array.from(boxes).forEach(cur => cur.style.backgroundColor = "dodgerblue")

// ES5
// for (var i = 0; i < boxesArr5.length; i++) {
//   if (boxesArr5[i].className === "box blue") {
//     continue
//   }
//   boxesArr5[i].textContent = "changed to blue"
// }

// ES6
const boxesArr6 = Array.from(boxes)
for (const cur of boxesArr6) {
  if (!cur.className.includes("blue")) {
    cur.textContent = "<<changed to blue>>"
  }
}

// ES5
var ages = [2, 8, 6, 9, 10, 21, 67, 14]

var full = ages.map(function (cur) {
  return cur >= 18
})
console.log(full)

console.log(ages[full.indexOf(true)])

// ES6
console.log(ages.findIndex(cur => cur >= 18))
console.log(ages.find(cur => cur >= 18))

// Spread

function addFourAges(a, b, c, d) {
  return a + b + c + d
}

var sum1 = addFourAges(10, 20, 30, 40)
console.log(sum1)

// ES5
var ages = [10, 20, 30, 40]
var sum2 = addFourAges.apply(null, ages)
console.log(sum2)

// ES6
const sum3 = addFourAges(...ages)
console.log(sum3)

const familySmith = [ "Fred", "Bob", "Burt" ]
const familyGregg = [ "A", "B", "C" ]
const bigFamily = [...familySmith, "zzz", ...familyGregg]
console.log(bigFamily)

const h = document.querySelector("h1")
const boxes2 = document.querySelectorAll(".box")
const all = [h, ...boxes]

//Array.from(all).forEach( cur => cur.style.color = "purple" )
all.forEach( cur => cur.style.color = "purple" )
