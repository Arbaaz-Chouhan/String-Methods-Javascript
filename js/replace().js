const text = "Mr Blue has a blue house and a blue car";

const result1 = text.replace("blue","red");
const result2 = text.replace(/blue/g,"red");
const result3 = text.replace(/blue/gi,"red");
const result4 = text.replace( /blue/gi,(math)=>{
    return math.toUpperCase();
})
const result5 = text.replace( /blue/gi,(math)=>{
    return math.toLowerCase();
})
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);