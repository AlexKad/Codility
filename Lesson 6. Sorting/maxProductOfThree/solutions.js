// A non-empty zero-indexed array A consisting of N integers is given.
// The product of triplet (P, Q, R) equates to A[P] * A[Q] * A[R] (0 ≤ P < Q < R < N).
// returns the maximum 
// expected worst-case time complexity is O(N*log(N));
// expected worst-case space complexity is O(1)

function solution(A) {
    var n = A.length;
    
    if(n<3) return 0;    
    
    A.sort(function(a,b){ return a-b; });

    //in case when there are negative numbers in array
    return Math.max(A[0]*A[1]*A[n-1], A[n-3]*A[n-2]*A[n-1]);
}