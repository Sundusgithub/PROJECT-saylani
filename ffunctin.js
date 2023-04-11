//PROJECT#01:
//Write a function that creates a closure and returns a function that can add a specific number to any number passed to it. For example, if the closure is created with 5, the returned function should add 5 to any number passed to it.
  // function addNum(num) {
  //   return function (value) {
  //     return num + value;
  //   }
  // }
  
  // // create a closure with 5
  // const addFive = addNum(5);
  
  // // add 5 to any number passed to it
  // console.log(addFive(10)); //  15
  // console.log(addFive(20)); //  25

  //PROJECT#02:
  //Write a recursive function that searches an array for a specific value. The function should return true if the value is found, and false if it is not. You can assume that the array is not nested.
  function searchArray(arr, val) {
    // base case: if the array is empty, return false
    if (arr.length === 0) {
      return false;
    }
    
    // recursive case: if the first element of the array is equal to the value, return true
    if (arr[0] === val) {
      return true;
    }
    
    // recursive case: if the first element of the array is not equal to the value, search the rest of the array recursively
    return searchArray(arr.slice(1), val);
  }
  
  // example usage
  const arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3)); // true
  console.log(searchArray(arr, 8)); // false

  //PROJECT#03 :
  //Write a function that adds a new paragraph element to the bottom of an HTML document. The function should take a string argument that will be used as the text content of the new paragraph element.
  
  