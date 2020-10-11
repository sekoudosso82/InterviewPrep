// How to perform Linear Search in Java?

// Consider the following program to perform Linear search in Java.

import java.util.Scanner;  
      
public class LeniearSearch {  
    public static void main(String[] args) {  
      int[] arr = {10, 23, 15, 8, 4, 3, 25, 30, 34, 2, 19};  
      int item,flag=0;   
      Scanner sc = new Scanner(System.in);  
      System.out.println("Enter Item ?");  
      item = sc.nextInt();  
      for(int i = 0; i<10; i++)  
      {  
        if(arr[i]==item)  
        {  
          flag = i+1;  
          break;  
        }  
        else   
          flag = 0;   
      }  
      if(flag != 0)  
      {  
        System.out.println("Item found at location" + flag);  
      }  
      else   
        System.out.println("Item not found");  
        
    }  
}  

// Output:

// Enter Item ?
// 23
// Item found at location 2
// Enter Item ?
// 22
// Item not found

