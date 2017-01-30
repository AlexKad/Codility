// A non-empty zero-indexed array A consisting of N integers is given.
// A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.
// The sum of double slice (X, Y, Z) is the total of 
// A[X + 1] + A[X + 2] + ... 
//     + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... 
//                                       + A[Z − 1].
// Function returns the biggest sum of any double slice

function solution(A) {   
  
  var n = A.length, i, 
    max_end_arr = new Array(n).fill(0),  // array, where arr[i] is sum [0 .. i] elements of A
    max_start_arr = new Array(n).fill(0); // array, where arr[i] is sum of [i to n-1 ] elements of A        
        
  if(n == 3) return 0;    
  
  for(i = 1;i < n-1; i++){
    max_end_arr[i] = Math.max(0, max_end_arr[i-1] + A[i]);
  }

  for(i = n-2; i > 0; i--){
    max_start_arr[i] = Math.max(0, max_start_arr[i+1]+A[i]);
  }

  var max_slice = 0;
  for(i = 1; i <A.length-1; i++){
    max_slice = Math.max(max_slice, max_end_arr[i-1] + max_start_arr[i+1]);
  }
  return max_slice;
}
