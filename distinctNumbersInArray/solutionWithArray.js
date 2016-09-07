
function solution(A) {
    var n = A.length, i, tmp,
        tempArr = [],
        count = 0;
        
    for(i=0;i<n;i++){
        tmp = A[i];        
        if(tempArr[tmp] != 1){
            count++;
            tempArr[tmp] = 1;         
        }
    }    
    return count;
}