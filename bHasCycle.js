

// Given a linked list, determine if it has a cycle in it.

// To represent a cycle in the given linked list, we use an integer pos which represents the position (0-indexed) in the linked list where tail connects to. If pos is -1, then there is no cycle in the linked list.

// Example 1:

// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

// Example 2:

// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where tail connects to the first node.

// Example 3:

// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?
export function hasCycle(head: ListNode | null): boolean {
    if (!head) return false;
  
    let slow = head;
    let fast = head.next;
    while (fast !== slow) {
      if (!fast || !fast.next) return false;
      slow = slow.next as ListNode;
      fast = fast.next.next;
    }
    return true;
  }
  
  export function hasCycleAt(head: ListNode | null): ListNode | null {
    if (!head) return null;
  
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
      slow = slow.next as ListNode;
      fast = fast.next.next;
      if (slow === fast) {
        slow = head;
        while (slow !== fast) {
          slow = slow.next as ListNode;
          fast = fast.next as ListNode;
        }
        return slow;
      }
    }
    return null;
  }
  
  class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number) {
      this.val = val === undefined ? 0 : val;
      this.next = null;
    }
  }