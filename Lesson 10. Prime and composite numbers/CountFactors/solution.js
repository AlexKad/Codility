// A positive integer D is a factor of a positive integer N 
//                         if there exists an integer M such that N = D * M.
// Given a positive integer N, 
// Function returns the number of its factors.
// worst-case time complexity is O(sqrt(N))

function solution(N) {
    var i = 0, numOfFactors = 0;
    
    while( i * i <= N){
        if(N % i === 0){
            if( N/i == i) numOfFactors ++; // e.g. case 16/4 = 4. Only 1 factor
            else numOfFactors += 2;
        }
        i++;
    }    
    return numOfFactors;
}