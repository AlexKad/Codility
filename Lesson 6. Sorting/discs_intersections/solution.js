// We draw N discs on a plane. The discs are numbered from 0 to N − 1.
// A zero-indexed array A of N non-negative integers, specifying the radiuses of the discs, is given. 
// The J-th disc is drawn with its center at (J, 0) and radius A[J].
// We say that the J-th disc and K-th disc intersect if J ≠ K 
// and the J-th and K-th discs have at least one common point.
// Function returns the number of (unordered) pairs of intersecting discs.

// 81% score solution. has perfomance issues.  
// TODO: fix perfomance
function solution(A) {
    var intersectNum = 0,
        n = A.length,
        tuples = [],
        i, j;
        
    for(i=0; i<n; i++){
        tuples.push([i-A[i], i+A[i]]);
    }
    
    tuples.sort(function(a,b) { return a[0] - b[0]; })
    
    //console.log(tuples);
    
    for(i = 0; i<n; i++){
       for(j = i+1; j<n; j++){
           //if the next tuple starts earlier then previous ends
           if( tuples[j][0] <= tuples[i][1]){
               intersectNum ++;
               if(intersectNum > 10000000) return -1;
           }
       }        
    }
    
    return intersectNum;
}