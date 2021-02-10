

// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

//     val: an integer representing Node.val
//     random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.

// Example 1:

// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]

// Example 2:

// Input: head = [[1,1],[2,1]]
// Output: [[1,1],[2,1]]

// Example 3:

// Input: head = [[3,null],[3,0],[3,null]]
// Output: [[3,null],[3,0],[3,null]]

// Example 4:

// Input: head = []
// Output: []
// Explanation: Given linked list is empty (null pointer), so return null.

// Constraints:

//     -10000 <= Node.val <= 10000
//     Node.random is null or pointing to a node in the linked list.
//     Number of Nodes will not exceed 1000.


class Node {
    val: number;
    next: Node | null;
    random: Node | null | Node;
    constructor(val?: number, next?: Node | null, random?: Node | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
      this.random = random === undefined ? null : random;
    }
  }
  
  export function copyRandomList(head: Node | null): Node | null {
    if (head === null) return null;
  
    const map = new Map<Node, Node>();
    let curr: Node | null = head;
    while (curr !== null) {
      map.set(curr, new Node(curr.val));
      curr = curr.next;
    }
  
    curr = head;
    while (curr !== null) {
      const node = map.get(curr) as Node;
      if (curr.next) node.next = map.get(curr.next) || null;
      if (curr.random) node.random = map.get(curr.random) || null;
      curr = curr.next;
    }
  
    return map.get(head) || null;
  }