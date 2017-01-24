// A string S consisting of N characters
// String  is considered to be properly nested if any of the following conditions is true:
// S is empty;
// S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
// S has the form "VW" where V and W are properly nested strings
// the string "{[()()]}" is properly nested but "([)()]" is not.
// Return 1 if string is properly nested, 0 if not

function solution(S) {
    var n = S.length, sym,
        i = 0, openBracketsArr = [], openBracket;
    
    if(S.isEmpty()) return 1;
    if(n%2 != 0 || n > 200000) return 0; // per description string contains only brackets. In properly nested string brackets are simmetric.
    
    while(i != n){
        sym = S[i];
        if(sym === '{' || sym === '[' || sym === '('){
            openBracketsArr.push(sym);
            i++;
        }
        else{
            if(openBracketsArr.length === 0) return 0; // there is closed bracket, but no opened brackets            
            openBracket = openBracketsArr.pop();
            if(findOpposite(openBracket) != S[i]) return 0;
            i++;            
        }
    }
    
    if(openBracketsArr.length == 0) return 1;
    return 0;
}

function findOpposite(sym){
    switch(sym){
        case '{':
            return '}';
            break;
        case '[':
            return ']';
            break;
        case '(': 
            return ')';
            break;
    }    
}
