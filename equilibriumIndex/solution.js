// A non-empty zero-indexed array A consisting of N integers is given. Array A represents numbers on a tape.
// Any integer P, such that 0 < P < N, splits this tape into two non-empty parts: A[0], A[1], ..., A[P − 1] and A[P], A[P + 1], ..., A[N − 1].
// The difference between the two parts is the value of: |(A[0] + A[1] + ... + A[P − 1]) − (A[P] + A[P + 1] + ... + A[N − 1])|
// In other words, it is the absolute difference between the sum of the first part and the sum of the second part.
//
//score 82%
//failed tests : extreme_max , large_long_sequence_of_ones, large_long_sequence_of_minus_ones
function solution(A) {
    // write your code in JavaScript (Node.js 4.0.0)
    var i,j, sum1 = 0, sum2 = 0,
        n = A.length;       
    for(i=0;i<n; i++){
        sum1 = 0; 
        sum2 = 0;        
        for(j=0;j<n; j++){
            if(j<i){                
                sum1 = sum1+ A[j];
            }
            if(j>i){                 
                sum2 = sum2 + A[j];
            }
        }       
        if(sum1 === sum2) {  return i }
    }
    return -1;
}