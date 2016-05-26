
//A non-empty zero-indexed array A consisting of N integers is given.
// A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A 
//(notice that the slice contains at least two elements). 
//The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] 
//divided by the length of the slice. To be precise, 
//the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).
//
// 60% score solution. perfomance test failed
function solution(A) {   
    var i, k=2, avr = 0, minAvr = Number.MAX_SAFE_INTEGER,
        minSliceIndex = 0,
        countAverage = function(arr){
            var sum = 0;
            for(var i=0;i<arr.length; i++){
                sum+=arr[i];
            }
            return sum/arr.length;
        },
        n = A.length;
   
   
    while(k<n){        
        for(i=0;i<=n-k; i++){            
            avr = countAverage(A.slice(i, i+k));           
            if(avr < minAvr) {
                minAvr = avr;               
                minSliceIndex = i;
            }
        }
        k++;
    }
    
    
    return minSliceIndex;
}