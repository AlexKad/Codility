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