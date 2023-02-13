//GET API to do addition of list of numbers and return their sum

function addNumbers(arr){
    let sum = 0;
    for(let a of arr){
        sum +=a;
    }
      return sum;
}
console.log(addNumbers([3,4,2,9]))

//Get API to do multiplication of an array of numbers and return the product

function multiplyNumbers(arr){
    let product = 1;
    for(let b of arr){
        product *= b;
    }
      return product;
}
console.log(multiplyNumbers([3,4,5,6,2]))