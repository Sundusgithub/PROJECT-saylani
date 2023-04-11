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