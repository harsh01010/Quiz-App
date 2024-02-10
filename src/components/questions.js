const questions = [
  {
    qNo: 1,
    summary: "What does HTML stand for?",
    options: [
      { oNo: 1, text: "Hyper Text Markup Language", isCorrect: true },
      { oNo: 2, text: "Hyper Transfer Markup Language", isCorrect: false },
      { oNo: 3, text: "High Text Markup Language", isCorrect: false },
      { oNo: 4, text: "Hyperlink and Text Markup Language", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 2,
    summary: "Which of the following is a CSS preprocessor?",
    options: [
      { oNo: 1, text: "JavaScript", isCorrect: false },
      { oNo: 2, text: "Sass", isCorrect: true },
      { oNo: 3, text: "HTML5", isCorrect: false },
      { oNo: 4, text: "Python", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 3,
    summary: "What is the purpose of JavaScript?",
    options: [
      { oNo: 1, text: "To style web pages", isCorrect: false },
      { oNo: 2, text: "To create dynamic content", isCorrect: true },
      { oNo: 3, text: "To define page structure", isCorrect: false },
      { oNo: 4, text: "To query databases", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 4,
    summary: "What does CSS stand for?",
    options: [
      { oNo: 1, text: "Counter Style Sheets", isCorrect: false },
      { oNo: 2, text: "Colorful Style Sheets", isCorrect: false },
      { oNo: 3, text: "Computer Style Sheets", isCorrect: false },
      { oNo: 4, text: "Cascading Style Sheets", isCorrect: true },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 5,
    summary: "Which programming language is commonly used for web development?",
    options: [
      { oNo: 1, text: "Java", isCorrect: false },
      { oNo: 2, text: "C#", isCorrect: false },
      { oNo: 3, text: "JavaScript", isCorrect: true },
      { oNo: 4, text: "Swift", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 6,
    summary: "What is the role of the <head> element in HTML?",
    options: [
      {
        oNo: 1,
        text: "Defines the main content of the page",
        isCorrect: false,
      },
      { oNo: 2, text: "Contains metadata about the document", isCorrect: true },
      {
        oNo: 3,
        text: "Specifies the main heading of the page",
        isCorrect: false,
      },
      { oNo: 4, text: "Defines a section in a document", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 7,
    summary: "Which of the following is not a valid JavaScript data type?",
    options: [
      { oNo: 1, text: "String", isCorrect: false },
      { oNo: 2, text: "Boolean", isCorrect: false },
      { oNo: 3, text: "Undefined", isCorrect: false },
      { oNo: 4, text: "Float", isCorrect: true },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 8,
    summary: "What does API stand for in web development?",
    options: [
      { oNo: 1, text: "Advanced Programming Interface", isCorrect: false },
      { oNo: 2, text: "Application Programming Interface", isCorrect: true },
      { oNo: 3, text: "Automated Program Integration", isCorrect: false },
      { oNo: 4, text: "Application Protocol Interface", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 9,
    summary: "In CSS, how can you select an element with the id 'example'?",
    options: [
      { oNo: 1, text: "#example", isCorrect: true },
      { oNo: 2, text: ".example", isCorrect: false },
      { oNo: 3, text: "element.example", isCorrect: false },
      { oNo: 4, text: "id(example)", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
  {
    qNo: 10,
    summary: "What is the purpose of the 'viewport' meta tag in HTML?",
    options: [
      { oNo: 1, text: "Defines the page title", isCorrect: false },
      {
        oNo: 2,
        text: "Specifies the character set for the document",
        isCorrect: false,
      },
      {
        oNo: 3,
        text: "Sets the width of the viewport for responsive design",
        isCorrect: true,
      },
      { oNo: 4, text: "Creates a new HTML document", isCorrect: false },
    ],
    marks: { positive: 2, negative: 0.5 },
  },
];

export default questions;
