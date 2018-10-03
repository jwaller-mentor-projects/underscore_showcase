import _ from "underscore";

***** Map ******* 

let foods = ["pizza", "spaghetti", "sushi", "toast"];

let foodMap = _.map(foods, type => {
  return type;
});

console.log(foodMap);

// another example
let nums = [2, 5, 9];

let numsMap = _.map(nums, num => num + 3);

console.log(numsMap);

// // Another example => object
let nums = {
  one: 1,
  two: 2,
  three: 3
};

let numsMap = _.map(nums, (num, key) => {
  // return num * 3
  return key + " piggy"
//   return `${key} piggy`;
});

console.log(numsMap);




**** Union ******
Q: What does union do?
//  A: shows all unique values

// Ex: Use for Union & Intersection
let farm = ["cow", "dog", "pig"];
let home = ["dog", "cat"];
let wild = ["wolf", "dog", "lion"];

let union = _.union(farm, home, wild);
console.log(union);

 *** Intersection ****
Q: What does intersection do?
//  A: Lists items available in ALL arrays

// // Ex :
let intersection = _.intersection(farm, home, wild);
console.log(intersection);



***** GroupBy ******** //
// // Q: What does GroupBy do?
// // A: Groups by element

// Use for GroupBy & Pluck
let places = [
  { state: "TX", city: "Dallas" },
  { state: "IL", city: "Chicago" },
  { state: "TX", city: "Austin" },
  { state: "GA", city: "Atlanta" }
];

let group = _.groupBy(places, elem => {
  return elem.state;
});

console.log(group);

***** Pluck ***** //
// // Q: what does pluck do?
// // A: grabs value of specific element

let pluck = _.pluck(places, "city");
console.log(pluck);






**** where ****
// // Looks through each value in a list, returning all that match

let movies = [
  { movie: "The Matrix", year: 1999, genre: "action" },
  { movie: "Gladiator", year: 2000, genre: "action" },
  { movie: "The Mummy", year: 1999, genre: "action" },
  { movie: "Fight Club", year: 1999 },
  { movie: "Cast Away", year: 2000 }
];

let myMovies = _.where(movies, { year: 1999, genre: "action" });
console.log(myMovies);

 ****** Contains *****
// Looks through each element to see if they all contain a specific value, returning TRUE/FALSE
let checking = _.every(movies, "year");
console.log(checking);

 *** Size ***
// // tells how many elements are in an object/array
let size = _.size(movies);
console.log(size);






 *** Compact *** //
// // Returns copy of the list with all falsy values removed

let random = [3, "cat", false, 25, 0, NaN, "dog"];
let truth = _.compact(random);
console.log(truth);




 **** Partition **** //
// // Splits list into 2 arrays, first containing elements that satisfy the argument, and the second that don't satisfy

let isEven = num => num % 2 === 0;
let evens = _.partition([1, 2, 3, 4, 5], isEven);
console.log(evens);





 *** Sample ***
// // Returns a random sample from the list;
let nums = [2, 3, 4, 5, 6];
let randoms = _.sample(nums, 2);
console.log(randoms);

***Shuffle*** //
// // Returns a shuffled copy of a given list
let shuffle = _.shuffle(nums);
console.log(shuffle);





 ***FindWhere
// // Looks through a list and lists value of FIRST match of argument

let music = [
  { artist: "The Beatles", song: "Hey Jude", year: 1968 },
  { artist: "Notorious B.I.G.", song: "Mo Money Mo Problems", year: 1997 },
  { artist: "The Beatles", song: "Get Back", year: 1970 }
];

let song = _.findWhere(music, { artist: "Notorious B.I.G." });
console.log(song);






 **** keys ****
// // returns names of keys
let nums = { one: 1, two: 2, three: 3 };
console.log(_.keys(nums));
console.log(_.values(nums));

 *** Invert ***
// Switch key/value pairings
let invert = _.invert(nums);
console.log(invert);

**** isMatch ***
// Tells if the keys/values of argument are contained in an object...returns true/false
console.log(_.isMatch(nums, { two: 2 }));
