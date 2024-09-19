//challenge 1 (array challange)

const arr = [1, 2, 3, 4, 5];
// adding 6 to the beginning of the array 
arr.unshift(6);
//adding zero to the end of the array
arr.push(0);
//now we will reverse the array 
arr.reverse();
console.log(arr);

//challange 2 

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Combining arr1 and arr2
let arr3 = arr1.concat(arr2);

// Removing one occurrence of 5 to make it continuous
arr3 = arr3.filter((num, index) => !(num === 5 && index === arr3.indexOf(5)));

console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//challenge 3 

