// ddata.js — questions for each topic used in PracticePage

const questionsData = {
    "java-basics": [
      {
        title: "What is JVM and why is it used?",
        answer: "Java Virtual Machine executes Java bytecode."
      },
      {
        title: "Difference between JDK, JRE, and JVM",
        answer: "JDK is the full toolkit, JRE runs Java apps, JVM runs bytecode."
      }
    ],
  
    "control-flow": [
      {
        title: "Explain the use of break and continue in loops",
        answer: "break exits the loop, continue skips to next iteration."
      },
      {
        title: "Write syntax of switch case in Java",
        answer: "switch(expression) { case value: ... break; }"
      }
    ],
  
    "functions-methods": [
      {
        title: "What is the difference between method and function in Java?",
        answer: "All functions in Java are methods since they're inside classes."
      },
      {
        title: "What are method overloading rules?",
        answer: "Same name, different parameter list."
      }
    ],
  
    "oop": [
      {
        title: "What are the 4 pillars of OOP?",
        answer: "Encapsulation, Inheritance, Polymorphism, Abstraction"
      },
      {
        title: "What is encapsulation?",
        answer: "Binding data and methods together."
      }
    ],
  
    "arrays-strings": [
      {
        title: "How to reverse a string in Java?",
        answer: "Use StringBuilder.reverse() or loop from end."
      },
      {
        title: "What is the default value of an int array in Java?",
        answer: "0"
      }
    ],
  
    "recursion": [
      {
        title: "Write a recursive function for factorial",
        answer: "if(n==0) return 1; else return n*fact(n-1);"
      },
      {
        title: "What is base case in recursion?",
        answer: "Condition which ends the recursion."
      }
    ],
  
    "linked-list": [
      {
        title: "What is the difference between singly and doubly linked list?",
        answer: "Singly has one pointer (next), doubly has two (next, prev)."
      },
      {
        title: "Write code to insert at head in singly linked list",
        answer: "newNode.next = head; head = newNode;"
      }
    ],
  
    "stack": [
      {
        title: "What is the time complexity of push and pop in stack?",
        answer: "O(1)"
      },
      {
        title: "Implement stack using arrays",
        answer: "Use top index and array[]"
      }
    ],
  
    "queue": [
      {
        title: "Difference between queue and deque?",
        answer: "Queue: FIFO. Deque: can add/remove both ends."
      },
      {
        title: "What is circular queue?",
        answer: "Queue where rear can loop back to front."
      }
    ],
  
    "trees": [
      {
        title: "What is binary tree and binary search tree?",
        answer: "BT: max 2 children. BST: left<root<right."
      },
      {
        title: "Inorder traversal gives what for BST?",
        answer: "Sorted sequence"
      }
    ],
  
    "dp": [
      {
        title: "What is dynamic programming?",
        answer: "Solving complex problems by breaking into subproblems."
      },
      {
        title: "What is memoization?",
        answer: "Caching results of subproblems."
      }
    ]
  
    // ✅ Add more topics below as needed following the same structure
  };
  
  export default questionsData;