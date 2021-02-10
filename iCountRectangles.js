

// Count the number of rectangles formed by a grid of points that are parallel to x and y axis.

// Example 1:

// points: [
//   {x: 0, y: 0},
//   {x: 0, y: 1},
//   {x: 1, y: 0},
//   {x: 1, y: 1},
//   {x: 2, y: 0},
//   {x: 2, y: 1},
// ]

// •   •   •
// •   •   •

// result: 3

// Example 2:

// points: [
//   {x: 0, y: 0},
//   {x: 0, y: 1},
//   {x: 1, y: 1},
//   {x: 2, y: 0},
//   {x: 2, y: 1},
// ]

// •       •
// •   •   •

// result: 1

// Youtube

export function countRectangles(points: Point[]): number {
    let count = 0;
    const len = points.length;
    const map: {[key: string]: number} = {};
  
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (i === j) continue;
        if (points[i].x === points[j].x && points[i].y < points[j].y) {
          const pair = `${points[i].y},${points[j].y}`;
          count += map[pair] || 0;
          map[pair] = -~map[pair];
        }
      }
    }
    return count;
  }
  
  type Point = {x: number; y: number};
