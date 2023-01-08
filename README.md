<h1>Data structures in JavaScript</h1>
<br>
<h3>Implementation of Linked Lists and Binary Trees in JavaScript</h3>
<br>
<h2>Linked List Implementation</h2>
js_linkedlist.js contains the class Node, which takes the elemement paramater, then creates a reference to element and the next pointer and the class LinkedList, which intializes this.head to null and this.size to 0.  The LinkedList class contains the following functions:
<br>
<ul>
  <li>add - calls Node class to initalize node, sets node as head if no head exists or adds to end of the list, increments this.size</li>
  <li>insertAt - parameters element and index, inserts element at given index, increments this.size</li>
  <li>prepend - takes element parameter and sets as new head, increments this.siz</li>
  <li>sizeIs - returns this.size</li>
  <li>findHead - returns head of linkedin list</li>
  <li>findTail - returns last element in linked list</li>
  <li>isEmpty - checks if this.size==0</li>
  <li>findNodeAt - returns element at index parameter</li>
  <li>printList- adds current element to string and prints string</li>
  <li>removeLast- removes last element in linked list</li>
  
 </ul>
 
 <br><br>
 <h2>Binary Tree Implementation</h2>
 
