function count(obj) {
  let count = 0;
  for (key of Object.keys(obj)) {
    count++;
  }
  return count;
}

let user = {
  name: 'John',
  age: 30,
  name2: 'John'
};

alert(count(user));