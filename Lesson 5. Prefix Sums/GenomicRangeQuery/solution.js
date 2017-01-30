//The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters.
//There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. 
//The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained 
//in the DNA sequence between positions P[K] and Q[K] (inclusive).
//Each nucleotide has an impact factor, which is an integer.
// Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. 
//
// 100% score solution
function solution(S, P, Q) {
    var n = S.length,
        m = P.length,
        str, res = [], i;
        
        if (P.length != Q.length
           || m > 50000 
           || m < 1 
           || n < 1 
           || n > 100000) return []; 
           
    //var nucl = { A: 1, C: 2, G: 3, T: 4 };
    
    for(i = 0; i< m; i++){       
        str = S.slice(P[i], Q[i]+1); 
       
        if(str.indexOf('A') > -1) {            
            res.push(1);
            continue;
        }
         if(str.indexOf('C') > -1) {
            res.push(2);
            continue;
        }
         if(str.indexOf('G') > -1) {
            res.push(3);
            continue;
        }
         if(str.indexOf('T') > -1) {
            res.push(4);
            continue;
        }
    }    
    return res;
}