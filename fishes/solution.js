// given two non-empty zero-indexed arrays A and B consisting of N integers.
// Arrays A and B represent N voracious fish in a river, ordered downstream along the flow of the river.
// Fish number P is represented by A[P] and B[P]. Array A contains the sizes of the fish. All its elements are unique. 
// Array B contains the directions of the fish. It contains only 0s and/or 1s, where:
// 0 represents a fish flowing upstream,
// 1 represents a fish flowing downstream.
// If two fish move in opposite directions and there are no other (living) fish between them, they will eventually meet each other.
// Then only one fish can stay alive − the larger fish eats the smaller one.
// After they meet:
// If A[P] > A[Q] then P eats Q, and P will still be flowing downstream,
// If A[Q] > A[P] then Q eats P, and Q will still be flowing upstream.
// Function returns the number of alive fishes.

function solution(A, B) {
    var n = A.length, i,j,
    count = n,
    stackDownstreamFishes = [];
     
    for (i = 0; i < n; i++){        
        if (B[i] === 1){ // downstream
            stackDownstreamFishes.push(A[i]);    
        } else { 
            // Let's fight with all downstream fishes!!!!
            for(j = stackDownstreamFishes.length-1; j>=0; j--) { 
                count--;  // smb will be eaten anyway
                if (stackDownstreamFishes[j] > A[i]){
                    break;
                } else {
                    stackDownstreamFishes.pop();
                }
            }
        }
    }
    return count;
}