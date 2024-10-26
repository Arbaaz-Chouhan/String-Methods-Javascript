const text  = "The rain is SPAIN stays mainaly in the plain";
const res1 =  text.matchAll(/is/g);
const res2 =  text.matchAll(/ain/g);
const res3 =  text.matchAll(/ain/gi);

console.log([...res1]); 
console.log([...res2]);
console.log([...res3]);