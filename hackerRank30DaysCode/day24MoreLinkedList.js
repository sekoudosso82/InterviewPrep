
// Task
// A Node class is provided for you in the editor. 
// A Node object has an integer data field, data, 
// and a Node instance pointer, next, pointing to another 
// node (i.e.: the next node in a list).

// A removeDuplicates function is declared in your editor, 
// which takes a pointer to the head node of a linked list as a parameter. 
// Complete removeDuplicates so that it deletes any duplicate 
// nodes from the list and returns the head of the updated list.

// Note: The head pointer may be null, indicating that the list 
// is empty. Be sure to reset yournext pointer when performing 
// deletions to avoid breaking the list.

// Input Format

// You do not need to read any input from stdin. The following input 
// is handled by the locked stub code and passed to the removeDuplicates function:
// The first line contains an integer, N, the number of 
// nodes to be inserted.
// The N subsequent lines each contain an integer describing the
// data value of a node being inserted at the list's tail.

// Constraints
//     The data elements of the linked list argument 
//     will always be in non-decreasing order.

// Output Format
//     Your removeDuplicates function should return the head 
//     of the updated linked list. The locked stub code in 
//     your editor will print the returned list to stdout.


this.removeDuplicates=function(head){
    if (typeof theactualHead === 'undefined') {
          theactualHead = head;
     }
     if (head && head.next) {
         if (head.data === head.next.data) {
             if (head.next.next) {
                 head.next = head.next.next;
             } else {
                 head.next = null;
             }
             this.removeDuplicates(head);
         } else {
             this.removeDuplicates(head.next);
         }
     }
     return theactualHead;
  }

  this.insert=function(head,data){
    var p=new Node(data);
    if(head==null){
        head=p;
    }
    else if(head.next==null){
        head.next=p;
    }
    else{
        var start=head;
        while(start.next!=null){
            start=start.next;
        }
        start.next=p;
    }
    return head;
    
};

this.display=function(head){
    var start=head;
        while(start){
            process.stdout.write(start.data+" ");
            start=start.next;
        }
};

function main(){
var T=parseInt(readLine());
var head=null;
var mylist=new Solution();
for(i=0;i<T;i++){
    var data=parseInt(readLine());
    head=mylist.insert(head,data);
}
head=mylist.removeDuplicates(head);
mylist.display(head);
}		