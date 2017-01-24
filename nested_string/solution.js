
// A string S consisting of N characters is called properly nested if:
// S is empty;
// S has the form "(U)" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings.
// string "(()(())())" is properly nested but string "())" isn't.

function solution(S) {
   var n = S.length, i=0,
        openBracketsCounter = 0;
       
    if(n == 0) return 1;
    if(n%2 != 0) return 0;    
    
    for(i=0; i<n; i++){       
      if(S[i] == '('){
          openBracketsCounter++;          
      }
      else{
          if(openBracketsCounter <= 0) return 0;
          openBracketsCounter--;         
      }      
    }
   
    if(openBracketsCounter === 0) return 1;
    return 0;
}