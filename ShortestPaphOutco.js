// Shortest Path

// Understand 
// First example case
// Create second example case
// Constraints
// Diagram 
// Code


// Link to try Shortest Path problem!

// To Try: a similar matrix related problem - link

// Prompt: Find length of shortest path in a matrix from top left corner to bottom right corner

// 1s - walls
// 0s - empty spaces; can travel 

// Input: 

// [[0, 0, 0, 0, 0], 
//  [0, 1, 1, 1, 0], 
//  [0, 1, 0, 0, 0],
//  [0, 0, 0, 1, 0]];
 
// Output: 8
 
// Input: 
// [[0, 0],
//  [1, 0]]
 
// Output: 3
 
// Time: O(N)
// Space: O(N)
 
// [[1, 2, 3, 4, 5], 
//  [2, 3, 4, 5, 0], 
//  [3, 4, 5, 0, 0],
//  [4, 5, 0, 0, 0]];
 
// x -> 
// [[1, 1],
//  [1, 0]]
// y
// |
// v
 
// Queue ([x,y,path])
// -------------------------------------------------------
// [1, 0, [[0, 0], [1, 0]]]
// -------------------------------------------------------
//            x,y,distance
// [x,y,distance] = [1,1,3]
 
// right => [2,0,3]
// down  => [1,1,3]
// left  => [0,0,3]
// up    => [1,-1,3]
 
// Destination => bottom right corner => when x reaches width-1; when y reaches height-1
 
// [[1, 2, 3, 4, 5], 
//  [2, 1, 1, 1, 6], 
//  [3, 1, 7, 8, 7],
//  [4, 5, 6, 1, 8]];
 
function shortestPath(matrix) {
    const queue = [];
    queue.push([0,0,1]);
    matrix[0][0] = 1;
    let x, y, distance;
 
    while (queue.length > 0) {
        [x, y, distance] = queue.shift();
        if (x === matrix[0].length - 1 && y === matrix.length - 1) {
            return distance;
        }
 
        let right = [x + 1, y, distance + 1];
        let left = [x - 1, y, distance + 1];
        let down = [x, y + 1, distance + 1];
        let up = [x, y - 1, distance + 1];
 
        if (isValid(matrix, right)) {
            queue.push(right);
            matrix[right[1]][right[0]] = 1;
        }
        if (isValid(matrix, left)) {
            queue.push(left);
            matrix[left[1]][left[0]] = 1;
        }
        if (isValid(matrix, down)) {
            queue.push(down);
            matrix[down[1]][down[0]] = 1;
        }
        if (isValid(matrix, up)) {
            queue.push(up);
            matrix[up[1]][up[0]] = 1;
        }
    }
 
    return -1;
}
 
function isValid(matrix, direction) {
    let x, y, distance;
    [x, y, distance] = direction;
    if (x < 0 || y < 0 || x >= matrix[0].length || y >= matrix.length) {
        return false;
    }
    if (matrix[y][x] === 1) {
        return false;
    }
    return true;
}


select * 
from employee_table
order_by salary desc
