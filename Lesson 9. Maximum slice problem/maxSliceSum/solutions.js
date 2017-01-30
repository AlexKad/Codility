
// A non-empty zero-indexed array A consisting of N integers is given. 
// A pair of integers (P, Q), such that 0 ≤ P ≤ Q < N, is called a slice of array A.
// The sum of a slice (P, Q) is the total of A[P] + A[P+1] + ... + A[Q].
// Function returns the maximum sum of any slice of A.

function solution(A) {
    let n = A.length,
        max_slice = A[0],
        max_ending = A[0],
        i;
        
    for(i = 1; i < n; i++){         
        max_ending = Math.max(A[i], max_ending + A[i]);
        max_slice = Math.max(max_slice, max_ending);
    }
    
    return max_slice;
}