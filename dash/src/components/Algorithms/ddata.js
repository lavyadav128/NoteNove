// ddata.js — questions for each topic used in PracticePage

const questionsData = {
  "java-basics": [
    {
      title: "Write a basic Java program that prints 'Hello World'.",
      answer: `public class JavaBasics {
    public static void main(String args[]) {
        System.out.print("Hello World");
    }
}`,
      type: "code"
      },
      {
        title: "What is the difference between print and println in Java?",
        answer: `print displays output on the same line.
    println prints and moves the cursor to the next line.
    \\n can be used for a line break within print.`,
    type: "code"

      },
      {
        title: "How do you declare variables in Java?",
        answer: `int a = 10;
    String name = "Ram";
    
    Always use the format: type variableName = value;`,
    type: "code"

      },
      {
        type: "code",
        title: "How is memory managed for variables in Java?",
        answer: "Variables are stored in memory blocks (RAM). Each variable has a data type that determines how much memory it uses."
      },
      {
        title: "What are the two main types of data types in Java?",
        answer: `Primitive: byte, short, int, long, float, double, boolean, char
    Non-Primitive: String, Array, Class, Object, Interface`,
    type: "code"

      },
      {
        title: "Give the size and range of the byte data type.",
        answer: "Size: 1 byte (8 bits)\nRange: -128 to 127",
        type: "code"

      },
      {
        title: "What values can a boolean hold?",
        answer: "true or false",
        type: "code"

      },
      {
        title: "How do you write single-line and multi-line comments in Java?",
        answer: `Single-line: // this is a comment
    
    Multi-line:
    /* This is a 
       multi-line comment */`,
       type: "code"

      },
      {
        title: "How do you take input using Scanner in Java?",
        answer: `import java.util.*;
    Scanner sc = new Scanner(System.in);
    String name = sc.nextLine();
    System.out.println(name);`,
    type: "code"

      },
      {
        title: "What is type conversion in Java?",
        answer: `It's automatic when moving from a smaller to a larger data type:
    byte < short < int < float < long < double`,
    type: "code"

      },
      {
        title: "What is explicit type casting in Java?",
        answer: `Manually converting a larger data type to a smaller one:
    
    float a = 25.9999f;
    int b = (int) a;  // Result: 25`,
    type: "code"

      },
      {
        title: "What happens when a byte, short, or char is used in an expression?",
        answer: `Java promotes them to int during expression evaluation.
    
    Example:
    byte b = 5;
    byte c = (byte)(b * 2); // Need to cast back to byte`,
    type: "code"

      },
      {
        title: "How does Java code run?",
        answer: `Java code goes through these steps:
      1. You write source code (.java file)
      2. Compiler changes it to bytecode (.class file)
      3. JVM runs the bytecode on any system.
      
      So:
      Source Code → Compilation → Bytecode → Execution by JVM`,
      type: "code"

      },
      {
        title: "What is JVM, JRE, and JDK in Java?",
        answer: `- JVM: Runs Java programs (Java Virtual Machine)
      - JRE: JVM + Libraries (Java Runtime Environment)
      - JDK: JRE + Compiler + Developer Tools (Java Development Kit)`,
      type: "code"

      },
      {
        title: "What are the different types of operators in Java?",
        answer: `- Binary: +, -, *, /, %, &&
      - Unary: ++, --, +a, -a
      - Relational: >, <, >=, <=, ==, !=
      - Logical: &&, ||, !
      - Assignment: =, +=, -=, *=`,
      type: "code"

      },
      {
        title: "What is the difference between pre-increment and post-increment?",
        answer: `- Pre-Increment (++a): Value changes first, then used
      - Post-Increment (a++): Value used first, then changes
      
      Example:
      int a = 5;
      System.out.println(++a); // 6
      System.out.println(a++); // 6 (then a becomes 7)`,
      type: "code"

      },
    ],




  
    "control-flow": [

      {
        title: "How to write an if-else statement in Java?",
        answer: `Example:
      int age = 22;
      if (age >= 18) {
        System.out.println("You can vote");
      } else {
        System.out.println("You cannot vote");
      }`,
      type: "code"

      },
      {
        title: "How to use else if in Java?",
        answer: `You use else if to check more than one condition.
      
      Example:
      if (age < 18) {
        // child
      } else if (age < 60) {
        // adult
      } else {
        // senior`,
        type: "code"

      },
      {
        title: "How to calculate income tax in Java?",
        answer: `Example:
      int income = 600000;
      int tax;
      
      if (income <= 500000) {
        tax = 0;
      } else if (income >= 500000 && income < 1000000) {
        tax = (int)(income * 0.2);
      }
      System.out.println("Tax is: " + tax);`,
      type: "code"

      },
      {
        title: "How to find the largest of three numbers in Java?",
        answer: `Example:
      if (a >= b && a >= c) {
        // a is largest
      } else if (b >= c) {
        // b is largest
      } else {
        // c is largest
      }`,
      type: "code"

      },
      {
        title: "What is a ternary operator in Java?",
        answer: `A short way to write if-else.
      
      Syntax:
      variable = (condition) ? value_if_true : value_if_false;
      
      Example:
      int large = (5 > 3) ? 5 : 3;`,
      type: "code"

      },
      {
        title: "How to check even or odd using ternary operator?",
        answer: `Example:
      String type = (5 % 2 == 0) ? "even" : "odd";
      System.out.println(type);`,
      type: "code"

      },
      {
        title: "How does a switch statement work in Java?",
        answer: `Example:
      int number = 1;
      switch (number) {
        case 1:
          System.out.println("Samosa");
          break;
        case 2:
          System.out.println("Burger");
          break;
        default:
          System.out.println("We wake up");
      }`,
      type: "code"

      },
      {
        title: "What is a while loop in Java?",
        answer: `A while loop repeats code as long as the condition is true.
      
      Syntax:
      while (condition) {
        // do something
      }
      
      Example:
      int count = 0;
      while (count < 10) {
        System.out.println("Hello");
        count++;
      }`,
      type: "code"

      },
      {
        title: "How to print numbers 1 to N using a while loop?",
        answer: `Example:
      int range = 5;
      int counter = 1;
      
      while (counter <= range) {
        System.out.print(counter + " ");
        counter++;
      }
      
      // Output: 1 2 3 4 5`,
      type: "code"

      },
      {
        title: "How to calculate the sum of numbers using a while loop?",
        answer: `Example:
      int n = 5;
      int sum = 0;
      int i = 1;
      
      while (i <= n) {
        sum = sum + i;
        i++;
      }
      
      System.out.println(sum); // Output: 15`,
      type: "code"

      },
      {
        title: "What is a for loop in Java?",
        answer: `A for loop is used when we know how many times to run the loop.
      
      Syntax:
      for (initialization; condition; update) {
        // do something
      }
      
      Example:
      for (int i = 1; i <= 5; i++) {
        System.out.println(i);
      }`,
      type: "code"

      },
      {
        title: "How to print reverse of a number in Java?",
        answer: `Example:
      int n = 10899;
      int rev = 0;
      
      while (n > 0) {
        int lastDigit = n % 10;
        System.out.print(lastDigit + " ");
        rev = (rev * 10) + lastDigit;
        n = n / 10;
      }
      
      // Output: 9 9 8 0 1`,
      type: "code"

      },
      {
        title: "What is a do-while loop in Java?",
        answer: `A do-while loop runs at least one time even if the condition is false.
      
      Syntax:
      do {
        // do something
      } while (condition);`,
      type: "code"

      },
      {
        title: "What is the use of break statement in Java?",
        answer: `Break stops the loop when a condition is met.
      
      Example:
      do {
        int n = sc.nextInt();
        if (n % 10 == 0) {
          break;
        }
        System.out.println(n);
      } while (true);`,
      type: "code"

      },
      {
        title: "What is the use of continue statement in Java?",
        answer: `Continue skips the current loop step and goes to the next one.
      
      Example:
      for (int i = 1; i <= 5; i++) {
        if (i == 3) {
          continue;
        }
        System.out.println(i);
      }
      
      // Output: 1 2 4 5 (3 is skipped)`,
      type: "code"

      }
    ],






    "patterns":[
      {
        type: "code",
        title: "How does a basic star pattern print work in Java?",
        answer: `To print a basic star pattern like a half pyramid, you need two loops:
    1. Outer loop for each line
    2. Inner loop for printing stars on that line
    
    Example:
    for (int line = 1; line <= 4; line++) {
        for (int star = 1; star <= line; star++) {
            System.out.print("* ");
        }
        System.out.println();
    }
    
    Output:
    * 
    * * 
    * * * 
    * * * *`
      },
    
      {
        type: "code",
        title: "How to print an inverted star pattern in Java?",
        answer: `In an inverted pattern, stars decrease with each line.
    We start from total lines (n) and reduce the number of stars.
    
    Example:
    int n = 4;
    for (int line = 1; line <= n; line++) {
        for (int star = 1; star <= n - line + 1; star++) {
            System.out.print("* ");
        }
        System.out.println();
    }
    
    Output:
    * * * * 
    * * * 
    * * 
    *`
      },
    
      {
        type: "code",
        title: "How to print a character pattern in Java?",
        answer: `Use character variables like 'A', 'B', etc., inside nested loops.
    
    Example:
    int n = 4;
    for (int line = 1; line <= n; line++) {
        char ch = 'A';
        for (int c = 1; c <= line; c++) {
            System.out.print(ch + " ");
            ch++;
        }
        System.out.println();
    }
    
    Output:
    A
    A B
    A B C
    A B C D`
      },

        {
          type: "code",
          title: "How does the Zero-One Triangle pattern work in Java?",
          answer: `In this pattern, a triangle of 0s and 1s is printed such that the sum of row and column indexes determines what to print:
      - If (i + j) is even → print 1
      - Else → print 0
      
      Code:
      public static void zeroOneTriangle(int n) {
          for (int i = 1; i <= n; i++) {
              for (int j = 1; j <= i; j++) {
                  if ((i + j) % 2 == 0) {
                      System.out.print("1 ");
                  } else {
                      System.out.print("0 ");
                  }
              }
              System.out.println();
          }
      }
      
      Example Output for n = 5:
      1
      0 1
      1 0 1
      0 1 0 1
      1 0 1 0 1`
        },
      
        {
          type: "code",
          title: "How does the Butterfly pattern work in Java?",
          answer: `Butterfly pattern is formed in two halves:
      - Top half: stars on left and right separated by spaces
      - Bottom half: mirror of top half
      
      Code:
      public static void butterfly(int n) {
          // Top half
          for (int i = 1; i <= n; i++) {
              // Left wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              // Spaces
              for (int j = 1; j <= 2 * (n - i); j++) {
                  System.out.print(" ");
              }
              // Right wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              System.out.println();
          }
      
          // Bottom half
          for (int i = n; i >= 1; i--) {
              // Left wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              // Spaces
              for (int j = 1; j <= 2 * (n - i); j++) {
                  System.out.print(" ");
              }
              // Right wing
              for (int j = 1; j <= i; j++) {
                  System.out.print("*");
              }
              System.out.println();
          }
      }
      
      Example Output for n = 4:
      *      *
      **    **
      ***  ***
      ********
      ********
      ***  ***
      **    **
      *      *`
        },
          {
            type: "code",
            title: "How does the Solid Rhombus pattern work in Java?",
            answer: `A Solid Rhombus is a shifted rectangle made of stars.
        
        Logic:
        - First print (n - i) spaces for each row
        - Then print n stars
        
        Code:
        public static void solidRhombus(int n) {
            for (int i = 1; i <= n; i++) {
                // Spaces
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                // Stars
                for (int j = 1; j <= n; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
        
        Example Output (n = 5):
            *****
           *****
          *****
         *****
        *****`
          },
        
          {
            type: "code",
            title: "How do you print a Hollow Rhombus in Java?",
            answer: `Hollow Rhombus is similar to a solid rhombus but with only borders filled.
        
        Code:
        public static void hollowRhombus(int n) {
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= n; j++) {
                    if (i == 1 || i == n || j == 1 || j == n) {
                        System.out.print("*");
                    } else {
                        System.out.print(" ");
                    }
                }
                System.out.println();
            }
        }
        
        Example Output (n = 5):
            *****
           *   *
          *   *
         *   *
        *****`
          },
        
          {
            type: "code",
            title: "How does the Diamond Pattern work in Java?",
            answer: `This pattern is symmetrical and formed in two parts (upper + lower triangles).
        
        Code:
        public static void diamond(int n) {
            // Upper half
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= 2 * i - 1; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        
            // Lower half
            for (int i = n; i >= 1; i--) {
                for (int j = 1; j <= n - i; j++) {
                    System.out.print(" ");
                }
                for (int j = 1; j <= 2 * i - 1; j++) {
                    System.out.print("*");
                }
                System.out.println();
            }
        }
        
        Example Output (n = 4):
           *
          ***
         *****
        *******
        *******
         *****
          ***
           *`
          },
      
    ],



  
    "functions-methods": [
      {
        title: "What is the basic syntax of a function in Java?",
        answer: `In Java, a function (method) has a return type, name, and body.
    
    Syntax:
    returnType functionName() {
        // code
        return value; // if not void
    }
    
    Example:
    public static void printHelloWorld() {
        System.out.println("Hello world");
    }`,
    type: "code"

      },
    
      {
        title: "What is a function with parameters in Java?",
        answer: `You can pass values to functions using parameters.
    
    Syntax:
    returnType functionName(type param1, type param2) {
        // code
        return something;
    }
    
    Example:
    public static int calculateSum(int a, int b) {
        int sum = a + b;
        return sum;
    }
    
    public static void main(String[] args) {
        int sum = calculateSum(2, 3);
        System.out.println("Sum is: " + sum);
    }`,
    type: "code"

      },
    
      {
        title: "How does swapping using a function work in Java?",
        answer: `Java always uses call by value. So original variables don't change when passed to functions.
    
    Example:
    public static void swap(int a, int b) {
        int temp = a;
        a = b;
        b = temp;
        System.out.println("Swapped inside function: a = " + a + ", b = " + b);
    }
    
    public static void main(String[] args) {
        int a = 5, b = 10;
        swap(a, b);
        System.out.println("After swap: a = " + a + ", b = " + b); // values remain 5 and 10
    }`,
    type: "code"

      },
        {
          type: "code",
          title: "What does the 'factorial' method do in Java?",
          answer: "It calculates the factorial of a number using a loop.\n\nExample:\nint result = factorial(4); // returns 24"
        },
        {
          type: "code",
          title: "How is factorial implemented in Java?",
          answer: "Using a loop:\nint f = 1;\nfor(int i = 1; i <= n; i++) {\n  f *= i;\n}\nreturn f;"
        },
        {
          type: "code",
          title: "What is a binomial coefficient?",
          answer: "It is a value calculated using the formula C(n, r) = n! / (r! * (n-r)!)\n\nUsed in combinations and probability."
        },
        {
          type: "code",
          title: "How is the binomial coefficient implemented in Java?",
          answer: "By calling the factorial function for n, r, and (n - r) and returning the result as:\nint bincoeff = factn / (factr * factnr);"
        },
        {
          type: "code",
          title: "What is function overloading in Java?",
          answer: "It allows multiple methods with the same name but different parameter types or counts.\n\nExample:\nvoid multiply(int a, int b) {}\nvoid multiply(float a, float b) {}"
        },
        {
          type: "code",
          title: "What are the rules for function overloading in Java?",
          answer: "Overloaded functions must differ by:\n- Number of parameters\n- Type of parameters\nReturn type alone is not sufficient."
        },
        {
          type: "code",
          title: "How to check if a number is prime in Java?",
          answer: "Use a method that returns false if any number between 2 and n-1 divides n.\n\nExample:\nboolean isPrime(int n) {...}"
        },
        {
          type: "code",
          title: "What is the logic behind the 'isPrime' function in Java?",
          answer: "If n is less than or equal to 1, it's not prime. Else, check for divisibility from 2 to n-1.\nIf any i divides n, return false."
        },
        {
          type: "code",
          title: "How to print all prime numbers up to a number in Java?",
          answer: "Use a loop from 1 to n and call isPrime(i). If true, print the number.\n\nExample:\nfor (int i = 1; i <= n; i++) {\n  if (isPrime(i)) System.out.print(i + \" \");\n}"
        },
        {
          type: "code",
          title: "How does 'primesInRange' work in the code?",
          answer: "It loops from 1 to n and calls isPrime on each number. If true, it prints the number."
        },
        {
          type: "code",
          title: "What does the 'binToDec' method do?",
          answer: "It converts a binary number (as an integer) into its decimal equivalent.\n\nExample:\nbinToDec(1011); // Output: 11"
        },
        {
          type: "code",
          title: "How does the 'binToDec' method work internally?",
          answer: "It repeatedly extracts the last digit of the binary number using % 10, multiplies it with powers of 2, and adds it to the result.\n\nIt uses:\n- Math.pow(2, pow)\n- (int) type casting\n- Updates binum by binum / 10"
        },
        {
          type: "code",
          title: "Why is (int) casting used in 'binToDec'?",
          answer: "Because Math.pow() returns a double, so we need to cast it to int before using it in integer addition."
        },
        {
          type: "code",
          title: "What is 'scope' in Java?",
          answer: "Scope defines where a variable can be accessed or modified in a program. It can be:\n- Block Scope\n- Method Scope\n- Class Scope"
        },
        {
          type: "code",
          title: "What is block scope in Java?",
          answer: "Variables declared inside a block {} are accessible only within that block.\n\nExample: Inside for loops or if statements."
        },
        {
          type: "code",
          title: "What is method scope in Java?",
          answer: "Variables declared inside a method are only accessible within that method. They are destroyed once the method completes."
        },
      
  
    ],



  
    "java-arrays-strings": [
      {
        "title": "What is an array in Java?",
        "answer": "An array is a container object that holds a fixed number of elements of a single type, indexed starting from 0."
      },
      {
        "title": "How do you declare an array in Java?",
        "answer": "Syntax: `int[] arr;` or `int arr[];`"
      },
      {
        "title": "How do you create an array in Java?",
        "answer": "Example: `int[] arr = new int[5];` creates an array of 5 integers with default values."
      },
      {
        "title": "Can array size be changed after declaration?",
        "answer": "No. Arrays in Java have a fixed size once initialized."
      },
      {
        "title": "What is the default value of elements in an int array?",
        "answer": "0 for int, 0.0 for float/double, null for objects, false for boolean."
      },
      {
        "title": "What is the time complexity of accessing an array element?",
        "answer": "O(1) — direct access using index."
      },
      {
        "title": "How do you iterate over an array?",
        "answer": "Using for loop, enhanced for loop (`for-each`), or streams (Java 8+)."
      },
      {
        "title": "What is a multidimensional array?",
        "answer": "An array of arrays. Example: `int[][] matrix = new int[3][3];`"
      },
      {
        "title": "What is the difference between int[] and int[][]?",
        "answer": "int[] is a 1D array; int[][] is a 2D array (matrix or table)."
      },
      {
        "title": "How do you copy an array in Java?",
        "answer": "Use `System.arraycopy()`, `Arrays.copyOf()`, or a loop."
      },
      {
        "title": "How do you sort an array in Java?",
        "answer": "Use `Arrays.sort(array);` for ascending order."
      },
      {
        "title": "How do you reverse an array?",
        "answer": "Swap elements from start and end using a loop or use `Collections.reverse()` for lists."
      },
      {
        "title": "What is the Arrays class?",
        "answer": "It is a utility class in `java.util` that provides methods like sort(), copyOf(), equals(), toString(), etc."
      },
      {
        "title": "What is the difference between Arrays.equals() and ==?",
        "answer": "`==` compares references; `Arrays.equals()` compares contents of arrays."
      },
      {
        "title": "How do you find the length of an array?",
        "answer": "Use `array.length` (note: it’s a field, not a method)."
      },
      {
        "title": "What is a jagged array?",
        "answer": "A multidimensional array where rows have different lengths. Example: `int[][] arr = new int[2][];`"
      },
      {
        "title": "What is the difference between Array and ArrayList?",
        "answer": "Array is fixed-size and faster. ArrayList is resizable and part of Java Collections."
      },
      {
        "title": "Can you store different types in a single array?",
        "answer": "Only if you use Object[] type, but not recommended due to type safety issues."
      },
      {
        "title": "What is a string in Java?",
        "answer": "A string is an object of the String class that represents a sequence of characters, stored in a char array internally."
      },
      {
        "title": "Are strings mutable in Java?",
        "answer": "No. Strings are immutable. Any modification creates a new object."
      },
      {
        "title": "How do you create a string in Java?",
        "answer": "`String s = \"hello\";` or `String s = new String(\"hello\");`"
      },
      {
        "title": "What is the difference between == and .equals() in strings?",
        "answer": "`==` compares references; `.equals()` compares actual content of the strings."
      },
      {
        "title": "What is the String pool in Java?",
        "answer": "It is a memory area in heap that stores string literals to optimize memory by reusing immutable strings."
      },
      {
        "title": "How do you concatenate strings?",
        "answer": "Using `+` operator or `String.concat()` method. For many concatenations, use `StringBuilder`."
      },
      {
        "title": "What is StringBuilder?",
        "answer": "A mutable class for efficient string modification. Preferred for repeated concatenation."
      },
      {
        "title": "What is the difference between StringBuilder and StringBuffer?",
        "answer": "StringBuffer is thread-safe (synchronized), StringBuilder is faster but not thread-safe."
      },
      {
        "title": "How do you convert a string to a character array?",
        "answer": "`str.toCharArray()`"
      },
      {
        "title": "How do you convert a character array to string?",
        "answer": "`new String(charArray)`"
      },
      {
        "title": "How do you split a string in Java?",
        "answer": "Use `str.split(delimiter)` which returns a String array."
      },
      {
        "title": "How do you compare strings alphabetically?",
        "answer": "Use `str1.compareTo(str2)`. Returns 0 if equal, <0 if str1<str2, >0 if str1>str2."
      },
      {
        "title": "How do you check if a string contains a substring?",
        "answer": "Use `str.contains(\"substring\")` or `str.indexOf(\"substring\") >= 0`."
      },
      {
        "title": "How do you reverse a string in Java?",
        "answer": "Use `StringBuilder(str).reverse().toString()` or loop through characters in reverse order."
      },
      {
        "title": "What is substring in Java?",
        "answer": "A portion of the string. Use `str.substring(start, end)`."
      },
      {
        "title": "How do you remove whitespace from a string?",
        "answer": "Use `str.trim()` to remove leading/trailing spaces, or `str.replaceAll(\"\\s\", \"\")` to remove all."
      },
      {
        "title": "How to convert a string to integer?",
        "answer": "Use `Integer.parseInt(str)` or `Integer.valueOf(str)`."
      },
      {
        "title": "How to convert an integer to string?",
        "answer": "Use `String.valueOf(num)` or `Integer.toString(num)`."
      },
      {
        "title": "What does the `intern()` method do?",
        "answer": "It returns a canonical representation of the string from the string pool."
      },
      {
        "title": "What is the use of `charAt()`?",
        "answer": "It returns the character at the specified index. Example: `str.charAt(0)`."
      },
      {
        "title": "What is the use of `length()` in strings?",
        "answer": "Returns the number of characters in the string."
      },
      {
        "title": "How do you replace characters in a string?",
        "answer": "Use `str.replace('a', 'b')` or `str.replaceAll(regex, replacement)`."
      },
      {
        "title": "What is immutability in strings?",
        "answer": "Once created, a string object cannot be changed. All modifications create new objects."
      },
      {
        "title": "Can strings be compared with ==?",
        "answer": "Yes, but it compares memory references, not content. Use `.equals()` for content comparison."
      },
      {
        "title": "Is string thread-safe?",
        "answer": "Yes. Strings are immutable, so they are inherently thread-safe."
      },
      {
        "title": "Can a string be null or empty?",
        "answer": "Yes. `null` means no object. `\"\"` is an empty string with 0 characters."
      },
      {
        "title": "What is the time complexity of string concatenation using + in loop?",
        "answer": "O(n²) due to repeated object creation. Use StringBuilder for O(n)."
      },
      {
        "title": "How do you count vowels in a string?",
        "answer": "Loop through the string and check if each character is in {a, e, i, o, u}."
      },
      {
        "title": "How to remove duplicate characters from a string?",
        "answer": "Use a HashSet to track seen characters and build a result string without duplicates."
      }
    ],


    "oop":[
      {
        "title": "What is Object-Oriented Programming (OOP)?",
        "answer": "OOP is a programming paradigm based on the concept of objects, which encapsulate data and behavior together."
      },
      {
        "title": "What are the main pillars of OOP?",
        "answer": "1. Encapsulation\n2. Inheritance\n3. Polymorphism\n4. Abstraction"
      },
      {
        "title": "What is a class?",
        "answer": "A class is a blueprint or template for creating objects. It defines attributes (variables) and methods (functions)."
      },
      {
        "title": "What is an object?",
        "answer": "An object is an instance of a class. It holds data in fields and performs actions via methods."
      },
      {
        "title": "What is encapsulation?",
        "answer": "Encapsulation is the process of wrapping data and methods into a single unit (class), and restricting direct access to some components."
      },
      {
        "title": "What is abstraction?",
        "answer": "Abstraction hides implementation details and shows only essential features of an object to the user."
      },
      {
        "title": "What is inheritance?",
        "answer": "Inheritance allows a class (child) to acquire properties and behaviors from another class (parent)."
      },
      {
        "title": "What is polymorphism?",
        "answer": "Polymorphism means many forms. It allows methods to behave differently based on the object that is calling them."
      },
      {
        "title": "What are the types of polymorphism?",
        "answer": "1. Compile-time (method overloading)\n2. Runtime (method overriding)"
      },
      {
        "title": "What is method overloading?",
        "answer": "Method overloading means having multiple methods with the same name but different parameters in the same class."
      },
      {
        "title": "What is method overriding?",
        "answer": "Overriding is redefining a method in the child class that already exists in the parent class with the same signature."
      },
      {
        "title": "What is a constructor?",
        "answer": "A constructor is a special method that is automatically called when an object is created. It initializes object state."
      },
      {
        "title": "What is a destructor?",
        "answer": "A destructor is a method that is called when an object is destroyed, used to free up resources."
      },
      {
        "title": "What is access modifier?",
        "answer": "Access modifiers control the visibility of class members. Common ones: public, private, protected."
      },
      {
        "title": "What is the difference between class and object?",
        "answer": "Class is a definition; object is an instance. One class can create many objects."
      },
      {
        "title": "What is static in OOP?",
        "answer": "Static means belonging to the class rather than to instances. Static members are shared by all objects of the class."
      },
      {
        "title": "What is the 'this' keyword?",
        "answer": "It refers to the current object inside class methods. Used to access instance variables and methods."
      },
      {
        "title": "What is the difference between interface and abstract class?",
        "answer": "An abstract class can have both abstract and non-abstract methods, while an interface only has abstract methods (Java 7). Interfaces support multiple inheritance."
      },
      {
        "title": "What is data hiding?",
        "answer": "Data hiding is restricting access to internal object details using access modifiers like private. It supports encapsulation."
      },
      {
        "title": "What is multiple inheritance?",
        "answer": "It means a class inherits from more than one base class. It’s supported in C++ but not directly in Java (use interfaces instead)."
      },
      {
        "title": "What is constructor overloading?",
        "answer": "Creating multiple constructors with different parameters to initialize objects in different ways."
      },
      {
        "title": "What is the use of super keyword?",
        "answer": "super is used in a child class to call the parent class's constructor or methods."
      },
      {
        "title": "What is the difference between aggregation and composition?",
        "answer": "Aggregation is a 'has-a' relationship with independent lifecycles. Composition is a stronger form where child cannot exist without parent."
      },
      {
        "title": "What is an abstract class?",
        "answer": "An abstract class cannot be instantiated and may contain abstract (unimplemented) methods."
      },
      {
        "title": "What is an interface?",
        "answer": "An interface defines a contract with abstract methods only. A class must implement all its methods."
      },
      {
        "title": "What is upcasting and downcasting?",
        "answer": "Upcasting: child to parent (safe)\nDowncasting: parent to child (unsafe unless explicitly checked)"
      },
      {
        "title": "What is late binding?",
        "answer": "Also called dynamic binding, it resolves the method call at runtime. Used in method overriding."
      },
      {
        "title": "What is early binding?",
        "answer": "Also called static binding, it resolves the method call at compile time. Used in method overloading."
      },
      {
        "title": "What is the open-closed principle?",
        "answer": "Software entities should be open for extension but closed for modification."
      },
      {
        "title": "What is the SOLID principle?",
        "answer": "A set of 5 OOP principles: Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation, Dependency Inversion."
      },
      {
        "title": "What is a virtual function?",
        "answer": "In C++, a virtual function allows runtime polymorphism, enabling overriding in derived classes."
      },
      {
        "title": "What is object slicing?",
        "answer": "When an object of a derived class is assigned to a base class object, and extra members are 'sliced' off."
      },
      {
        "title": "What is the difference between deep copy and shallow copy?",
        "answer": "Shallow copy copies reference; deep copy copies actual object. Deep copy creates separate memory."
      },
      {
        "title": "What is composition in OOP?",
        "answer": "It is a design principle where a class contains objects of other classes as members. 'Has-a' relationship."
      },
      {
        "title": "What is a friend function (C++)?",
        "answer": "A function declared with 'friend' keyword can access private members of a class."
      },
      {
        "title": "What is a singleton class?",
        "answer": "A class that allows only one instance throughout the program. Useful for logging, DB connections, etc."
      },
      {
        "title": "Why is OOP important?",
        "answer": "OOP helps in code reusability, maintainability, abstraction, and modularity in large software systems."
      },
      {
        "title": "What is dynamic dispatch?",
        "answer": "The process of selecting which implementation of a polymorphic method to call at runtime."
      },
      {
        "title": "What is method hiding?",
        "answer": "When a subclass defines a static method with the same name as one in the parent class, it hides the parent’s version."
      },
      {
        "title": "What is the difference between == and .equals() in Java?",
        "answer": "== compares object references; .equals() compares object content (if overridden properly)."
      },
      {
        "title": "What is multiple constructors in a class called?",
        "answer": "Constructor overloading — allows different ways to create an object based on input parameters."
      },
      {
        "title": "Can constructors be inherited?",
        "answer": "No. Constructors are not inherited in OOP languages like Java or C++."
      },
      {
        "title": "What is a pure virtual function?",
        "answer": "A virtual function with no definition, declared using '= 0'. It forces derived classes to implement it."
      },
      {
        "title": "What is the use of interfaces in Java?",
        "answer": "Interfaces are used to achieve full abstraction and multiple inheritance."
      },
      {
        "title": "Can abstract classes have constructors?",
        "answer": "Yes, abstract classes can have constructors, but they cannot be directly instantiated."
      },
      {
        "title": "What is tight coupling and loose coupling?",
        "answer": "Tight coupling: classes are highly dependent. Loose coupling: classes interact with minimal dependencies (preferred)."
      },
      {
        "title": "What is dependency injection?",
        "answer": "A design pattern where object dependencies are provided from outside rather than created inside the class."
      },
      {
        "title": "What is object lifetime?",
        "answer": "The duration between object creation and destruction. Controlled by constructors and destructors or garbage collection."
      }
    ],



  
    "collections": [
      {
        "title": "What is the Java Collections Framework?",
        "answer": "Java Collections Framework is a set of classes and interfaces that implement commonly reusable data structures like lists, sets, maps, and queues."
      },
      {
        "title": "What are the main interfaces in the Collections Framework?",
        "answer": "The main interfaces are:\n1. Collection\n2. List\n3. Set\n4. Queue\n5. Map"
      },
      {
        "title": "What is the difference between Collection and Collections?",
        "answer": "Collection is an interface. Collections is a utility class that provides static methods for collection operations like sorting and searching."
      },
      {
        "title": "What is List in Java?",
        "answer": "List is an interface that represents an ordered collection that allows duplicate elements. Examples: ArrayList, LinkedList."
      },
      {
        "title": "What is Set in Java?",
        "answer": "Set is an interface that represents a collection of unique elements. Examples: HashSet, TreeSet, LinkedHashSet."
      },
      {
        "title": "What is Map in Java?",
        "answer": "Map is an interface that stores key-value pairs. Keys are unique. Examples: HashMap, TreeMap, LinkedHashMap."
      },
      {
        "title": "What is the difference between ArrayList and LinkedList?",
        "answer": "ArrayList is backed by a dynamic array (fast access, slow insertion/deletion). LinkedList uses a doubly linked list (fast insertion/deletion, slow access)."
      },
      {
        "title": "What is the difference between HashSet and TreeSet?",
        "answer": "HashSet is unordered and faster. TreeSet maintains sorted order but is slower as it uses a Red-Black tree."
      },
      {
        "title": "What is the difference between HashMap and TreeMap?",
        "answer": "HashMap is unordered and faster. TreeMap maintains keys in sorted order and is slower."
      },
      {
        "title": "What is the default initial capacity of ArrayList?",
        "answer": "10"
      },
      {
        "title": "What is the time complexity of get() in ArrayList?",
        "answer": "O(1) — because it's based on an array."
      },
      {
        "title": "What is the time complexity of remove() in LinkedList?",
        "answer": "O(1) if node reference is known; O(n) if index is given."
      },
      {
        "title": "Can List contain duplicate elements?",
        "answer": "Yes, List allows duplicate elements."
      },
      {
        "title": "Can Set contain null values?",
        "answer": "HashSet allows one null, TreeSet does not allow null because it needs to compare elements."
      },
      {
        "title": "Can Map contain null keys?",
        "answer": "HashMap allows one null key. TreeMap does not (throws NullPointerException if comparator is used)."
      },
      {
        "title": "What is Iterator in Java?",
        "answer": "Iterator is an interface used to iterate over collections. It provides methods like hasNext(), next(), and remove()."
      },
      {
        "title": "What is ListIterator?",
        "answer": "ListIterator is used to iterate both forward and backward over a list. Only used with List."
      },
      {
        "title": "What is the difference between Iterator and Enumeration?",
        "answer": "Enumeration is legacy (read-only). Iterator is more modern and allows element removal."
      },
      {
        "title": "What is fail-fast behavior?",
        "answer": "A fail-fast iterator throws ConcurrentModificationException if the collection is modified during iteration."
      },
      {
        "title": "What is fail-safe iterator?",
        "answer": "It doesn’t throw ConcurrentModificationException because it works on a clone (e.g., CopyOnWriteArrayList)."
      },
      {
        "title": "What is the purpose of Collections.sort()?",
        "answer": "To sort a list of Comparable elements in ascending order. Uses TimSort (a hybrid of merge + insertion sort)."
      },
      {
        "title": "How to sort a List in descending order?",
        "answer": "Use: Collections.sort(list, Collections.reverseOrder())"
      },
      {
        "title": "What is the use of Comparator?",
        "answer": "Comparator allows custom sorting logic by defining compare(a, b)."
      },
      {
        "title": "What is the use of Comparable interface?",
        "answer": "It defines the natural ordering of objects using compareTo()."
      },
      {
        "title": "How do you synchronize a collection?",
        "answer": "Use Collections.synchronizedList(), or use concurrent collections like CopyOnWriteArrayList."
      },
      {
        "title": "What is the difference between HashMap and Hashtable?",
        "answer": "HashMap is not thread-safe and faster. Hashtable is synchronized but slower and legacy."
      },
      {
        "title": "What is LinkedHashMap?",
        "answer": "A HashMap that maintains insertion order using a linked list of buckets."
      },
      {
        "title": "What is PriorityQueue in Java?",
        "answer": "A queue based on a heap data structure. Elements are ordered based on natural ordering or custom comparator."
      },
      {
        "title": "What is the time complexity for insertion in HashMap?",
        "answer": "O(1) on average. Worst case O(n) when many collisions occur."
      },
      {
        "title": "What is the load factor in HashMap?",
        "answer": "Load factor is a threshold (default 0.75). When exceeded, the map resizes (rehashes)."
      },
      {
        "title": "How do you make a Map thread-safe?",
        "answer": "Use ConcurrentHashMap or wrap HashMap with Collections.synchronizedMap()."
      },
      {
        "title": "What is the difference between poll() and remove() in Queue?",
        "answer": "poll() returns null if queue is empty; remove() throws NoSuchElementException."
      },
      {
        "title": "What is Stack in Java?",
        "answer": "Stack is a class (extends Vector) implementing LIFO behavior using push() and pop()."
      },
      {
        "title": "What is Deque in Java?",
        "answer": "A double-ended queue that allows insertion/removal from both ends. Implemented by ArrayDeque."
      },
      {
        "title": "What is NavigableMap?",
        "answer": "An extension of SortedMap with navigation methods like lowerKey(), ceilingKey(), floorEntry()."
      },
      {
        "title": "What is ConcurrentHashMap?",
        "answer": "A thread-safe Map that allows concurrent read/write operations with segment locking."
      },
      {
        "title": "What is TreeMap implemented as?",
        "answer": "It’s implemented using a Red-Black Tree — a type of self-balancing binary search tree."
      },
      {
        "title": "What is EnumSet?",
        "answer": "A high-performance Set implementation for enum types."
      },
      {
        "title": "What is the difference between remove() and clear()?",
        "answer": "remove(obj) deletes a single element; clear() removes all elements from the collection."
      },
      {
        "title": "How do you convert a List to a Set?",
        "answer": "Use: `Set<T> set = new HashSet<>(list);`"
      },
      {
        "title": "Can you store duplicate keys in a Map?",
        "answer": "No. Maps cannot contain duplicate keys; values can be duplicated."
      },
      {
        "title": "What is ArrayDeque?",
        "answer": "An implementation of Deque interface using resizable array, faster than Stack/LinkedList for stack/queue operations."
      },
      {
        "title": "What is WeakHashMap?",
        "answer": "A Map where entries are removed automatically by garbage collector when key is no longer used elsewhere."
      },
      {
        "title": "What is the benefit of LinkedHashSet?",
        "answer": "It maintains insertion order and avoids duplicates."
      },
      {
        "title": "What is CopyOnWriteArrayList?",
        "answer": "A thread-safe variant of ArrayList where all mutative operations make a fresh copy of the array."
      },
      {
        "title": "What is the difference between peek() and poll() in Queue?",
        "answer": "peek() retrieves the head without removing it; poll() retrieves and removes the head."
      },
      {
        "title": "How do you create an unmodifiable collection?",
        "answer": "Use: `Collections.unmodifiableList(list)`"
      },
      {
        "title": "What is Spliterator in Java?",
        "answer": "Spliterator is used to iterate and split elements for parallel processing (supports streams)."
      },
      {
        "title": "Can you sort a Map by values?",
        "answer": "Yes, by converting to a List of entries and sorting with a custom comparator."
      }
    ],


    "divide-conquer-and-two-pointer":[
      {
        "title": "What is the Divide and Conquer strategy?",
        "answer": "Divide and Conquer is a problem-solving approach where the problem is divided into subproblems, each solved independently, and the results are combined."
      },
      {
        "title": "What are the main steps of Divide and Conquer?",
        "answer": "1. Divide the problem into smaller parts\n2. Conquer (solve) each part recursively\n3. Combine the results"
      },
      {
        "title": "What is the time complexity of Divide and Conquer algorithms?",
        "answer": "It depends on the recurrence relation. Many follow T(n) = 2T(n/2) + O(n), which resolves to O(n log n)."
      },
      {
        "title": "What is the Master Theorem?",
        "answer": "It is a tool to determine time complexity for divide-and-conquer algorithms with recurrence: T(n) = aT(n/b) + f(n)."
      },
      {
        "title": "What are some classic Divide and Conquer algorithms?",
        "answer": "Merge Sort, Quick Sort, Binary Search, Karatsuba Multiplication, Strassen Matrix Multiplication"
      },
      {
        "title": "How does Merge Sort use Divide and Conquer?",
        "answer": "It splits the array into halves, sorts each half recursively, then merges them into a sorted array."
      },
      {
        "title": "How does Quick Sort use Divide and Conquer?",
        "answer": "It chooses a pivot, partitions the array around it, then recursively sorts the subarrays."
      },
      {
        "title": "Is Binary Search a Divide and Conquer algorithm?",
        "answer": "Yes, because it divides the search space in half at each step and solves one half."
      },
      {
        "title": "What is the benefit of Divide and Conquer?",
        "answer": "It simplifies complex problems and often reduces time complexity significantly."
      },
      {
        "title": "What is the drawback of Divide and Conquer?",
        "answer": "It can increase space complexity due to recursion or temporary arrays (e.g., in Merge Sort)."
      },
      {
        "title": "What is the time complexity of Merge Sort using Master Theorem?",
        "answer": "T(n) = 2T(n/2) + O(n) → O(n log n)"
      },
      {
        "title": "What is Karatsuba algorithm?",
        "answer": "A fast multiplication algorithm that uses Divide and Conquer to multiply two numbers in less than O(n²) time."
      },
      {
        "title": "What is the use of Divide and Conquer in matrix multiplication?",
        "answer": "Strassen’s Algorithm uses this technique to multiply matrices faster than O(n³)."
      },
      {
        "title": "What is a recurrence relation?",
        "answer": "It expresses the time complexity of a recursive algorithm in terms of the size of its subproblems."
      },
      {
        "title": "What are problems not suitable for Divide and Conquer?",
        "answer": "Problems with overlapping subproblems — better solved using Dynamic Programming."
      },
      {
        "title": "What is the space complexity of Merge Sort?",
        "answer": "O(n), because it uses extra space for temporary arrays."
      },
      {
        "title": "What is the space complexity of Quick Sort?",
        "answer": "O(log n) for average case recursion stack."
      },
      {
        "title": "What is the difference between Divide & Conquer and DP?",
        "answer": "Divide & Conquer solves subproblems independently. DP stores and reuses solutions to overlapping subproblems."
      },
      {
        "title": "What is the Two Pointers technique?",
        "answer": "It involves using two indices (pointers) that move through an array to solve problems efficiently."
      },
      {
        "title": "What kind of problems use Two Pointers?",
        "answer": "1. Sorted array problems\n2. Pairs with target sum\n3. Removing duplicates\n4. Sliding windows"
      },
      {
        "title": "What are the types of Two Pointers?",
        "answer": "1. Opposite direction: Start and end pointers moving toward each other\n2. Same direction: Both move forward"
      },
      {
        "title": "How does Two Pointers solve sorted array problems?",
        "answer": "You start one pointer at the beginning and one at the end, and adjust based on the sum/condition."
      },
      {
        "title": "What is the time complexity of most Two Pointer algorithms?",
        "answer": "O(n) — both pointers traverse the array only once."
      },
      {
        "title": "Can Two Pointers be used on unsorted arrays?",
        "answer": "Yes, but often requires sorting first. Otherwise, logic may fail unless constraints are carefully handled."
      },
      {
        "title": "What’s the Two Pointers approach for ‘Pair Sum = target’ in a sorted array?",
        "answer": "Use one pointer at start and one at end. If sum is too small, move start; if too big, move end."
      },
      {
        "title": "How do you use Two Pointers for removing duplicates from a sorted array?",
        "answer": "Use a slow pointer to track unique values and a fast pointer to explore new elements."
      },
      {
        "title": "How does Two Pointers solve the container with most water problem?",
        "answer": "Start with pointers at both ends. Move the pointer with the shorter height to potentially find a taller one."
      },
      {
        "title": "How is Two Pointers used in palindrome checking?",
        "answer": "Use one pointer at the start and one at the end, compare characters while moving inward."
      },
      {
        "title": "What is sliding window vs two pointers?",
        "answer": "Sliding window is a type of two-pointer method where the window (range) size is fixed or adjusted as needed."
      },
      {
        "title": "Can Two Pointers be used for strings?",
        "answer": "Yes. It’s often used for problems involving substring comparison, palindromes, or character matching."
      },
      {
        "title": "What is the difference between Brute Force and Two Pointers?",
        "answer": "Brute force checks all pairs: O(n²). Two pointers can solve many such problems in O(n) by reducing redundant checks."
      },
      {
        "title": "How do you use Two Pointers for Dutch National Flag problem?",
        "answer": "Use three pointers (low, mid, high) to partition the array in a single pass."
      },
      {
        "title": "What is the time complexity of finding 3Sum using Two Pointers?",
        "answer": "O(n²). Fix one element and use two pointers to find remaining pair."
      },
      {
        "title": "Can you use Two Pointers in linked lists?",
        "answer": "Yes. Common use case: slow and fast pointers to find cycle or middle of the list."
      },
      {
        "title": "How to use Two Pointers to reverse an array?",
        "answer": "Start one pointer at the start and one at the end. Swap elements and move inward until they meet."
      },
      {
        "title": "What is the two-pointer method for longest substring without repeating characters?",
        "answer": "Use one pointer to start and one to expand the window, using a set or map to track characters."
      },
      {
        "title": "Is two pointer technique used in binary search problems?",
        "answer": "Sometimes. Modified binary search problems may use two pointers to limit the search space."
      },
      {
        "title": "What is the space complexity of Two Pointers?",
        "answer": "O(1) — since it only uses a few pointer variables regardless of input size."
      },
      {
        "title": "Can Two Pointers be used to merge two sorted arrays?",
        "answer": "Yes. Use one pointer for each array and merge them by comparing elements step-by-step."
      },
      {
        "title": "What’s the difference between Divide and Conquer and Two Pointers?",
        "answer": "Divide and Conquer solves recursively and combines results. Two Pointers solves sequentially in linear time."
      },
      {
        "title": "Can you combine Divide and Conquer with Two Pointers?",
        "answer": "Yes. Example: in Merge Sort, the merge step uses Two Pointers to merge two halves efficiently."
      },
      {
        "title": "How is Two Pointers used in finding the intersection of two sorted arrays?",
        "answer": "Use one pointer for each array, advance whichever has the smaller element until matches are found."
      },
      {
        "title": "What is a common pitfall in Two Pointers approach?",
        "answer": "Forgetting to update both pointers correctly or handling duplicates improperly."
      },
      {
        "title": "When should you avoid Two Pointers?",
        "answer": "When the array is unsorted and you can't sort it, or when a more structured approach (like hashing or DP) is better."
      }
    ],


    "complexity": [
      {
        "title": "What is time complexity?",
        "answer": "Time complexity represents the amount of time an algorithm takes to run as a function of the input size (n)."
      },
      {
        "title": "What is space complexity?",
        "answer": "Space complexity measures the amount of memory or space required by an algorithm during execution."
      },
      {
        "title": "Why is time complexity important?",
        "answer": "It helps analyze and compare the efficiency of algorithms without relying on actual execution time, which varies by hardware."
      },
      {
        "title": "What is Big O notation?",
        "answer": "Big O describes the upper bound (worst-case) time or space complexity of an algorithm."
      },
      {
        "title": "What is the difference between O(1) and O(n)?",
        "answer": "O(1) means constant time — doesn’t depend on input size.\nO(n) means time grows linearly with input size."
      },
      {
        "title": "What is the time complexity of accessing an element in an array?",
        "answer": "O(1), because arrays allow random access via index."
      },
      {
        "title": "What is the time complexity of searching in an unsorted array?",
        "answer": "O(n), because you may have to check every element."
      },
      {
        "title": "What is the time complexity of Binary Search?",
        "answer": "O(log n), since it halves the search space each time."
      },
      {
        "title": "What does O(n²) mean?",
        "answer": "The algorithm’s time grows quadratically with input size. If n doubles, time becomes 4×."
      },
      {
        "title": "What is the best-case, worst-case, and average-case?",
        "answer": "Best: fastest scenario\nWorst: slowest scenario\nAverage: expected time over all cases"
      },
      {
        "title": "What is the time complexity of nested loops?",
        "answer": "Multiply the iterations. For two loops from 0 to n: O(n²)."
      },
      {
        "title": "What is logarithmic time complexity?",
        "answer": "O(log n) means the time grows very slowly with input size. Common in divide-and-conquer algorithms."
      },
      {
        "title": "What is linearithmic complexity?",
        "answer": "O(n log n). Used in efficient sorts like Merge Sort and Heap Sort."
      },
      {
        "title": "What is exponential time complexity?",
        "answer": "O(2ⁿ), where time doubles with every additional input. Seen in brute-force recursive solutions like naive Fibonacci."
      },
      {
        "title": "What is factorial time complexity?",
        "answer": "O(n!) — extremely slow. Occurs in problems like generating all permutations."
      },
      {
        "title": "What is constant time complexity?",
        "answer": "O(1) — time doesn't change with input size. Example: checking if a number is even."
      },
      {
        "title": "What is amortized time complexity?",
        "answer": "It averages the cost over a sequence of operations. Example: dynamic array resize has occasional O(n) but average O(1)."
      },
      {
        "title": "What is the time complexity of HashMap operations?",
        "answer": "Average: O(1) for insert/search/delete. Worst: O(n) (due to collisions)."
      },
      {
        "title": "What is the time complexity of Linked List insert at head?",
        "answer": "O(1) — you simply update a pointer."
      },
      {
        "title": "What is the time complexity of Linked List search?",
        "answer": "O(n) — may need to traverse the entire list."
      },
      {
        "title": "What is the space complexity of recursive functions?",
        "answer": "O(n) — due to call stack frames for each recursive call."
      },
      {
        "title": "What is tail recursion?",
        "answer": "A recursive function where the recursive call is the last operation. Can be optimized to use O(1) space."
      },
      {
        "title": "What is time complexity of Merge Sort?",
        "answer": "O(n log n) — divides the array and merges it efficiently."
      },
      {
        "title": "What is time complexity of Quick Sort?",
        "answer": "Best/Average: O(n log n), Worst: O(n²) — if pivots are poorly chosen."
      },
      {
        "title": "What is the time complexity of Bubble Sort?",
        "answer": "Worst and Average: O(n²), Best (optimized): O(n) if already sorted."
      },
      {
        "title": "What is space complexity of Merge Sort?",
        "answer": "O(n) — due to temporary arrays used during merge."
      },
      {
        "title": "What is space complexity of Quick Sort?",
        "answer": "O(log n) — due to recursion stack (on average)."
      },
      {
        "title": "What is the time complexity of BFS?",
        "answer": "O(V + E), where V = vertices and E = edges."
      },
      {
        "title": "What is the time complexity of DFS?",
        "answer": "O(V + E), like BFS — each edge and vertex is visited once."
      },
      {
        "title": "How to find time complexity from code?",
        "answer": "Analyze loops, recursion, and operations. Add/multiply complexities of independent/combined parts."
      },
      {
        "title": "What is Big Ω (Omega) notation?",
        "answer": "It describes the best-case time complexity of an algorithm."
      },
      {
        "title": "What is Big Θ (Theta) notation?",
        "answer": "It defines the tight bound — both upper and lower — meaning the exact time complexity."
      },
      {
        "title": "Why is O(n log n) better than O(n²)?",
        "answer": "Because it grows much slower. For n = 1000, O(n²) = 1M ops; O(n log n) ≈ 10,000 ops."
      },
      {
        "title": "Which is faster: O(n) or O(log n)?",
        "answer": "O(log n) is faster than O(n), especially as n becomes large."
      },
      {
        "title": "What is the time complexity of generating all subsets of an array?",
        "answer": "O(2ⁿ), since each element can be included or excluded."
      },
      {
        "title": "What is the time complexity of checking if a string is a palindrome?",
        "answer": "O(n), where n is the length of the string."
      },
      {
        "title": "What is the time complexity of matrix multiplication?",
        "answer": "O(n³) for naive method. Optimized algorithms exist but are complex."
      },
      {
        "title": "What is time complexity of finding duplicates using HashSet?",
        "answer": "O(n) — each insert and check takes average O(1)."
      },
      {
        "title": "Why is constant time not always better?",
        "answer": "An algorithm with O(1) may have higher actual runtime than O(n) for small inputs. Big O ignores constants."
      },
      {
        "title": "What is the complexity of inserting in a Binary Search Tree?",
        "answer": "Average: O(log n); Worst: O(n) — if the tree becomes skewed."
      },
      {
        "title": "What is the complexity of accessing elements in a Hash Table?",
        "answer": "Average: O(1), Worst: O(n) in case of many collisions."
      },
      {
        "title": "What is the time complexity of reversing a linked list?",
        "answer": "O(n) — visit each node once and reverse pointers."
      },
      {
        "title": "Can a function have two different time complexities?",
        "answer": "Yes. For example, Best: O(1), Worst: O(n). You can also analyze average case separately."
      },
      {
        "title": "What is the time complexity of checking if two strings are anagrams?",
        "answer": "O(n), using character counts or sorting (O(n log n) if sorted)."
      },
      {
        "title": "What is cache complexity?",
        "answer": "It measures how well an algorithm uses CPU cache. Not covered by Big O but important in practice."
      },
      {
        "title": "Why do we ignore constants in Big O?",
        "answer": "Because they don’t significantly affect scalability as input size grows large."
      },
      {
        "title": "What does T(n) = T(n/2) + 1 imply?",
        "answer": "Time complexity is O(log n). It halves the problem at each step."
      }
    ],
    "recursion-and-backtracking": [
      {
        "title": "What is recursion?",
        "answer": "Recursion is a technique where a function calls itself to solve a smaller subproblem until a base case is reached."
      },
      {
        "title": "What are the components of recursion?",
        "answer": "1. Base Case: When to stop recursion\n2. Recursive Case: Function calling itself with a smaller input"
      },
      {
        "title": "What is the base case in recursion?",
        "answer": "It is the condition where the recursion ends. Without it, the function would call itself indefinitely."
      },
      {
        "title": "What is the time complexity of recursion?",
        "answer": "It depends on the number of recursive calls and work per call. Often analyzed with recurrence relations."
      },
      {
        "title": "What is stack overflow in recursion?",
        "answer": "When recursive calls exceed the call stack limit, causing the program to crash."
      },
      {
        "title": "How is recursion implemented under the hood?",
        "answer": "Using the call stack. Each call adds a new stack frame; once complete, it pops from the stack."
      },
      {
        "title": "What is the difference between recursion and iteration?",
        "answer": "Recursion uses the call stack, may be more elegant. Iteration uses loops and is generally more memory-efficient."
      },
      {
        "title": "What is tail recursion?",
        "answer": "A recursive function where the recursive call is the last operation. Some languages can optimize tail calls to O(1) space."
      },
      {
        "title": "How do you convert recursion to iteration?",
        "answer": "Use a stack or queue to simulate recursive behavior in iterative form."
      },
      {
        "title": "What is the time complexity of recursive factorial?",
        "answer": "O(n), since it makes n recursive calls."
      },
      {
        "title": "What is backtracking?",
        "answer": "Backtracking is a problem-solving method that explores possible solutions and abandons (backtracks) if a path fails."
      },
      {
        "title": "What is the difference between recursion and backtracking?",
        "answer": "Backtracking is a form of recursion that undoes choices when a dead end is reached. Recursion alone doesn’t imply backtracking."
      },
      {
        "title": "What are problems commonly solved using backtracking?",
        "answer": "N-Queens, Sudoku Solver, Rat in a Maze, Subset Generation, Permutations, Word Search"
      },
      {
        "title": "What is the general structure of a backtracking algorithm?",
        "answer": "1. Choose\n2. Explore (recursive call)\n3. Un-choose (backtrack)"
      },
      {
        "title": "Why is backtracking used?",
        "answer": "To explore all potential solutions and find the correct one, especially for combinatorial problems."
      },
      {
        "title": "What is the time complexity of backtracking algorithms?",
        "answer": "Often exponential (e.g., O(2ⁿ) or O(n!)) because all combinations or permutations are explored."
      },
      {
        "title": "Is backtracking brute force?",
        "answer": "Not exactly. It’s a refined brute-force approach that prunes invalid paths early."
      },
      {
        "title": "How is the N-Queens problem solved using backtracking?",
        "answer": "Try placing queens one by one in each row and backtrack if they conflict."
      },
      {
        "title": "What is memoization?",
        "answer": "Storing results of subproblems to avoid recomputation. Used in recursion to reduce time complexity."
      },
      {
        "title": "What is the recursive solution for Fibonacci numbers?",
        "answer": "fib(n) = fib(n-1) + fib(n-2). Base cases: fib(0)=0, fib(1)=1. Time: O(2ⁿ) without memoization."
      },
      {
        "title": "Why is recursion not always preferred?",
        "answer": "It can lead to high memory use due to call stack, and be slower if not optimized with memoization."
      },
      {
        "title": "What is a recursive tree?",
        "answer": "A conceptual structure that represents all recursive calls made by a function."
      },
      {
        "title": "What is pruning in backtracking?",
        "answer": "Skipping over choices that can’t lead to a valid or better solution to reduce time complexity."
      },
      {
        "title": "What is the backtracking approach for generating subsets?",
        "answer": "At each index, choose to include or exclude the current element, and recurse accordingly."
      },
      {
        "title": "How is backtracking used in permutations?",
        "answer": "Fix one element at a time, recursively generate permutations of remaining elements."
      },
      {
        "title": "What is the role of recursion in DFS traversal?",
        "answer": "DFS uses recursion to visit nodes depth-first and backtracks when a node has no unvisited neighbors."
      },
      {
        "title": "What is a real-life example of recursion?",
        "answer": "Matryoshka dolls, function call stacks, directory tree traversal."
      },
      {
        "title": "Can all recursive problems be solved iteratively?",
        "answer": "Yes, using explicit data structures like stacks or queues, but it might be more complex to write."
      },
      {
        "title": "What is the recursive depth?",
        "answer": "The number of times a function calls itself before reaching the base case."
      },
      {
        "title": "How do you avoid TLE (Time Limit Exceeded) in recursion?",
        "answer": "Use memoization, prune unnecessary calls, or convert to DP/iterative solution."
      },
      {
        "title": "How is Sudoku solved using backtracking?",
        "answer": "Try placing digits 1–9 in empty cells, check validity, and backtrack if invalid."
      },
      {
        "title": "Can recursion be used with strings?",
        "answer": "Yes. Examples: reverse string, generate substrings, pattern matching."
      },
      {
        "title": "How to detect infinite recursion?",
        "answer": "If there’s no base case or wrong logic causes recursion to never stop, it results in stack overflow."
      },
      {
        "title": "What is the call stack?",
        "answer": "A structure that keeps track of active function calls in recursion. Each call gets a new stack frame."
      },
      {
        "title": "How is recursion visualized?",
        "answer": "As a tree where each node represents a function call and branches are recursive calls."
      },
      {
        "title": "How to debug recursive functions?",
        "answer": "Use print statements for entry/exit of calls, add parameters to track state, or use a debugger."
      },
      {
        "title": "What is mutual recursion?",
        "answer": "When two or more functions call each other in a recursive cycle."
      },
      {
        "title": "What is the difference between top-down and bottom-up recursion?",
        "answer": "Top-down: start from the main problem and go to base case.\nBottom-up: build from base case up (common in DP)."
      },
      {
        "title": "Can recursion be used in binary trees?",
        "answer": "Yes. Traversals like inorder, preorder, postorder, and operations like height and diameter use recursion."
      },
      {
        "title": "What is the recursive time complexity of Tower of Hanoi?",
        "answer": "O(2ⁿ - 1) where n is the number of disks."
      },
      {
        "title": "Is backtracking always recursive?",
        "answer": "Most backtracking solutions use recursion, but it can also be implemented iteratively using stacks."
      },
      {
        "title": "How to find all valid parentheses combinations using backtracking?",
        "answer": "Add '(' if open < n, add ')' if close < open, and recurse. Use backtracking to explore valid combinations."
      },
      {
        "title": "What is the space complexity of recursive binary tree traversal?",
        "answer": "O(h), where h is the height of the tree due to call stack."
      },
      {
        "title": "How is backtracking used in maze problems?",
        "answer": "Move in all directions from current cell, mark path, and backtrack if dead end is hit."
      },
      {
        "title": "What is the recursive case in backtracking?",
        "answer": "Where you make a choice, explore further, and then undo the choice (backtrack)."
      },
      {
        "title": "How is recursion used in parsing or evaluating expressions?",
        "answer": "Break the expression based on operators, recursively solve left and right parts, and combine results."
      },
      {
        "title": "Can recursion be slower than loops?",
        "answer": "Yes. Recursion adds call stack overhead, which loops avoid."
      }
    ],

    "arrays-and-strings": [
      {
        "title": "What is an array?",
        "answer": "An array is a linear data structure that stores elements of the same type in contiguous memory locations."
      },
      {
        "title": "What is the time complexity for accessing an element in an array?",
        "answer": "O(1), because arrays allow random access using indices."
      },
      {
        "title": "What is the time complexity of inserting at the end of an array?",
        "answer": "O(1) in amortized time if there’s space, but O(n) if resizing is needed in dynamic arrays."
      },
      {
        "title": "What is the time complexity of inserting in the middle of an array?",
        "answer": "O(n), because elements need to be shifted."
      },
      {
        "title": "What is the difference between static and dynamic arrays?",
        "answer": "Static arrays have fixed size. Dynamic arrays (like vectors in C++ or ArrayList in Java) resize as needed."
      },
      {
        "title": "What is a 2D array?",
        "answer": "A 2D array is an array of arrays, used to represent matrices, grids, and tables."
      },
      {
        "title": "What are common operations on arrays?",
        "answer": "Access, Insert, Delete, Traverse, Search, Sort, and Update."
      },
      {
        "title": "How do you find the maximum element in an array?",
        "answer": "Iterate through the array and track the maximum. Time complexity: O(n)."
      },
      {
        "title": "How do you reverse an array?",
        "answer": "Use two pointers — start from both ends and swap until they meet. O(n) time, O(1) space."
      },
      {
        "title": "What is the sliding window technique?",
        "answer": "A method to solve array problems by maintaining a window over elements and sliding it to update result."
      },
      {
        "title": "What is the prefix sum array?",
        "answer": "An array where each element at index i stores the sum of all elements from index 0 to i. Useful for range sum queries."
      },
      {
        "title": "How do you remove duplicates from a sorted array?",
        "answer": "Use two pointers: one for writing unique elements, another for scanning through the array."
      },
      {
        "title": "How do you rotate an array by k steps?",
        "answer": "Reverse entire array, reverse first k elements, reverse remaining elements. Time: O(n), Space: O(1)."
      },
      {
        "title": "What is a string in programming?",
        "answer": "A string is a sequence of characters. In many languages, strings are arrays of characters."
      },
      {
        "title": "What is the time complexity to reverse a string?",
        "answer": "O(n), where n is the length of the string."
      },
      {
        "title": "Are strings mutable in most programming languages?",
        "answer": "Strings are immutable in Java, Python, and JavaScript, but mutable in C/C++ (char arrays)."
      },
      {
        "title": "What are common string operations?",
        "answer": "Concatenation, Substring, Reverse, Compare, Replace, Search, Split, Trim."
      },
      {
        "title": "What is the time complexity of string concatenation?",
        "answer": "O(n) for each concatenation. Use StringBuilder in Java or join in Python for efficiency."
      },
      {
        "title": "What is a palindrome?",
        "answer": "A string that reads the same forward and backward. Example: 'madam'"
      },
      {
        "title": "How do you check if two strings are anagrams?",
        "answer": "Sort both strings or compare character frequencies using a hashmap. Time: O(n log n) or O(n)."
      },
      {
        "title": "What is the difference between String and StringBuilder in Java?",
        "answer": "String is immutable. StringBuilder is mutable and more efficient for repeated concatenations."
      },
      {
        "title": "What is a character array?",
        "answer": "An array of characters, often used to represent strings in low-level languages like C."
      },
      {
        "title": "How do you count character frequencies in a string?",
        "answer": "Use a hashmap or an array of size 26 (for lowercase letters)."
      },
      {
        "title": "What is the two-pointer technique used in string problems?",
        "answer": "It uses two indices (start and end) to scan or compare parts of the string, commonly used in palindrome or substring problems."
      },
      {
        "title": "What is string pattern matching?",
        "answer": "Finding whether a smaller string (pattern) exists within a larger string (text)."
      },
      {
        "title": "What is the naive string matching approach?",
        "answer": "Check each substring of text for match with the pattern. Time complexity: O(m*n)"
      },
      {
        "title": "What is the KMP algorithm?",
        "answer": "Knuth-Morris-Pratt algorithm uses a prefix table to efficiently search for patterns. Time complexity: O(n)."
      },
      {
        "title": "What is the Rabin-Karp algorithm?",
        "answer": "A string matching algorithm using hash values for pattern comparison. Time: O(n) average, O(nm) worst."
      },
      {
        "title": "What is a substring?",
        "answer": "A contiguous part of a string. Example: 'abc' is a substring of 'abcd'."
      },
      {
        "title": "What is the difference between substring and subsequence?",
        "answer": "Substring = contiguous characters.\nSubsequence = can skip characters while preserving order."
      },
      {
        "title": "How do you find the longest palindromic substring?",
        "answer": "Expand around center approach or use Dynamic Programming. Time: O(n²)."
      },
      {
        "title": "How do you find the longest common prefix among strings?",
        "answer": "Sort the array, then compare the first and last string character-by-character."
      },
      {
        "title": "How do you implement strstr() or indexOf()?",
        "answer": "Use sliding window or KMP to check if pattern exists in the text."
      },
      {
        "title": "What is the time complexity to sort an array?",
        "answer": "Depends on algorithm:\nMerge/Quick/Heap: O(n log n),\nBubble/Selection/Insertion: O(n²)"
      },
      {
        "title": "What is the difference between array and list?",
        "answer": "Array: fixed size, contiguous memory.\nList: dynamic size, may use linked structure."
      },
      {
        "title": "How do you find the majority element in an array?",
        "answer": "Use the Boyer-Moore Voting Algorithm. Time: O(n), Space: O(1)."
      },
      {
        "title": "What is the maximum subarray sum problem?",
        "answer": "Find the contiguous subarray with the maximum sum. Solved using Kadane’s algorithm. Time: O(n)."
      },
      {
        "title": "How do you rotate a string?",
        "answer": "Concatenate the string to itself and check if the rotated string is a substring of the result."
      },
      {
        "title": "How do you validate if a string has balanced parentheses?",
        "answer": "Use a stack to push opening brackets and pop when closing brackets match."
      },
      {
        "title": "How to convert a character to integer and vice versa?",
        "answer": "char → int: subtract '0'.\nint → char: add '0'. Example: '5' - '0' = 5."
      },
      {
        "title": "What is lexicographical order in strings?",
        "answer": "It means dictionary order — 'apple' < 'banana' because 'a' comes before 'b'."
      },
      {
        "title": "What is a ragged array?",
        "answer": "An array of arrays where inner arrays have different lengths."
      },
      {
        "title": "How do you find the longest common subsequence (LCS)?",
        "answer": "Use dynamic programming. Time: O(m*n), where m and n are lengths of the two strings."
      },
      {
        "title": "How do you check if a string is a rotation of another?",
        "answer": "Concatenate one string with itself. If the other is a substring of it, it's a rotation."
      },
      {
        "title": "How do you reverse a string without using library functions?",
        "answer": "Convert to character array and swap start and end using a loop."
      },
      {
        "title": "What is the time complexity of checking if all characters are unique?",
        "answer": "O(n) using a Set or array to track characters."
      }
    ],

    "linked-list": [
      {
        "title": "What is a linked list?",
        "answer": "A linked list is a linear data structure where elements (nodes) are stored in non-contiguous memory and connected using pointers."
      },
      {
        "title": "What are the types of linked lists?",
        "answer": "1. Singly Linked List\n2. Doubly Linked List\n3. Circular Linked List"
      },
      {
        "title": "What is a node in a linked list?",
        "answer": "Each node contains data and a reference (or pointer) to the next node in the list."
      },
      {
        "title": "What is the head of a linked list?",
        "answer": "The head is the first node of the linked list. It’s used as the entry point to traverse the list."
      },
      {
        "title": "What is the tail of a linked list?",
        "answer": "The tail is the last node in the linked list whose next pointer is null (in singly) or points to head (in circular)."
      },
      {
        "title": "What is a singly linked list?",
        "answer": "A singly linked list has nodes connected in one direction, where each node points to the next node only."
      },
      {
        "title": "What is a doubly linked list?",
        "answer": "Each node has two pointers — one to the next node and one to the previous node. It allows bidirectional traversal."
      },
      {
        "title": "What is a circular linked list?",
        "answer": "A circular linked list connects the last node to the head, forming a loop. Can be singly or doubly circular."
      },
      {
        "title": "What is the time complexity of inserting at the head?",
        "answer": "O(1) — directly create a new node and point its next to the current head."
      },
      {
        "title": "What is the time complexity of inserting at the end in singly linked list?",
        "answer": "O(n) — you must traverse the entire list to reach the last node."
      },
      {
        "title": "What is the time complexity of deleting the head?",
        "answer": "O(1) — just move the head pointer to the next node."
      },
      {
        "title": "What is the time complexity of deleting the last node in singly linked list?",
        "answer": "O(n) — must traverse to the second last node."
      },
      {
        "title": "Why is linked list preferred over arrays?",
        "answer": "Linked lists are dynamic in size and allow efficient insertions/deletions, unlike arrays which are static and costly to resize."
      },
      {
        "title": "What are drawbacks of linked lists?",
        "answer": "1. Extra memory for pointers\n2. No random access (O(n) to access middle elements)"
      },
      {
        "title": "What is a dummy node?",
        "answer": "A placeholder node used to simplify edge cases in insertion and deletion (especially at head or tail)."
      },
      {
        "title": "What is a sentinel node?",
        "answer": "A special dummy node that doesn’t hold real data but simplifies boundary conditions."
      },
      {
        "title": "What is the difference between stack and linked list?",
        "answer": "Stack uses LIFO, and can be implemented with arrays or linked lists. Linked list is a generic linear data structure."
      },
      {
        "title": "Can linked list be used to implement stack and queue?",
        "answer": "Yes. Stack: use head for push/pop. Queue: insert at tail and remove from head."
      },
      {
        "title": "How do you reverse a linked list?",
        "answer": "Iteratively change each node’s next pointer to point to its previous node. Takes O(n) time and O(1) space."
      },
      {
        "title": "How do you find the length of a linked list?",
        "answer": "Traverse from head and count nodes until null. Time complexity: O(n)."
      },
      {
        "title": "How to find the middle of a linked list?",
        "answer": "Use two pointers: slow (moves 1 step), fast (moves 2 steps). When fast reaches end, slow is at middle."
      },
      {
        "title": "How to detect a cycle in a linked list?",
        "answer": "Use Floyd’s cycle detection algorithm (slow and fast pointers). If they meet, a cycle exists."
      },
      {
        "title": "How to remove a loop in a linked list?",
        "answer": "Use Floyd’s algorithm to find the loop node, then disconnect it by finding the previous node pointing to it."
      },
      {
        "title": "How to find the Nth node from the end?",
        "answer": "Use two pointers. Move the first pointer N steps, then move both together until the first hits the end."
      },
      {
        "title": "What is the time complexity to search for an element?",
        "answer": "O(n), as we must traverse each node until the value is found or list ends."
      },
      {
        "title": "What is the difference between singly and doubly linked list?",
        "answer": "Singly uses one pointer per node (next), doubly uses two (prev and next), enabling backward traversal."
      },
      {
        "title": "What is a circular doubly linked list?",
        "answer": "A doubly linked list where the last node points to the head and the head's prev points to the last node."
      },
      {
        "title": "Can we sort a linked list?",
        "answer": "Yes. Use Merge Sort or Insertion Sort since they don't require random access."
      },
      {
        "title": "How to merge two sorted linked lists?",
        "answer": "Use a dummy node and iterate both lists, picking the smaller node each time to build the merged list."
      },
      {
        "title": "What is the use of linked list in real life?",
        "answer": "Used in memory management, undo functionality, file systems, adjacency lists in graphs."
      },
      {
        "title": "How to delete a node without head pointer?",
        "answer": "Copy the data from the next node to current and delete the next node. Doesn’t work for last node."
      },
      {
        "title": "How do you check if a linked list is palindrome?",
        "answer": "Find middle, reverse the second half, and compare both halves."
      },
      {
        "title": "What is the best sorting algorithm for linked list?",
        "answer": "Merge Sort is preferred because it works well with sequential access and gives O(n log n) time."
      },
      {
        "title": "What is the space complexity of linked list operations?",
        "answer": "O(1) for insert/delete. Total memory used is O(n) for n nodes."
      },
      {
        "title": "What is the difference between array and linked list?",
        "answer": "Arrays offer fast access but are fixed-size. Linked lists are dynamic but offer only sequential access."
      },
      {
        "title": "How is memory managed in linked list?",
        "answer": "Each node is allocated dynamically on the heap. It must be explicitly deleted (in languages like C/C++)."
      },
      {
        "title": "What is a self-referential structure?",
        "answer": "A struct that contains a pointer to another struct of the same type. Used to build linked lists."
      },
      {
        "title": "What happens when you delete a node twice?",
        "answer": "It causes undefined behavior or segmentation fault because you're accessing freed memory."
      },
      {
        "title": "Can a linked list be circular and doubly at the same time?",
        "answer": "Yes. The last node points to the head, and each node has both next and prev pointers."
      },
      {
        "title": "What is memory leak in linked lists?",
        "answer": "It occurs if we lose reference to nodes without freeing them, preventing garbage collection or deallocation."
      },
      {
        "title": "What is the difference between NULL and nullptr?",
        "answer": "In C++, NULL is a macro; nullptr is a type-safe pointer literal (introduced in C++11). Use nullptr in modern code."
      },
      {
        "title": "How is a linked list different from stack/queue?",
        "answer": "Linked lists allow insertions/deletions anywhere. Stack/queue have LIFO/FIFO restrictions and can be implemented using linked lists."
      },
      {
        "title": "Can you traverse a singly linked list backward?",
        "answer": "No, unless you use extra memory (like stack) or convert to a doubly linked list."
      },
      {
        "title": "Can a linked list be implemented recursively?",
        "answer": "Yes, operations like insert, reverse, and traversal can be done using recursive functions."
      },
      {
        "title": "What is flattening of a multilevel linked list?",
        "answer": "It refers to converting a nested list structure (each node may have a child) into a single linear list."
      },
      {
        "title": "How is linked list used in hash tables?",
        "answer": "Used for separate chaining to handle collisions — each bucket is a linked list of entries."
      },
      {
        "title": "How do you rotate a linked list?",
        "answer": "Connect the list into a circle, move to the (n-k)th node, and break the circle there."
      },
      {
        "title": "What is a skip list?",
        "answer": "A layered linked list with pointers that skip over nodes to allow faster search (O(log n))."
      }
    ],
    "stack-and-queue": [
      {
        "title": "What is a stack in DSA?",
        "answer": "A stack is a linear data structure that follows the Last In First Out (LIFO) principle. The last element added is the first to be removed."
      },
      {
        "title": "What are common operations on a stack?",
        "answer": "1. push(x): Add element x to the top\n2. pop(): Remove the top element\n3. top()/peek(): Return the top element\n4. isEmpty(): Check if stack is empty"
      },
      {
        "title": "What is the time complexity of stack operations?",
        "answer": "All stack operations — push, pop, peek — take O(1) time."
      },
      {
        "title": "How is a stack implemented?",
        "answer": "Stacks can be implemented using arrays or linked lists."
      },
      {
        "title": "What is a queue in DSA?",
        "answer": "A queue is a linear data structure that follows the First In First Out (FIFO) principle. The first element added is the first to be removed."
      },
      {
        "title": "What are common operations on a queue?",
        "answer": "1. enqueue(x): Add element x to the rear\n2. dequeue(): Remove element from the front\n3. front(): Get the front element\n4. isEmpty(): Check if queue is empty"
      },
      {
        "title": "What is the time complexity of queue operations?",
        "answer": "All basic queue operations — enqueue and dequeue — take O(1) time."
      },
      {
        "title": "How is a queue implemented?",
        "answer": "Queues can be implemented using arrays, linked lists, or circular arrays."
      },
      {
        "title": "What is the difference between stack and queue?",
        "answer": "Stack: LIFO, insertion and deletion at one end.\nQueue: FIFO, insertion at rear and deletion at front."
      },
      {
        "title": "What is a circular queue?",
        "answer": "A circular queue connects the end to the beginning to reuse space and avoid shifting elements."
      },
      {
        "title": "What is a deque?",
        "answer": "Deque (Double-Ended Queue) allows insertion and deletion from both front and rear ends."
      },
      {
        "title": "What is a priority queue?",
        "answer": "A priority queue removes elements based on priority rather than order of insertion. Usually implemented using heaps."
      },
      {
        "title": "What is stack overflow?",
        "answer": "Stack overflow occurs when elements are pushed onto a full stack without enough memory space."
      },
      {
        "title": "What is stack underflow?",
        "answer": "Stack underflow occurs when pop() is called on an empty stack."
      },
      {
        "title": "What is queue overflow?",
        "answer": "Queue overflow occurs when enqueue is attempted on a full queue (in array-based implementation)."
      },
      {
        "title": "What is queue underflow?",
        "answer": "Queue underflow occurs when dequeue is called on an empty queue."
      },
      {
        "title": "What are real-world examples of stacks?",
        "answer": "Browser back button, undo functionality, expression evaluation, function call stack."
      },
      {
        "title": "What are real-world examples of queues?",
        "answer": "Printer queue, customer service lines, task scheduling in OS, BFS traversal."
      },
      {
        "title": "What is the use of stacks in expression evaluation?",
        "answer": "Stacks are used to convert and evaluate infix, prefix, and postfix expressions."
      },
      {
        "title": "What is infix, prefix, and postfix?",
        "answer": "Infix: A + B\nPrefix: +AB\nPostfix: AB+"
      },
      {
        "title": "How do you convert infix to postfix using stack?",
        "answer": "Use a stack to hold operators and output operands directly. Apply precedence and associativity rules."
      },
      {
        "title": "How are function calls managed using stack?",
        "answer": "Function calls use a call stack to track the return address and local variables of each function."
      },
      {
        "title": "What is the auxiliary stack?",
        "answer": "An additional stack used to support operations like getMin() or sort in a stack."
      },
      {
        "title": "How to implement a queue using two stacks?",
        "answer": "Use two stacks:\n- Push elements in one\n- Pop by reversing into the other when needed."
      },
      {
        "title": "How to implement a stack using two queues?",
        "answer": "Push to one queue. For pop, dequeue all except the last element and enqueue back to the other queue."
      },
      {
        "title": "What is monotonic stack?",
        "answer": "A stack where elements are in non-increasing or non-decreasing order. Useful in problems like Next Greater Element."
      },
      {
        "title": "What is Next Greater Element (NGE)?",
        "answer": "For each element, find the next element that is greater. Solved using a stack in O(n)."
      },
      {
        "title": "What is sliding window maximum using deque?",
        "answer": "Maintain a deque of indices in decreasing order of values. The front gives the max for the current window."
      },
      {
        "title": "How is stack used in DFS traversal?",
        "answer": "DFS uses a stack to backtrack nodes as it explores deep into the graph."
      },
      {
        "title": "How is queue used in BFS traversal?",
        "answer": "BFS uses a queue to explore nodes level by level."
      },
      {
        "title": "What is the space complexity of stack and queue?",
        "answer": "Both stack and queue use O(n) space where n is the number of elements stored."
      },
      {
        "title": "What is the time complexity of reversing a stack?",
        "answer": "Using recursion or an extra stack, it takes O(n) time."
      },
      {
        "title": "What is a bounded queue?",
        "answer": "A queue with fixed maximum size. Once full, enqueue is blocked or fails."
      },
      {
        "title": "What is an unbounded queue?",
        "answer": "A dynamically resizable queue with no fixed size limit."
      },
      {
        "title": "What is the role of queue in OS process scheduling?",
        "answer": "Processes are stored in ready queues, waiting queues, etc., and handled based on their scheduling algorithm."
      },
      {
        "title": "Can stack be used to reverse a string?",
        "answer": "Yes. Push each character and pop them one by one to reverse the string."
      },
      {
        "title": "How can you implement min stack?",
        "answer": "Use two stacks — one for elements, one for the current minimum at each level."
      },
      {
        "title": "What is a circular buffer?",
        "answer": "A fixed-size buffer implemented as a circular queue to reuse memory efficiently."
      },
      {
        "title": "How is a queue different from a linked list?",
        "answer": "A queue enforces FIFO operations, while a linked list allows insert/delete at any position."
      },
      {
        "title": "What is the advantage of using deque over stack/queue?",
        "answer": "Deque supports all operations of both stack and queue with constant time complexity from both ends."
      },
      {
        "title": "How to check balanced parentheses using stack?",
        "answer": "Push opening brackets. On closing, pop and match. If stack is empty at end, it’s balanced."
      },
      {
        "title": "What is multi-level queue scheduling?",
        "answer": "Processes are divided into multiple queues based on priority and each queue is scheduled separately."
      },
      {
        "title": "What is tail pointer in a queue?",
        "answer": "Tail points to the last element where new insertions happen in the queue."
      },
      {
        "title": "What is the difference between ArrayQueue and LinkedListQueue?",
        "answer": "ArrayQueue has fixed size and may waste space. LinkedListQueue grows dynamically but uses extra memory for pointers."
      },
      {
        "title": "What is a blocking queue?",
        "answer": "A thread-safe queue where enqueue/dequeue waits if the queue is full/empty (used in producer-consumer problems)."
      },
      {
        "title": "Can we use a stack to simulate recursion?",
        "answer": "Yes. Recursion uses the system call stack internally to store function calls and variables."
      },
      {
        "title": "What is amortized analysis in stacks or queues?",
        "answer": "It averages the time over a sequence of operations (e.g., implementing dynamic array stack)."
      }
    ],

    "binary-and-BST": [
      {
        "title": "What is a binary tree?",
        "answer": "A binary tree is a tree data structure where each node has at most two children, referred to as left and right child."
      },
      {
        "title": "What is the difference between a binary tree and a binary search tree?",
        "answer": "In a binary tree, node placement has no specific order. In a BST, the left child is smaller and the right child is greater than the node."
      },
      {
        "title": "What is the root in a binary tree?",
        "answer": "The root is the topmost node of the tree. It has no parent and is the entry point to the tree."
      },
      {
        "title": "What is a leaf node?",
        "answer": "A leaf node is a node with no children."
      },
      {
        "title": "What is the height of a binary tree?",
        "answer": "Height is the number of edges in the longest path from the root to a leaf."
      },
      {
        "title": "What is the depth of a node?",
        "answer": "The depth is the number of edges from the root to that node."
      },
      {
        "title": "What is a full binary tree?",
        "answer": "A full binary tree is a tree where every node has either 0 or 2 children."
      },
      {
        "title": "What is a complete binary tree?",
        "answer": "In a complete binary tree, all levels are filled except possibly the last, which is filled from left to right."
      },
      {
        "title": "What is a perfect binary tree?",
        "answer": "A perfect binary tree is a full binary tree in which all leaf nodes are at the same level."
      },
      {
        "title": "What is a balanced binary tree?",
        "answer": "A tree where the height difference between left and right subtrees of any node is at most 1."
      },
      {
        "title": "What is a skewed binary tree?",
        "answer": "A tree where all nodes are either only on the left (left-skewed) or only on the right (right-skewed), forming a linked list."
      },
      {
        "title": "What is in-order traversal?",
        "answer": "In-order: Left → Root → Right.\nIn BST, this gives values in sorted order."
      },
      {
        "title": "What is pre-order traversal?",
        "answer": "Pre-order: Root → Left → Right.\nUsed to create a copy of the tree."
      },
      {
        "title": "What is post-order traversal?",
        "answer": "Post-order: Left → Right → Root.\nUsed to delete the tree."
      },
      {
        "title": "What is level-order traversal?",
        "answer": "Also called BFS. Nodes are visited level by level using a queue."
      },
      {
        "title": "How is a binary tree implemented?",
        "answer": "It can be implemented using classes/structures with pointers or using arrays for complete trees."
      },
      {
        "title": "What is the time complexity for tree traversals?",
        "answer": "All basic traversals (in-order, pre-order, post-order, level-order) take O(n) time."
      },
      {
        "title": "What is a Binary Search Tree (BST)?",
        "answer": "A BST is a binary tree where the left child has smaller value and the right child has greater value than the parent."
      },
      {
        "title": "Why use BSTs?",
        "answer": "They allow fast insertion, deletion, and lookup in O(log n) time on average (if balanced)."
      },
      {
        "title": "What is the time complexity of searching in BST?",
        "answer": "Average: O(log n); Worst-case (unbalanced tree): O(n)"
      },
      {
        "title": "How to insert a node in BST?",
        "answer": "Compare the new value with root. Recursively insert to left if smaller, right if greater."
      },
      {
        "title": "How to delete a node in BST?",
        "answer": "Cases:\n1. Leaf: remove it\n2. One child: replace node with child\n3. Two children: replace with inorder successor or predecessor"
      },
      {
        "title": "What is the inorder successor in BST?",
        "answer": "The next higher node (smallest node in the right subtree)."
      },
      {
        "title": "What is the inorder predecessor in BST?",
        "answer": "The previous smaller node (largest node in the left subtree)."
      },
      {
        "title": "How to find the minimum in a BST?",
        "answer": "Traverse left till the end. Leftmost node is the minimum."
      },
      {
        "title": "How to find the maximum in a BST?",
        "answer": "Traverse right till the end. Rightmost node is the maximum."
      },
      {
        "title": "What is a balanced BST?",
        "answer": "A BST where the height difference between left and right subtree is minimal, ensuring O(log n) operations."
      },
      {
        "title": "What is AVL Tree?",
        "answer": "An AVL tree is a self-balancing BST where the height difference between left and right subtrees is at most 1."
      },
      {
        "title": "What is a Red-Black Tree?",
        "answer": "A self-balancing BST where each node is colored red or black and follows specific rules to keep the tree balanced."
      },
      {
        "title": "What is Morris Traversal?",
        "answer": "A space-optimized traversal technique that uses threads (modified pointers) to perform in-order traversal without recursion or stack."
      },
      {
        "title": "What is BST property?",
        "answer": "All left descendants ≤ node < all right descendants for each node."
      },
      {
        "title": "Can a BST have duplicate elements?",
        "answer": "Typically no, but in some implementations duplicates are allowed in left/right consistently."
      },
      {
        "title": "What is the space complexity of a binary tree?",
        "answer": "O(n), where n is the number of nodes. For recursive traversals, stack space may also be used."
      },
      {
        "title": "How are binary trees used in expression evaluation?",
        "answer": "Expression trees represent operands as leaves and operators as internal nodes.\nUsed in compilers and calculators."
      },
      {
        "title": "What is a threaded binary tree?",
        "answer": "A binary tree where null pointers are used to store in-order predecessor or successor for faster traversal."
      },
      {
        "title": "What is a binary heap?",
        "answer": "A binary heap is a complete binary tree used to implement priority queues.\nNot a BST — follows heap property instead."
      },
      {
        "title": "What is the difference between heap and BST?",
        "answer": "BST maintains full order (in-order traversal gives sorted list). Heap maintains partial order based on min/max at root."
      },
      {
        "title": "What is lowest common ancestor (LCA) in BST?",
        "answer": "It’s the deepest node that is an ancestor of both given nodes.\nBST logic: if both values are < node, go left; if > node, go right."
      },
      {
        "title": "What is serialization of binary tree?",
        "answer": "Converting a binary tree to a string format to store/transfer, and then rebuild (deserialize) it."
      },
      {
        "title": "How can you build a BST from preorder traversal?",
        "answer": "Use a stack to keep track of node bounds. Recursively insert values maintaining min and max range."
      },
      {
        "title": "How is a binary tree used in Huffman encoding?",
        "answer": "It builds a prefix tree (Huffman tree) using frequencies to create efficient binary encodings."
      },
      {
        "title": "What is vertical order traversal?",
        "answer": "It prints nodes vertically from leftmost to rightmost columns using level + horizontal distances."
      },
      {
        "title": "What is boundary traversal in binary tree?",
        "answer": "Traversal that prints left boundary, leaves, and right boundary in anti-clockwise order."
      },
      {
        "title": "What is diameter of a binary tree?",
        "answer": "The longest path between any two nodes (not necessarily through root). Calculated as max of left height + right height + 1."
      },
      {
        "title": "How do you mirror a binary tree?",
        "answer": "Swap left and right subtrees recursively."
      },
      {
        "title": "What is the time complexity for BST insert, search, delete?",
        "answer": "Average: O(log n); Worst (skewed tree): O(n). Balanced trees maintain O(log n)."
      },
      {
        "title": "What is flattening a binary tree?",
        "answer": "Transforming a binary tree to a linked list in-place using preorder traversal."
      }
    ],

    "hashing-and-heaps": [
        {
          "title": "What is hashing in DSA?",
          "answer": "Hashing is a technique to convert data (like keys) into a fixed-size value (called hash code) using a hash function, typically used for fast data retrieval."
        },
        {
          "title": "What is a hash function?",
          "answer": "A hash function maps input data to a specific index in a hash table. A good hash function minimizes collisions and distributes keys uniformly."
        },
        {
          "title": "What is a hash table?",
          "answer": "A hash table is a data structure that stores key-value pairs using a hash function to calculate index for each key."
        },
        {
          "title": "What is a collision in hashing?",
          "answer": "A collision occurs when two different keys produce the same hash index. This must be handled to avoid overwriting values."
        },
        {
          "title": "How are collisions handled?",
          "answer": "Common techniques include:\n1. Chaining (linked lists at each index)\n2. Open Addressing (like Linear or Quadratic Probing)"
        },
        {
          "title": "What is linear probing?",
          "answer": "In linear probing, if a collision occurs, we linearly check the next available index to place the value."
        },
        {
          "title": "What is quadratic probing?",
          "answer": "Quadratic probing resolves collision by checking i² distance away on each attempt.\nExample: h(k) + 1², h(k) + 2², etc."
        },
        {
          "title": "What is double hashing?",
          "answer": "Double hashing uses a second hash function to calculate step size during collisions, reducing clustering."
        },
        {
          "title": "What is load factor in a hash table?",
          "answer": "Load factor = number of entries / size of table. It helps determine when to resize the hash table."
        },
        {
          "title": "What happens when load factor is high?",
          "answer": "Too many collisions. Performance drops. Solution: rehash into a bigger table."
        },
        {
          "title": "What is rehashing?",
          "answer": "Rehashing is resizing the hash table and re-inserting all keys using a new hash function or size."
        },
        {
          "title": "What is the time complexity of hash table operations?",
          "answer": "Average: O(1) for insert/search/delete\nWorst: O(n) (if collisions are poorly handled)"
        },
        {
          "title": "What are practical applications of hashing?",
          "answer": "Hash maps, password storage (using cryptographic hash), symbol tables, caching, indexing databases."
        },
        {
          "title": "What is a perfect hash function?",
          "answer": "A perfect hash function maps keys to unique indices with no collisions — ideal but hard to construct."
        },
        {
          "title": "What is a cryptographic hash function?",
          "answer": "Used in security, it should be deterministic, fast, irreversible, collision-resistant (e.g., SHA-256)."
        },
        {
          "title": "What is a map in C++ or HashMap in Java?",
          "answer": "These are implementations of hash tables to store key-value pairs. They offer O(1) average time operations."
        },
        {
          "title": "What is unordered_map in C++?",
          "answer": "It is a hash table-based map. Provides average O(1) time for insert/search/delete unlike map (which is O(log n))."
        },
        {
          "title": "What is a multimap or multihashmap?",
          "answer": "It allows multiple values for the same key."
        },
        {
          "title": "How is hashing used in problems like 'Two Sum'?",
          "answer": "Hash the required complement and check if it exists. Makes the solution O(n) instead of O(n²)."
        },
        {
          "title": "What is a heap in DSA?",
          "answer": "A heap is a special tree-based structure that satisfies the heap property (Max-Heap or Min-Heap)."
        },
        {
          "title": "What is a Min-Heap?",
          "answer": "A Min-Heap is a binary tree where each parent node is less than or equal to its children.\nRoot is the minimum element."
        },
        {
          "title": "What is a Max-Heap?",
          "answer": "A Max-Heap is a binary tree where each parent node is greater than or equal to its children.\nRoot is the maximum element."
        },
        {
          "title": "What is the use of heaps?",
          "answer": "Used for priority queues, scheduling tasks, heapsort, median finding, Dijkstra’s algorithm, etc."
        },
        {
          "title": "What is a priority queue?",
          "answer": "It is a queue where elements are served based on priority, implemented using heaps."
        },
        {
          "title": "What are heap operations and their time complexities?",
          "answer": "Insert: O(log n)\nDelete: O(log n)\nPeek/Top: O(1)"
        },
        {
          "title": "What is heapify?",
          "answer": "Heapify converts an arbitrary array into a heap structure in O(n) time."
        },
        {
          "title": "What is the space complexity of a heap?",
          "answer": "O(n) – proportional to the number of elements stored."
        },
        {
          "title": "How is heap represented in an array?",
          "answer": "For index i:\nLeft child: 2i+1\nRight child: 2i+2\nParent: (i-1)/2"
        },
        {
          "title": "What is heapsort?",
          "answer": "A comparison-based sorting algorithm that builds a heap and repeatedly extracts max/min.\nTime: O(n log n)"
        },
        {
          "title": "What is the difference between BST and heap?",
          "answer": "BST maintains full ordering (left < root < right).\nHeap maintains only heap property (not complete order)."
        },
        {
          "title": "What is a d-ary heap?",
          "answer": "A generalization of binary heap where each node has d children instead of 2."
        },
        {
          "title": "What is a Fibonacci heap?",
          "answer": "An advanced heap that supports very fast decrease-key and merge operations, used in Dijkstra and Prim’s."
        },
        {
          "title": "What is a lazy deletion in heap?",
          "answer": "Instead of removing an element immediately, it's marked deleted and skipped later to save time."
        },
        {
          "title": "What is the median in a stream problem and how are heaps used?",
          "answer": "Two heaps (maxHeap + minHeap) track the lower and upper halves to efficiently find median in O(log n) time."
        },
        {
          "title": "What is the advantage of using heap for top-k elements?",
          "answer": "Maintain a min-heap of size k. Helps track top k largest/smallest elements in O(n log k)."
        },
        {
          "title": "How does heap help in Dijkstra's algorithm?",
          "answer": "A min-heap stores nodes with the shortest tentative distance for efficient retrieval in O(log n)."
        },
        {
          "title": "Can we use heaps for sorting strings?",
          "answer": "Yes, we can use heaps to sort any comparable objects, including strings."
        },
        {
          "title": "What is the difference between stack/queue and heap?",
          "answer": "Stack/queue operate on order of insertion. Heap gives access based on priority (min/max value)."
        },
        {
          "title": "Why are heaps preferred for real-time systems?",
          "answer": "Because they support quick access to highest/lowest priority tasks in O(1) or O(log n) time."
        },
        {
          "title": "What is a complete binary tree?",
          "answer": "A binary tree where all levels are completely filled except possibly the last, which is filled from left to right.\nHeaps are always complete binary trees."
        },
        {
          "title": "What is the difference between complete and full binary tree?",
          "answer": "Full binary tree has 0 or 2 children per node. Complete binary tree fills all levels except last from left to right."
        },
        {
          "title": "How is heap deletion performed?",
          "answer": "Remove root, place last element at root, then heapify down to restore heap property."
        },
        {
          "title": "What happens when we insert into a heap?",
          "answer": "The element is added at the bottom-most, right-most position, then heapify-up is used to maintain the heap."
        },
        {
          "title": "Can heap have duplicate values?",
          "answer": "Yes. Heap structure only ensures the order between parent and child, not uniqueness."
        },
        {
          "title": "Why is a heap not used to find all k smallest elements directly?",
          "answer": "Because for unsorted extraction, sorting or a better data structure may be more efficient than repeated minHeap extraction."
        },
        {
          "title": "What is min-heapify and max-heapify?",
          "answer": "They are functions that correct a single violation of the heap property in a subtree rooted at a node."
        }
      
    ],
    "dp": [
        {
          "title": "What is Dynamic Programming?",
          "answer": "Dynamic Programming (DP) is an optimization technique used to solve complex problems by breaking them into simpler overlapping subproblems and solving each subproblem only once, storing the results."
        },
        {
          "title": "When should you use Dynamic Programming?",
          "answer": "Use DP when a problem has both overlapping subproblems and optimal substructure.\nExample: Fibonacci, where f(n) = f(n-1) + f(n-2)"
        },
        {
          "title": "What is the difference between DP and recursion?",
          "answer": "Recursion solves subproblems again and again, leading to exponential time. DP stores the result of subproblems to avoid recomputation, resulting in polynomial time."
        },
        {
          "title": "What is memoization?",
          "answer": "Memoization is a top-down DP technique where you store the result of subproblems in a map or array to avoid recomputation."
        },
        {
          "title": "What is tabulation?",
          "answer": "Tabulation is a bottom-up DP approach where you solve all subproblems iteratively and store their results in a table (usually an array)."
        },
        {
          "title": "How do you identify if a problem can be solved with DP?",
          "answer": "Check for overlapping subproblems and optimal substructure. If solving a bigger problem depends on solutions to smaller repeated subproblems, DP can be used."
        },
        {
          "title": "What are overlapping subproblems?",
          "answer": "Overlapping subproblems mean the same subproblem is solved multiple times.\nExample: Fibonacci – f(5) calls f(4) and f(3); f(4) again calls f(3)."
        },
        {
          "title": "What is optimal substructure?",
          "answer": "Optimal substructure means the optimal solution to a problem is built using optimal solutions of its subproblems.\nExample: Shortest path in a graph."
        },
        {
          "title": "What are some classic DP problems?",
          "answer": "Fibonacci, Knapsack, Longest Common Subsequence, Longest Increasing Subsequence, Matrix Chain Multiplication, Edit Distance."
        },
        {
          "title": "What is the time complexity of memoized Fibonacci?",
          "answer": "O(n), because each state f(i) is computed once and stored."
        },
        {
          "title": "Why does plain recursion fail for large inputs?",
          "answer": "It recomputes the same subproblems many times, leading to exponential time and stack overflow for large inputs."
        },
        {
          "title": "What is a DP state?",
          "answer": "A DP state is a representation of a subproblem using parameters.\nExample: dp[i][j] could represent the solution for i-th and j-th elements."
        },
        {
          "title": "How do you define the state transition?",
          "answer": "State transition shows how to compute a state using previously computed states.\nExample: dp[i] = dp[i-1] + dp[i-2]"
        },
        {
          "title": "What is space optimization in DP?",
          "answer": "If only a few previous values are needed, reduce space by storing only those instead of the whole DP array.\nExample: Fibonacci with O(1) space."
        },
        {
          "title": "What is the base case in DP?",
          "answer": "It is the simplest subproblem which can be solved directly.\nExample: dp[0] = 0 in Fibonacci."
        },
        {
          "title": "Why is bottom-up DP generally more efficient than top-down?",
          "answer": "It avoids function call overhead and ensures every subproblem is solved only once in a known order."
        },
        {
          "title": "What is a 1D DP?",
          "answer": "When only one parameter is required to represent the state, we use a 1D array.\nExample: dp[i] for climbing stairs."
        },
        {
          "title": "What is a 2D DP?",
          "answer": "When two parameters are needed to define a state.\nExample: dp[i][j] for LCS between two strings."
        },
        {
          "title": "What is the subset sum problem?",
          "answer": "Check if a subset of the array sums up to a target. Use dp[i][sum] = true/false."
        },
        {
          "title": "How does DP help in solving the 0/1 Knapsack problem?",
          "answer": "It stores maximum value for each item and weight capacity, avoiding recomputation.\nExample: dp[i][w] = max of including or excluding item i."
        },
        {
          "title": "What is the difference between 0/1 and fractional knapsack?",
          "answer": "0/1 requires DP as items are either picked or not. Fractional uses greedy approach."
        },
        {
          "title": "What is the Longest Common Subsequence (LCS) problem?",
          "answer": "Find the length of the longest subsequence common to two strings.\nDP state: dp[i][j] = LCS of s1[0..i-1] and s2[0..j-1]"
        },
        {
          "title": "What is the time complexity of LCS using DP?",
          "answer": "O(n × m), where n and m are lengths of the two strings."
        },
        {
          "title": "What is the Longest Increasing Subsequence (LIS)?",
          "answer": "Find the longest increasing subsequence in an array.\nNaive DP: O(n²); Optimized: O(n log n)"
        },
        {
          "title": "How is Matrix Chain Multiplication solved using DP?",
          "answer": "Use DP to minimize total cost of matrix multiplication by dividing at all possible points and storing the best."
        },
        {
          "title": "What is the Edit Distance problem?",
          "answer": "Find minimum operations (insert, delete, replace) to convert one string to another.\nState: dp[i][j] = cost to convert s1[0..i-1] to s2[0..j-1]"
        },
        {
          "title": "What is topological order used for in DP?",
          "answer": "In DAG-based DP, solving in topological order ensures subproblems are solved before dependent problems."
        },
        {
          "title": "What is bitmask DP?",
          "answer": "Use a bitmask (binary number) to represent subsets in problems like TSP or set cover.\nExample: dp[mask][i] = shortest path ending at i using mask set."
        },
        {
          "title": "What is digit DP?",
          "answer": "Digit DP solves problems involving digits of numbers with constraints, like counting valid numbers below N."
        },
        {
          "title": "What is sliding window DP?",
          "answer": "Use a fixed-size window over the array and update the state efficiently to reduce space or time."
        },
        {
          "title": "What is the difference between DP and Greedy?",
          "answer": "Greedy picks locally optimal choices without looking ahead. DP checks all subproblems and guarantees optimal global solution."
        },
        {
          "title": "Can you use DP for all optimization problems?",
          "answer": "No, only problems with overlapping subproblems and optimal substructure can be solved with DP."
        },
        {
          "title": "Why is memoization called top-down?",
          "answer": "Because the main problem is solved first, and smaller subproblems are computed only when needed."
        },
        {
          "title": "Why is tabulation called bottom-up?",
          "answer": "Because it solves the smallest subproblems first and builds up to the final solution."
        },
        {
          "title": "What are the typical steps to solve a DP problem?",
          "answer": "1. Identify states\n2. Define transitions\n3. Set base cases\n4. Use memoization or tabulation\n5. Return final state value"
        },
        {
          "title": "What is unbounded knapsack?",
          "answer": "You can use each item multiple times.\nState: dp[i][w] = max(dp[i][w], val[i] + dp[i][w - wt[i]])"
        },
        {
          "title": "What is the coin change problem?",
          "answer": "Find minimum number of coins to make up a value.\nState: dp[amount] = min(dp[amount - coin] + 1)"
        },
        {
          "title": "How is the climbing stairs problem solved using DP?",
          "answer": "It’s like Fibonacci: dp[i] = dp[i-1] + dp[i-2], representing steps to reach stair i."
        },
        {
          "title": "Can DP be applied to games?",
          "answer": "Yes, many 2-player games with turn-based logic and score differences can be solved using DP with minimax or DP states."
        },
        {
          "title": "What is palindromic substring DP?",
          "answer": "You check if s[i..j] is palindrome based on s[i+1..j-1] and whether s[i] == s[j].\nState: dp[i][j] = true if s[i..j] is palindrome."
        },
        {
          "title": "Can DP work with graphs?",
          "answer": "Yes, especially in DAGs using topological order, or with memoization over visited states."
        },
        {
          "title": "How do you debug a DP solution?",
          "answer": "Print your DP table, check base cases, and verify transitions step-by-step."
        },
        {
          "title": "Why does DP use a table?",
          "answer": "To store results of subproblems so that each is solved only once."
        },
        {
          "title": "What are multiple state DP problems?",
          "answer": "Problems where each state has multiple components like dp[i][j][k].\nUsed in games, path problems, or knapsack variants."
        },
        {
          "title": "What is the frog jump problem in DP?",
          "answer": "Find minimum cost for frog to jump from 0 to n-1 index with 1 or 2 jumps.\ndp[i] = min(dp[i-1] + cost, dp[i-2] + cost)"
        },
        {
          "title": "Why is thinking recursively helpful in DP?",
          "answer": "Because defining a problem in terms of smaller subproblems (recursion) helps identify the DP state and transition."
        },
        {
          "title": "What are some famous contests/problems using DP?",
          "answer": "Problems like Tiling, Partition, Rod Cutting, Ninja Training, House Robber, and Leetcode’s Decode Ways."
        }
  
    ],



    "graphs": [
        {
          "title": "What is a graph in DSA?",
          "answer": "A graph is a collection of nodes (vertices) connected by edges. It is used to represent pairwise relationships like roads, networks, or dependencies."
        },
        {
          "title": "What are the types of graphs?",
          "answer": "Graphs can be directed (edges have direction) or undirected (edges have no direction), and weighted (edges have cost) or unweighted."
        },
        {
          "title": "What is a directed graph?",
          "answer": "A directed graph (digraph) has edges with direction, meaning from one node to another. Example: A → B"
        },
        {
          "title": "What is an undirected graph?",
          "answer": "An undirected graph has bidirectional edges. Example: A—B means both A is connected to B and vice versa."
        },
        {
          "title": "What is a weighted graph?",
          "answer": "A graph where each edge has a weight or cost associated with it.\nExample: A—(3)—B means weight between A and B is 3."
        },
        {
          "title": "What is an adjacency matrix?",
          "answer": "It’s a 2D array used to represent a graph. If there’s an edge from i to j, matrix[i][j] = 1 (or the weight if weighted)."
        },
        {
          "title": "What is an adjacency list?",
          "answer": "It stores a list of neighbors for each node.\nExample: graph[0] = [1, 2] means node 0 connects to 1 and 2."
        },
        {
          "title": "Which is better: adjacency list or matrix?",
          "answer": "Adjacency list is better for sparse graphs (few edges), while adjacency matrix is better for dense graphs (many edges)."
        },
        {
          "title": "What is the degree of a vertex?",
          "answer": "In undirected graphs, it’s the number of edges connected to it. In directed graphs, we have in-degree and out-degree."
        },
        {
          "title": "What is a path in a graph?",
          "answer": "A path is a sequence of vertices connected by edges.\nExample: A → B → C is a path from A to C."
        },
        {
          "title": "What is a cycle in a graph?",
          "answer": "A cycle is a path where the first and last nodes are the same, and no edge or vertex is repeated (except the start/end)."
        },
        {
          "title": "What is a connected graph?",
          "answer": "An undirected graph is connected if there's a path between every pair of nodes."
        },
        {
          "title": "What is a strongly connected graph?",
          "answer": "A directed graph is strongly connected if there's a path from every node to every other node in both directions."
        },
        {
          "title": "What is Breadth-First Search (BFS)?",
          "answer": "BFS is a traversal algorithm that explores neighbors level by level using a queue."
        },
        {
          "title": "What is Depth-First Search (DFS)?",
          "answer": "DFS explores as deep as possible before backtracking, using recursion or a stack."
        },
        {
          "title": "What data structure is used in BFS?",
          "answer": "A queue is used to store the next nodes to visit."
        },
        {
          "title": "What data structure is used in DFS?",
          "answer": "A stack is used, or recursion with an implicit call stack."
        },
        {
          "title": "What is the time complexity of BFS or DFS?",
          "answer": "O(V + E), where V is number of vertices and E is number of edges."
        },
        {
          "title": "How do you detect a cycle in an undirected graph?",
          "answer": "Use DFS or Union-Find. If a visited node is encountered again (excluding the parent), there’s a cycle."
        },
        {
          "title": "How do you detect a cycle in a directed graph?",
          "answer": "Use DFS with a recursion stack. If a node is visited again while still on the call stack, it’s a cycle."
        },
        {
          "title": "What is a topological sort?",
          "answer": "Topological sort is a linear ordering of vertices such that for every directed edge u → v, u appears before v."
        },
        {
          "title": "Which graph must be used for topological sort?",
          "answer": "Only Directed Acyclic Graphs (DAGs) can be topologically sorted."
        },
        {
          "title": "What is Kahn’s algorithm?",
          "answer": "Kahn’s algorithm uses BFS and in-degrees to perform topological sorting of a DAG."
        },
        {
          "title": "What is the difference between a tree and a graph?",
          "answer": "A tree is a special kind of graph with no cycles and exactly one path between any two nodes."
        },
        {
          "title": "What is a spanning tree?",
          "answer": "A spanning tree is a subset of a graph that includes all vertices and is a tree (no cycles)."
        },
        {
          "title": "What is a minimum spanning tree (MST)?",
          "answer": "It’s a spanning tree with the smallest possible total edge weight."
        },
        {
          "title": "Which algorithms are used for MST?",
          "answer": "1. Prim’s Algorithm\n2. Kruskal’s Algorithm"
        },
        {
          "title": "What is Prim’s Algorithm?",
          "answer": "Prim’s algorithm grows the MST by adding the smallest edge from the already-built MST using a priority queue."
        },
        {
          "title": "What is Kruskal’s Algorithm?",
          "answer": "Kruskal’s algorithm sorts all edges and adds the smallest ones that don’t form a cycle, using Union-Find."
        },
        {
          "title": "What is the Union-Find data structure?",
          "answer": "Union-Find (Disjoint Set Union) is used to track connected components. Supports union() and find() operations."
        },
        {
          "title": "What is path compression in Union-Find?",
          "answer": "It optimizes the find() operation by flattening the structure, making future queries faster."
        },
        {
          "title": "What is Dijkstra’s algorithm?",
          "answer": "Dijkstra finds the shortest path from a source node to all other nodes in a weighted graph without negative weights."
        },
        {
          "title": "What data structure is used in Dijkstra’s algorithm?",
          "answer": "A priority queue (min-heap) is used to always process the closest node first."
        },
        {
          "title": "What is Bellman-Ford algorithm?",
          "answer": "It finds shortest paths from a source node and works with negative weights. It can also detect negative cycles."
        },
        {
          "title": "What is the difference between Dijkstra and Bellman-Ford?",
          "answer": "Dijkstra is faster but doesn’t work with negative weights. Bellman-Ford handles negatives and detects negative cycles."
        },
        {
          "title": "What is Floyd-Warshall algorithm?",
          "answer": "It finds shortest paths between all pairs of vertices in a graph using dynamic programming."
        },
        {
          "title": "What is a bipartite graph?",
          "answer": "A graph whose vertices can be divided into two sets such that no edge connects vertices within the same set."
        },
        {
          "title": "How to check if a graph is bipartite?",
          "answer": "Use BFS or DFS and try to color the graph with two colors. If successful, it's bipartite."
        },
        {
          "title": "What is a bridge in a graph?",
          "answer": "An edge is a bridge if removing it increases the number of connected components."
        },
        {
          "title": "What is an articulation point?",
          "answer": "A node is an articulation point if removing it increases the number of connected components."
        },
        {
          "title": "What is a DAG?",
          "answer": "A Directed Acyclic Graph has no cycles and all edges have direction. Used in scheduling and task ordering."
        },
        {
          "title": "What is a shortest path?",
          "answer": "The path between two nodes with the minimum sum of edge weights."
        },
        {
          "title": "What is the difference between DFS and BFS?",
          "answer": "DFS goes deep first, uses a stack or recursion. BFS explores neighbors first, uses a queue. BFS is better for shortest path in unweighted graphs."
        },
        {
          "title": "What is transitive closure of a graph?",
          "answer": "It shows reachability: whether a path exists between every pair of nodes. Floyd-Warshall can compute it."
        },
        {
          "title": "What is a Hamiltonian path?",
          "answer": "A path that visits every vertex exactly once. Unlike Euler path, it focuses on visiting vertices, not edges."
        },
        {
          "title": "What is an Eulerian path?",
          "answer": "A path that uses every edge exactly once. Eulerian circuit ends at the starting vertex."
        },
        {
          "title": "What is a graph traversal?",
          "answer": "It means visiting all nodes in a graph in some order — BFS or DFS are common traversal techniques."
        },
        {
          "title": "What is a self-loop in a graph?",
          "answer": "It is an edge that connects a vertex to itself.\nExample: A → A"
        },
        {
          "title": "How are graphs used in real life?",
          "answer": "Graphs are used in GPS navigation, social networks, network routing, job scheduling, and game theory."
        }
      
    ],
    "bit-manipulation": [
      {
        "title": "What is bit manipulation?",
        "answer": "Bit manipulation refers to using bitwise operators to perform operations at the bit level, such as setting, clearing, or toggling bits."
      },
      {
        "title": "What are the common bitwise operators?",
        "answer": "AND (&), OR (|), XOR (^), NOT (~), LEFT SHIFT (<<), RIGHT SHIFT (>>)"
      },
      {
        "title": "What is the AND (&) operator used for?",
        "answer": "It compares each bit of two numbers and returns 1 if both bits are 1.\nExample: 5 & 3 = 1"
      },
      {
        "title": "What is the OR (|) operator used for?",
        "answer": "It compares each bit of two numbers and returns 1 if at least one bit is 1.\nExample: 5 | 3 = 7"
      },
      {
        "title": "What is the XOR (^) operator used for?",
        "answer": "It returns 1 if the bits are different.\nExample: 5 ^ 3 = 6"
      },
      {
        "title": "What is the NOT (~) operator?",
        "answer": "It flips all the bits of a number.\nExample: ~5 = -6 (in 2’s complement representation)"
      },
      {
        "title": "What does LEFT SHIFT (<<) do?",
        "answer": "It shifts bits to the left and appends 0s from the right.\nExample: 5 << 1 = 10"
      },
      {
        "title": "What does RIGHT SHIFT (>>) do?",
        "answer": "It shifts bits to the right and discards rightmost bits.\nExample: 5 >> 1 = 2"
      },
      {
        "title": "How do you check if a number is even or odd using bits?",
        "answer": "Use `n & 1`. If result is 0, it’s even; if 1, it’s odd."
      },
      {
        "title": "How do you multiply a number by 2 using bits?",
        "answer": "Left shift: `n << 1` equals `n * 2`"
      },
      {
        "title": "How do you divide a number by 2 using bits?",
        "answer": "Right shift: `n >> 1` equals `n / 2` (for positive numbers)"
      },
      {
        "title": "How do you set the ith bit of a number?",
        "answer": "Use: `n | (1 << i)`"
      },
      {
        "title": "How do you clear the ith bit of a number?",
        "answer": "Use: `n & ~(1 << i)`"
      },
      {
        "title": "How do you toggle the ith bit of a number?",
        "answer": "Use: `n ^ (1 << i)`"
      },
      {
        "title": "How do you check if the ith bit is set?",
        "answer": "Use: `n & (1 << i)`. If result ≠ 0, bit is set."
      },
      {
        "title": "How do you count the number of set bits (1s)?",
        "answer": "Use Brian Kernighan's algorithm: while (n) { count++; n &= (n - 1); }"
      },
      {
        "title": "What is Brian Kernighan’s Algorithm?",
        "answer": "It removes the rightmost set bit in each iteration. Efficient for counting set bits."
      },
      {
        "title": "How to check if a number is a power of 2?",
        "answer": "Use: `n > 0 && (n & (n - 1)) == 0`"
      },
      {
        "title": "What is the use of XOR in bit manipulation?",
        "answer": "1. XOR with itself: n ^ n = 0\n2. XOR with 0: n ^ 0 = n\n3. Used to swap and find unique elements."
      },
      {
        "title": "How to swap two numbers using XOR?",
        "answer": "a = a ^ b; b = a ^ b; a = a ^ b;"
      },
      {
        "title": "How to find the only non-repeating number when others repeat twice?",
        "answer": "XOR all elements. The result is the unique number."
      },
      {
        "title": "What if every element appears thrice except one?",
        "answer": "Use bitwise sum approach: Count set bits at each position modulo 3."
      },
      {
        "title": "How to isolate the rightmost set bit?",
        "answer": "`n & -n` isolates the lowest set bit."
      },
      {
        "title": "How to turn off the rightmost set bit?",
        "answer": "`n & (n - 1)` clears the lowest set bit."
      },
      {
        "title": "What is the significance of n & (n - 1)?",
        "answer": "It removes the lowest set bit. Useful in many algorithms like Hamming weight and power of 2 checks."
      },
      {
        "title": "How do you check if two numbers differ by only one bit?",
        "answer": "Check if `x ^ y` is a power of 2."
      },
      {
        "title": "How do you find the position of the rightmost set bit?",
        "answer": "Use `log2(n & -n) + 1`"
      },
      {
        "title": "What is the Hamming distance between two numbers?",
        "answer": "It is the number of positions where bits differ.\nUse: count of set bits in `x ^ y`."
      },
      {
        "title": "What is a bitmask?",
        "answer": "A pattern of bits used to perform operations like enable/disable/select bits in a number."
      },
      {
        "title": "How are bitmasks used in DP problems?",
        "answer": "To represent subsets in problems like Traveling Salesman, Set Cover, etc."
      },
      {
        "title": "What is Gray code?",
        "answer": "A sequence where two successive values differ in only one bit. Used in encoding and error correction."
      },
      {
        "title": "What is the formula to generate nth Gray code?",
        "answer": "`gray(n) = n ^ (n >> 1)`"
      },
      {
        "title": "What are practical applications of bit manipulation?",
        "answer": "Memory optimization, cryptography, graphics, DP with bitmask, fast math operations."
      },
      {
        "title": "How do you generate all subsets of a set using bits?",
        "answer": "Use integers from 0 to 2ⁿ - 1 where each bit represents inclusion/exclusion of element."
      },
      {
        "title": "What is bitwise AND of all numbers in a range?",
        "answer": "Keep shifting both left until they match. The result is common prefix."
      },
      {
        "title": "How to determine the number of bits needed to represent a number?",
        "answer": "Use `floor(log2(n)) + 1` or use built-in `bit_length()` in Python."
      },
      {
        "title": "What is population count?",
        "answer": "Also called Hamming weight — it counts number of 1s in binary representation."
      },
      {
        "title": "How to efficiently find log base 2 of an integer?",
        "answer": "Use built-in log2(n) or bit shifts with counters. Can also use __builtin_clz() in C++."
      },
      {
        "title": "What are unset bits?",
        "answer": "Bits that are 0 in a binary representation."
      },
      {
        "title": "How do you set all bits to the right of the rightmost set bit?",
        "answer": "`n | (n - 1)` sets all bits to the right of rightmost set bit."
      },
      {
        "title": "How do you check if a number has alternating bits?",
        "answer": "Use: `n ^ (n >> 1)` should be all 1s like 0b1111... Check if (x & (x + 1)) == 0"
      },
      {
        "title": "How do you convert a decimal number to binary using bitwise?",
        "answer": "Use n & 1 to get LSB, then shift: n = n >> 1. Store/reverse bits."
      },
      {
        "title": "What is a fast way to multiply two numbers using bits?",
        "answer": "Use the Russian peasant method: double and halve with additions and bit shifts."
      },
      {
        "title": "Can we divide using bitwise operations?",
        "answer": "Yes, through repeated subtraction and shifting (used in binary division algorithms)."
      },
      {
        "title": "What is bit-level parallelism?",
        "answer": "Technique of processing multiple bits in parallel using bitwise ops. Used in compression, DP, and SIMD."
      },
      {
        "title": "What is the difference between signed and unsigned bit shifting?",
        "answer": "Signed shift (>>) retains sign bit for negative numbers; unsigned (>>>) shifts in zeros."
      },
      {
        "title": "What is a trap in negative right shifting?",
        "answer": "In some languages, right shifting negative numbers retains the sign bit, giving incorrect logical result."
      }
    ],


  
    "binary-search-sorting": [
      {
        "title": "What is Binary Search?",
        "answer": "Binary Search is an efficient algorithm to find an element in a sorted array by repeatedly dividing the search space in half."
      },
      {
        "title": "What is the time complexity of Binary Search?",
        "answer": "O(log n), where n is the number of elements in the array."
      },
      {
        "title": "Can Binary Search be applied to unsorted arrays?",
        "answer": "No. Binary Search requires the array to be sorted."
      },
      {
        "title": "What is the space complexity of Binary Search?",
        "answer": "O(1) for iterative version and O(log n) for recursive version due to call stack."
      },
      {
        "title": "How does Binary Search work?",
        "answer": "1. Find mid = (low + high) / 2\n2. If target == mid → return\n3. If target < mid → search left\n4. Else → search right"
      },
      {
        "title": "How is Binary Search used in finding the lower/upper bound?",
        "answer": "Modify the condition to find the smallest/largest index where a value could be inserted without violating order."
      },
      {
        "title": "What is Binary Search on answer?",
        "answer": "It is a technique where Binary Search is applied on a range of answers instead of an array.\nExample: Minimize the max pages assigned in book allocation problem."
      },
      {
        "title": "What are some applications of Binary Search?",
        "answer": "Finding element in sorted data, peak element, square root, search in rotated array, parametric search."
      },
      {
        "title": "What is a Sorting Algorithm?",
        "answer": "A sorting algorithm arranges elements in a particular order (ascending/descending) to improve searchability or readability."
      },
      {
        "title": "What is Bubble Sort?",
        "answer": "Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order."
      },
      {
        "title": "What is the time complexity of Bubble Sort?",
        "answer": "Best: O(n) (if optimized), Worst: O(n²), Average: O(n²)"
      },
      {
        "title": "What is Insertion Sort?",
        "answer": "Insertion Sort builds the sorted array one element at a time by inserting current element into its correct position."
      },
      {
        "title": "What is the time complexity of Insertion Sort?",
        "answer": "Best: O(n), Worst: O(n²), Average: O(n²)"
      },
      {
        "title": "What is Selection Sort?",
        "answer": "Selection Sort repeatedly finds the minimum element and places it at the beginning of the array."
      },
      {
        "title": "What is the time complexity of Selection Sort?",
        "answer": "O(n²) for all cases. It performs well on small arrays but is inefficient for large data."
      },
      {
        "title": "What is Merge Sort?",
        "answer": "Merge Sort is a divide-and-conquer algorithm that divides the array into halves, sorts them, and merges the sorted halves."
      },
      {
        "title": "What is the time complexity of Merge Sort?",
        "answer": "O(n log n) for all cases. It’s stable and used for linked lists and external sorting."
      },
      {
        "title": "What is Quick Sort?",
        "answer": "Quick Sort is a divide-and-conquer algorithm that picks a pivot, partitions the array around it, and sorts the subarrays."
      },
      {
        "title": "What is the time complexity of Quick Sort?",
        "answer": "Best & Avg: O(n log n), Worst: O(n²) (happens with bad pivots)"
      },
      {
        "title": "What is Heap Sort?",
        "answer": "Heap Sort builds a max heap and repeatedly extracts the maximum to sort the array."
      },
      {
        "title": "What is the time complexity of Heap Sort?",
        "answer": "O(n log n) in all cases. It’s not stable but doesn’t require additional memory."
      },
      {
        "title": "What is Counting Sort?",
        "answer": "Counting Sort is a non-comparison-based algorithm that counts the frequency of elements and places them accordingly."
      },
      {
        "title": "When is Counting Sort useful?",
        "answer": "When input elements are integers within a limited range. Time complexity is O(n + k)."
      },
      {
        "title": "What is Radix Sort?",
        "answer": "Radix Sort processes elements digit by digit, starting from least significant to most significant digit using Counting Sort."
      },
      {
        "title": "What is the time complexity of Radix Sort?",
        "answer": "O(nk), where k is number of digits. It works best when numbers are small and have fixed digit length."
      },
      {
        "title": "What is Bucket Sort?",
        "answer": "Bucket Sort distributes elements into buckets and sorts each bucket individually, often using Insertion Sort."
      },
      {
        "title": "What are stable sorting algorithms?",
        "answer": "Sorting algorithms that maintain relative order of equal elements.\nExamples: Bubble, Merge, Insertion, Counting, Radix"
      },
      {
        "title": "Which sorting algorithms are unstable?",
        "answer": "Selection Sort, Heap Sort, Quick Sort (default)."
      },
      {
        "title": "Which sorting algorithms are comparison-based?",
        "answer": "Bubble, Insertion, Selection, Merge, Quick, Heap"
      },
      {
        "title": "Which sorting algorithms are not comparison-based?",
        "answer": "Counting Sort, Radix Sort, Bucket Sort — they use value/digit logic instead of comparisons."
      },
      {
        "title": "What is the lower bound for comparison-based sorting?",
        "answer": "Ω(n log n). Any algorithm based only on comparisons cannot be faster than this."
      },
      {
        "title": "Which sorting algorithm is best for small arrays?",
        "answer": "Insertion Sort is preferred for small or nearly sorted arrays due to low overhead."
      },
      {
        "title": "Which sorting algorithm is best for linked lists?",
        "answer": "Merge Sort is efficient for linked lists since it doesn’t require random access."
      },
      {
        "title": "When is Quick Sort preferred over Merge Sort?",
        "answer": "When space is limited and average-case performance is acceptable."
      },
      {
        "title": "What causes Quick Sort to perform badly?",
        "answer": "Poor pivot choices (e.g., smallest/largest element in sorted array) cause O(n²) time."
      },
      {
        "title": "How do you optimize Quick Sort?",
        "answer": "Use randomized pivot or median-of-three technique."
      },
      {
        "title": "What is hybrid sorting?",
        "answer": "A mix of algorithms (e.g., Tim Sort in Python/Java uses Merge + Insertion Sort for real-world efficiency)."
      },
      {
        "title": "Which sorting algorithm is used by Java?",
        "answer": "Java uses Tim Sort for objects (stable, based on Merge + Insertion Sort)."
      },
      {
        "title": "What is Shell Sort?",
        "answer": "Shell Sort is a generalization of Insertion Sort that allows comparison and swapping at far distances."
      },
      {
        "title": "Is Merge Sort in-place?",
        "answer": "No, it uses extra space for temporary arrays."
      },
      {
        "title": "Is Heap Sort in-place?",
        "answer": "Yes, it sorts without requiring extra memory (O(1) space)."
      },
      {
        "title": "What sorting algorithm works well with external memory (e.g., disk)?",
        "answer": "Merge Sort, because it accesses data sequentially."
      },
      {
        "title": "Which sorting algorithm is best for real-time systems?",
        "answer": "Heap Sort — predictable O(n log n) performance and in-place."
      },
      {
        "title": "What is the difference between stable and unstable sorting?",
        "answer": "Stable sort keeps order of equal elements unchanged.\nUnstable sort may change their relative order."
      },
      {
        "title": "What is Tim Sort?",
        "answer": "A hybrid sorting algorithm combining Merge and Insertion Sort for practical efficiency in real-world data."
      },
      {
        "title": "How is Binary Insertion Sort different from normal Insertion Sort?",
        "answer": "It uses Binary Search to find the correct position but still shifts elements.\nTime: O(n log n) comparisons but O(n²) moves."
      },
      {
        "title": "Which sorting algorithm minimizes number of swaps?",
        "answer": "Selection Sort makes the minimum number of swaps — O(n) swaps in worst case."
      },
      {
        "title": "Which sorting algorithm is best in worst case?",
        "answer": "Merge Sort and Heap Sort offer consistent O(n log n) time in worst case."
      }
    ],
    "disjoint-set": [
      {
        "title": "What is a Disjoint Set?",
        "answer": "A Disjoint Set, also known as Union-Find, is a data structure used to keep track of a set of elements partitioned into non-overlapping subsets."
      },
      {
        "title": "What are the main operations in Disjoint Set?",
        "answer": "1. Find(x): Determines the representative (parent) of the set containing x.\n2. Union(x, y): Merges the sets containing x and y."
      },
      {
        "title": "What is the use of Disjoint Set in algorithms?",
        "answer": "Disjoint Set is used in Kruskal’s MST algorithm, cycle detection in graphs, connected components, and network connectivity problems."
      },
      {
        "title": "What is Find operation?",
        "answer": "Find determines the root or representative of the set a particular element belongs to."
      },
      {
        "title": "What is Union operation?",
        "answer": "Union merges two disjoint sets into one, connecting two elements' parent nodes."
      },
      {
        "title": "What is Path Compression?",
        "answer": "Path Compression is an optimization for the Find operation. It flattens the structure of the tree by making every node point directly to the root."
      },
      {
        "title": "What is Union by Rank?",
        "answer": "It is an optimization that attaches the smaller tree under the root of the deeper tree to keep the tree shallow."
      },
      {
        "title": "What is the time complexity of Union-Find with optimizations?",
        "answer": "O(α(n)), where α(n) is the inverse Ackermann function — nearly constant for all practical purposes."
      },
      {
        "title": "What does 'disjoint' mean?",
        "answer": "It means the sets do not share any elements. Each element belongs to exactly one set."
      },
      {
        "title": "What is the initial state of Disjoint Set?",
        "answer": "Each element is its own parent; each is in its own set."
      },
      {
        "title": "How is Disjoint Set represented in memory?",
        "answer": "Using an array or map where each index points to its parent. If an element is its own parent, it's the root."
      },
      {
        "title": "Why is Path Compression important?",
        "answer": "It speeds up future Find operations by reducing the height of the tree structure."
      },
      {
        "title": "How does Union by Rank improve performance?",
        "answer": "By always attaching the smaller tree to the larger one, it keeps the tree height small, leading to faster operations."
      },
      {
        "title": "Is Disjoint Set a tree-based data structure?",
        "answer": "Yes, it internally uses trees where each node points to a parent."
      },
      {
        "title": "How is Disjoint Set different from a HashSet?",
        "answer": "Disjoint Set supports union and find operations across sets, while HashSet is used only for unique elements and membership checking."
      },
      {
        "title": "What are some real-world applications of Disjoint Set?",
        "answer": "1. Kruskal’s MST\n2. Network connectivity\n3. Image processing\n4. Social networks\n5. Cycle detection"
      },
      {
        "title": "Can Disjoint Set be used in dynamic connectivity problems?",
        "answer": "Yes, it is ideal for tracking connected components in a dynamic graph."
      },
      {
        "title": "What is the inverse Ackermann function?",
        "answer": "A very slowly growing function. Even for n up to 10^80, α(n) ≤ 5. That's why Union-Find is considered nearly constant time."
      },
      {
        "title": "Can you implement Disjoint Set using linked lists?",
        "answer": "Yes, but it’s inefficient. Trees with path compression and union by rank are much faster."
      },
      {
        "title": "What data structure is typically used for Disjoint Set?",
        "answer": "An array or hashmap to store parent links and optionally ranks or sizes."
      },
      {
        "title": "How is cycle detection done using Union-Find?",
        "answer": "For every edge, check if the two vertices belong to the same set using Find. If yes, a cycle exists."
      },
      {
        "title": "What is the difference between rank and size in Union-Find?",
        "answer": "Rank is the tree height. Size is the number of elements in the set. Either can be used for union optimization."
      },
      {
        "title": "What happens if we don’t use path compression?",
        "answer": "The tree can become skewed and tall, making Find operations slower — up to O(n) in worst case."
      },
      {
        "title": "What is the base case in Find function?",
        "answer": "If the element is its own parent, then it is the representative (root) of its set."
      },
      {
        "title": "Is Union-Find an online algorithm?",
        "answer": "Yes, because it can handle operations dynamically and incrementally as input arrives."
      },
      {
        "title": "Is Union-Find recursive?",
        "answer": "Find is often implemented recursively for path compression, but it can also be iterative."
      },
      {
        "title": "What is the space complexity of Disjoint Set?",
        "answer": "O(n), where n is the number of elements."
      },
      {
        "title": "How is Union-Find used in Kruskal’s Algorithm?",
        "answer": "It helps determine whether adding an edge would form a cycle by checking if two vertices belong to the same set."
      },
      {
        "title": "What is the output of Find operation?",
        "answer": "The representative or root element of the set to which the input element belongs."
      },
      {
        "title": "Can Disjoint Set handle string elements?",
        "answer": "Yes, with a HashMap-based implementation instead of arrays."
      },
      {
        "title": "Can two sets be merged more than once?",
        "answer": "No, once merged, they become a single set. Repeated unions will have no additional effect."
      },
      {
        "title": "Is Disjoint Set suitable for Directed Graphs?",
        "answer": "Primarily used in undirected graphs. For directed graphs, other algorithms like DFS, Union by Rank + DSU can be customized."
      },
      {
        "title": "How is union by size different from union by rank?",
        "answer": "Union by size merges smaller sized set under the larger one, rather than comparing ranks (tree height)."
      },
      {
        "title": "Can Disjoint Set support rollback operations?",
        "answer": "Not by default. Persistent or undoable DSU (advanced technique) can support rollback."
      },
      {
        "title": "Can you track number of disjoint sets?",
        "answer": "Yes, initialize count = n and decrement when union is successful."
      },
      {
        "title": "What is the role of Disjoint Set in maze generation?",
        "answer": "Used to ensure each cell belongs to one connected region without cycles."
      },
      {
        "title": "How can Disjoint Set detect redundant connections?",
        "answer": "By checking if the two nodes of an edge are already connected using Find. If yes, it's a redundant connection."
      },
      {
        "title": "What is DSU on Tree?",
        "answer": "An advanced optimization using Union-Find to solve subtree queries efficiently in tree data structures."
      },
      {
        "title": "Can Disjoint Set store extra info per set?",
        "answer": "Yes, with union by size or attaching metadata to root nodes like count, sum, min/max."
      },
      {
        "title": "What is the worst-case time complexity of naive Union-Find?",
        "answer": "O(n) per operation, due to tall trees. That’s why optimizations are important."
      },
      {
        "title": "Is Disjoint Set a greedy algorithm?",
        "answer": "No, but it is commonly used in greedy algorithms like Kruskal’s."
      },
      {
        "title": "How to handle dynamic addition of elements in Disjoint Set?",
        "answer": "Use HashMap to lazily initialize elements as needed."
      },
      {
        "title": "Can Disjoint Set be used in social network problems?",
        "answer": "Yes. It can model communities or friend groups by merging users who are connected."
      },
      {
        "title": "What happens if Union is called on two elements already in the same set?",
        "answer": "The operation has no effect. They're already connected."
      },
      {
        "title": "What is union by depth?",
        "answer": "Another name for union by rank — prioritizing smaller height trees to reduce total tree height."
      },
      {
        "title": "Can DSU be parallelized?",
        "answer": "It’s challenging due to shared structure updates, but possible using concurrent DSU in specialized cases."
      },
      {
        "title": "Can Disjoint Set be applied to grid-based problems?",
        "answer": "Yes. It’s commonly used in island counting, percolation, and connectivity in 2D matrices."
      }
    ],
    "trie": [
      {
        "title": "What is a Trie?",
        "answer": "A Trie is a tree-like data structure used to store strings efficiently for operations like insert, search, and prefix matching."
      },
      {
        "title": "What is the main use of Trie?",
        "answer": "Tries are mainly used for autocomplete, spell checking, IP routing, and prefix-based search."
      },
      {
        "title": "What are the components of a Trie node?",
        "answer": "Each node usually contains:\n- A map/array of children\n- A boolean flag to indicate end of word (isEndOfWord)"
      },
      {
        "title": "What is the time complexity of inserting a word in Trie?",
        "answer": "O(L), where L is the length of the word."
      },
      {
        "title": "What is the time complexity of searching in Trie?",
        "answer": "O(L), where L is the length of the word."
      },
      {
        "title": "What is the time complexity of prefix search in Trie?",
        "answer": "O(L), where L is the length of the prefix."
      },
      {
        "title": "How does Trie improve performance over HashMap for prefix queries?",
        "answer": "HashMap doesn't support prefix matching efficiently. Trie shares common prefixes and enables fast lookup."
      },
      {
        "title": "What is the space complexity of a Trie?",
        "answer": "O(N * L), where N is the number of words and L is average word length. Space depends on total unique characters used."
      },
      {
        "title": "Can Trie handle Unicode characters?",
        "answer": "Yes, if implemented using HashMap or dictionary instead of a fixed-size array."
      },
      {
        "title": "How is Trie different from HashMap?",
        "answer": "HashMap provides O(1) lookup for exact keys but not for prefixes. Trie supports fast prefix-based operations."
      },
      {
        "title": "What is isEndOfWord in Trie?",
        "answer": "A boolean flag that marks whether a complete word ends at the current node."
      },
      {
        "title": "How do you delete a word from a Trie?",
        "answer": "Recursively unmark isEndOfWord and delete unnecessary child nodes if they are no longer needed."
      },
      {
        "title": "How do you implement autocomplete using Trie?",
        "answer": "After reaching the prefix node, perform DFS from there to find all words that start with that prefix."
      },
      {
        "title": "What is a compressed Trie?",
        "answer": "Also called Radix Trie. It compresses single-child paths into one node, reducing memory and improving speed."
      },
      {
        "title": "What is a Suffix Trie?",
        "answer": "A Trie that stores all possible suffixes of a string. Useful in string matching problems like substring search."
      },
      {
        "title": "What is a Ternary Search Tree?",
        "answer": "A hybrid between a Binary Search Tree and Trie where each node has 3 pointers: less, equal, and greater."
      },
      {
        "title": "What are real-world applications of Trie?",
        "answer": "Autocomplete, spell checker, DNS lookup, IP routing, T9 predictive text, and dictionary implementations."
      },
      {
        "title": "How is Trie used in search engines?",
        "answer": "For fast lookup and ranking of keywords and prefix-based search suggestions."
      },
      {
        "title": "What are pros of using Trie?",
        "answer": "Fast prefix matching, lexicographic ordering, avoids key collisions unlike hash maps."
      },
      {
        "title": "What are cons of using Trie?",
        "answer": "High space complexity due to many null children in sparse datasets."
      },
      {
        "title": "How is Trie implemented in C++?",
        "answer": "Using arrays of size 26 for lowercase a–z or using unordered_map<char, TrieNode*> for general characters."
      },
      {
        "title": "How do you search for a prefix in Trie?",
        "answer": "Traverse nodes for each character in the prefix. If traversal completes, prefix exists."
      },
      {
        "title": "Can Trie be used for palindrome pair detection?",
        "answer": "Yes. Use reverse word Trie and check for prefix-suffix palindrome conditions during insert/search."
      },
      {
        "title": "What is the difference between Trie and BST?",
        "answer": "BST compares full keys; Trie splits key by characters and shares common prefixes, making prefix search faster."
      },
      {
        "title": "Can Trie be used for pattern matching with wildcards?",
        "answer": "Yes, you can modify DFS to handle '.' or '*' wildcards during search."
      },
      {
        "title": "How do you print all words in a Trie?",
        "answer": "Perform DFS or backtracking from the root while building the path string along the way."
      },
      {
        "title": "Can you implement a spell checker using Trie?",
        "answer": "Yes. Trie can be used to suggest valid words when a typo or prefix is entered."
      },
      {
        "title": "How to find the longest common prefix of words using Trie?",
        "answer": "Insert all words. Then from the root, move down while only one child exists and isEndOfWord is false."
      },
      {
        "title": "What is the difference between Trie and HashSet for word dictionary?",
        "answer": "HashSet is efficient for exact matches; Trie supports prefix-based operations and memory-efficient storage of similar keys."
      },
      {
        "title": "What is Trie pruning?",
        "answer": "Removing unnecessary branches (nodes) after deletion or when they are no longer used."
      },
      {
        "title": "How do you count total words in a Trie?",
        "answer": "Do a DFS traversal and count nodes with isEndOfWord = true."
      },
      {
        "title": "How is Trie useful in IP routing?",
        "answer": "Binary Trie or Patricia Trie stores binary representations of IP addresses for fast longest prefix matching."
      },
      {
        "title": "What is a Patricia Trie?",
        "answer": "A compressed Trie where nodes with only one child are merged. Used in IP lookup and memory optimization."
      },
      {
        "title": "Can Trie be used for substring search?",
        "answer": "Yes, by building a Suffix Trie with all possible suffixes of the text."
      },
      {
        "title": "Is Trie a dynamic data structure?",
        "answer": "Yes. Nodes are dynamically created as new strings are inserted."
      },
      {
        "title": "What is the maximum number of children for a Trie node?",
        "answer": "Depends on the character set. For lowercase English: 26; For ASCII: 128; For Unicode: up to 65536."
      },
      {
        "title": "Can Trie support delete operation?",
        "answer": "Yes, but it requires careful backtracking to remove unused nodes while preserving other words."
      },
      {
        "title": "What is the use of Trie in competitive programming?",
        "answer": "Used in string-related problems involving dictionary, prefix queries, pattern search, and substring checks."
      },
      {
        "title": "Why does Trie perform better than HashMap for autocomplete?",
        "answer": "Trie shares common prefixes, reducing redundant comparisons and space when handling many similar strings."
      },
      {
        "title": "How do you design a Trie class?",
        "answer": "Design methods like insert(word), search(word), startsWith(prefix) and a nested TrieNode class with children and end flag."
      },
      {
        "title": "What are edge cases to consider in Trie operations?",
        "answer": "Empty strings, null characters, deletion of words that are prefixes of other words."
      },
      {
        "title": "What is a wildcard Trie search?",
        "answer": "Allows characters like '.' to match any character in the word. Needs recursive DFS with branching at wildcard."
      },
      {
        "title": "Can Trie be used for Leetcode Word Search II?",
        "answer": "Yes. Use a Trie to store all words, then perform backtracking DFS on board using the Trie for pruning."
      },
      {
        "title": "What is Trie optimization with reference counts?",
        "answer": "Each node keeps track of how many words pass through it, allowing efficient prefix deletions and word counts."
      },
      {
        "title": "How do you count number of words with a given prefix?",
        "answer": "Traverse Trie for the prefix, then count all isEndOfWord=true nodes below using DFS."
      },
      {
        "title": "What is the Leetcode implementation of Trie?",
        "answer": "Leetcode-style Trie has three functions: insert(), search(), startsWith(). It uses nested TrieNode classes and fixed arrays/maps."
      },
      {
        "title": "Why is Trie faster for word search than Set?",
        "answer": "Trie avoids full string comparison and enables early pruning, especially when searching multiple words at once."
      }
    ],

    "greedy":[
      {
        "title": "What is a Greedy Algorithm?",
        "answer": "A greedy algorithm builds up a solution step by step by choosing the locally optimal option at each stage, hoping it leads to a globally optimal solution."
      },
      {
        "title": "When is the greedy approach effective?",
        "answer": "It works well when a problem exhibits both Greedy Choice Property and Optimal Substructure."
      },
      {
        "title": "What is the Greedy Choice Property?",
        "answer": "It means a locally optimal choice at each step leads to a globally optimal solution."
      },
      {
        "title": "What is Optimal Substructure?",
        "answer": "A problem has optimal substructure if an optimal solution to the problem contains optimal solutions to its subproblems."
      },
      {
        "title": "What are examples of greedy algorithms?",
        "answer": "1. Activity Selection\n2. Huffman Encoding\n3. Fractional Knapsack\n4. Prim’s MST\n5. Dijkstra’s Algorithm"
      },
      {
        "title": "How does Greedy differ from Dynamic Programming?",
        "answer": "Greedy makes decisions one by one and never reconsiders them. DP solves all subproblems and chooses the best. Greedy is faster but not always correct."
      },
      {
        "title": "How is Greedy different from Brute Force?",
        "answer": "Greedy optimizes at each step using a heuristic. Brute Force explores all possible solutions."
      },
      {
        "title": "What is the time complexity of a greedy algorithm?",
        "answer": "Varies by problem, but typically O(n log n) when sorting is involved, or O(n) when a single pass suffices."
      },
      {
        "title": "What is the Fractional Knapsack problem?",
        "answer": "It allows breaking items and selecting fractions. Greedy by value/weight ratio gives optimal result."
      },
      {
        "title": "Why doesn’t greedy work for 0/1 Knapsack?",
        "answer": "You can’t take fractions. Greedy may pick high ratio but miss the optimal subset. DP is needed for correctness."
      },
      {
        "title": "What is the Activity Selection problem?",
        "answer": "Select the maximum number of non-overlapping activities. Sort by end time and use greedy selection."
      },
      {
        "title": "What is a classic greedy algorithm used in graphs?",
        "answer": "Prim’s and Kruskal’s algorithms for Minimum Spanning Tree are classic greedy graph algorithms."
      },
      {
        "title": "What is Kruskal’s algorithm?",
        "answer": "Sort all edges by weight and pick the smallest edge that doesn’t form a cycle. Use Union-Find for efficiency."
      },
      {
        "title": "What is Prim’s algorithm?",
        "answer": "Start from any node, greedily pick the smallest adjacent edge connecting to the MST. Use a min heap for optimization."
      },
      {
        "title": "What is Huffman Encoding?",
        "answer": "It is a greedy algorithm used to compress data by assigning shorter codes to more frequent characters."
      },
      {
        "title": "What is the greedy strategy for coin change?",
        "answer": "Pick the largest denomination less than the amount repeatedly. Works only for specific coin systems (canonical systems)."
      },
      {
        "title": "Why doesn’t greedy coin change work for all denominations?",
        "answer": "Because it may miss the optimal combination. Example: For coins {1, 3, 4}, greedy fails for amount = 6."
      },
      {
        "title": "What is the greedy approach for job sequencing?",
        "answer": "Sort jobs by profit in descending order and schedule each job in the latest available slot before its deadline."
      },
      {
        "title": "What is Interval Scheduling?",
        "answer": "Select the maximum number of non-overlapping intervals. Greedy strategy: sort by end time and select compatible intervals."
      },
      {
        "title": "What is the greedy approach in Dijkstra’s algorithm?",
        "answer": "Select the closest unvisited node and update distances of its neighbors. Uses a greedy strategy with a priority queue."
      },
      {
        "title": "What is the greedy approach for minimum platforms problem?",
        "answer": "Sort arrival and departure times, use two pointers to track platforms needed at each time."
      },
      {
        "title": "What is the greedy method for gas station problem?",
        "answer": "Always travel to the farthest reachable gas station from the current fuel, minimizing refills."
      },
      {
        "title": "Can greedy algorithms be recursive?",
        "answer": "Yes, but most greedy algorithms are implemented iteratively for simplicity and performance."
      },
      {
        "title": "What is a matroid and how is it related to greedy?",
        "answer": "Matroids are mathematical structures where greedy algorithms always yield optimal results. Many greedy algorithms work on problems modeled as matroids."
      },
      {
        "title": "Is greedy optimal for all optimization problems?",
        "answer": "No. It works only when the problem satisfies greedy choice and optimal substructure properties."
      },
      {
        "title": "Can greedy algorithms be used with backtracking?",
        "answer": "Rarely. Backtracking explores all options. Greedy commits early decisions, while backtracking undoes them if needed."
      },
      {
        "title": "What is the greedy solution to the minimum number of coins?",
        "answer": "Pick the largest coin less than the remaining amount. Continue until the amount becomes 0."
      },
      {
        "title": "What are common characteristics of greedy problems?",
        "answer": "1. Sorted order\n2. Irrevocable choices\n3. Local optimization leads to global optimization"
      },
      {
        "title": "What is the greedy approach for Egyptian fraction?",
        "answer": "Keep subtracting the largest unit fraction smaller than the remaining value until the remainder is zero."
      },
      {
        "title": "What is the greedy solution to merge overlapping intervals?",
        "answer": "Sort intervals by start time, then merge overlapping ones while traversing the list."
      },
      {
        "title": "What’s the greedy idea behind Rope Joining (Minimize Cost)?",
        "answer": "Always join the two smallest ropes first. Use a min heap to do this efficiently (like Huffman encoding)."
      },
      {
        "title": "What is the greedy solution to the ‘Jump Game’?",
        "answer": "From each index, greedily jump to the farthest reachable position until you reach the end."
      },
      {
        "title": "Is it possible to convert a DP problem to greedy?",
        "answer": "Sometimes. If a DP problem exhibits greedy choice property, you can simplify it with a greedy solution."
      },
      {
        "title": "What is the greedy strategy in minimizing absolute difference pairs?",
        "answer": "Sort both arrays and pair corresponding elements. This minimizes overall absolute differences."
      },
      {
        "title": "What is greedy coloring in graphs?",
        "answer": "Assign the smallest possible color to each vertex such that no two adjacent vertices share the same color."
      },
      {
        "title": "What is greedy string compression?",
        "answer": "Greedily merge substrings with highest compression potential first to reduce string length."
      },
      {
        "title": "What is the greedy idea behind scheduling lectures with deadlines?",
        "answer": "Use a priority queue to always schedule lectures with the highest profit and valid deadlines."
      },
      {
        "title": "Can greedy be used in recursive tree problems?",
        "answer": "Yes, if at each node, a local decision (like maximum sum or minimum cost) leads to a correct global result."
      },
      {
        "title": "Is greedy always faster than DP?",
        "answer": "Usually yes, because it avoids solving all subproblems. But correctness must be ensured."
      },
      {
        "title": "What is a common mistake when using greedy?",
        "answer": "Assuming local optimum always leads to global optimum. Always verify conditions before applying greedy."
      },
      {
        "title": "Can greedy and DP both solve the same problem?",
        "answer": "Yes. Greedy is faster but only works for specific cases. DP is more general but slower."
      },
      {
        "title": "What’s the greedy solution for maximum number of non-overlapping meetings?",
        "answer": "Sort by end times and pick meetings that start after the last selected one ends."
      },
      {
        "title": "Why is sorting important in greedy problems?",
        "answer": "Sorting helps order elements to make optimal local choices (e.g., by deadline, value, cost)."
      },
      {
        "title": "What is a two-pointer greedy technique?",
        "answer": "Use two pointers moving from opposite ends to make greedy decisions, commonly in arrays and intervals."
      },
      {
        "title": "How to prove a greedy solution is correct?",
        "answer": "1. Show Greedy Choice Property\n2. Show Optimal Substructure\n3. Use counterexamples for invalid approaches"
      },
      {
        "title": "What are limitations of greedy algorithms?",
        "answer": "They are problem-specific. If applied blindly, they can lead to incorrect results."
      },
      {
        "title": "Why is greedy preferred in real-time systems?",
        "answer": "Greedy is fast and uses less memory. It’s ideal for approximate or heuristic solutions under time constraints."
      },
    ]
  
  };
  
  export default questionsData;