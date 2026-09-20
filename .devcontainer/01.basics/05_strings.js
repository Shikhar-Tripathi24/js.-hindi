const name ="shikhar"
const repoCount = 50

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shikhar-sc')


console.log(gameName[0]);
console.log(gameName[1]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherSting = gameName.slice(-8,4)
console.log(anotherSting);

const newStringOne = "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://shikhar.com/shikhar%234tripathi"
console.log(url.replace('%234','='))
console.log(url.includes('shikhar'))

const str = "The quick brown fox jumps over the lazy dog.";

const words = str.split(" ");
console.log(words[3]);
// Expected output: "fox"

const chars = str.split("");
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]

console.log(gameName.split('-'))