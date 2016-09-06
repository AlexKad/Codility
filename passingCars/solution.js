
// A non-empty zero-indexed array A consisting of N integers is given. 
//The consecutive elements of array A represent consecutive cars on a road.
// Array A contains only 0s and/or 1s:
//       0 represents a car traveling east,
//       1 represents a car traveling west.
// The goal is to count passing cars.
// We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, 
//                     is passing when P is traveling to the east and Q is traveling to the west.
//
//  60% score solution. timeout errors on large arrays
function solution(A) {
   var n = A.length, i,k=0,
    pairs = 0;
    
    if(n > 1000000000) return -1;
    
    for(i=0; i<n; i++){
        if(A[i] === 0){
            k=i+1;
            while(k<n){
                if(A[k] === 1){
                    pairs++;
                }
                k++;
            }
        }
    }
    
    return pairs;
}