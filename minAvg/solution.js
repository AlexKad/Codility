
//A non-empty zero-indexed array A consisting of N integers is given.
// A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A 
//(notice that the slice contains at least two elements). 
//The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] 
//divided by the length of the slice. To be precise, 
//the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).
//
// 80% score solution. perfomance test failed
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
     var i, avr = 0,
        minAvr = Number.MAX_SAFE_INTEGER,
        minSliceIndex = 0, 
        sum1, sum2,       
        n = A.length;
   
    if(n <= 2 || n > 100000) return 0;
          
    for(i = 2;i < n; i++){            
        var sum1 = (A[i - 1] + A[i]) / 2;
        var sum2 = (A[i - 2] + A[i - 1] + A[i]) / 3;
        
        if (sum1 < minAvr){
            minSliceIndex = i - 1;
            minAvr = sum1;
        }
        if (sum2 < minAvr){
            minSliceIndex = i - 2;
            minAvr = sum2;
        }
    }    
    return minSliceIndex;
}