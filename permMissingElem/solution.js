// A zero-indexed array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.
// Your goal is to find that missing element.
//
//100% score solution
function solution(A) {
    var n = A.length,
    sum = (n+1)*(n+2)/2;
    
    while(n>0){
        sum-=A[n-1];
        n--;
    }
    return sum;
}