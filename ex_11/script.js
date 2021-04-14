function extractCurrencyValue(str) {
   return str.slice(1);
}
   
console.log(extractCurrencyValue('$300'));
console.log(extractCurrencyValue('%123')); // несложно
