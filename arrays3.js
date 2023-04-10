//Write a function that accepts an array of strings and console.logs each element using a for loop.
function forLoop(arr){
    for(let n = 0; n<arr.length; n++){
        console.log(arr[n]);
    }
}
let arr = ["Hello", "Sally","Favour", "Nkatha"];
forLoop(arr);
//Write a function that accepts an array of numbers and uses the forEach()
//method to console.log each number multiplied by 2
// let nums = [5,6,9,10,12];
// let num = [];
// function numbers(nums){
//     nums.forEach(numbers);
//     nums.push(nums * 2);
// }
// console.log(nums);
let nums=[4,6,12,10,8,3,12];
function result(nums){
nums.forEach((b)=>console.log(b*2));
}
result(nums);
//Write a function that takes in an array of numbers and
//consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function multiplication(num) {
    for (let d = 0; d < 4; d++) {
        num[d] *= 8;
      }
      num[num.length - 1] += 5;
      num[num.length - 2] += 5;
      console.log(num);
    }
    let numbers=[4,12,3,24,15,6,9,10,11,1];
    multiplication(numbers);
  //Write a function that takes in the following array and
  //use a while loop to iterate and break when the item is equal to the fourth index
  //let arrNum = [1,2,3,4,5,6,7,8,9];
  function breakAtIndexFour(arr){
      let i = 0;
      while(i<arr.length){
          if(i === 5){
              break;
          }
          console.log(arr[i]);
          i++
      }
    }
    let arrNum = [1,2,3,4,5,6,7,8,9];
    breakAtIndexFour(arrNum);
    //Write a function that takes in a an array of strings and
    //use a continue statement when the item is at the second index
    //let fruits= ['apple','plum','banana','strawberries','kiwi']
    function printFruits(array){
        for(let u = 0; u<array.length; u++){
        if(u === 2){
            continue;
        }
        console.log(array[u]);
    }
    }
    let fruits= ['apple','plum','banana','strawberries','kiwi'];
    printFruits(fruits);
    
    
    
    
    
    