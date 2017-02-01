// A non-empty zero-indexed array A consisting of N integers is given, represent high of the mountains.
// A peak is an array element which is larger than its neighbours. 
// More precisely, it is an index P such that 0 < P < N − 1 and A[P − 1] < A[P] > A[P + 1].
// The goal is to set the maximum number of flags on the peaks, according to certain rules.
// If you take K flags, then the distance between any two flags should be greater than or equal to K.
// Function returns maximum number of flags on the peaks
// 60% score solution. Bad perfomance
 
function solution(A) {
    var n = A.length,
        i, maxFlags = 0,
        peaks = [], 
        minDistance = n;
        
    for(i=1; i<n-1; i++){
        if(A[i-1] < A[i] && A[i+1] < A[i]){                   
            minDistance = Math.min(minDistance, peaks[peaks.length-1] - i );
            peaks.push(i);
        }
    }           
    if(minDistance >= maxFlags) return peaks.length;
     
    // check how many flags we can set
    var maxFlags = 0;
    for(i = peaks.length; i>0; i--){       
        if(checkFlags(i, peaks)){            
            maxFlags = i;
            break;
        }
    }
    
    return maxFlags;
}


function checkFlags(flags, peaks){
    var n = peaks.length;
    if(flags === 1) return true;
    
    var prev = peaks[0],
        rest = flags - 1;
    
    var i = 1;   
    while(i<peaks.length){       
        if(peaks[i] - prev >= flags){
            prev = peaks[i];
            rest--; 
        }
        if(rest === 0)  return true;
        i++;
    }    
    return false;
}