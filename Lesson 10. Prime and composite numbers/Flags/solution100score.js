// A non-empty zero-indexed array A consisting of N integers is given, represent high of the mountains.
// A peak is an array element which is larger than its neighbours. 
// More precisely, it is an index P such that 0 < P < N − 1 and A[P − 1] < A[P] > A[P + 1].
// The goal is to set the maximum number of flags on the peaks, according to certain rules.
// If you take K flags, then the distance between any two flags should be greater than or equal to K.
// Function returns maximum number of flags on the peaks
// O(N) solution

function solution(A) {
    var n = A.length,
        i,
        peaksCount = 0,
        peaks = new Array(n).fill(0);
    
    for(i=n-2; i>0; i--){
        if(A[i+1] < A[i] && A[i-1] < A[i]){
            peaks[i] = 1;
            peaksCount++;
        }        
    }
    if(peaksCount<2) return peaksCount;
    
    var nextPeak = new Array(n).fill(0);
        nextPeak[n-1] = -1;
        
    for(i = n-2; i > -1; i--){
        if(peaks[i]) nextPeak[i] = i;
        else nextPeak[i] = nextPeak[i+1];
    }    
    
    var maxFlag = 0,
        pos = 0,
        num = 0;
        i=1;
        
    while(i*(i-1) <= n ){
        pos = 0;
        num = 0;
        while(pos<n && num < i){
            pos = nextPeak[pos];
            if(pos==-1) break;
            num++;
            pos+=i;
        }
        maxFlag = Math.max(maxFlag, num);
        i++;
    }
   
    return maxFlag;
}