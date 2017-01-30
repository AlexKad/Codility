// A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
// Count the minimal number of jumps that the small frog must perform to reach its target.
//
//100% score solution
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
