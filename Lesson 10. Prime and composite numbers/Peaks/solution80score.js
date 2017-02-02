// A non-empty zero-indexed array A consisting of N integers is given.
// A peak is an array element which is larger than its neighbors. 
// More precisely, it is an index P such that 0 < P < N − 1,  A[P − 1] < A[P] and A[P] > A[P + 1].
// Need to divide this array into blocks containing the same number of elements.
// Every block should contain at least one peak.
// Notice that extreme elements of the blocks (for example A[K − 1] or A[K]) can also be peaks,
// but only if they have both neighbors (including one in an adjacent blocks).
// Function returns the maximum number of blocks into which the array A can be divided.
// worst-case time complexity is O(N*log(log(N)))

//80% score solution. there are errors on large arrays.
function solution(A) {
    var n = A.length, i, j
        peaks = [];
        
    for(i=1; i<n-1; i++){
        if(A[i-1]<A[i] && A[i+1] < A[i]){
            peaks.push(i);
        }
    }    
    if(peaks.length < 2) return peaks.length;
   
    var blockLength = 0,
        peakIndex = 0.
        passedBlocks = 0;
        
    // here i - is number of blocks
    for(i = peaks.length; i>0; i--){
        if(n % i != 0) continue;
        blockLength = n/i;
        passedBlocks = 0;
        
        for(j = 0; j < i; j++){
            //if peak is  earlier then end of the block
            if(peaks[peakIndex] < (j+1)*blockLength){
                passedBlocks++;
                peakIndex++;
            }
            
            //while peaks still inside current block increase index
            while(peaks[peakIndex] < (j+1)*blockLength && peakIndex < peaks.length){
                peakIndex++;
            }
        }
        if(passedBlocks === i) return i;
    }
    
    return 1;
}