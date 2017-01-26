
// A non-empty zero-indexed array A consisting of N integers is given.
// The leader of this array is the value that occurs in more than half of the elements of A.
// An equi leader is an index S such that 0 ≤ S < N − 1 and two sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ...// , A[N − 1] have leaders of the same value.
// Function returns the number of equi leaders.

function solution(A) {
    var len = A.length,
        i = 0,
        size = 0,
        leader = null,
        leaderCount = 0; 
    
    for (i = 0; i < len; i++) {
        if (size === 0) {
            size++;
            leader = A[i];            
        } else {
            (leader === A[i]) ? size++ : size--;
        }
    }
 
    //check if it is real leader
    for (i = 0; i < len; i++) {
        if (A[i] === leader) {
            leaderCount++;
        }
    }
 
    if (leaderCount <= len / 2) {
        return 0; //there are no leaders in array
    }
 
    //now find equi leaders
    var leaderLeftCount = 0,
        indexCount = 0;
        
    for (i=0; i < len - 1; i++) {
        var lenLeft = (i + 1);
        var lenRight = len - lenLeft;
        if (A[i] === leader) {
            leaderCount--;
            leaderLeftCount++;
        }
        if (leaderLeftCount > (lenLeft / 2) && leaderCount > (lenRight / 2)) {
            indexCount++;
        }
    }
    return indexCount;
}