// immeddiately invoked function expression (IIFE)
 //global scope ke pollution se problem hoti hai kaibaar toh  us global scope ke variable ya declaration ke pollution lo hatane ke liye iifi ka use hota jhai kaibaar///

(function chai(){     ///named  IIFE
    console.log(`DB CONNECTED`);
})();

(  (name)=> {
    console.log(`DB CONNECTED TWO ${name}`)
})(`shikhar`)   



