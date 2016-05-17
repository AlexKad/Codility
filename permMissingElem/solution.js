// score 100%
function solution(A) {
    var n = A.length,
    sum = (n+1)*(n+2)/2;
    
    while(n>0){
        sum-=A[n-1];
        n--;
    }
    return sum;
}