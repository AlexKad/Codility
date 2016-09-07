//given a zero-indexed array A consisting of N integers
//N is an integer within the range [0..100,000];
//each element of array A is an integer within the range [−1,000,000..1,000,000].
//returns the number of distinct values in array A

function solution(A) {
    var n = A.length, i, tmp,
        tempArr = [],
        count = 0;
        
    for(i=0;i<n;i++){
        tmp = A[i];        
        if(tempArr[tmp] != 1){
            count++;
            tempArr[tmp] = 1;         
        }
    }    
    return count;
}