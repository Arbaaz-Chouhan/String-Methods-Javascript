const sentence1 = "Hello I am Arbaaz chouhan";
sentence2 = sentence1.includes("I");
sentence3 = sentence1.includes("am");
sentence4 = sentence1.includes("chouhan");
sentence5 = sentence1.includes("he");
sentence6 = sentence1.includes("HA");

console.log(sentence2);    //output : true
console.log(sentence3);    //output : true
console.log(sentence4);    //output : true
console.log(sentence5);    //output : false
console.log(sentence6);    //output : false