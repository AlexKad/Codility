
//given three integers A, B and K
// returns the number of integers within the range [A..B] that are divisible by K, i.e.:
//     { i : A ≤ i ≤ B, i mod K = 0 }
//
//62% score solution
function solution(A, B, K) {  
   var counters = 0,i;   
   for(i=A; i<=B; i++){
       if(i%K === 0) counters++;
   }   
   return counters;
}

// 100% solution
function solution(A, B, K) {
    var offsetForLeftRange = 0;
    if ( A % K == 0) { ++offsetForLeftRange; }

    return  Math.trunc(B/K) - Math.trunc(A/K) + offsetForLeftRange; // trunc выделяет целую часть от деления
}
