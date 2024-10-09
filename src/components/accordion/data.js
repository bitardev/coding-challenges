const faqs = [
  {
    id: "faq_001",
    question: "What is React?",
    answer:
      "React is an open-source JavaScript library developed by Facebook for building user interfaces, particularly for single-page applications. It allows developers to create large web applications that can change data without reloading the page.",
  },
  {
    id: "faq_002",
    question: "What are the main features of React?",
    answer:
      "Some of the main features of React include: 1) Virtual DOM for efficient rendering, 2) Component-based architecture for reusability, 3) Unidirectional data flow for better control, and 4) JSX syntax that allows HTML to be written within JavaScript.",
  },
  {
    id: "faq_003",
    question: "What is JSX?",
    answer:
      "JSX, or JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within your JavaScript files. It makes it easier to create React elements and components, enhancing readability and maintainability.",
  },
  {
    id: "faq_004",
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight representation of the actual DOM. React maintains a Virtual DOM to optimize rendering performance. When changes occur, React updates the Virtual DOM first, then compares it with the actual DOM, and only updates the parts that have changed.",
  },
  {
    id: "faq_005",
    question: "How does state management work in React?",
    answer:
      "In React, state management is handled through the component's state object. Each component can maintain its own state, which can be updated using the setState method. For more complex applications, state management libraries like Redux or Context API can be used.",
  },
  {
    id: "faq_006",
    question: "What are props in React?",
    answer:
      "Props, short for properties, are read-only attributes passed from a parent component to a child component. They allow data to flow down the component tree and enable components to be dynamic and reusable.",
  },
  {
    id: "faq_007",
    question: "What is the difference between state and props?",
    answer:
      "The key difference between state and props is that state is managed within the component (mutable), while props are passed to the component from its parent (immutable). State can change over time, while props remain constant throughout the component's lifecycle.",
  },
  {
    id: "faq_008",
    question: "What is a React component?",
    answer:
      "A React component is a reusable piece of code that defines a part of the user interface. Components can be functional or class-based, and they can manage their own state and lifecycle methods.",
  },
  {
    id: "faq_009",
    question: "What are lifecycle methods in React?",
    answer:
      "Lifecycle methods are special methods in class components that allow you to hook into different stages of a component's lifecycle, such as mounting, updating, and unmounting. Common lifecycle methods include componentDidMount, componentDidUpdate, and componentWillUnmount.",
  },
  {
    id: "faq_010",
    question: "How do you handle events in React?",
    answer:
      "In React, events are handled using camelCase syntax. You can pass an event handler function as a prop to a component. For example, <button onClick={this.handleClick}>Click Me</button>. React will automatically bind the event to the component's context.",
  },
];

export default faqs;
