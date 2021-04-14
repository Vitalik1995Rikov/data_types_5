function checkSpam(str) {
   let newStr = str.toLowerCase();
   if (newStr.includes('xxx') || newStr.includes('viagra')) {
      return true;
   } else {
      return false;
   }
}

console.log(checkSpam('free xxx')); //тру
console.log(checkSpam('buy ViAgRA now'));//тру
console.log(checkSpam('buy ViAgR now'));// фолс
// несложно , все понятно