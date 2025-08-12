const mockQuestions = [
  {
    id: 1,
    question: "What is a closure in JavaScript?",
    creator: "Alice Johnson",
    createdDate: "2023-10-01T09:00:00",
    tags: ["javascript", "functions", "closures"],
    body: "## JavaScript Closures\n\nA **closure** is a function that has access to its own scope, the outer function's scope, and the global scope.\n\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst counter = outer();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\n```\n\nClosures are commonly used for data privacy and function factories.",
    content: "Closures allow functions to remember their lexical scope. They are useful for data encapsulation. Commonly used in callbacks and event handlers."
  },
  {
    id: 2,
    question: "How does the virtual DOM work in React?",
    creator: "Bob Lee",
    createdDate: "2023-10-02T11:30:00",
    tags: ["react", "javascript", "virtual-dom"],
    body: "## React Virtual DOM\n\nThe **virtual DOM** is a lightweight JavaScript representation of the real DOM. React uses it to optimize UI updates:\n\n1. When state changes, React creates a new virtual DOM tree.\n2. It compares the new tree with the previous one (diffing).\n3. Only the changed elements are updated in the real DOM (reconciliation).\n\nThis process improves performance and efficiency.",
    content: "Virtual DOM improves UI rendering performance. React compares virtual DOM trees to find changes. Only the necessary DOM updates are applied."
  },
  {
    id: 3,
    question: "What is the difference between == and === in JavaScript?",
    creator: "Charlie Kim",
    createdDate: "2023-10-03T14:15:00",
    tags: ["javascript", "operators", "basics"],
    body: "## == vs === in JavaScript\n\n- `==` checks for value equality after type coercion.\n- `===` checks for both value and type equality (strict equality).\n\n```javascript\nconsole.log(2 == '2'); // true\nconsole.log(2 === '2'); // false\n```\n\nPrefer `===` to avoid unexpected type conversions.",
    content: "`==` allows type coercion before comparison. `===` checks both value and type strictly. Using `===` helps prevent bugs."
  },
  {
    id: 4,
    question: "How do you manage state in a React application?",
    creator: "Dana White",
    createdDate: "2023-10-04T16:40:00",
    tags: ["react", "state", "hooks"],
    body: "## State Management in React\n\nCommon ways to manage state in React:\n\n- **useState** for local component state\n- **useContext** for global state\n- **Redux** or **MobX** for complex state management\n\nExample using `useState`:\n\n```javascript\nconst [count, setCount] = useState(0);\n```\n\nChoose the method based on your app's complexity.",
    content: "useState is used for local component state. useContext shares state across components. Redux is suitable for large-scale state management."
  },
  {
    id: 5,
    question: "What is event delegation in JavaScript?",
    creator: "Evan Green",
    createdDate: "2023-10-05T18:05:00",
    tags: ["javascript", "events", "dom"],
    body: "## Event Delegation\n\n**Event delegation** is a technique where a single event handler is added to a parent element to manage events for multiple child elements.\n\n```javascript\ndocument.getElementById('list').addEventListener('click', function(e) {\n  if (e.target && e.target.nodeName === 'LI') {\n    console.log('List item clicked:', e.target.textContent);\n  }\n});\n```\n\nThis improves performance and simplifies code.",
    content: "Event delegation attaches one handler to a parent element. It manages events for multiple child elements efficiently. Reduces memory usage and improves performance."
  },
];

export default mockQuestions;
