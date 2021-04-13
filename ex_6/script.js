function random(min, max) {
  return Math.random()*(max - min) + min; // сделал интервал от min до max
}

console.log(random(2, 4)); // проверил, работает
