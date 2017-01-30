
// A non-empty zero-indexed array A consisting of N integers is given. 
//The consecutive elements of array A represent consecutive cars on a road.
// Array A contains only 0s and/or 1s:
//       0 represents a car traveling east,
//       1 represents a car traveling west.
// The goal is to count passing cars.
// We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, 
//                     is passing when P is traveling to the east and Q is traveling to the west.
// The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.
//

//  60% score solution. timeout errors on large arrays
function solution(A) {
   var n = A.length, i,k=0,
    pairs = 0;    
    
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

// 100% solution with complexity O(n)
function bestSolution(A) {
    var n = A.length, i,
        eastCounter =0,
        passingCars = 0;
        
    for(i = 0; i<n; i++){
        if(A[i] === 1){
            passingCars += eastCounter;
            if(passingCars > 1000000000){
                return -1;
            }
        }
        else{
            eastCounter++;
        }
    }
    return passingCars;
}
