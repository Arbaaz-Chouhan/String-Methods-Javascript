const text = "My Name is Arbaaz  Chouhan My Name is Arbaaz Chouhan " ;
const res1 = text.match("is");
const res2 = text.match(/is/g);
const res3 = text.match(/ar/gi);
const res4 = text.match("g");

console.log(res1);
console.log(res2);
console.log(res3);
console.log(res4);