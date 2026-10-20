const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currentval) {
//     console.log(`acc:${acc} and currentval: ${currentval}`)
//     return acc + currentval
// },4 )

const myTotal = myNums.reduce((acc,curr) => acc+curr, 0)   //smartcode likhne ka tarika hai

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 15999
    }
]

const pricetopay= shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(pricetopay);