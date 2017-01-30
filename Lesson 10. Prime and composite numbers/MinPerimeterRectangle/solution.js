// An integer N is given, representing the area of some rectangle.
// Function returns the minimal perimeter of any rectangle whose area is exactly equal to N.
// Time complexity is O(sqrt(N))
function solution(N) {
   var i = 0, minPerimeter = 1000000000;
   
    while(i*i<=N){
        if(N%i===0){
            minPerimeter = Math.min(minPerimeter, 2*(i + N/i));
        }
        i++;
    }
    return minPerimeter;
}