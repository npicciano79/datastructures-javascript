class Node{
    construtor(element){
        this.element=element
        this.next=null
    }

}


class LinkedList{
    constructor(){
        this.head=null
        this.size=0

    }

    //add new node to the end of the list
    add(element)
    {
        //creates new node
        var node =new Node(element);
        //to store current node 
        var current;

        //if empty list add
        //element and make it head
        if(this.head==null){
            this.head=node
        }else{
            current=this.head
            
            //iterate to end of list
            while (current.next!=null){
                current=current.next
            }
            //add node to end of list
            current.next=new Node(element)
        }
        this.size++;
    }

    //insert element at index position
    insertAt(element,index)
    {
        if (index<0 || index>this.size){
            return(console.log('Please enter a valid index:'))
        }else{
            var node = new Node(element)
            var curr,prev

            curr=this.head

            //add element to index 0
            if (index==0){
                node.next=this.head 
                this.head=node
            }else{
                curr=this.head;
                var counter=0;

                //itterate over list to find position to insert
                while(counter<index){
                    prev=curr
                    curr=curr.next
                }
                node.next=curr
                prev.next=node
            }
            this.size++



        }

    }


    //add new node val to start of list
    prepend(element)
    {
        var node=new Node(element)
        var curr,prev

        curr=this.head

        //insert as new head 
        node.next=this.head
        this.head=node

        this.size++

    }


    //return total number of nodes in list
    sizeIs()
    {
        return this.size
    }

    //return first node in list
    findHead()
    {
        return this.head
        
    } 


    //return last node in list
    findTail()
    {
        curr=this.head;
        while (curr.next!=null){
            curr=curr.next;
        }
        return curr;
    }

    isEmpty(){
        return this.size==0;
    }

    //return node at given index
    findNodeAt(index){
        let count=0;
        while (count!=index){
            curr=this.head;
            curr=curr.next
            count+=1
        }
        return curr


    }
    printList(){
        var curr=this.head;
        var str='';
        while (curr!=null){
            str+='(${curr.element})->'
            curr=curr.next

        }
        console.log(str)
    }



    //remove last element from node
    removeLast(){
        this.printList()
        curr=this.head;
        while(curr.next.next!=null){
            curr=curr.next
        }
        curr.next=null
        this.printList()


    }



    //return True if value is in list
    //return False if value is not in list
    //function contains(value)



    //return index of node containing value
    //returns null if not found
    //function find(value)


    //represents linkedlist objects as strings
    //format (value) -> (value)->(value)
    //function toString()
}



//create object for linkedList class
var ll=new LinkedList();

console.log("empty: "+ll.isEmpty());
console.log("size: "+ll.sizeIs());
ll.add(10)
ll.add(12)
ll.add(13)
console.log('empty: '+ll.isEmpty())
console.log('size: '+ll.sizeIs())
console.log('head:'+ll.findHead())
ll.printList();