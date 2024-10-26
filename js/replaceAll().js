const text = "Mr Blue has a blue house and a blue car";

const result1 = text.replaceAll('blue','red');
const result2 = text.replaceAll(/blue/g,'red');
const result3 = text.replaceAll(/blue/gi,'red');
const result4 = text.replaceAll(/blue/gi,(math)=>{
    return math.toUpperCase()
}); 
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

