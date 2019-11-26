function sum(arr, n) {
    // Only change code below this line
   if(n<=0){ 
     return arr[0]; //base case for when it stops opperating
   }else {
     return sum(arr, n-1) + arr[n] //recursive case
   }
    // Only change code above this line
  }
  