//You are given N counters, initially set to 0, and you have two possible operations on them:
//
// increase(X) − counter X is increased by 1,
// max counter − all counters are set to the maximum value of any counter.
// A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

// if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
// if A[K] = N + 1 then operation K is max counter.
//
// 100% score solution

function solution(N, A) {   
    var j, i, x,
        len = A.length,
        lastMax = 0,
        max = 0, 
        counters = new Array (N).fill(0),
        n1 = N + 1;
    
    for (j=0; j < len; j++){
        x = A[j];
        if(x < n1){
            i = x - 1;
            if (counters[i] < lastMax) counters[i] = lastMax; //set all counters to maximum       
            counters[i]++; //increase            
            if (max < counters[i]) max = counters[i]; //update max           
        } else {
            lastMax = max;
        }
    }
    
    for(j = 0; j < N; j++){
      if (counters[j] < lastMax) counters[j] = lastMax;
    }    
    return counters;
}