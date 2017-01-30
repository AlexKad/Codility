//given a zero-indexed array H of N positive integers specifying the height of the wall
// returns the minimum number of blocks needed to build it

function solution(H) {
    var n = H.length,
        currentHeight, i,
        result = 1;
    if (n===0 || n > 100000) {
        return 0;
    }    
    var helper  = [H[0]];
    
    for (i = 1; i < n; i++) {
        currentHeight = H[i];
        while (helper.length && helper[helper.length - 1] >= currentHeight) {
            if (currentHeight == helper[helper.length - 1]) {
                result--;
            }
            helper.pop();            
        }        
        helper.push(currentHeight);
        result++;
    }
    return result;
}