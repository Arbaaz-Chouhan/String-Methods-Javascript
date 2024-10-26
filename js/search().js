const a  = "My name is Arbaaz  is chouhan";
const b1 = a.search("is");
const b2 = a.search(/Ar/)
const b3 = a.search(/ch/i)
const b4 = a.search("w");

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);