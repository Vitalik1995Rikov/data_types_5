function randomInteger(min, max) {
   let a = Math.random()*(max - min) + min; // 
   return a.toFixed();// просто округлил
}

console.log(randomInteger(3, 7)); // 
