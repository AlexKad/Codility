//given a zero-indexed array A consisting of N integers
//N is an integer within the range [0..100,000];
//each element of array A is an integer within the range [−1,000,000..1,000,000].
//returns the number of distinct values in array A

function solution(A) {
    var n = A.length, i,
        counter = 0; 
    
    A.sort(function(a, b){
        return a - b;    
    });
     
    for (i=1; i <= n; i++){
        if (A[i] != A[i - 1]){
            counter++;   
        }
    }
     
    return counter;
}