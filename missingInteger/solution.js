//given a non-empty zero-indexed array A of N integers
// returns the minimal positive integer (greater than 0) that does not occur in A.
// 100% score solution

function solution(A) {  
    var n = A.length,
        min = 1, i,
        sorted = A.sort(function(a,b){return a-b;}),
        max = sorted[n-1];        
      
    for(i=0; i<n; i++){
       if(sorted[i] == min){ min++; }
    }    
    return min;    
}