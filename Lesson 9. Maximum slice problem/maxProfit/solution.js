// a zero-indexed array A consists of N integers 
// containing daily prices of a stock share for a period of N consecutive days.
// If a single share was bought on day P and sold on day Q, where 0 ≤ P ≤ Q < N,
// then the profit of such transaction is equal to A[Q] − A[P], provided that A[Q] ≥ A[P].
// Function returns the maximum possible profit from one transaction during this period.
// The function should return 0 if it was impossible to gain any profit.

function solution(A) {
     var n = A.length, 
         max = 0, 
         i, maxProfit = 0;
     
     for(i = n - 1; i>=0; i--){
        max = Math.max(max, A[i]);
        maxProfit = Math.max(maxProfit, max - A[i]);
     }     
     return maxProfit;
}