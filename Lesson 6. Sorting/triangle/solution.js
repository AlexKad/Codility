// A zero-indexed array A consisting of N integers is given.
// A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:
// A[P] + A[Q] > A[R],
// A[Q] + A[R] > A[P],
// A[R] + A[P] > A[Q].
// returns 1 if there exists a triangular triplet for this array and returns 0 otherwise
// 100% score solution

function solution(a) {
   var n = a.length,
       i, p,q,r;    
   
   if(n<3) return 0;
   
   //sort descending
   a.sort(function(a,b){ return b-a });
   
   for(i=0; i<n-2; i++){
       p=i; q=i+1; r=i+2;
       
       if(a[p] + a[q] > a[r] &&
          a[q] + a[r] > a[p] &&
          a[p] + a[r] > a[q])
          return 1;            
   }
   return 0;
}