// A zero-indexed array A consisting of N integers is given.
// The dominator of array A is the value that occurs in more than half of the elements of A.
// Function returns index of any element of array A in which the dominator of A occurs.
// The function should return −1 if array A does not have a dominator.
// complexity O(n)
function solution(A) {
    var n = A.length,
        leader, size=0,
        i, index = -1;
        
    for(i=0; i<n; i++){
        if(size == 0){
            leader = A[i];
            index = i;
            size++;
        }
        else{
             if(A[i] === leader){
                 size++;
                 index = i;
             }
             else size--;
        }        
    }
    
    //final check if leader occurs in array more then n/2 times
    if(A.filter(function(el){return el === leader}).length > n/2){
        return index;
    }else{
        return -1; //there is no leader in array
    }
}