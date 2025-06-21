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
      "answer": "OSI (Open System Interconnection) is a 7-layer model that standardizes network communication from physical transfer to applications."
    },
    {
      "title": "What does the Physical Layer do?",
      "answer": "It transfers raw bits over a physical medium (like cables). It’s the lowest layer in the OSI model."
    },
    {
      "title": "What does the Data Link Layer do?",
      "answer": "It ensures error-free transfer of frames between two nodes on the same network. It handles MAC addressing, flow control, and error detection."
    },
    {
      "title": "What is the function of the Network Layer?",
      "answer": "It finds the best path (routing) to deliver packets and assigns logical addresses like IPs."
    },
    {
      "title": "What is the function of the Transport Layer?",
      "answer": "It ensures reliable data delivery using either connection-oriented (TCP) or connectionless (UDP) protocols."
    },
    {
      "title": "What does the Application Layer do?",
      "answer": "It provides network services to users and applications (like HTTP, SMTP, DNS). It’s the top layer in both OSI and TCP/IP models."
    },
    {
      "title": "What is TCP and UDP?",
      "answer": "TCP is reliable and connection-based; good for file transfer. UDP is faster but connectionless; good for streaming and gaming."
    },
    {
      "title": "What is DNS?",
      "answer": "DNS (Domain Name System) converts domain names like google.com into IP addresses. It acts like a phonebook for the internet."
    },
    {
      "title": "What is DHCP?",
      "answer": "DHCP (Dynamic Host Configuration Protocol) automatically assigns IP addresses to devices on a network."
    },
    {
      "title": "What is a MAC address?",
      "answer": "MAC (Media Access Control) address is a unique identifier assigned to a device's network interface card (NIC)."
    },
    {
      "title": "What is IP address?",
      "answer": "An IP address is a unique number assigned to each device on a network. IPv4 has 4 blocks like 192.168.1.1"
    },
    {
      "title": "What is the difference between public and private IPs?",
      "answer": "Private IPs are used within networks and not routable on the internet. Public IPs are used to communicate over the internet."
    },
    {
      "title": "What is ICMP used for?",
      "answer": "ICMP (Internet Control Message Protocol) is used for error reporting and diagnostic tools like 'ping'."
    },
    {
      "title": "What is a firewall?",
      "answer": "A firewall is a system that monitors and filters incoming and outgoing network traffic based on security rules."
    },
    {
      "title": "What is subnetting?",
      "answer": "Subnetting divides a network into smaller parts (subnets) to improve routing efficiency and security."
    },
    {
      "title": "What is NAT?",
      "answer": "NAT (Network Address Translation) converts private IP addresses to a public IP for internet access and hides internal network structure."
    },
    {
      "title": "What happens when you type google.com in a browser?",
      "answer": "The browser checks cache, sends a DNS request to get the IP, establishes a TCP connection, sends HTTP request, receives response, and renders the webpage."
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
      "answer": "Process scheduling is the OS's way of deciding which process to run next based on criteria like arrival time, burst time, and priority."
    },
    {
      "title": "What are scheduling algorithms?",
      "answer": "Common ones include:\n1. FCFS\n2. SJF\n3. SRTF\n4. Round Robin\n5. Priority\n6. HRRN\n7. Multilevel Queue\n8. Multilevel Feedback Queue"
    },
    {
      "title": "What is a critical section?",
      "answer": "The critical section is a part of the code where shared resources are accessed. Only one process should execute in the critical section at a time to avoid race conditions."
    },
    {
      "title": "What are the conditions for solving the critical section problem?",
      "answer": "1. Mutual Exclusion\n2. Progress\n3. Bounded Waiting"
    },
    {
      "title": "What is a semaphore?",
      "answer": "A semaphore is a variable used to control access to shared resources. Binary semaphores take values 0 or 1, and counting semaphores can take larger values."
    },
    {
      "title": "What is a mutex?",
      "answer": "A mutex (mutual exclusion) is a locking mechanism that allows only one thread to access a resource at a time. It’s used to avoid race conditions."
    },
    {
      "title": "What is a deadlock?",
      "answer": "A deadlock is a situation where a set of processes are waiting on each other for resources, and none can proceed."
    },
    {
      "title": "What are the four necessary conditions for a deadlock?",
      "answer": "1. Mutual Exclusion\n2. Hold and Wait\n3. No Preemption\n4. Circular Wait"
    },
    {
      "title": "How to handle deadlocks?",
      "answer": "1. Prevention or avoidance\n2. Detection and recovery\n3. Ignore the problem (used in Windows/Unix)"
    },
    {
      "title": "What is Banker's Algorithm?",
      "answer": "It is a deadlock avoidance method that allocates resources only if the system remains in a safe state after allocation."
    },
    {
      "title": "What is memory management?",
      "answer": "It refers to managing a computer's memory effectively among different processes using techniques like swapping, paging, segmentation, and allocation strategies."
    },
    {
      "title": "What is paging?",
      "answer": "Paging divides memory into equal-sized pages and frames. Logical addresses are mapped to physical addresses, reducing external fragmentation."
    },
    {
      "title": "What is segmentation?",
      "answer": "Segmentation divides memory into variable-size segments based on logical divisions like functions or data structures."
    },
    {
      "title": "What is a page fault?",
      "answer": "A page fault occurs when a process accesses a page that is not currently in physical memory."
    },
    {
      "title": "What are page replacement algorithms?",
      "answer": "1. FIFO\n2. Optimal\n3. LRU\nThese algorithms decide which page to remove from memory when a new page needs to be loaded."
    },
    {
      "title": "What is Belady’s Anomaly?",
      "answer": "It is a situation where increasing the number of page frames results in more page faults using FIFO algorithm."
    },
    {
      "title": "What is disk scheduling?",
      "answer": "It is the method used by the OS to determine the order of servicing disk I/O requests to improve efficiency."
    },
    {
      "title": "What are disk scheduling algorithms?",
      "answer": "1. FCFS\n2. SSTF\n3. SCAN\n4. CSCAN\n5. LOOK\n6. CLOOK"
    },
    {
      "title": "What is thrashing?",
      "answer": "Thrashing occurs when too many pages are swapped in and out of memory, reducing CPU utilization significantly."
    },
    {
      "title": "What is virtual memory?",
      "answer": "Virtual memory is a technique that enables processes to execute even when they don’t fit entirely in physical memory, using disk as extension."
    },
    {
      "title": "What is fragmentation?",
      "answer": "Fragmentation is inefficient use of memory.\n- Internal: Wasted space inside allocated memory.\n- External: Wasted space between allocated blocks."
    },
    {
      "title": "What is spooling?",
      "answer": "Spooling is a process of storing data temporarily for devices like printers. It queues the jobs to manage access efficiently."
    },
    {
      "title": "What is starvation?",
      "answer": "Starvation happens when a process waits indefinitely for a resource because other higher priority processes are continuously allocated those resources."
    },
    {
      "title": "What is aging?",
      "answer": "Aging is a technique used to prevent starvation by gradually increasing the priority of waiting processes over time."
    },
    {
      "title": "What is a monolithic kernel?",
      "answer": "A monolithic kernel contains all the essential services in a single large block of code running in a single address space."
    },
    {
      "title": "What is a microkernel?",
      "answer": "A microkernel contains only the essential services and runs most services in user space, improving modularity and security."
    },
    {
      "title": "What is re-entrancy?",
      "answer": "Re-entrancy allows multiple users to share a single copy of a program at the same time without interfering with each other."
    },
    {
      "title": "What is RAID?",
      "answer": "RAID stands for Redundant Array of Independent Disks. It combines multiple disks to increase performance and provide fault tolerance."
    },
    {
      "title": "What is logical vs physical address?",
      "answer": "Logical address is generated by the CPU. Physical address is the actual location in memory where data is stored."
    },
    {
      "title": "What are the advantages of multithreading?",
      "answer": "1. Better responsiveness\n2. Resource sharing\n3. Lower overhead\n4. Efficient utilization of multiple CPUs"
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
      title: "What is a Collection in MongoDB?",
      answer: "A collection is a group of MongoDB documents. It is equivalent to a table in relational databases.\nDocuments in a collection can have different fields."
    },
    {
      title: "How does MongoDB store data?",
      answer: "MongoDB stores data in the form of documents (like JSON objects) inside collections and collections belong to a database.\nStructure: Database → Collections → Documents"
    },
    {
      title: "How to insert a single document into a collection?",
      answer: "Use insertOne() method on a collection.\nExample: db.Student.insertOne({ name: 'adam' marks: 75 })"
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
      title: "What is insertMany in MongoDB?",
      answer: "insertMany() is used to insert multiple documents into a collection at once.\nExample:\ndb.student.insertMany([{ name: 'A' } { name: 'B' } { name: 'C' }])"
    },
    {
      title: "How to find all documents in a collection?",
      answer: "Use find() with no arguments to return all documents.\nExample:\ndb.collection.find()"
    },
    {
      title: "How to run specific queries in MongoDB?",
      answer: "You can use key-value filters to match documents.\nExamples:\ndb.collection.find({ key: value })\ndb.collection.findOne({ key: value })"
    },
    {
      title: "How to use query operators in MongoDB?",
      answer: "MongoDB provides operators like $gt $lt $in $or etc.\nExamples:\ndb.student.find({ marks: { $gt: 75 } })\ndb.student.find({ city: { $in: ['Delhi' 'Mumbai'] } })\ndb.student.find({ $or: [{ marks: { $gt: 75 } } { city: 'Chd' }] })"
    },
    {
      title: "What is updateOne in MongoDB?",
      answer: "updateOne() updates a single document that matches a filter.\nExample:\ndb.student.updateOne(\n  { name: 'adam' },\n  { $set: { marks: 99 } }\n)"
    },
    {
      title: "What is updateMany in MongoDB?",
      answer: "updateMany() updates all documents that match the filter.\nExample:\ndb.student.updateMany(\n  { city: 'Delhi' },\n  { $set: { city: 'N.D.' } }\n)"
    },
    {
      title: "What is replaceOne in MongoDB?",
      answer: "replaceOne() replaces the entire document that matches a filter with a new document.\nExample:\ndb.student.replaceOne(\n  { name: 'bob' },\n  { name: 'shraddha' marks: 94 state: 'Haryana' }\n)"
    },
    {
      title: "What does replaceOne() do if multiple documents match?",
      answer: "replaceOne() replaces only the first matching document even if multiple documents match the filter."
    },
    {
      title: "What is nesting in MongoDB documents?",
      answer: "Nesting refers to having objects inside documents as values.\nExample:\n{\n  id: ObjectId('...')\n  name: 'Farah'\n  performance: { marks: 88 grade: 'A' }\n}"
    },
    {
      title: "How to query nested fields in MongoDB?",
      answer: "Use dot notation to access nested fields.\nExample:\ndb.student.findOne({ 'performance.marks': 88 })"
    },
    {
      title: "How to delete a single document from a collection?",
      answer: "Use deleteOne() with a filter.\nExample:\ndb.collection.deleteOne({ key: value })\nExample:\ndb.student.deleteOne({ state: 'Haryana' })"
    },
    {
      title: "How to delete multiple documents from a collection?",
      answer: "Use deleteMany() with a filter.\nExample:\ndb.student.deleteMany({ marks: { $lt: 75 } })"
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
      title: "What is a Schema in Mongoose?",
      answer: "A schema defines the structure or shape of the documents within a MongoDB collection. It specifies field names types and rules."
    },
    {
      title: "What is a Model in Mongoose?",
      answer: "A model is a class based on a schema. It is used to construct query update and delete documents in a MongoDB collection."
    },
    {
      title: "What is operation buffering in Mongoose?",
      answer: "Mongoose allows you to start using your models even before a MongoDB connection is fully established. This is known as operation buffering."
    },
    {
      title: "Is Mongoose's find() a promise?",
      answer: "Mongoose queries are not actual promises but they are thenable meaning they support .then()."
    },
    {
      title: "What are commonly used find operations in Mongoose?",
      answer: "- Model.find(): Returns a query object for multiple results.\n- Model.findOne(): Returns the first matching document.\n- Model.findById(): Finds a document by its _id."
    },
    {
      title: "What are update operations in Mongoose?",
      answer: "- Model.updateOne(): Updates a single matching document (does not return updated doc).\n- Model.updateMany(): Updates all matching documents.\n- Model.findOneAndUpdate(): Finds and updates a doc returns updated doc.\n- Model.findByIdAndUpdate(): Finds by _id and updates the doc returns updated doc."
    },
    {
      title: "How to delete a single document using Mongoose?",
      answer: "Use Model.deleteOne() to remove the first matching document.\nExample:\nModel.deleteOne({ name: 'Adam' })"
    },
    {
      title: "How to delete multiple documents in Mongoose?",
      answer: "Use Model.deleteMany() to remove all matching documents.\nExample:\nModel.deleteMany({ city: 'Delhi' })"
    },
    {
      title: "What does findByIdAndDelete() do?",
      answer: "Model.findByIdAndDelete(id) finds a document by its _id and deletes it.\nIt returns the deleted document."
    },
    {
      title: "What is the use of findOneAndDelete() in Mongoose?",
      answer: "Model.findOneAndDelete(filter) finds the first matching document and deletes it.\nReturns the deleted document."
    },
    {
      title: "Does deleteOne() return anything?",
      answer: "Yes it returns an object with a count of how many documents were deleted."
    },
    {
      title: "What is validation in Mongoose?",
      answer: "Validation in Mongoose ensures the data inserted into a collection follows the defined rules or schema."
    },
    {
      title: "How to define required fields in Mongoose schema?",
      answer: "Use the 'required: true' property in the schema.\nExample:\nconst productSchema = mongoose.Schema({\n  name: { type: String required: true }\n  price: { type: String }\n});"
    },
    {
      title: "What is Middleware in Express?",
      answer: "Middleware is a function in Express that serves as an intermediary between the request and the response. It can modify the request and response objects end the request-response cycle or call the next middleware function."
    },
    {
      title: "Common Middleware Functions in Express",
      answer: "Some common middleware functions include:\n- express.static\n- body-parser\n- method-override\n- express.urlencoded"
    },
    {
      title: "What does Middleware do?",
      answer: "Middleware can execute code modify the request/response objects end the request-response cycle or call the next middleware in the stack."
    },
    {
      title: "What is the 'next' middleware function in Express?",
      answer: "The 'next' function is a function in the Express middleware stack that passes control to the next middleware function. Without calling next() the request will be left hanging."
    },
    {
      title: "What is an example of writing a middleware?",
      answer: "Example:\njs\napp.use((req res next) => {\n  console.log('Middleware executed');\n  next();\n});\n"
    },
    {
      title: "What is a default error handler in Express?",
      answer: "Express provides a default error handler. If any middleware calls next(err) Express will skip all other middleware and invoke the default error handler which sends a response with status code 500."
    },
    {
      title: "How to handle errors in Express using middleware?",
      answer: "Error-handling middleware has four arguments: (err req res next). Example:\njs\napp.use((err req res next) => {\n  console.error(err.stack);\n  res.status(500).send('Something broke!');\n});\n"
    },
    {
      title: "What is a utility middleware?",
      answer: "Utility middleware refers to helper functions like express.json() or express.urlencoded() which help parse incoming request bodies."
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
      title: "What is Node.js?",
      answer: "Node.js is a JavaScript runtime environment used for server-side programming. It allows JavaScript to be executed outside the browser."
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
      title: "What is 'require()' in Node.js?",
      answer: "The require() function is a built-in Node.js function used to include external modules (files or libraries) into your current file."
    },
    {
      title: "What is 'module.exports' in Node.js?",
      answer: "module.exports is a special object in Node.js used to export variables functions or objects from one file to be used in another using require()."
    },
    {
      title: "How do you export a single value using 'module.exports'?",
      answer: "Example:\nIn math.js:\nmodule.exports = 123;\n\nIn another file:\nconst someVal = require('./math');\nconsole.log(someVal); // 123"
    },
    {
      title: "How can you export multiple functions or variables from a module?",
      answer: "Group them in an object and assign it to module.exports.\n\nExample:\nmodule.exports = { sum mul pi };"
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
      title: "How do you combine multiple modules from a folder?",
      answer: "Create individual files like apple.js banana.js etc. and then in index.js import them and export as an array or object.\n\nExample in index.js:\nmodule.exports = [apple banana orange];"
    },
    {
      title: "How do you use exported modules from a directory in another file?",
      answer: "In script.js:\nconst info = require('./fruits');\nconsole.log(info); // array or object defined in index.js"
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


