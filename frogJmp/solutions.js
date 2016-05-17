//score 100%
function solution(X, Y, D) {
   if(X==Y){
       return 0;
    }
    else{
        var jumps = 0;
        while(X<Y){
            X+=D;
            jumps++;
        }
        return jumps;
    }   
}
