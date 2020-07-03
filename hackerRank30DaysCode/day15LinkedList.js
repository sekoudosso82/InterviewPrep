this.insert=function(head,data){
    //complete this method
  newNode = new Node(data);
  curNode = head;
  if (curNode != null ){
      while (curNode.next != null){curNode = curNode.next;}
      curNode.next = newNode;
  }
  else{head = newNode;}
  return head;
};