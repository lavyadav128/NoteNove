const questionsData = {
  "html-basics": [
    {
      "title": "What is HTML?",
      "answer": "HTML (HyperText Markup Language) is the standard language used to create and structure content on the web. It defines the structure of webpages using elements and tags."
    },
    {
      "title": "What is the structure of a basic HTML page?",
      "answer": "A basic HTML page includes:\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <p>Hello World</p>\n  </body>\n</html>"
    },
    {
      "title": "What is an HTML tag?",
      "answer": "An HTML tag is a container for content or other tags. Example: <p>This is a paragraph</p>"
    },
    {
      "title": "What are HTML comments?",
      "answer": "Comments are notes in the code that are not displayed in the browser. Syntax: <!-- This is a comment -->"
    },
    {
      "title": "Are HTML tags case-sensitive?",
      "answer": "No, HTML tags are not case-sensitive. <p> is the same as <P>."
    },
    {
      "title": "What is the role of attributes in HTML?",
      "answer": "Attributes provide additional information about elements. They are written inside the opening tag.\nExample: <a href='https://google.com'>Google</a>"
    },
    {
      "title": "What is the anchor tag used for?",
      "answer": "The <a> tag is used to create hyperlinks.\nExample: <a href='https://google.com'>Google</a>"
    },
    {
      "title": "How do you add an image in HTML?",
      "answer": "Use the <img> tag with src and alt attributes.\nExample: <img src='image.jpg' alt='Sample Image'>"
    },
    {
      "title": "What is the difference between <div> and <span>?",
      "answer": "<div> is a block-level container, while <span> is an inline container for text or inline elements."
    },
    {
      "title": "What are heading tags?",
      "answer": "HTML provides six levels of headings from <h1> (most important) to <h6> (least important).\nExample: <h1>Main Heading</h1>"
    },
    {
      "title": "What is the paragraph tag used for?",
      "answer": "The <p> tag defines a paragraph of text.\nExample: <p>This is a paragraph.</p>"
    },
    {
      "title": "How do you insert a line break in HTML?",
      "answer": "Use the <br> tag to insert a new line.\nExample: Line 1<br>Line 2"
    },
    {
      "title": "What does the <hr> tag do?",
      "answer": "<hr> creates a horizontal line on the webpage to separate sections."
    },
    {
      "title": "What is the <pre> tag?",
      "answer": "The <pre> tag displays text exactly as written in the HTML file, preserving spaces and line breaks."
    },
    {
      "title": "What are semantic tags?",
      "answer": "Semantic tags clearly describe their meaning in a human- and machine-readable way.\nExamples: <header>, <footer>, <main>, <section>, <article>, <aside>"
    },
    {
      "title": "How do you make an image clickable?",
      "answer": "Wrap the <img> tag inside an <a> tag.\nExample: <a href='link'><img src='image.jpg'></a>"
    },
    {
      "title": "What is a list in HTML?",
      "answer": "Lists organize content. Types:\n<ul> for unordered list, <ol> for ordered list. Items are defined using <li>."
    },
    {
      "title": "What are tables in HTML?",
      "answer": "Tables represent tabular data.\nExample:\n<table>\n  <tr><th>Name</th><th>Roll No</th></tr>\n  <tr><td>Alice</td><td>101</td></tr>\n</table>"
    },
    {
      "title": "What is the purpose of <thead> and <tbody>?",
      "answer": "<thead> groups the header content, <tbody> groups the body content of a table."
    },
    {
      "title": "What is colspan in HTML?",
      "answer": "The colspan attribute allows a cell to span across multiple columns.\nExample: <td colspan='2'>Merged Cell</td>"
    },
    {
      "title": "What is a form in HTML?",
      "answer": "Forms collect user input and can be submitted to a server.\nExample:\n<form action='/submit'>\n  <input type='text' placeholder='Enter name'>\n</form>"
    },
    {
      "title": "What is the use of the action attribute in a form?",
      "answer": "The action attribute defines where to send the form data after submission.\nExample: <form action='/submit'>"
    },
    {
      "title": "How do you create radio buttons?",
      "answer": "<input type='radio' name='class' value='X'>\nTo group them, use the same name attribute."
    },
    {
      "title": "How do you create checkboxes?",
      "answer": "<input type='checkbox' name='option' value='1'>\nEach checkbox can be selected independently."
    },
    {
      "title": "What is a textarea?",
      "answer": "<textarea> is used to take multiline input from users.\nExample: <textarea placeholder='Write here...'></textarea>"
    },
    {
      "title": "What is the select tag in HTML?",
      "answer": "<select> creates a dropdown list.\nExample:\n<select>\n  <option>Delhi</option>\n  <option>Mumbai</option>\n</select>"
    },
    {
      "title": "What is an iframe?",
      "answer": "An <iframe> is used to embed another webpage inside the current page.\nExample: <iframe src='page.html'></iframe>"
    },
    {
      "title": "How do you add a video in HTML?",
      "answer": "Use the <video> tag with src and attributes like controls, autoplay, loop.\nExample: <video src='video.mp4' controls></video>"
    },
    {
      "title": "What is the difference between id and class in HTML?",
      "answer": "id is unique for each element, while class can be used by multiple elements.\nExample: <div id='header'> vs. <div class='menu'>"
    }
  ],

  "css-basics": [
    {
      "title": "What is CSS?",
      "answer": "CSS (Cascading Style Sheets) is a styling language used to describe the look and formatting of an HTML document.\nExample: h1 { color: red; }"
    },
    {
      "title": "What are different ways to apply CSS?",
      "answer": "1. Inline CSS (in the tag)\n2. Internal CSS (inside <style> tag in HTML)\n3. External CSS (linked CSS file — best practice)\nExample: <link rel=\"stylesheet\" href=\"style.css\">"
    },
    {
      "title": "What is a CSS selector?",
      "answer": "Selectors are used to target HTML elements.\nTypes: Universal (*), Element (h1), Class (.myClass), ID (#myId)\nExample: .box { background-color: blue; }"
    },
    {
      "title": "What are text properties in CSS?",
      "answer": "Common text properties include:\ntext-align, text-decoration, font-weight, font-family, text-transform, line-height\nExample: h1 { text-align: center; font-weight: bold; }"
    },
    {
      "title": "What are CSS units?",
      "answer": "CSS supports absolute (px, cm) and relative (% , em, rem, vh, vw) units.\nExample: font-size: 16px; or width: 50%;"
    },
    {
      "title": "What is the box model in CSS?",
      "answer": "The box model includes content, padding, border, and margin.\nExample:\ndiv { width: 100px; padding: 10px; border: 2px solid black; margin: 10px; }"
    },
    {
      "title": "What is the difference between padding and margin?",
      "answer": "Padding is space inside the border. Margin is space outside the border.\nExample: padding adds space between content and border, margin adds space between two elements."
    },
    {
      "title": "What is border-radius?",
      "answer": "It rounds the corners of an element.\nExample: border-radius: 10px; or border-radius: 50% for a circle."
    },
    {
      "title": "What are the display types in CSS?",
      "answer": "display: block, inline, inline-block, none\nExample: span { display: inline; } div { display: block; }"
    },
    {
      "title": "What is the difference between visibility: hidden and display: none?",
      "answer": "visibility: hidden hides the element but keeps its space.\ndisplay: none hides the element and removes it from layout."
    },
    {
      "title": "What is RGBA color in CSS?",
      "answer": "RGBA includes red, green, blue and alpha (opacity).\nExample: background-color: rgba(255, 0, 0, 0.5);"
    },
    {
      "title": "What is the position property in CSS?",
      "answer": "The position property defines how an element is placed.\nTypes: static, relative, absolute, fixed, sticky\nExample: position: fixed; top: 0;"
    },
    {
      "title": "What is z-index in CSS?",
      "answer": "z-index controls the stacking order of elements. Higher z-index elements appear above lower ones.\nExample: .box { z-index: 10; position: absolute; }"
    },
    {
      "title": "How to set a background image in CSS?",
      "answer": "Use background-image: url('img.jpg');\nYou can control the size with background-size: cover/contain/auto"
    },
    {
      "title": "What is Flexbox?",
      "answer": "Flexbox is a layout model for distributing space within a container.\nExample: display: flex; justify-content: space-between; align-items: center;"
    },
    {
      "title": "What are Flexbox directions?",
      "answer": "flex-direction: row (default), row-reverse, column, column-reverse\nExample: flex-direction: column;"
    },
    {
      "title": "What is the difference between align-items and align-self?",
      "answer": "align-items aligns all flex items on the cross axis.\nalign-self overrides align-items for a specific item.\nExample: item1 { align-self: flex-start; }"
    },
    {
      "title": "What are media queries?",
      "answer": "Media queries allow CSS to adapt based on screen size.\nExample:\n@media (max-width: 600px) { body { background-color: yellow; } }"
    },
    {
      "title": "What is a transition in CSS?",
      "answer": "Transitions animate changes in CSS properties.\nExample:\ndiv { transition: background-color 2s ease-in; }"
    },
    {
      "title": "What is transform in CSS?",
      "answer": "Transform applies 2D/3D transformations like rotate, scale, translate, skew.\nExample: transform: rotate(45deg);"
    },
    {
      "title": "What is animation in CSS?",
      "answer": "Animations allow property changes over time using keyframes.\nExample:\n@keyframes grow { from { width: 100px; } to { width: 200px; } }\ndiv { animation: grow 2s infinite; }"
    },
    {
      "title": "How to make a circular loader using CSS?",
      "answer": "Step 1: Create a div with a circular shape using border-radius: 50%\nStep 2: Apply animation using keyframes to rotate it\nStep 3: Make it spin continuously using animation-iteration-count: infinite"
    }
  ],

  "js-basics": [
    {
      "title": "What is JavaScript?",
      "answer": "JavaScript is a programming language used to make websites interactive. It can control HTML content, respond to events, and communicate with servers.\nExample: console.log(\"Hello World\");"
    },
    {
      "title": "What are variables in JavaScript?",
      "answer": "Variables are containers for storing data. They are declared using let, const, or var.\nExample: let age = 25;"
    },
    {
      "title": "What is the difference between let, const, and var?",
      "answer": "var: can be re-declared and updated (function scope).\nlet: can be updated but not re-declared (block scope).\nconst: cannot be re-declared or updated (block scope).\nExample: const pi = 3.14;"
    },
    {
      "title": "What are data types in JavaScript?",
      "answer": "JavaScript supports primitive data types like Number, String, Boolean, Null, Undefined, BigInt, and Symbol.\nExample: let name = \"Alice\"; // String"
    },
    {
      "title": "What are operators in JavaScript?",
      "answer": "Operators perform operations on variables and values. Categories: Arithmetic (+, -, *, /), Comparison (==, ===), Logical (&&, ||, !), Assignment (=, +=), etc.\nExample: let sum = 10 + 5;"
    },
    {
      "title": "What is a conditional statement?",
      "answer": "Conditional statements are used to perform different actions based on different conditions.\nExample: if (score > 80) { console.log(\"Excellent\"); }"
    },
    {
      "title": "What is a loop in JavaScript?",
      "answer": "Loops are used to execute a block of code multiple times.\nTypes: for, while, do-while, for-of, for-in\nExample: for (let i = 1; i <= 5; i++) { console.log(i); }"
    },
    {
      "title": "What is a string in JavaScript?",
      "answer": "A string is a sequence of characters. Strings can be manipulated using methods.\nExample: let str = \"Apna College\"; console.log(str.length);"
    },
    {
      "title": "What is an array?",
      "answer": "An array is a collection of items stored in a single variable.\nExample: let fruits = [\"apple\", \"banana\", \"cherry\"];"
    },
    {
      "title": "What are some array methods?",
      "answer": "Common methods:\npush() – add to end,\npop() – remove from end,\nshift(), unshift(), slice(), splice(), map(), filter(), reduce()\nExample: marks.map((m) => m + 5);"
    },
    {
      "title": "What is a function?",
      "answer": "A function is a block of code that performs a specific task.\nExample:\nfunction greet(name) { return \"Hello \" + name; }"
    },
    {
      "title": "What is an arrow function?",
      "answer": "Arrow functions are a shorter syntax for function expressions.\nExample: const add = (a, b) => a + b;"
    },
    {
      "title": "What is DOM in JavaScript?",
      "answer": "DOM (Document Object Model) is a programming interface that allows JavaScript to interact with HTML and CSS.\nExample: document.getElementById(\"myId\").innerText = \"Hello\";"
    },
    {
      "title": "What is event handling?",
      "answer": "Event handling allows you to execute code when events occur (e.g., clicks, keypress).\nExample:\ndocument.querySelector(\"button\").onclick = () => alert(\"Clicked!\");"
    },
    {
      "title": "What are classes and objects in JavaScript?",
      "answer": "A class is a blueprint for creating objects.\nExample:\nclass User { constructor(name) { this.name = name; } }"
    },
    {
      "title": "What is inheritance in JavaScript?",
      "answer": "Inheritance allows one class to inherit properties and methods from another.\nExample:\nclass Admin extends User { constructor(name) { super(name); } }"
    },
    {
      "title": "What is a prototype in JS?",
      "answer": "Every JavaScript object has a prototype. If an object method or property is not found, JS looks into the prototype."
    },
    {
      "title": "What is a callback function?",
      "answer": "A callback is a function passed as an argument to another function to run later.\nExample: setTimeout(() => console.log(\"Done\"), 1000);"
    },
    {
      "title": "What is a promise in JavaScript?",
      "answer": "A Promise represents a value that may be available now, in the future, or never.\nExample:\nlet p = new Promise((resolve, reject) => resolve(\"Done\"));"
    },
    {
      "title": "What is async/await?",
      "answer": "Async/await is used to handle asynchronous code in a cleaner way than using .then().\nExample:\nasync function fetchData() { let res = await fetch(url); }"
    },
    {
      "title": "What is the use of the try-catch block?",
      "answer": "try-catch is used for error handling in JS.\nExample:\ntry { let res = JSON.parse(data); } catch(e) { console.log(\"Error\", e); }"
    },
    {
      "title": "What is IIFE (Immediately Invoked Function Expression)?",
      "answer": "An IIFE is a function that runs as soon as it's defined.\nExample:\n(function() { console.log(\"Run now!\"); })();"
    },
    {
      "title": "What is the window object?",
      "answer": "The window object represents the browser window. It’s the global object in the browser.\nExample: window.alert(\"Hi!\");"
    },
    {
      "title": "What is the difference between == and ===?",
      "answer": "== checks only value, === checks value and type.\nExample: '5' == 5 → true, '5' === 5 → false"
    },
    {
      "title": "What are template literals?",
      "answer": "Template literals allow embedded expressions in strings.\nExample: let msg = `Hello, ${name}`;"
    }
  ],

  "react-basics": [
    {
      title: "What is React?",
      answer: "React is a JavaScript library for creating user interfaces (UI). It allows developers to build reusable UI components that efficiently update and render when data changes."
    },
    {
      title: "What is JSX?",
      answer: "JSX stands for JavaScript XML or JavaScript Extension Syntax. It allows us to write HTML elements directly inside JavaScript. JSX code is compiled by Babel into regular JavaScript."
    },
    {
      title: "How to set up a local React environment?",
      answer: "You can set up a local environment using Create React App or Vite.\nExample using Vite:\n- Run npm create vite@latest\n- Navigate to the project folder\n- Run npm run dev to start the development server."
    },
    {
      title: "How to rewrite the default React App?",
      answer: "You can modify the default code in App.jsx:\njs\nimport './App.css';\nfunction App() {\n  return <h1>Hello world!</h1>;\n}\nexport default App;\n"
    },
    {
      title: "What is a React Component?",
      answer: "A component in React is a reusable and independent piece of code that returns HTML to be rendered on the UI."
    },
    {
      title: "How to create a component in React?",
      answer: "A simple functional component example:\njs\nfunction Title() {\n  return <h1>Hello world!</h1>;\n}\n"
    },
    {
      title: "How to render a component?",
      answer: "You render a component in JSX using:\njs\n<Title />\n\nThis means calling the Title component inside the main App component."
    },
    {
      title: "How to create a component in another file?",
      answer: "To create and use a component in another file:\n1. Export it using export default or export { name }\n2. Import it using import in the main file."
    },
    {
      title: "What is Default Export in React?",
      answer: "Default Export allows exporting a single value from a file:\njs\nexport default Title\nimport Title from './Title.jsx'\n"
    },
    {
      title: "What is Named Export in React?",
      answer: "Named Export allows exporting multiple values:\njs\nexport const Title = () => { ... }\nimport { Title } from './Title.jsx'\n"
    },
    {
      title: "What is JSX Return Rule?",
      answer: "JSX must return a *single root element*. You can wrap multiple elements in a <div> or <> (fragment shorthand) to satisfy this rule."
    },
    {
      title: "What are React Fragments?",
      answer: "React Fragments let you group a list of children without adding extra nodes to the DOM:\njs\n<>\n  <h1>Hello</h1>\n  <p>World</p>\n</>\n"
    },
    {
      title: "How to style components in React?",
      answer: "You can style components using CSS classes. Example:\njs\nimport './product.css'\n<div className='product'>Product</div>\n\nIn CSS:\ncss\n.product {\n  background-color: red\n  margin: 20px\n}\n"
    },
    {
      title: "How to structure components in React?",
      answer: "Structure components by breaking UI into smaller pieces. For example:\njs\nfunction Product() {\n  return (\n    <div className='product'>\n      <p>Product Title</p>\n      <p>Product Description</p>\n    </div>\n  )\n}\n"
    },
    {
      title: "How to write JSX properly?",
      answer: "Use self-closing tags and return elements with proper syntax:\njs\nfunction Title() {\n  return <p>Hello world!</p>\n}\n"
    },
    {
      title: "How to pass props in React?",
      answer: "Props are used to pass data from one component to another.\nExample:\njs\n<Product price='50' />\n\nIn Product Component:\njs\nfunction Product(props) {\n  return <p>Price: {props.price}</p>\n}\n"          
    },
    {
      title: "How to pass arrays as props in React?",
      answer: "You can pass arrays just like any other value:\njs\n<Product features={['fast' 'reliable']} />\n\nIn Product:\njs\nprops.features.map(f => <li>{f}</li>)\n"
    },
    {
      title: "How to conditionally render in React?",
      answer: "Use ternary or if condition:\njs\n{price > 10000 ? <p>Discount: 5%</p> : <p>No Discount</p>}\n"
    },
    {
      title: "How to handle events in React?",
      answer: "Use camelCase and provide function reference:\njs\n<button onClick={showAlert}>Click Me</button>\nfunction showAlert() {\n  alert('Button Clicked')\n}\n"
    },
    {
      title: "How to use 'onMouseOver' event?",
      answer: "You can trigger functions when the mouse hovers:\njs\n<button onMouseOver={hoverHandler}>Hover me</button>\n"
    },
    {
      title: "What is useState in React?",
      answer: "useState is a React Hook used to manage state in functional components.\njs\nconst [count setCount] = useState(0)\n"
    },
    {
      title: "How does useState work?",
      answer: "useState returns an array [currentValue updaterFunction]. The component re-renders when the state changes."
    },
    {
      title: "What is state in React?",
      answer: "State is a built-in object in React that stores dynamic data of a component and determines the component's behavior and rendering."
    },
    {
      title: "What is an event object in React?",
      answer: "The event object is passed automatically to event handler functions. Example:\njs\nfunction handleClick(e) {\n  console.log(e.target)\n}\n"
    },
    {
      title: "How to install React Developer Tools?",
      answer: "Install the React Developer Tools extension from the browser's web store to inspect React component tree and props/state."
    },
    {
      title: "What is Closure in JavaScript?",
      answer: "A closure is a feature where an inner function has access to the outer (enclosing) function’s variables even after the outer function has returned.\n\nExample:\njs\nfunction outer() {\n  let count = 0\n  return function () {\n    count++\n    console.log(count)\n  }\n}\nconst counter = outer()\ncounter() // 1\ncounter() // 2\n"
    },
    {
      title: "What is Re-render and how it works in React?",
      answer: "Re-rendering happens when React updates the DOM to reflect changes in component state or props.\n\nExample:\njs\nfunction App() {\n  const [count setCount] = useState(0)\n  return (\n    <div>\n      <p>{count}</p>\n      <button onClick={() => setCount(count + 1)}>+</button>\n    </div>\n  )\n}\n"
    },
    {
      title: "How to update one element in an array in React state?",
      answer: "Use map() to create a new array with the updated element:\njs\nsetTodos(prev => prev.map(todo => todo.id === id ? {...todo text: 'Updated'} : todo))\n"
    },
    {
      title: "How to update all elements in an array in React state?",
      answer: "Use map() on all elements:\njs\nsetTodos(prev => prev.map(todo => ({...todo text: todo.text.toUpperCase()})))\n"
    },
    {
      title: "What is a callback updater function in React?",
      answer: "A function passed to state updater (setState) which uses the previous state.\n\nExample:\njs\nsetCount(prevCount => prevCount + 1)\n"
    },
    {
      title: "Why use a callback updater function?",
      answer: "Useful when the new state depends on the previous state especially in asynchronous state updates."
    },
    {
      title: "What are the types of Components in React?",
      answer: "React components can be categorized as\n\nLogical Components (Smart)\n- Use state\n- Handle logic\n- Change with state\n\nPresentational Components (Dumb)\n- UI focused\n- Don't use state\n- Purely for rendering"
    },
    {
      title: "What is a Lottery Component example in React?",
      answer: "An example of a component with\n- Props: n = winningSum\n- State: ticket = []\n- Events: buyTicket()"
    },
    {
      title: "What does 'Functions as Props' mean in React?",
      answer: "In JavaScript functions are first-class objects. This means\n- They can be passed as an argument to a function\n- They can be returned from another function\n- They can be assigned to variables"
    },
  ],

  "sql-basics": [
    {
      title: "What is SQL?",
      answer: "SQL stands for Structured Query Language, used to manage relational databases."
    },
    {
      title: "What is the difference between WHERE and HAVING?",
      answer: "WHERE filters rows before grouping; HAVING filters after grouping."
    }
  ],

  "networking-basics": [
    {
      "title": "What is a computer network?",
      "answer": "A computer network is a group of devices connected to share data and resources. These devices (nodes) are linked using cables or wireless signals."
    },
    {
      "title": "What is a node and a link?",
      "answer": "A node is any device (like a computer or printer) connected to a network. A link is the physical medium like a cable that connects two or more nodes."
    },
    {
      "title": "What is network topology?",
      "answer": "Network topology refers to the physical or logical layout of devices in a network. Common types include Star, Ring, Bus, Mesh, Tree, and Hybrid."
    },
    {
      "title": "What is star topology?",
      "answer": "In star topology, all devices are connected to a central device (like a switch). It's easy to manage but if the central device fails, the whole network goes down."
    },
    {
      "title": "What is ring topology?",
      "answer": "In ring topology, devices are connected in a circular loop. Data travels in one direction. If any device fails, the entire network can be affected."
    },
    {
      "title": "What is bus topology?",
      "answer": "All devices share a single central cable (the bus). It is cheap and simple for small networks but one cable failure breaks the whole network."
    },
    {
      "title": "What is mesh topology?",
      "answer": "In mesh topology, every device is connected to every other device. It is reliable but costly and complex to set up."
    },
    {
      "title": "What is tree topology?",
      "answer": "Tree topology combines characteristics of star and bus topologies. It allows easy expansion and fault isolation in segments."
    },
    {
      "title": "What is hybrid topology?",
      "answer": "Hybrid topology mixes two or more different types of topologies, offering flexibility and efficiency in large networks."
    },
    {
      "title": "What is a PAN (Personal Area Network)?",
      "answer": "A PAN is a small network with a range of up to 10 meters, used for connecting personal devices like phones and laptops."
    },
    {
      "title": "What is a LAN (Local Area Network)?",
      "answer": "A LAN is used in a small geographic area like homes or offices to connect computers and share resources."
    },
    {
      "title": "What is a WAN (Wide Area Network)?",
      "answer": "WAN spans a large geographic area and connects multiple LANs, often using satellite or leased lines (like the internet)."
    },
    {
      "title": "What is VPN?",
      "answer": "VPN (Virtual Private Network) creates a secure connection over the internet, allowing private access to a network remotely."
    },
    {
      "title": "What are the types of VPNs?",
      "answer": "Two main types are Access VPN (for remote users) and Site-to-Site VPN (connects office networks in different locations)."
    },
    {
      "title": "What is the OSI model?",
      "answer": "OSI (Open System Interconnection) is a 7-layer model that standardizes network communication from physical transfer to applications. For example, when you send a message on WhatsApp, it goes through layers like: Application (WhatsApp interface), Transport (breaking message into packets), Network (finding the best route), Data Link (framing data), and Physical (sending signals via Wi-Fi or cable). Each layer handles a specific part of the process to ensure the message reaches the recipient correctly."
    },    
    {
      "title": "What does the Physical Layer do?",
      "answer": "It transfers raw bits over a physical medium (like cables). It’s the lowest layer in the OSI model. For example, when you send an email, the Physical Layer is responsible for converting the data into electrical signals that travel through the cables (or Wi-Fi waves) to reach the destination. It handles the actual transmission of the binary data over physical media like Ethernet cables or wireless radio waves."
    },    
    {
      "title": "What does the Data Link Layer do?",
      "answer": "It ensures error-free transfer of frames between two nodes on the same network. It handles MAC addressing, flow control, and error detection. For example, when your laptop communicates with a Wi-Fi router, the Data Link Layer ensures that the data sent is properly framed, addressed using MAC addresses, and checked for errors before reaching the router."
    },    
    {
      "title": "What is the function of the Network Layer?",
      "answer": "It finds the best path (routing) to deliver packets and assigns logical addresses like IPs. For example, when you access a website, the Network Layer decides how your data packets travel across routers and networks using IP addresses to reach the web server efficiently."
    },    
    {
      "title": "What is the function of the Transport Layer?",
      "answer": "It ensures reliable data delivery using either connection-oriented (TCP) or connectionless (UDP) protocols. For example, when you stream a video on YouTube, UDP is used for faster delivery without waiting for lost packets. But when you send an email, TCP ensures the entire message is delivered accurately and in order."
    },    
    {
      "title": "What does the Application Layer do?",
      "answer": "It provides network services to users and applications (like HTTP, SMTP, DNS). It’s the top layer in both OSI and TCP/IP models. For example, when you browse a website, your web browser uses HTTP at the Application Layer to request and receive web pages from the server."
    },    
    {
      "title": "What is TCP and UDP?",
      "answer": "TCP is reliable and connection-based; good for file transfer. UDP is faster but connectionless; good for streaming and gaming. For example, when you download a file, TCP ensures every packet arrives correctly and in order. But when you're playing an online game or watching a live stream, UDP is used to deliver data quickly, even if some packets get lost."
    },    
    {
      "title": "What is DNS?",
      "answer": "DNS (Domain Name System) converts domain names like google.com into IP addresses. It acts like a phonebook for the internet. For example, when you type 'google.com' into your browser, DNS translates it to an IP address like 142.250.182.206 so your device can locate and connect to Google's server."
    },    
    {
      "title": "What is DHCP?",
      "answer": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network. For example, when you connect your phone to Wi-Fi, the router’s DHCP server gives your phone an IP address automatically so it can communicate on the network without manual setup."
    },    
    {
      "title": "What is a MAC address?",
      "answer": "MAC (Media Access Control) address is a unique identifier assigned to a device's network interface card (NIC). For example, your laptop's Wi-Fi adapter has its own MAC address, like '00:1A:2B:3C:4D:5E', which is used to identify it on a local network."
    },    
    {
      "title": "What is IP address?",
      "answer": "An IP address is a unique number assigned to each device on a network. IPv4 has 4 blocks like 192.168.1.1. For example, when your phone connects to the internet, it is assigned an IP address like 192.168.0.5, which allows websites and services to know where to send data back to your device."
    },    
    {
      "title": "What is the difference between public and private IPs?",
      "answer": "Private IPs are used within networks and not routable on the internet. Public IPs are used to communicate over the internet. For example, your home Wi-Fi router assigns private IPs like 192.168.0.10 to connected devices, but your internet service provider gives your router a public IP like 203.0.113.5 so it can access websites and online services."
    },    
    {
      "title": "What is ICMP used for?",
      "answer": "ICMP (Internet Control Message Protocol) is used for error reporting and diagnostic tools like 'ping'. For example, when you use the 'ping' command to check if a website is reachable, ICMP sends packets to the destination and measures the response time to help diagnose network issues."
    },    
    {
      "title": "What is a firewall?",
      "answer": "A firewall is a system that monitors and filters incoming and outgoing network traffic based on security rules. For example, your computer’s firewall can block unauthorized access from the internet while allowing safe applications like your browser or email client to communicate freely."
    },    
    {
      "title": "What is subnetting?",
      "answer": "Subnetting divides a network into smaller parts (subnets) to improve routing efficiency and security. For example, in a large organization, subnetting can separate the HR department's devices from the IT department's devices, so internal traffic is more organized and easier to manage."
    },    
    {
      "title": "What is NAT?",
      "answer": "NAT (Network Address Translation) converts private IP addresses to a public IP for internet access and hides internal network structure. For example, when multiple devices in your home (like a phone, laptop, and smart TV) connect to the internet through a single router, NAT allows all of them to share one public IP address while keeping their private IPs hidden from the outside world."
    },    
    {
      "title": "What happens when you type google.com in a browser?",
      "answer": "The browser checks cache, sends a DNS request to get the IP, establishes a TCP connection, sends HTTP request, receives response, and renders the webpage. For example, when you type 'google.com', your computer first looks up its IP using DNS, connects to Google's server using TCP, requests the homepage via HTTP, and finally displays the page once the response is received."
    }
    
  ],

  "oops-principles": [
    {
      "title": "What is Object-Oriented Programming?",
      "answer": "Object-Oriented Programming (OOP) is a programming paradigm that uses classes and objects to design software. It helps in organizing complex code, reusing functionality, and improving maintainability."
    },
    {
      "title": "What is a class in OOP?",
      "answer": "A class is a blueprint or template for creating objects. It defines properties (data members) and behaviors (functions or methods) that its objects will have. For example, a 'Car' class may have properties like 'color' and 'speed', and methods like 'drive()' and 'brake()'."
    },
    {
      "title": "What is an object?",
      "answer": "An object is an instance of a class. It is created in memory and can access the properties and methods defined in the class. For example, 'Car myCar = new Car();' creates an object named 'myCar'."
    },
    {
      "title": "What is inheritance?",
      "answer": "Inheritance allows one class (child) to inherit properties and behaviors from another class (parent). It supports code reuse. For example, a 'Dog' class can inherit from an 'Animal' class."
    },
    {
      "title": "What are types of inheritance?",
      "answer": "Types include:\n1. Single\n2. Multiple\n3. Multilevel\n4. Hierarchical\n5. Hybrid"
    },
    {
      "title": "What is encapsulation?",
      "answer": "Encapsulation means bundling data and functions into a single unit (class) and restricting access to some of the object's components. This is done using access specifiers like private, protected, and public."
    },
    {
      "title": "What is abstraction?",
      "answer": "Abstraction hides unnecessary details and shows only the essential features of an object. For example, a car abstracts complex systems like engines and just provides methods like 'start()' or 'drive()'."
    },
    {
      "title": "What is polymorphism?",
      "answer": "Polymorphism means 'many forms'. It allows one interface to be used for different data types or classes. Types: Compile-time (method overloading) and Runtime (method overriding)."
    },
    {
      "title": "What is method overloading?",
      "answer": "Method overloading is when multiple functions have the same name but different parameters. It happens at compile time. Example: add(int a, int b) and add(int a, int b, int c)."
    },
    {
      "title": "What is method overriding?",
      "answer": "Method overriding occurs when a child class provides a different implementation for a method already defined in its parent class. It is resolved at runtime."
    },
    {
      "title": "What is a constructor?",
      "answer": "A constructor is a special method with the same name as the class. It initializes objects when they are created. Types: Default, Parameterized, Copy Constructor."
    },
    {
      "title": "What is a destructor?",
      "answer": "A destructor is a special method that destroys an object and releases memory. In C++, it starts with a tilde (~) and is automatically called when the object is out of scope."
    },
    {
      "title": "What is the 'this' pointer?",
      "answer": "The 'this' pointer refers to the current object. It is used to differentiate between instance variables and parameters, especially when they have the same name."
    },
    {
      "title": "What is a friend function?",
      "answer": "A friend function is not a member of a class but can access its private and protected members. It is declared using the 'friend' keyword inside the class."
    },
    {
      "title": "What is aggregation?",
      "answer": "Aggregation is a HAS-A relationship where one class contains a reference to another. It helps in code reuse. For example, a 'Library' class HAS-A 'Book' class."
    },
    {
      "title": "What is a virtual function?",
      "answer": "A virtual function is a member function in a base class that can be overridden in a derived class. It enables runtime polymorphism and is declared using the 'virtual' keyword."
    },
    {
      "title": "What is a pure virtual function?",
      "answer": "A pure virtual function has no body in the base class and must be overridden in derived classes. It makes the class abstract. Syntax: virtual void show() = 0;"
    },
    {
      "title": "What is an abstract class?",
      "answer": "An abstract class contains at least one pure virtual function and cannot be instantiated. It provides a base for other classes to build upon."
    },
    {
      "title": "What are access specifiers?",
      "answer": "Access specifiers control access to class members. \n1. Private – accessible only within the class.\n2. Protected – accessible in the class and derived classes.\n3. Public – accessible from anywhere."
    },
    {
      "title": "What is function overloading?",
      "answer": "Function overloading allows multiple functions with the same name but different parameter types or numbers to exist in a class."
    },
    {
      "title": "What is operator overloading?",
      "answer": "Operator overloading allows standard operators (like +, -, *) to work with user-defined data types by redefining their behavior in classes."
    },
    {
      "title": "What is the difference between overloading and overriding?",
      "answer": "Overloading is compile-time polymorphism where functions have the same name but different parameters. Overriding is runtime polymorphism where a derived class provides a specific implementation of a base class function."
    },
    {
      "title": "What is virtual inheritance?",
      "answer": "Virtual inheritance ensures only one instance of a class appears in the inheritance hierarchy when using multiple inheritance."
    },
    {
      "title": "What is a namespace in C++?",
      "answer": "A namespace is used to organize code and avoid naming conflicts. For example, std is a standard namespace containing functions like cout and cin."
    }
  ],

  "dbms-basics": [
    {
      "title": "What is a database?",
      "answer": "A database is a collection of related data that represents some aspect of the real world. It is organized and stored to be easily accessed, managed, and updated."
    },
    {
      "title": "What is DBMS?",
      "answer": "DBMS (Database Management System) is software that allows users to store, retrieve, and manage data in databases, while ensuring data security, consistency, and concurrency."
    },
    {
      "title": "What is an ER diagram?",
      "answer": "An ER (Entity-Relationship) diagram is a visual representation of entities, attributes, and relationships in a database. It helps in designing the structure of a database."
    },
    {
      "title": "What is a strong entity set?",
      "answer": "A strong entity set has enough attributes to uniquely identify all its entities. It has a primary key."
    },
    {
      "title": "What is a weak entity set?",
      "answer": "A weak entity set does not have a primary key but has a partial key called a discriminator, which helps identify entities in combination with another entity."
    },
    {
      "title": "What is a relationship in DBMS?",
      "answer": "A relationship is an association among entities. It can be unary (one entity), binary (two entities), ternary (three), or n-ary (more than three)."
    },
    {
      "title": "What are cardinality constraints?",
      "answer": "Cardinality defines the number of relationships an entity can participate in, such as one-to-one, one-to-many, many-to-one, and many-to-many."
    },
    {
      "title": "What are attributes in DBMS?",
      "answer": "Attributes are properties or characteristics of an entity. They can be simple, composite, multi-valued, derived, or key attributes."
    },
    {
      "title": "What is a functional dependency?",
      "answer": "A functional dependency X → Y means that if two tuples have the same value for X, they must have the same value for Y."
    },
    {
      "title": "What are keys in DBMS?",
      "answer": "Keys are attributes or sets of attributes used to uniquely identify records. Examples: Primary key, Super key, Candidate key, Foreign key, Alternate key, Composite key, Unique key."
    },
    {
      "title": "What is normalization?",
      "answer": "Normalization is the process of organizing data to reduce redundancy and improve data integrity. It uses normal forms like 1NF, 2NF, 3NF, and BCNF."
    },
    {
      "title": "What is First Normal Form (1NF)?",
      "answer": "1NF means each cell in a table contains only atomic (indivisible) values."
    },
    {
      "title": "What is Second Normal Form (2NF)?",
      "answer": "2NF means the table is in 1NF and there are no partial dependencies of non-prime attributes on candidate keys."
    },
    {
      "title": "What is Third Normal Form (3NF)?",
      "answer": "3NF means the table is in 2NF and has no transitive dependencies."
    },
    {
      "title": "What is BCNF?",
      "answer": "Boyce-Codd Normal Form (BCNF) is a stricter version of 3NF where every non-trivial functional dependency has a super key on the left-hand side."
    },
    {
      "title": "What is a transaction in DBMS?",
      "answer": "A transaction is a logical unit of work consisting of a sequence of operations performed on a database."
    },
    {
      "title": "What are ACID properties?",
      "answer": "ACID stands for Atomicity, Consistency, Isolation, and Durability — properties that ensure reliable processing of database transactions."
    },
    {
      "title": "What is serializability?",
      "answer": "Serializability ensures that the result of executing concurrent transactions is the same as if they were executed serially, one after another."
    },
    {
      "title": "What is relational algebra?",
      "answer": "Relational algebra is a procedural query language that works with relations and includes operations like selection, projection, union, set difference, and join."
    },
    {
      "title": "What is SQL?",
      "answer": "SQL (Structured Query Language) is a standard language used to interact with relational databases, including querying, updating, and managing data."
    },
    {
      "title": "What is the difference between DDL and DML?",
      "answer": "DDL (Data Definition Language) deals with schema structure (e.g., CREATE, DROP), while DML (Data Manipulation Language) deals with data itself (e.g., SELECT, INSERT, UPDATE)."
    },
    {
      "title": "What are JOIN operations in SQL?",
      "answer": "JOINs are used to combine rows from two or more tables based on a related column. Types include INNER JOIN, LEFT JOIN, RIGHT JOIN, and FULL OUTER JOIN."
    },
    {
      "title": "What is the purpose of GROUP BY in SQL?",
      "answer": "GROUP BY groups rows with the same values in specified columns to apply aggregate functions like COUNT(), SUM(), AVG()."
    },
    {
      "title": "What is the HAVING clause?",
      "answer": "HAVING filters groups formed by GROUP BY based on aggregate conditions, unlike WHERE which filters individual rows."
    },
    {
      "title": "What is a primary index?",
      "answer": "A primary index is created on the primary key field and provides fast access to data by pointing directly to blocks containing the data."
    },
    {
      "title": "What is a foreign key?",
      "answer": "A foreign key is a field in one table that refers to the primary key of another table, establishing a relationship between the two."
    },
    {
      "title": "What is a composite key?",
      "answer": "A composite key uses two or more attributes to uniquely identify a row in a table when no single attribute is sufficient."
    },
    {
      "title": "What is a B+ Tree?",
      "answer": "A B+ Tree is a self-balanced tree structure used in indexing. Non-leaf nodes contain keys only; all actual data is in the leaf nodes, which are linked for fast access."
    },
    {
      "title": "What is the LIKE operator in SQL?",
      "answer": "LIKE is used to search for a pattern in a column. '%' represents any sequence of characters; '_' represents a single character."
    },
    {
      "title": "What is the BETWEEN operator?",
      "answer": "BETWEEN selects values within a given range, including the boundary values. Example: WHERE Age BETWEEN 18 AND 25."
    }
  ],

  "os-basics": [
    {
      "title": "What is an Operating System?",
      "answer": "An Operating System (OS) is software that acts as an interface between the user and computer hardware. It manages resources like CPU, memory, files, and devices."
    },
    {
      "title": "What are the types of Operating Systems?",
      "answer": "1. Batch OS\n2. Multiprogramming OS\n3. Multitasking OS\n4. Time Sharing OS\n5. Real-Time OS"
    },
    {
      "title": "What is a process?",
      "answer": "A process is a program in execution. It includes the program code, current activity, and a set of resources like memory and files. Each process is tracked using a Process Control Block (PCB)."
    },
    {
      "title": "What is a thread?",
      "answer": "A thread is the smallest unit of CPU execution within a process. Threads share the process's memory and resources but have separate stacks and registers."
    },
    {
      "title": "What is process scheduling?",
      "answer": "Process scheduling is the OS's way of deciding which process to run next based on criteria like arrival time, burst time, and priority. For example, if you're downloading a file while also listening to music, the OS schedules both processes so the music keeps playing smoothly while the download continues in the background."
    },    
    {
      "title": "What are scheduling algorithms?",
      "answer": "Common ones include:\n1. FCFS (First Come First Serve)\n2. SJF (Shortest Job First)\n3. SRTF (Shortest Remaining Time First)\n4. Round Robin\n5. Priority Scheduling\n6. HRRN (Highest Response Ratio Next)\n7. Multilevel Queue\n8. Multilevel Feedback Queue. \n\nFor example, Round Robin scheduling is like a teacher giving each student a fixed amount of time to answer questions in a loop—ensuring no one is left out for too long."
    },    
    {
      "title": "What is a critical section?",
      "answer": "The critical section is a part of the code where shared resources are accessed. Only one process should execute in the critical section at a time to avoid race conditions. For example, if two threads try to update a shared bank account balance at the same time, the code updating the balance should be in a critical section to prevent incorrect results."
    },    
    {
      "title": "What are the conditions for solving the critical section problem?",
      "answer": "1. Mutual Exclusion\n2. Progress\n3. Bounded Waiting\n\nFor example, in an ATM system with multiple users, Mutual Exclusion ensures only one transaction is processed at a time on a specific account, Progress ensures the system doesn’t get stuck when processes want access, and Bounded Waiting ensures that every user eventually gets their turn without indefinite delay."
    },    
    {
      "title": "What is a semaphore?",
      "answer": "A semaphore is a variable used to control access to shared resources. Binary semaphores take values 0 or 1, and counting semaphores can take larger values. For example, if five threads want to access a printer but only two can print at a time, a counting semaphore initialized to 2 will allow only two threads to enter the critical section while others wait."
    },    
    {
      "title": "What is a mutex?",
      "answer": "A mutex (mutual exclusion) is a locking mechanism that allows only one thread to access a resource at a time. It’s used to avoid race conditions. For example, if two threads try to write to the same log file simultaneously, a mutex ensures that one thread locks the file while writing, and the other waits until the lock is released."
    },    
    {
      "title": "What is a deadlock?",
      "answer": "A deadlock is a situation where a set of processes are waiting on each other for resources, and none can proceed. For example, if Process A holds Resource 1 and waits for Resource 2, while Process B holds Resource 2 and waits for Resource 1, both processes are stuck and cannot continue — this is a deadlock."
    },    
    {
      "title": "What are the four necessary conditions for a deadlock?",
      "answer": "1. Mutual Exclusion\n2. Hold and Wait\n3. No Preemption\n4. Circular Wait\n\nFor example, in a printing system, if one process holds a scanner and waits for a printer, while another holds the printer and waits for the scanner, all four conditions can be met, leading to a deadlock where neither process can proceed."
    },    
    {
      "title": "How to handle deadlocks?",
      "answer": "1. Prevention or avoidance\n2. Detection and recovery\n3. Ignore the problem (used in Windows/Unix)\n\nFor example, in prevention, the system may deny a process from holding one resource while waiting for another. In avoidance, it checks if granting a resource could lead to deadlock. In detection and recovery, the system allows deadlocks to occur but detects and breaks them, while some systems like Windows often just ignore them assuming they are rare."
    },    
    {
      "title": "What is Banker's Algorithm?",
      "answer": "It is a deadlock avoidance method that allocates resources only if the system remains in a safe state after allocation. For example, before allowing a process to use more memory, the Banker's Algorithm checks if enough resources will still be available for all other processes to complete safely, just like a banker only lends money if they’re sure all clients can repay without going bankrupt."
    },    
    {
      "title": "What is memory management?",
      "answer": "It refers to managing a computer's memory effectively among different processes using techniques like swapping, paging, segmentation, and allocation strategies. For example, when you open multiple applications on your computer, the operating system uses memory management to allocate RAM efficiently so that each app runs smoothly without interfering with others."
    },    
    {
      "title": "What is paging?",
      "answer": "Paging divides memory into equal-sized pages and frames. Logical addresses are mapped to physical addresses, reducing external fragmentation. For example, when a program is loaded into memory, it is split into fixed-size pages that can be stored in any available memory frames, making memory usage more efficient and avoiding gaps caused by different process sizes."
    },    
    {
      "title": "What is segmentation?",
      "answer": "Segmentation divides memory into variable-size segments based on logical divisions like functions or data structures. For example, a program may have separate segments for code, data, and stack, allowing each to grow independently and making it easier to manage and protect different parts of the program."
    },    
    {
      "title": "What is a page fault?",
      "answer": "A page fault occurs when a process accesses a page that is not currently in physical memory. For example, if a program tries to read data that has been swapped out to disk, the operating system pauses the program, loads the required page from disk into RAM, and then resumes execution."
    },    
    {
      "title": "What are page replacement algorithms?",
      "answer": "1. FIFO\n2. Optimal\n3. LRU\nThese algorithms decide which page to remove from memory when a new page needs to be loaded. For example, in FIFO (First-In-First-Out), the oldest loaded page is removed first. In LRU (Least Recently Used), the page that hasn’t been used for the longest time is replaced, which helps improve efficiency in many real-world applications."
    },    
    {
      "title": "What is Belady’s Anomaly?",
      "answer": "It is a situation where increasing the number of page frames results in more page faults using FIFO algorithm. For example, in some cases, a program may experience fewer page faults with 3 frames than with 4 frames when using FIFO, which is counterintuitive and highlights inefficiency in the algorithm."
    },    
    {
      "title": "What is disk scheduling?",
      "answer": "It is the method used by the OS to determine the order of servicing disk I/O requests to improve efficiency. For example, if multiple read/write requests are made to different parts of a hard drive, disk scheduling algorithms like SSTF (Shortest Seek Time First) or SCAN are used to decide the optimal order, reducing the total movement of the disk arm and improving performance."
    },    
    {
      "title": "What are disk scheduling algorithms?",
      "answer": "1. FCFS (First Come First Serve)\n2. SSTF (Shortest Seek Time First)\n3. SCAN\n4. CSCAN (Circular SCAN)\n5. LOOK\n6. CLOOK (Circular LOOK)\n\nFor example, SSTF selects the disk I/O request that is closest to the current head position, reducing seek time. SCAN moves the disk arm in one direction servicing requests until it reaches the end, then reverses, like an elevator."
    },    
    {
      "title": "What is thrashing?",
      "answer": "Thrashing occurs when too many pages are swapped in and out of memory, reducing CPU utilization significantly. For example, if multiple programs are running and each frequently accesses data not currently in RAM, the system spends more time swapping pages than executing processes, causing performance to drop drastically."
    },    
    {
      "title": "What is virtual memory?",
      "answer": "Virtual memory is a technique that enables processes to execute even when they don’t fit entirely in physical memory, using disk as extension. For example, if your computer runs out of RAM while opening a large application, it moves some inactive data to disk (swap space) to free up RAM, allowing the program to continue running smoothly."
    },    
    {
      "title": "What is fragmentation?",
      "answer": "Fragmentation is inefficient use of memory.\n- Internal: Wasted space inside allocated memory.\n- External: Wasted space between allocated blocks.\n\nFor example, if a program is allocated 100 KB but only uses 70 KB, the remaining 30 KB is internal fragmentation. If several small free memory blocks exist between allocated areas but none are large enough for a new process, that’s external fragmentation."
    },    
    {
      "title": "What is spooling?",
      "answer": "Spooling is a process of storing data temporarily for devices like printers. It queues the jobs to manage access efficiently. For example, when you print multiple documents, the OS stores them in a spool (buffer) and sends them one by one to the printer, allowing you to continue working while printing happens in the background."
    },    
    {
      "title": "What is starvation?",
      "answer": "Starvation happens when a process waits indefinitely for a resource because other higher priority processes are continuously allocated those resources. For example, in priority scheduling, if low-priority processes keep getting skipped because high-priority ones keep arriving, the low-priority process may never get CPU time, leading to starvation."
    },    
    {
      "title": "What is aging?",
      "answer": "Aging is a technique used to prevent starvation by gradually increasing the priority of waiting processes over time. For example, if a low-priority process has been waiting in the queue for a long time, the system increases its priority so it eventually gets CPU time, ensuring fairness in scheduling."
    },    
    {
      "title": "What is a monolithic kernel?",
      "answer": "A monolithic kernel contains all the essential services in a single large block of code running in a single address space. For example, operating systems like Linux use a monolithic kernel where device drivers, file system management, and memory management all run in kernel mode, offering high performance but potentially lower modularity."
    },    
    {
      "title": "What is a microkernel?",
      "answer": "A microkernel contains only the essential services and runs most services in user space, improving modularity and security. For example, in microkernel-based systems like Minix or QNX, only core functions like communication and scheduling run in kernel mode, while device drivers and file systems run in user space, making the system more stable and easier to maintain."
    },    
    {
      "title": "What is re-entrancy?",
      "answer": "Re-entrancy allows multiple users to share a single copy of a program at the same time without interfering with each other. For example, a re-entrant function in a library can be safely called by multiple threads simultaneously without corrupting data or causing errors."
    },    
    {
      "title": "What is RAID?",
      "answer": "RAID stands for Redundant Array of Independent Disks. It combines multiple disks to increase performance and provide fault tolerance. For example, RAID 1 mirrors data across two disks, so if one disk fails, the data is still available on the other."
    },    
    {
      "title": "What is logical vs physical address?",
      "answer": "Logical address is generated by the CPU. Physical address is the actual location in memory where data is stored. For example, when a program runs, it uses logical addresses, which are translated by the memory management unit (MMU) into physical addresses in RAM."
    },    
    {
      "title": "What are the advantages of multithreading?",
      "answer": "1. Better responsiveness\n2. Resource sharing\n3. Lower overhead\n4. Efficient utilization of multiple CPUs\n\nFor example, in a web browser, multithreading allows loading images, rendering text, and responding to user input simultaneously, resulting in a smoother user experience."
    }
    
  ],

  "mongodb": [
    {
      title: "What is mongosh in MongoDB?",
      answer: "mongosh is the MongoDB shell used to interact with MongoDB from the command line.\nExample: Run mongosh to start the shell."
    },
    {
      title: "How to create or switch to a database in MongoDB?",
      answer: "Use the use command followed by the database name.\nExample: use college\nIf the database doesn't exist it will be created when data is inserted."
    },
    {
      title: "What is BSON in MongoDB?",
      answer: "BSON (Binary JSON) is the format MongoDB uses internally to store data. It is binary-encoded and supports more data types than regular JSON."
    },
    {
      title: "Difference between JSON and BSON?",
      answer: "JSON is text-based and human-readable.\nBSON is binary-encoded more efficient for storage but not space efficient due to added metadata."
    },
    {
      "title": "What is a Collection in MongoDB?",
      "answer": "A collection is a group of MongoDB documents, similar to a table in relational databases.\nEach document is a record (like a row), and documents in a collection can have different structures.\n\nExample:\nSuppose you have a database `school`. You can create a collection `students` where each document represents a student:\n\n{\n  \"name\": \"Alice\",\n  \"age\": 15,\n  \"grade\": \"10th\"\n}\n\n{\n  \"name\": \"Bob\",\n  \"age\": 16,\n  \"grade\": \"10th\",\n  \"hobbies\": [\"football\", \"chess\"]\n}\n\nHere, both documents are part of the `students` collection, even though their fields are slightly different."
    },
        
    {
      title: "How does MongoDB store data?",
      answer: "MongoDB stores data in the form of documents (like JSON objects) inside collections and collections belong to a database.\nStructure: Database → Collections → Documents"
    },
    {
      "title": "How to insert a single document into a collection?",
      "answer": "Use the `insertOne()` method on a collection to add a single document.\n\nSyntax:\ndb.<collection>.insertOne({ field1: value1, field2: value2, ... })\n\nExample:\ndb.Student.insertOne({ name: 'Adam', marks: 75 })\n\nThis inserts one document with `name` and `marks` fields into the `Student` collection."
    },    
    {
      title: "How to display all documents in a collection?",
      answer: "Use the find() method.\nExample: db.Student.find()"
    },
    {
      title: "What happens if a collection doesn't exist in MongoDB?",
      answer: "If a collection does not exist MongoDB creates it automatically when you first insert data into it."
    },
    {
      "title": "What is insertMany in MongoDB?",
      "answer": "`insertMany()` is a method in MongoDB used to insert multiple documents into a collection in a single operation. It is more efficient than calling `insertOne()` repeatedly, especially for large data sets.\n\nEach document in the array can have different fields, and MongoDB will automatically assign a unique `_id` to each document if not provided.\n\n**Syntax:**\ndb.<collection>.insertMany([ {doc1}, {doc2}, ... ])\n\n**Example:**\ndb.student.insertMany([\n  { name: 'A', age: 14 },\n  { name: 'B', age: 15 },\n  { name: 'C', age: 16 }\n])\n\n**Explanation:**\n- This command adds 3 documents to the `student` collection.\n- Each document represents a student with `name` and `age` fields.\n- If any document fails to insert (e.g., due to duplicate `_id`), the operation can be configured to either continue or stop.\n\n**Advantages:**\n- Faster insertion when dealing with bulk data.\n- Reduces number of database calls, improving performance.\n\n**Note:**\n- You can also pass an optional second argument to control behavior like `ordered: false` to allow continuing even if some inserts fail."
    },    
    {
      title: "How to find all documents in a collection?",
      answer: "Use find() with no arguments to return all documents.\nExample:\ndb.collection.find()"
    },
    {
      "title": "How to run specific queries in MongoDB?",
      "answer": "In MongoDB, you can run specific queries using key-value filters to find matching documents in a collection.\n\n**Common Methods:**\n- `find()` returns all documents that match the filter.\n- `findOne()` returns the first matching document only.\n\n**Syntax:**\ndb.<collection>.find({ key: value })\ndb.<collection>.findOne({ key: value })\n\n**Examples:**\n1. Find all students named 'John':\ndb.students.find({ name: 'John' })\n\n2. Find one student with marks greater than 80:\ndb.students.findOne({ marks: { $gt: 80 } })\n\n**Notes:**\n- You can use query operators like `$gt`, `$lt`, `$in`, `$and`, etc., for advanced filtering.\n- The result of `find()` is a cursor, which you can iterate over to access individual documents."
    },    
    {
      "title": "How to use query operators in MongoDB?",
      "answer": "MongoDB provides powerful query operators to perform complex searches.\nSome commonly used operators include:\n- `$gt`: Greater than\n- `$lt`: Less than\n- `$in`: Matches any value in an array\n- `$or`: Matches if any of the conditions are true\n\n**Examples:**\n1. Find students with marks greater than 75:\ndb.student.find({ marks: { $gt: 75 } })\n\n2. Find students from either Delhi or Mumbai:\ndb.student.find({ city: { $in: ['Delhi', 'Mumbai'] } })\n\n3. Find students with marks greater than 75 OR from Chandigarh:\ndb.student.find({ $or: [ { marks: { $gt: 75 } }, { city: 'Chd' } ] })\n\n**Note:**\n- All operators start with a `$` symbol.\n- These can be nested inside queries for more advanced filtering."
    },    
    {
      "title": "What is updateOne in MongoDB?",
      "answer": "`updateOne()` is a method in MongoDB used to update the **first** document that matches a specified filter.\nIt takes two main arguments:\n1. The filter to match the document.\n2. The update operation (e.g., `$set`, `$inc`).\n\n**Syntax:**\ndb.<collection>.updateOne(filter, update)\n\n**Example:**\ndb.student.updateOne(\n  { name: 'Adam' },\n  { $set: { marks: 99 } }\n)\n\n**Explanation:**\n- This command finds the first student document where `name` is 'Adam' and updates the `marks` field to 99.\n- Only the first matching document is updated, even if more exist.\n\n**Note:**\n- Always use update operators like `$set` to avoid replacing the entire document unintentionally."
    },    
    {
      "title": "What is updateMany in MongoDB?",
      "answer": "`updateMany()` is used to update **all** documents in a collection that match a given filter.\nIt allows you to modify multiple documents at once using update operators like `$set`, `$inc`, etc.\n\n**Syntax:**\ndb.<collection>.updateMany(filter, update)\n\n**Example:**\ndb.student.updateMany(\n  { city: 'Delhi' },\n  { $set: { city: 'N.D.' } }\n)\n\n**Explanation:**\n- This command finds all student documents where `city` is 'Delhi' and updates the value of `city` to 'N.D.'.\n- Unlike `updateOne()`, this updates **all matching documents**, not just the first one.\n\n**Note:**\n- It's important to use update operators like `$set` to avoid replacing entire documents accidentally."
    },    
    {
      "title": "What is replaceOne in MongoDB?",
      "answer": "`replaceOne()` replaces the **entire document** that matches a given filter with a **new document**.\nUnlike `updateOne()`, it does not use update operators like `$set` — the whole document is replaced.\n\n**Syntax:**\ndb.<collection>.replaceOne(filter, replacement)\n\n**Example:**\ndb.student.replaceOne(\n  { name: 'Bob' },\n  { name: 'Shraddha', marks: 94, state: 'Haryana' }\n)\n\n**Explanation:**\n- This command finds the first document where `name` is 'Bob' and replaces it completely with a new document.\n- If the original document had other fields (e.g., `age`, `city`), they will be lost unless included in the replacement.\n\n**Note:**\n- Use `replaceOne()` only when you want to fully overwrite an existing document."
    },    
    {
      "title": "What does replaceOne() do if multiple documents match?",
      "answer": "`replaceOne()` replaces **only the first** document that matches the given filter, even if multiple documents satisfy the condition.\n\n**Explanation:**\n- It does not update all matching documents — only the first one it finds.\n- This behavior is similar to `updateOne()`, which also targets only the first match.\n\n**Example:**\nIf multiple documents have `name: 'Bob'`, the following command:\ndb.student.replaceOne(\n  { name: 'Bob' },\n  { name: 'Shraddha', marks: 94 }\n)\nwill only replace the first matching document with the new one."
    },    
    {
      "title": "What is nesting in MongoDB documents?",
      "answer": "Nesting in MongoDB refers to storing documents or objects **within** other documents as values. This allows you to represent complex and hierarchical data structures.\n\n**Example:**\n{\n  _id: ObjectId('...'),\n  name: 'Farah',\n  performance: {\n    marks: 88,\n    grade: 'A'\n  }\n}\n\n**Explanation:**\n- In this example, the `performance` field is itself an embedded document containing `marks` and `grade`.\n- Nesting is useful for logically grouping related data together (like address, performance, contact details, etc.).\n\n**Note:**\n- You can query nested fields using dot notation. Example:\n  `db.student.find({ 'performance.grade': 'A' })`"
    },    
    {
      "title": "How to query nested fields in MongoDB?",
      "answer": "To query nested fields in MongoDB, use **dot notation**, where you specify the path to the nested field using a dot (`.`) between levels.\n\n**Syntax:**\ndb.<collection>.find({ 'parentField.childField': value })\n\n**Example:**\ndb.student.findOne({ 'performance.marks': 88 })\n\n**Explanation:**\n- If a document has a nested field like `performance: { marks: 88 }`, you can access `marks` using `'performance.marks'`.\n- This allows you to filter documents based on values deep inside nested objects.\n\n**Note:**\n- Dot notation also works with deeper nesting like `'a.b.c'` and with array elements as well."
    },
        
    {
      "title": "How to delete a single document from a collection?",
      "answer": "Use the `deleteOne()` method with a filter to remove the **first** matching document from a MongoDB collection.\n\n**Syntax:**\ndb.<collection>.deleteOne({ key: value })\n\n**Examples:**\n1. Delete one student from Haryana:\ndb.student.deleteOne({ state: 'Haryana' })\n\n2. Delete one document where `name` is 'John':\ndb.student.deleteOne({ name: 'John' })\n\n**Explanation:**\n- The method deletes **only the first document** that matches the filter criteria.\n- If no documents match, nothing is deleted.\n\n**Note:**\n- Be careful with the filter to avoid unintentionally removing the wrong document."
    },    
    {
      "title": "How to delete multiple documents from a collection?",
      "answer": "Use the `deleteMany()` method with a filter to delete **all documents** that match the given condition.\n\n**Syntax:**\ndb.<collection>.deleteMany({ key: value })\n\n**Example:**\ndb.student.deleteMany({ marks: { $lt: 75 } })\n\n**Explanation:**\n- This command deletes all student documents where `marks` are less than 75.\n- Unlike `deleteOne()`, `deleteMany()` removes **every matching document**.\n\n**Note:**\n- Always double-check your filter before running `deleteMany()` to avoid accidentally deleting large amounts of data."
    },    
    {
      title: "How to delete all documents in a collection?",
      answer: "Use deleteMany({}) with an empty filter.\nExample:\ndb.student.deleteMany({})"
    },
    {
      title: "How to delete an entire database in MongoDB?",
      answer: "Use dropDatabase() to remove the current database completely.\nExample:\ndb.dropDatabase()"
    },
    {
      title: "What is Mongoose?",
      answer: "Mongoose is an ODM (Object Data Modeling) library that helps create a connection between MongoDB and the Node.js runtime environment. It simplifies interaction with MongoDB using schema and models."
    },
    {
      "title": "What is a Schema in Mongoose?",
      "answer": "A Schema in Mongoose defines the structure or blueprint of the documents within a MongoDB collection.\nIt specifies the **field names**, **data types**, and **validation rules** for the documents.\n\n**Purpose:**\n- Ensures consistency in the shape of documents.\n- Adds features like default values, required fields, validation, etc.\n\n**Example:**\nconst mongoose = require('mongoose');\n\nconst studentSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  age: Number,\n  enrolled: { type: Boolean, default: false }\n});\n\n**Explanation:**\n- This schema defines a `Student` document with `name`, `age`, and `enrolled` fields.\n- `name` must be a string and is required.\n- `enrolled` is a boolean with a default value of `false`.\n\nSchemas are used to create Mongoose models, which interact with the MongoDB collection."
    },    
    {
      "title": "What is a Model in Mongoose?",
      "answer": "A **Model** in Mongoose is a class created from a schema. It represents a specific MongoDB collection and provides an interface to interact with the data.\n\n**Purpose:**\n- Used to create, read, update, and delete documents (CRUD operations).\n- Connects your schema definition to an actual MongoDB collection.\n\n**Example:**\nconst mongoose = require('mongoose');\n\nconst studentSchema = new mongoose.Schema({\n  name: String,\n  age: Number\n});\n\nconst Student = mongoose.model('Student', studentSchema);\n\n**Explanation:**\n- `Student` is a model based on `studentSchema`.\n- It will be linked to the `students` collection in MongoDB (Mongoose auto-pluralizes the name).\n- You can now do operations like:\n  - `Student.find()` to read data\n  - `Student.create()` to insert data\n  - `Student.updateOne()` to update\n  - `Student.deleteOne()` to delete\n\n**Note:**\n- Models are the key to using Mongoose effectively for database interaction."
    },    
    {
      title: "What is operation buffering in Mongoose?",
      answer: "Mongoose allows you to start using your models even before a MongoDB connection is fully established. This is known as operation buffering."
    },
    {
      "title": "Is Mongoose's find() a promise?",
      "answer": "Mongoose queries like `find()` are not actual promises, but they are **thenable**, meaning they behave like promises and support `.then()`, `.catch()`, and `async/await`.\n\n**Example:**\nStudent.find({ age: { $gt: 15 } })\n  .then(data => console.log(data))\n  .catch(err => console.error(err));\n\n**Explanation:**\n- Although not native promises, Mongoose query objects implement `.then()` so you can treat them as promises in most use cases.\n- You can also use `await` for cleaner syntax in async functions:\n\n```js\nconst data = await Student.find({ age: { $gt: 15 } });\n```\n\n**Note:**\n- Internally, Mongoose queries are not full ES6 promises to allow chaining and extra query features, but they are compatible with promise-based syntax."
    },    
    {
      "title": "What are commonly used find operations in Mongoose?",
      "answer": "Mongoose provides several methods to retrieve documents from a MongoDB collection. The most commonly used are:\n\n1. **Model.find(filter)**\n   - Returns all documents that match the filter.\n   - Returns a query object (can use `.then()` or `await`).\n   - Example: `Student.find({ age: { $gt: 15 } })`\n\n2. **Model.findOne(filter)**\n   - Returns the **first** document that matches the filter.\n   - Returns `null` if no match is found.\n   - Example: `Student.findOne({ name: 'Alice' })`\n\n3. **Model.findById(id)**\n   - Finds a document by its `_id` value.\n   - Useful when you already know the unique identifier.\n   - Example: `Student.findById('60f1a2b9c8a4a0b1e4d5c6f7')`\n\n**Note:** All of these methods return thenable query objects, so they support both `.then()` chaining and `async/await` syntax."
    },    
    {
      "title": "What are update operations in Mongoose?",
      "answer": "Mongoose provides several methods to update documents in a collection:\n\n1. **Model.updateOne(filter, update)**\n   - Updates the **first** document that matches the filter.\n   - Does **not** return the updated document by default.\n   - Example: `Student.updateOne({ name: 'Alice' }, { $set: { marks: 90 } })`\n\n2. **Model.updateMany(filter, update)**\n   - Updates **all** documents that match the filter.\n   - Does not return updated documents.\n   - Example: `Student.updateMany({ class: '10A' }, { $set: { promoted: true } })`\n\n3. **Model.findOneAndUpdate(filter, update, options)**\n   - Finds and updates the **first** matching document.\n   - Returns the **original** document by default, unless `{ new: true }` is specified.\n   - Example: `Student.findOneAndUpdate({ name: 'Bob' }, { $inc: { marks: 5 } }, { new: true })`\n\n4. **Model.findByIdAndUpdate(id, update, options)**\n   - Finds a document by its `_id` and updates it.\n   - Returns the updated document if `{ new: true }` is passed.\n   - Example: `Student.findByIdAndUpdate(id, { $set: { grade: 'A+' } }, { new: true })`\n\n**Note:** Always use update operators like `$set`, `$inc`, etc., when modifying fields to avoid overwriting entire documents unintentionally."
    },    
    {
      "title": "How to delete a single document using Mongoose?",
      "answer": "Use `Model.deleteOne()` to remove the **first document** that matches the given filter from the MongoDB collection.\n\n**Syntax:**\nModel.deleteOne(filter)\n\n**Example:**\nStudent.deleteOne({ name: 'Adam' })\n\n**Explanation:**\n- This command deletes the first student document where the `name` is 'Adam'.\n- If no documents match the filter, nothing is deleted.\n\n**Note:**\n- `deleteOne()` returns a result object that includes a `deletedCount` field indicating how many documents were removed (0 or 1).\n- Use this method when you want to ensure that only **one** document is deleted, even if multiple match."
    },    
    {
      "title": "How to delete multiple documents in Mongoose?",
      "answer": "Use `Model.deleteMany()` to remove **all documents** that match the specified filter from a MongoDB collection.\n\n**Syntax:**\nModel.deleteMany(filter)\n\n**Example:**\nStudent.deleteMany({ city: 'Delhi' })\n\n**Explanation:**\n- This command deletes all student documents where the `city` field is 'Delhi'.\n- If no documents match, nothing is deleted.\n\n**Note:**\n- `deleteMany()` returns a result object that includes a `deletedCount` indicating how many documents were removed.\n- Always double-check your filter when using this method to avoid unintended mass deletion."
    },    
    {
      "title": "What does findByIdAndDelete() do?",
      "answer": "`Model.findByIdAndDelete(id)` finds a document in the MongoDB collection by its `_id` and deletes it.\n\n**Syntax:**\nModel.findByIdAndDelete(id)\n\n**Example:**\nStudent.findByIdAndDelete('60f7a2b9e3d5c91234abcd12')\n\n**Explanation:**\n- This method looks for a document with the specified `_id` and removes it from the collection.\n- It returns the **deleted document** if found, or `null` if no document matches the given ID.\n\n**Note:**\n- This is a convenient method when you want to delete a document and also get its data in response.\n- You can also pass an optional callback or use `await` for asynchronous handling."
    },    
    {
      "title": "What is the use of findOneAndDelete() in Mongoose?",
      "answer": "`Model.findOneAndDelete(filter)` is used to find the **first document** that matches the given filter and delete it from the collection.\n\n**Syntax:**\nModel.findOneAndDelete(filter)\n\n**Example:**\nStudent.findOneAndDelete({ name: 'Aman' })\n\n**Explanation:**\n- This method searches for the first document where `name` is 'Aman' and deletes it.\n- It returns the **deleted document** if found, or `null` if no match is found.\n\n**Use Cases:**\n- When you want to delete a document **and** retrieve its content at the same time.\n- Useful for cleanup operations or soft delete patterns where you want to log or process the deleted data.\n\n**Note:**\n- If multiple documents match, only the **first** one (based on the collection's natural order) will be deleted."
    },    
    {
      "title": "Does deleteOne() return anything?",
      "answer": "Yes, `deleteOne()` returns a result object that contains information about the deletion.\n\n**Returned Object Example:**\n{\n  acknowledged: true,\n  deletedCount: 1\n}\n\n**Explanation:**\n- `acknowledged`: Indicates whether the operation was successfully acknowledged by the database.\n- `deletedCount`: Shows how many documents were actually deleted (either `0` or `1`).\n\n**Example:**\nconst result = await Student.deleteOne({ name: 'Aman' });\nconsole.log(result.deletedCount); // Outputs 1 if a document was deleted\n\n**Note:**\n- If no documents match the filter, `deletedCount` will be `0`."
    },    
    {
      "title": "What is validation in Mongoose?",
      "answer": "Validation in Mongoose ensures that the data being inserted or updated in a MongoDB collection **follows the rules defined in the schema**.\n\n**Purpose:**\n- Prevents invalid or inconsistent data from being saved to the database.\n- Enforces data integrity and correctness at the application level.\n\n**Example:**\nconst studentSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  age: { type: Number, min: 5, max: 100 },\n  email: { type: String, match: /.+\\@.+\\..+/ }\n});\n\n**Explanation:**\n- `required: true` ensures `name` must be provided.\n- `min` and `max` restrict the range of age.\n- `match` uses a regex to validate email format.\n\n**Note:**\n- Mongoose runs validation automatically before saving a document.\n- You can also trigger validation manually using `.validate()`.\n- Custom validation functions can also be added for more complex logic."
    },    
    {
      "title": "How to define required fields in Mongoose schema?",
      "answer": "To make a field required in Mongoose, use the property `required: true` in the schema definition.\n\n**Syntax:**\n{ fieldName: { type: DataType, required: true } }\n\n**Example:**\nconst productSchema = new mongoose.Schema({\n  name: { type: String, required: true },\n  price: { type: Number }\n});\n\n**Explanation:**\n- In this schema, `name` is a required field, so a document **must** include it.\n- `price` is optional, so documents may or may not have it.\n\n**Note:**\n- You can also provide a custom error message:\n  `{ required: [true, 'Product name is required'] }`\n- Required fields are validated before saving documents to the database."
    },    
    {
      "title": "What is Middleware in Express?",
      "answer": "Middleware in Express is a function that executes during the **request-response cycle**. It has access to the `request` and `response` objects, and can either:\n- Modify them,\n- End the request-response cycle, or\n- Call the `next()` function to pass control to the next middleware in the stack.\n\n**Syntax:**\n```js\napp.use((req, res, next) => {\n  console.log('Middleware running');\n  next();\n});\n```\n\n**Types of Middleware:**\n- Application-level middleware\n- Router-level middleware\n- Error-handling middleware\n- Built-in middleware (like `express.json()`)\n- Third-party middleware (like `morgan`, `cors`)\n\n**Example:**\n```js\napp.use((req, res, next) => {\n  req.requestTime = Date.now();\n  next();\n});\n```\n\n**Explanation:**\n- This middleware adds a `requestTime` property to every incoming request.\n\n**Note:**\n- Middleware is powerful for tasks like logging, authentication, validation, error handling, and more."
    },    
    {
      "title": "Common Middleware Functions in Express",
      "answer": "Express supports various middleware functions that perform tasks during the request-response cycle. Some of the most commonly used middleware are:\n\n1. **express.static**\n   - Serves static files (HTML, CSS, JS, images, etc.).\n   - Example: `app.use(express.static('public'))`\n\n2. **express.json** *(built-in)*\n   - Parses incoming requests with JSON payloads.\n   - Example: `app.use(express.json())`\n\n3. **express.urlencoded** *(built-in)*\n   - Parses incoming requests with URL-encoded data (typically from forms).\n   - Example: `app.use(express.urlencoded({ extended: true }))`\n\n4. **body-parser** *(external)*\n   - Older middleware used to parse JSON and URL-encoded data.\n   - Now mostly replaced by built-in `express.json()` and `express.urlencoded()`.\n\n5. **method-override**\n   - Allows use of HTTP verbs like PUT or DELETE in places (like HTML forms) that only support GET/POST.\n   - Example: `app.use(methodOverride('_method'))`\n\n6. **morgan**\n   - Logs HTTP requests in the console (useful for debugging).\n   - Example: `app.use(morgan('dev'))`\n\n**Note:** Middleware must be registered using `app.use()` or directly on routes."
    },    
    {
      "title": "What does Middleware do?",
      "answer": "Middleware in Express plays a crucial role in handling requests and responses. It can:\n\n1. **Execute any code**\n   - Example: Logging, authentication checks, setting headers, etc.\n\n2. **Modify the request (`req`) and response (`res`) objects**\n   - Example: Adding a `user` property to `req` after decoding a token.\n\n3. **End the request-response cycle**\n   - Example: Sending a response directly from the middleware: `res.send('Access Denied')`\n\n4. **Call the next middleware in the stack using `next()`**\n   - This passes control to the next matching route or middleware.\n\n**Example:**\n```js\napp.use((req, res, next) => {\n  console.log('Request URL:', req.url);\n  next();\n});\n```\n\n**Note:**\n- Middleware functions run in the order they are defined.\n- They are essential for building scalable and maintainable Express apps."
    },    
    {
      "title": "What is the 'next' middleware function in Express?",
      "answer": "The `next` function in Express is a callback provided to middleware functions that, when called, passes control to the **next middleware** in the stack.\n\n**Purpose:**\n- It ensures that the request continues through the middleware chain.\n- If `next()` is **not** called and no response is sent, the request will hang and eventually time out.\n\n**Syntax:**\n```js\napp.use((req, res, next) => {\n  console.log('This is a middleware');\n  next(); // Passes control to the next middleware\n});\n```\n\n**Example Use Case:**\n- Logging, authentication, adding properties to `req`, etc., before reaching the route handler.\n\n**Note:**\n- You can also pass an error to `next(err)` to trigger the error-handling middleware."
    },    
    {
      "title": "What is an example of writing a middleware?",
      "answer": "A middleware function in Express is written with three parameters: `req`, `res`, and `next`. It can perform actions before passing control to the next middleware or route handler.\n\n**Example:**\n```js\napp.use((req, res, next) => {\n  console.log('Middleware executed');\n  next(); // Pass control to the next middleware or route\n});\n```\n\n**Explanation:**\n- This middleware logs a message every time a request is received.\n- `next()` is important to continue the request-response cycle.\n\n**Note:**\n- Middleware functions can be global (using `app.use`) or route-specific."
    },    
    {
      "title": "What is a default error handler in Express?",
      "answer": "Express provides a **default error-handling middleware** that is automatically triggered when `next(err)` is called in any middleware or route.\n\n**How it works:**\n- If any middleware or route calls `next(error)`, Express skips all remaining middleware and routes.\n- It invokes the built-in error handler, which sends a response with **status code 500** (Internal Server Error) and the error message (in development mode).\n\n**Example:**\n```js\napp.use((req, res, next) => {\n  const err = new Error('Something went wrong');\n  next(err);\n});\n```\n\n**Default behavior:**\n- In production, the default error handler hides the stack trace.\n- In development, it includes stack trace in the response.\n\n**Note:**\n- You can define your **custom error handler** by creating middleware with 4 parameters: `(err, req, res, next)`."
    },    
    {
      "title": "How to handle errors in Express using middleware?",
      "answer": "To handle errors in Express, you can define a special **error-handling middleware** function with **four parameters**: `(err, req, res, next)`.\n\n**Syntax:**\n```js\napp.use((err, req, res, next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});\n```\n\n**Explanation:**\n- This middleware is triggered whenever `next(err)` is called in the app.\n- `err` is the error object, `req` and `res` are the request and response objects, and `next` is used to pass control (if needed).\n\n**Usage Example:**\n```js\napp.get('/', (req, res) => {\n  throw new Error('Unexpected error');\n});\n\n// Error-handling middleware (must come last)\napp.use((err, req, res, next) => {\n  res.status(500).send('Internal Server Error');\n});\n```\n\n**Note:**\n- Error-handling middleware should always be added **after** all routes and regular middleware.\n- You can customize responses for different types of errors (validation, auth, etc.)."
    },    
    {
      "title": "What is a utility middleware?",
      "answer": "Utility middleware in Express refers to built-in or third-party helper functions that simplify common tasks like parsing request bodies, serving static files, and logging.\n\n**Examples of Utility Middleware:**\n1. **express.json()**\n   - Parses incoming JSON request bodies.\n   - Example: `app.use(express.json())`\n\n2. **express.urlencoded()**\n   - Parses URL-encoded form data (e.g., from HTML forms).\n   - Example: `app.use(express.urlencoded({ extended: true }))`\n\n3. **express.static()**\n   - Serves static files such as images, CSS, JavaScript.\n   - Example: `app.use(express.static('public'))`\n\n**Explanation:**\n- These middlewares are not tied to specific routes but provide general-purpose functionality across the application.\n- They are often placed at the top of the middleware stack using `app.use()` so that they can apply to all incoming requests.\n\n**Note:**\n- Utility middleware enhances code readability and reduces the need to manually parse or handle common request features."
    },    
  ],

  "github": [

    {
      title: "How to push a project to GitHub step by step?",
      answer: "```bash\ncd your-project-folder               # Go to your project directory\ngit init                             # Initialize git\ngit remote add origin https://github.com/yourusername/your-repo-name.git  # Link GitHub repo\ngit add .                            # Stage all files\ngit commit -m \"Initial commit\"      # Commit with a message\ngit branch -M main                  # Rename branch to main (optional but recommended)\ngit push -u origin main             # Push code to GitHub\n```"
    },    
    {
      title: "What is Git?",
      answer: "Git is a free and open-source version control system that helps track changes in code, maintain history, and support collaboration."
    },
    {
      title: "What is GitHub?",
      answer: "GitHub is a website where we host Git repositories online. It allows users to share, collaborate, and manage Git-based projects."
    },
    {
      title: "Why is Git useful in software development?",
      answer: "Git helps to:\n- Track changes in code\n- Maintain version history\n- Collaborate with others\n- Revert to previous versions if something breaks"
    },
    {
      title: "How do you configure Git with your identity?",
      answer: "Use the following commands to set your name and email globally:\n- git config --global user.name \"Your Name\"\n- git config --global user.email \"your@email.com\""
    },
    {
      title: "How can you check the current Git configuration?",
      answer: "Use the command:\n- git config --list\nIt displays all the Git configuration details."
    },
    {
      title: "What does the 'git clone' command do?",
      answer: "It clones a remote Git repository to your local machine.\n\nExample:\ngit clone https://github.com/username/project.git"
    },
    {
      title: "What does the 'git status' command do?",
      answer: "It displays the current state of your working directory and staging area.\n\nExample:\nIf a file is modified but not staged, git status will show it under 'Changes not staged for commit'."
    },
    {
      title: "What is the file status lifecycle in Git?",
      answer: "Git file lifecycle includes the following states:\n1. Untracked → file not added to Git\n2. Unmodified → file added and committed\n3. Modified → file edited after commit\n4. Staged → file marked to be committed"
    },
    {
      title: "How does a file move through different states in Git?",
      answer: "Example lifecycle:\n- Create a new file → *Untracked\n- git add filename → **Staged\n- git commit -m \"msg\" → **Unmodified\n- Edit the file → **Modified\n- git add filename → **Staged again\n- git commit → **Unmodified*"
    },
    {
      title: "What does the 'git add' command do?",
      answer: "It adds new or changed files in your working directory to the Git staging area.\n\nExample:\ngit add filename"
    },
    {
      title: "What is the purpose of 'git commit'?",
      answer: "It creates a record of changes added to the staging area.\n\nExample:\ngit commit -m \"Updated README file\""
    },
    {
      title: "How can you add and commit together in one step?",
      answer: "Use the following command:\ngit commit -am \"Your message\"\nThis adds and commits modified files (not new untracked files)."
    },
    {
      title: "What does 'git push' do?",
      answer: "It uploads your local repository content to a remote repository.\n\nExample:\ngit push origin main"
    },
    {
      title: "What is 'git init' used for?",
      answer: "It initializes a new Git repository in your current directory.\n\nExample:\ngit init"
    },
    {
      title: "What does 'git remote add origin <link>' do?",
      answer: "It connects your local repository to a remote one (usually hosted on GitHub).\n\nExample:\ngit remote add origin https://github.com/user/repo.git"
    },
    {
      title: "How do you verify your remote link in Git?",
      answer: "Use the command:\ngit remote -v"
    },
    {
      title: "How to check the branches in your Git repository?",
      answer: "Use the command:\ngit branch"
    },
    {
      title: "How do you rename a Git branch?",
      answer: "Use the command:\ngit branch -m new-name\n\nExample:\ngit branch -m main"
    },
    {
      title: "How do you push your code to a renamed branch?",
      answer: "Use the command:\ngit push origin main"
    },
    {
      title: "What does 'git checkout' do?",
      answer: "It lets you switch to another branch.\n\nExample:\ngit checkout feature"
    },
    {
      title: "How do you create and switch to a new branch in Git?",
      answer: "Use the command:\ngit checkout -b new-branch-name"
    },
    {
      title: "How can you delete a Git branch?",
      answer: "Use the command:\ngit branch -d branch-name\n\nExample:\ngit branch -d old-feature"
    },
    {
      title: "What does 'git push --set-upstream origin branch-name' do?",
      answer: "It links your local branch with the remote branch so future pushes can be done with just 'git push'.\n\nExample:\ngit push --set-upstream origin feature"
    },
    {
      title: "What is forking in GitHub?",
      answer: "Forking is creating a rough copy of someone else's repository under your GitHub account allowing you to make changes without affecting the original project."
    },
    {
      title: "How do you compare two Git branches?",
      answer: "Use the command:\ngit diff <branch-name>\nIt shows the differences between the current branch and the specified one."
    },
    {
      title: "How do you merge one branch into another in Git?",
      answer: "Use the command:\ngit merge <branch-name>\nIt merges changes from the specified branch into the current branch."
    },
    {
      title: "What is a pull request (PR) on GitHub?",
      answer: "A pull request is a way to tell others about changes you've pushed to a branch. It's often used to request merging those changes into another branch (like main)."
    },
    {
      title: "What does 'git pull origin main' do?",
      answer: "It fetches and downloads content from the remote 'main' branch and immediately updates the local branch to match it."
    },
    {
      title: "What is a merge conflict in Git?",
      answer: "A merge conflict occurs when Git is unable to automatically resolve differences between branches—usually when the same lines of code were modified in both branches."
    },
    {
      title: "How do you fix staged changes in Git?",
      answer: "Use the command:\ngit reset <filename>\nIt unstages the file from the staging area."
    },
    {
      title: "How do you undo the last commit in Git (but keep the changes)?",
      answer: "Use the command:\ngit reset HEAD~1\nThis removes the last commit but leaves the changes in your working directory."
    },
    {
      title: "How do you remove a specific commit in Git?",
      answer: "Use the command:\ngit reset <commit-hash>\nThis resets the branch to a specific commit keeping the changes locally."
    },
    {
      title: "How do you permanently remove commits and changes?",
      answer: "Use the command:\ngit reset --hard <commit-hash>\nThis resets the branch to the specified commit and discards all changes after it."
    }
    
  ],

  "backend": [
    {
      "title": "What is Node.js?",
      "answer": "Node.js is a **JavaScript runtime environment** that allows developers to run JavaScript code **outside of the browser**, typically on the server side.\n\n**Key Features:**\n- Built on **Google Chrome's V8 JavaScript engine**\n- Uses an **event-driven, non-blocking I/O model**, making it efficient and scalable\n- Ideal for building fast and lightweight web servers, APIs, and real-time applications\n\n**Example Use Case:**\n```js\nconst http = require('http');\nhttp.createServer((req, res) => {\n  res.write('Hello from Node.js!');\n  res.end();\n}).listen(3000);\n```\n\n**Explanation:**\n- This code starts a simple web server using Node.js that listens on port 3000.\n\n**Common Use Cases:**\n- REST APIs\n- Real-time apps (e.g., chat)\n- File servers\n- Tools and scripts (e.g., CLI tools like npm)\n\n**Note:**\n- Node.js is not a framework; it’s a runtime that can be used with many libraries and frameworks like Express.js."
    },    
    {
      title: "Is Node.js a language, library or framework?",
      answer: "Node.js is none of these. It is a runtime environment that enables JavaScript to run on the server."
    },
    {
      title: "What is Node.js REPL?",
      answer: "REPL stands for Read-Evaluate-Print Loop. It is an interactive shell in Node.js that allows you to run JavaScript commands line-by-line."
    },
    {
      title: "How can you start the Node.js REPL?",
      answer: "Open a terminal and type node then press Enter. You’ll enter an interactive environment where you can execute JS commands like in a console."
    },
    {
      title: "How do you execute a JavaScript file using Node.js?",
      answer: "Use the following command in terminal:\nnode filename.js\n\nExample:\nnode script.js"
    },
    {
      title: "What is the 'process' object in Node.js?",
      answer: "The 'process' object provides information and control over the current Node.js process.\n\nExample:\nprocess.version returns the Node.js version."
    },
    {
      title: "What is 'process.argv' in Node.js?",
      answer: "It is an array that contains command-line arguments passed when the Node.js process was launched.\n\nExample:\nnode script.js A B C"
    },
    {
      title: "How do you access command-line arguments in Node.js?",
      answer: "Use:\nconst args = process.argv;\nThen iterate:\nfor (let i = 0; i < args.length; i++) {\n  console.log(\"Hello to\" args[i]);\n}"
    },
    {
      "title": "What is 'require()' in Node.js?",
      "answer": "`require()` is a built-in function in Node.js used to **import external modules, JSON files, or custom files** into your current JavaScript file.\n\n**Purpose:**\n- Enables code modularity and reuse.\n- Allows access to Node's built-in modules (like `fs`, `http`) or third-party packages (like `express`).\n\n**Syntax:**\n```js\nconst moduleName = require('module-name');\n```\n\n**Examples:**\n1. Importing a built-in module:\n```js\nconst fs = require('fs');\n```\n2. Importing a custom module:\n```js\nconst helper = require('./helper.js');\n```\n3. Importing a third-party package:\n```js\nconst express = require('express');\n```\n\n**When to use `require()` vs `import`:**\n- Use **`require()`**:\n  - In **CommonJS** modules (default in Node.js)\n  - When using older versions of Node.js\n  - In `.js` files **without** `type  : module` in `package.json`\n\n- Use **`import`**:\n  - In **ES Modules (ESM)**\n  - When using modern, top-level `await`, or static imports\n  - In `.mjs` files or `.js` files **with** `type : module` in `package.json`\n\n**Note:**\n- Both `require()` and `import` are used for module loading, but they belong to different module systems (CommonJS vs ES Module).\n- You can't mix them freely unless using dynamic import (`import()`), which returns a promise."
    },          
    {
      "title": "What is 'module.exports' in Node.js?",
      "answer": "`module.exports` is a special object in Node.js used to **export functions, objects, or variables** from one file so that they can be used in another file using `require()`.\n\n**Purpose:**\n- Enables **modular programming** by allowing code to be split across multiple files.\n\n**Example:**\n```js\n// utils.js\nfunction add(a, b) {\n  return a + b;\n}\nmodule.exports = add;\n```\n```js\n// app.js\nconst add = require('./utils');\nconsole.log(add(2, 3)); // 5\n```\n\n**Explanation:**\n- In `utils.js`, the `add` function is exported using `module.exports`.\n- In `app.js`, it is imported using `require()`.\n\n**Note:**\n- You can also export multiple items:\n```js\nmodule.exports = { add, subtract };\n```\n- `module.exports` is used in **CommonJS modules**. In ES Modules, you use `export` and `import` instead."
    },       
    {
      title: "How do you export a single value using 'module.exports'?",
      answer: "Example:\nIn math.js:\nmodule.exports = 123;\n\nIn another file:\nconst someVal = require('./math');\nconsole.log(someVal); // 123"
    },
    {
      "title": "How can you export multiple functions or variables from a module?",
      "answer": "To export multiple functions or variables from a module in Node.js, **group them in an object** and assign that object to `module.exports`.\n\n**Example:**\n```js\n// mathUtils.js\nfunction sum(a, b) {\n  return a + b;\n}\n\nfunction mul(a, b) {\n  return a * b;\n}\n\nconst pi = 3.1416;\n\nmodule.exports = { sum, mul, pi };\n```\n\n**Then import and use them like this:**\n```js\n// app.js\nconst { sum, mul, pi } = require('./mathUtils');\n\nconsole.log(sum(2, 3));  // 5\nconsole.log(mul(2, 3));  // 6\nconsole.log(pi);         // 3.1416\n```\n\n**Note:**\n- You can also export them individually using `exports.name = value`, but assigning an object to `module.exports` is cleaner for multiple exports.\n- This approach is used in **CommonJS modules**."
    },    
    {
      title: "How can you access individual exports from another file?",
      answer: "Use destructuring or dot notation:\nconst math = require('./math');\nconsole.log(math.sum(8 9));"
    },
    {
      title: "What happens if you use 'exports.sum = ...' and 'module.exports = ...' together?",
      answer: "It can lead to unexpected behavior. Prefer using one consistent export style usually module.exports = {...} when exporting an object."
    },
    {
      title: "How do you export constants directly?",
      answer: "You can assign directly:\nexports.g = 9.8;\nexports.pi = 3.14;"
    },
    {
      title: "What is the correct way to require an entire directory as a module?",
      answer: "You can require a directory if it contains an index.js file. That file acts as the entry point.\n\nExample:\nconst info = require('./fruits');"
    },
    {
      "title": "How do you combine multiple modules from a folder?",
      "answer": "To combine multiple modules from a folder, create individual files for each module (e.g., `apple.js`, `banana.js`, `orange.js`), and then use an `index.js` file to **import and export them together**.\n\n**Folder structure:**\n```\nfruits/\n├── apple.js\n├── banana.js\n├── orange.js\n└── index.js\n```\n\n**Example in individual files:**\n```js\n// apple.js\nmodule.exports = 'apple';\n\n// banana.js\nmodule.exports = 'banana';\n\n// orange.js\nmodule.exports = 'orange';\n```\n\n**index.js (combine all):**\n```js\nconst apple = require('./apple');\nconst banana = require('./banana');\nconst orange = require('./orange');\n\nmodule.exports = [apple, banana, orange];\n```\n\n**OR as an object:**\n```js\nmodule.exports = { apple, banana, orange };\n```\n\n**Usage:**\n```js\nconst fruits = require('./fruits');\nconsole.log(fruits); // ['apple', 'banana', 'orange'] or an object depending on export format\n```\n\n**Note:**\n- This is a common pattern used in modular projects to group related logic together and simplify imports."
    },    
    {
      "title": "How do you use exported modules from a directory in another file?",
      "answer": "When a directory contains an `index.js` file that exports modules (as an object or array), you can simply `require()` the folder name in another file.\n\n**Example:**\n```js\n// script.js\nconst info = require('./fruits');\nconsole.log(info); // Will log the array or object exported from fruits/index.js\n```\n\n**Explanation:**\n- Node.js automatically looks for `index.js` when you `require('./folderName')`\n- If `index.js` exports an array:\n  ```js\n  module.exports = ['apple', 'banana', 'orange'];\n  ```\n  You'll get that array in `script.js`\n- If it exports an object:\n  ```js\n  module.exports = { apple, banana, orange };\n  ```\n  You can access individual properties: `info.apple`, `info.banana`, etc.\n\n**Note:**\n- This is a clean and scalable way to organize related modules (e.g., routes, controllers, helpers) into folders."
    },    
    {
      title: "What is NPM in Node.js?",
      answer: "NPM stands for Node Package Manager. It is the standard package manager for Node.js that allows developers to install manage and share packages (libraries)."
    },
    {
      title: "What are the two main roles of NPM?",
      answer: "1. Acts as a library of reusable packages\n2. Provides a command-line tool to manage these packages"
    },
    {
      title: "How do you install a package using NPM?",
      answer: "Use the command:\nnpm install <package-name>\nExample:\nnpm install express"
    },
    {
      title: "What is 'node_modules' in a Node.js project?",
      answer: "It is the directory that contains every installed package (and their sub-dependencies) for your Node.js project."
    },
    {
      title: "What is 'package-lock.json' and what does it do?",
      answer: "It is a file that records the exact version of every installed dependency including all nested dependencies ensuring consistent installs across environments."
    },
    {
      title: "What is 'package.json' used for?",
      answer: "It is the main metadata file for a Node.js project. It contains details like the project name version description scripts and list of dependencies."
    },
    {
      title: "What happens when you run 'npm init'?",
      answer: "It creates a new package.json file by asking the user to enter metadata like project name version entry point author etc."
    },
    {
      title: "What happens if a 'package.json' file already exists and you install another package?",
      answer: "The existing package.json will be updated with the new package entry but a new file will not be created."
    },
    {
      title: "What is the difference between local and global installation in NPM?",
      answer: "Local installation (npm install <package-name>) installs the package in the current project folder whereas global installation (npm install -g <package-name>) installs it system-wide. Global is not advisable for project-specific packages."
    },
    {
      title: "What is the purpose of 'npm link'?",
      answer: "npm link <package-name> creates a symlink to a globally installed package. It's useful during local development of packages."
    },
    {
      title: "What is the difference between 'require' and 'import' in Node.js?",
      answer: "'require' is CommonJS and synchronous while 'import' is ES6 module and asynchronous. 'import' also allows selective loading which helps reduce memory usage."
    },
    {
      title: "Can you selectively import functions using 'require' and 'import'?",
      answer: "With 'require' you import the whole module. With 'import' you can selectively load only what’s needed. Example:\nimport { sum } from './math.js';"
    },
    {
      title: "What setup is required to use 'import' in Node.js?",
      answer: "You must add type: module in package.json and ensure package.json exists in the same directory."
    },
    {
      title: "Give an example of using ES6 import and export.",
      answer: "*math.js*:\nexport const sum = (a b) => a + b;\n\n*script.js*:\nimport { sum } from './math.js';\nconsole.log(sum(1 2));"
    },
    {
      title: "What is the difference between a library and a framework?",
      answer: "A library is a collection of pre-written code for specific tasks (e.g. lodash) while a framework provides a complete structure for app development (e.g. Express.js)."
    },
  {
    title: "What is Express?",
    answer: "Express is a Node.js web application framework that helps in building web applications and APIs. It simplifies server-side programming by handling routing middleware and responses.\nExample: Express is used to create a server that listens for requests on a specific port and responds with data."
  },
  {
    title: "What is the use of Express in Node.js?",
    answer: "Express is used in Node.js for building web applications and RESTful APIs. It helps manage incoming HTTP requests process them and send appropriate responses.\nExample: Using app.get() to respond to a GET request on the home route '/'."
  },
  {
    title: "How to get started with Express?",
    answer: "To start using Express:\n1. Import express using const express = require('express');\n2. Create an app with const app = express();\n3. Define a port and start the server with app.listen(PORT);\nExample:\nconst express = require('express');\nconst app = express();\nconst port = 8080;\napp.listen(port => {\n  console.log(App listening on port ${port});\n});"
  },
  {
    title: "What are Ports in Express?",
    answer: "Ports are logical endpoints in a network that allow data exchange between a web server and a web client. Express servers listen on specific ports to accept requests.\nExample: Port 3000 or 8080 is commonly used in development."
  },
  {
    title: "What is app.use() in Express?",
    answer: "app.use() is a method to define middleware in Express. It runs on every request to the server. Middleware can log modify or end the request/response cycle.\nExample:\napp.use((req res) => {\n  console.log('Request received');\n});"
  },
  {
    title: "What are req and res in Express?",
    answer: "req stands for request and contains information sent by the client. res stands for response and is used to send back data to the client.\nExample:\nres.send('<h1>Fruits</h1><ul><li>Apple</li></ul>');"
  },
  {
    title: "What is Routing in Express?",
    answer: "Routing is the process of selecting a path for traffic in a network. In Express it means defining endpoints (URIs) to handle client requests.\nExample:\napp.get('/', (req res) => {\n  res.send('You contacted root path');\n});"
  },
  {
    title: "What is a wildcard route in Express?",
    answer: "A wildcard route ('*') is used to handle undefined or invalid paths.\nExample:\napp.get('*', (req res) => {\n  res.send('This path does not exist');\n});"
  },
  {
    title: "How to handle POST requests in Express?",
    answer: "Use the app.post() method to handle HTTP POST requests sent to the server.\nExample:\napp.post('/', (req res) => {\n  res.send('You sent a POST request to root');\n});"
  },
  {
    title: "What is Nodemon?",
    answer: "Nodemon is a utility that monitors changes in your source code and automatically restarts the server. Useful during development.\nInstall using:\nnpm install -g nodemon"
  },
  {
    title: "What is a Path Parameter in Express?",
    answer: "Path parameters are dynamic segments in the URL defined using a colon (:).\nExample:\napp.get('/user/:username/:id', (req res) => {\n  const { username id } = req.params;\n  res.send(<h1>Welcome to the page of ${username}</h1>);\n});"
  },
  {
    title: "What is a Query String in Express?",
    answer: "Query strings are used to send data to the server via URL usually after the '?' symbol.\nExample:\napp.get('/search', (req res) => {\n  const { q } = req.query;\n  if (!q) {\n    res.send('No search query');\n  } else {\n    res.send(These are the results for: ${q});\n  }\n});"
  },
  {
    title: "What is EJS in Express?",
    answer: "EJS (Embedded JavaScript Templates) is a simple templating language that lets you generate HTML markup with plain JavaScript.\nExample: You can embed JS logic like <% if(user) { %> inside HTML templates."
  },
  {
    title: "How to install and set up EJS in Express?",
    answer: "Steps:\n1. Initialize project: npm init -y\n2. Install dependencies:\n   npm install express ejs\n3. Set view engine:\n   app.set('view engine' 'ejs');\n4. Set views directory:\n   const path = require('path');\n   app.set('views' path.join(__dirname 'views'));"
  },
  {
    title: "How to render an EJS file in Express?",
    answer: "Use res.render('filename') to render an EJS template file.\nExample:\napp.get('/', (req res) => {\n  res.render('home.ejs');\n});\nNote: home.ejs must be in the 'views' folder."
  },
  {
    title: "How to send normal text in Express?",
    answer: "Use res.send() to return plain text or HTML directly.\nExample:\napp.get('/hello', (req res) => {\n  res.send('Hello');\n});"
  },
  {
    title: "How to start an Express server with EJS setup?",
    answer: "Example:\napp.listen(port () => {\n  console.log(Listening on port ${port});\n});"
  },
  {
    title: "What is Interpolation in EJS?",
    answer: "Interpolation is embedding JavaScript expressions within HTML templates using special EJS syntax.\nExample:\n<%= variableName %> will print the value of variableName inside the HTML."
  },
  {
    title: "How to pass dynamic data to EJS templates?",
    answer: "You can pass variables using res.render and then access them in the EJS file.\nExample:\napp.get('/rolldice', (req res) => {\n  let diceval = Math.floor(Math.random() * 6) + 1;\n  res.render('rolldice.ejs' { diceval });\n});\nIn rolldice.ejs:\n<h1>Dice gave value: <%= diceval %></h1>"
  },
  {
    title: "How to use Conditional Statements in EJS?",
    answer: "You can use standard JavaScript if-else statements within EJS syntax.\nExample:\n<% if (diceval === 6) { %>\n  <h1>Nice! Throw once again</h1>\n<% } %>"
  },
  {
    title: "How to use Loops in EJS?",
    answer: "You can use JavaScript for or forEach loops within EJS to iterate over data.\nExample:\n<% for(let name of followers) { %>\n  <li><%= name %></li>\n<% } %>"
  },
  {
    title: "How to serve static files in Express?",
    answer: "Use express.static middleware to serve static files like CSS images JS.\nExample:\napp.use(express.static(path.join(__dirname 'public')));\nThis will make all files in the 'public' folder accessible."
  },
  {
    title: "How to use Includes in EJS?",
    answer: "EJS includes allow you to reuse template parts like headers or footers.\nExample:\n<%- include('includes/header.ejs') %>"
  },
  {
    title: "What is a GET request in Express?",
    answer: "A GET request is used to request data from a server. It typically sends data via query strings in the URL.\nExample: http://localhost:3000/register?user=John\nData is limited sent as strings and visible in the URL."
  },
  {
    title: "What is a POST request in Express?",
    answer: "A POST request is used to send data to the server typically for creating or updating resources.\nData is sent in the request body and can be of any type (string JSON etc.). It is not visible in the URL."
  },
  {
    title: "How to handle POST request data in Express?",
    answer: "You need to use middleware to parse the request body:\n1. app.use(express.urlencoded({ extended: true })); // For form data\n2. app.use(express.json()); // For JSON data"
  },
  {
    title: "How to create a GET route with query string handling?",
    answer: "Example:\napp.get('/register', (req res) => {\n  const { user password } = req.query;\n  res.send(Standard GET response. Welcome ${user}!);\n});"
  },
  {
    title: "How to create a POST route with body data handling?",
    answer: "Example:\napp.post('/register', (req res) => {\n  console.log(req.body);\n  res.send('Standard POST response');\n});"
  },
  {
    title: "How does a form send a GET request?",
    answer: "Example HTML:\n<form method='GET' action='http://localhost:3000/register'>\n  <!-- Inputs and button -->\n</form>\nThis will submit query parameters visible in the URL."
  },
    
  ],

  "redux": [
    {
      title: "What is Redux?",
      answer: "Redux is a state management library for JavaScript apps. It is built for larger more complex applications. Redux Toolkit is the official recommended way to write Redux code."
    },
    {
      title: "What is a Store in Redux?",
      answer: "A centralized store that holds the whole state tree of your application."
    },
    {
      title: "What are Reducers in Redux?",
      answer: "Reducers are functions that take the current state and an action as arguments and return a new state result."
    },
    {
      title: "What is an Action in Redux?",
      answer: "An Action is a plain JavaScript object that has a type field like events."
    },
    {
      title: "What is a Slice in Redux Toolkit?",
      answer: "A slice is a collection of Redux reducer logic and actions for a single feature bundled together."
    },
    {
      title: "How to design the Store for a Todo App?",
      answer: "The store for a Todo app can be structured as:\n{\n  todo: [\n    { id, task, isDone }\n  ]\n}"
    },
    {
      title: "Example of a Redux Action to add a Todo",
      answer: "{\n  type: 'ADD_TODO',\n  payload: 'write code'\n}"
    },
    {
      title: "How does Redux Toolkit create reducers?",
      answer: "Redux Toolkit automatically generates action creators and reducers using a syntax like:\n(state, action) => { /* update state */ }\n\nIt simplifies writing immutable update logic using 'mutating' syntax internally (powered by Immer)."
    },
    {
      title: "What is the Provider component in Redux?",
      answer: "<Provider> is a React component that makes the Redux store available to any nested components that need to access the store."
    },
    {
      title: "How to dispatch actions in Redux?",
      answer: "Use the useDispatch hook to send or dispatch an action to the Redux store. You provide the action as an argument to the dispatch function.\n\nExample:\nconst dispatch = useDispatch();\ndispatch(addTodo('Learn Redux'));"
    },
    {
      title: "How to read state from Redux store?",
      answer: "Use the useSelector hook to extract data from the Redux store state using a selector function.\n\nExample:\nconst todos = useSelector(state => state.todos);"
    },
  ],

  "docker": [
    {
      title: "How to list all local Docker images?",
      answer: "docker images"
    },
    {
      title: "How to delete a Docker image?",
      answer: "docker rmi <image-name>"
    },
    {
      title: "How to remove all unused Docker images?",
      answer: "docker image prune"
    },
    {
      title: "How to build a Docker image from a Dockerfile?",
      answer: "docker build -t <image-name>:<version> ."
    },
    {
      title: "How to list all Docker containers (running and stopped)?",
      answer: "docker ps -a"
    },
    {
      title: "How to list only running Docker containers?",
      answer: "docker ps"
    },
    {
      title: "How to create and run a new Docker container?",
      answer: "docker run <image-name>"
    },
    {
      title: "How to run a Docker container in the background?",
      answer: "docker run -d <image-name>"
    },
    {
      title: "How to run a Docker container with a custom name?",
      answer: "docker run --name <container-name> <image-name>"
    },
    {
      title: "How to stop a Docker container?",
      answer: "docker stop <container-name>"
    },
    {
      title: "How to start a Docker container?",
      answer: "docker start <container-name>"
    },
    {
      title: "How to restart a Docker container?",
      answer: "docker restart <container-name>"
    },
    {
      title: "How to remove a Docker container?",
      answer: "docker rm <container-name>"
    },
    {
      title: "How to inspect details of a container?",
      answer: "docker inspect <container-name>"
    },
    {
      title: "How to fetch logs of a container?",
      answer: "docker logs <container-name>"
    },
    {
      title: "How to run a shell inside a running container?",
      answer: "docker exec -it <container-name> /bin/bash"
    },
    {
      title: "How to set environment variables in a Docker container?",
      answer: "docker run -e <key>=<value> <image-name>"
    },
    {
      title: "How to map a host port to a container port?",
      answer: "docker run -p <host-port>:<container-port> <image-name>"
    },
    {
      title: "How to remove an image?",
      answer: "docker rmi <image-name>"
    },
    {
      title: "How to push an image to DockerHub?",
      answer: "docker push <username>/<image-name>"
    },
    {
      title: "How to login to DockerHub?",
      answer: "docker login"
    },
    {
      title: "How to logout from DockerHub?",
      answer: "docker logout"
    },
    {
      title: "How to search for an image on DockerHub?",
      answer: "docker search <image-name>"
    },
    {
      title: "How to list all Docker networks?",
      answer: "docker network ls"
    },
    {
      title: "How to create a Docker network?",
      answer: "docker network create <network-name>"
    },
    {
      title: "How to inspect a Docker network?",
      answer: "docker network inspect <network-name>"
    },
    {
      title: "How to remove a Docker network?",
      answer: "docker network rm <network-name>"
    },
    {
      title: "How to prune all unused Docker networks?",
      answer: "docker network prune"
    },
    {
      title: "How to list all Docker volumes?",
      answer: "docker volume ls"
    },
    {
      title: "How to create a named Docker volume?",
      answer: "docker volume create <volume-name>"
    },
    {
      title: "How to inspect a Docker volume?",
      answer: "docker volume inspect <volume-name>"
    },
    {
      title: "How to remove a Docker volume?",
      answer: "docker volume rm <volume-name>"
    },
    {
      title: "How to remove all unused Docker volumes?",
      answer: "docker volume prune"
    },
    {
      title: "How to create a bind mount volume?",
      answer: "docker run -v <host-path>:<container-path> <image-name>"
    },
    {
      title: "How to create a named volume mount?",
      answer: "docker run -v <volume-name>:<container-path> <image-name>"
    },
  ]
};

export default questionsData;


