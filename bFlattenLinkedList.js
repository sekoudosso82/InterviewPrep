

// You are given a doubly linked list which in addition to the next and previous pointers, it could have a child pointer, which may or may not point to a separate doubly linked list. These child lists may have one or more children of their own, and so on, to produce a multilevel data structure, as shown in the example below.

// Flatten the list so that all the nodes appear in a single-level, doubly linked list. You are given the head of the first level of the list.

// Example 1:

// Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
// Output: [1,2,3,7,8,11,12,9,10,4,5,6]

// Explanation: The multilevel linked list in the input is as follows:

// After flattening the multilevel linked list it becomes:

// Example 2:

// Input: head = [1,2,null,3]
// Output: [1,3,2]
// Explanation: The input multilevel linked list is as follows:

//   1---2---NULL
//   |
//   3---NULL

// Example 3:

// Input: head = []
// Output: []

// How multilevel linked list is represented in test case:

// We use the multilevel linked list from Example 1 above:

// 1---2---3---4---5---6--NULL
//         |
//         7---8---9---10--NULL
//             |
//             11--12--NULL

// The serialization of each level is as follows:

// [1,2,3,4,5,6,null]
// [7,8,9,10,null]
// [11,12,null]

// To serialize all levels together we will add nulls in each level to signify no node connects to the upper node of the previous level. The serialization becomes:

// [1,2,3,4,5,6,null]
// [null,null,7,8,9,10,null]
// [null,11,12,null]

// Merging the serialization of each level and removing trailing nulls we obtain:

// [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]

// Constraints:

//     Number of Nodes will not exceed 1000.
//     1 <= Node.val <= 10^5

class Node {
    val: number;
    next: Node | null;
    prev: Node | null;
    child: Node | null;
    constructor(val?: number, next?: Node | null, prev?: Node | null, child?: Node | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
      this.prev = prev === undefined ? null : prev;
      this.child = child === undefined ? null : child;
    }
  }
  
  export function flatten(head: Node | null): Node | null {
    if (head == null) return head;
  
    let result: Node | null = head;
    while (result !== null) {
      if (result.child === null) {
        result = result.next;
        continue;
      }
  
      let temp = result.child;
      while (temp.next != null) {
        temp = temp.next;
      }
      temp.next = result.next;
      if (result.next !== null) result.next.prev = temp;
      result.next = result.child;
      result.child.prev = result;
      result.child = null;
    }
    return head;
  }
  
  export function flattenV2(head: Node | null): Node | null {
    if (head == null) return head;
  
    let result: Node | null = head;
    while (result !== null) {
      if (result.child === null) {
        result = result.next;
        continue;
      }
  
      let child = result.child as Node;
      const childHead = child;
      child.prev = result;
      while (child.next !== null) {
        child = child.next;
      }
      child.next = result.next || null;
      if (result.next) result.next.prev = child;
      result.next = childHead;
      result.child = null;
    }
    return head;
  }
  
  export function flattenV3(head: Node | null): Node | null {
    const recur = (node: Node | null): Node | null => {
      let prev = node;
      while (node !== null) {
        prev = node;
  
        if (node.child === null) {
          node = node.next;
          continue;
        }
  
        const next = node.next;
        node.next = node.child;
        node.child.prev = node;
  
        const ret = recur(node.child) as Node;
        node.child = null;
  
        if (next !== null) {
          ret.next = next;
          next.prev = ret;
          node = next;
        } else {
          node = ret;
        }
      }
      return prev;
    };
  
    const curr = head;
    recur(curr);
    return head;
  }