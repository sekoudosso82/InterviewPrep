// Treasure Island I

// You have a map that marks the location of a treasure island. 
// Some of the map area has jagged rocks and dangerous reefs. 
// Other areas are safe to sail in.
// There are other explorers trying to find the treasure. 
// So you must figure out a shortest route to the treasure island.
// Assume the map area is a two dimensional grid, represented by 
// a matrix of characters.
// You must start from the top-left corner of the map and can 
// move one block up, down, left or right at a time.
// The treasure island is marked as ‘X’ in a block of the matrix. 
// ‘X’ will not be at the top-left corner.
// Any block with dangerous rocks or reefs will be marked as ‘D’. 
// You must not enter dangerous blocks. You cannot leave the map area.
// Other areas ‘O’ are safe to sail in. The top-left corner is always safe.
// Output the minimum number of steps to get to the treasure.

// e.g.
// Input
// [
// [‘O’, ‘O’, ‘O’, ‘O’],
// [‘D’, ‘O’, ‘D’, ‘O’],
// [‘O’, ‘O’, ‘O’, ‘O’],
// [‘X’, ‘D’, ‘D’, ‘O’],
// ]

// Output from aonecode.com
// Route is (0, 0), (0, 1), (1, 1), (2, 1), (2, 0), (3, 0) The minimum route takes 5 steps. 

function solution(treasure_map){
    // # Start from left corner
    let start_x = treasure_map.length
    let start_y = treasure_map[0].length
    let treasure_x = 0
    let treasure_y = 0
    let distance_map = []
    for (row in treasure_map){
        let distance_row = []
        for (col in row){
            if (col === 'O'){
                distance_row.push(1)
            }
            else if (col === 'D'){
                distance_row.push(1000000)  //# Big enough
            }
            else if (col === 'X'){
                distance_row.push(1)
            }
        }
        distance_map.push(distance_row)
    }
    distance_map[0][0] = 0
    // '''
    // for all position:
    // cursor = current_position
    // if cursor is D:
    // pass
    // cur_distance_from_upper_left = min(from_left_up, from_up, from_right_up, from_left)
    // return X 
    // '''
    console.log("start_y", start_y)
    console.log("start_x", start_x)
    for (x=0; x<start_x; x++){
        for (y=0; y<start_y; y++){
            let cursor = treasure_map[x][y]
            if (cursor === 'D'){
                continue
            }
            else if (cursor === 'X'){
                treasure_x = x
                treasure_y = y}
            else{
                let candidate = []
                if (x !== 0) { // # up pass
                    candidate.push(distance_map[x - 1][y])  // # from_up
                }
                if (y !== 0){
                    candidate.push(distance_map[x][y - 1])  // # from_left
                }
                console.log("canditate", candidate)
                if (candidate.length !== 0 && candidate !== 'D'){
                    distance_map[x][y] = Math.min.apply(Math, candidate) + distance_map[x][y]
                }
            }
        }
    }
    console.log(distance_map[treasure_x][treasure_y])
    // return distance_map[treasure_x][treasure_y]
}

let ddd = [
    ['O', 'O', 'O', 'O'],
    ['D', 'O', 'D', 'O'],
    ['O', 'O', 'O', 'O'],
    ['X', 'D', 'D', 'O']
]
solution(ddd)
