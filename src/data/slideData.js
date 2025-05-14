// HTML concepts for the carousel slides
const slideData = [
  {
    id: 1,
    title: "HTML Basics",
    content: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure and content of web pages using various elements and tags.",
    code: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`,
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "HTML Elements",
    content: "HTML elements are represented by tags that label pieces of content such as headings, paragraphs, and images to define how web browsers should display them.",
    code: `<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<img src="image.jpg" alt="Description">
<a href="https://example.com">This is a link</a>`,
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "HTML Forms",
    content: "HTML forms allow users to enter data that can be sent to a server for processing. Forms can contain various input elements like text fields, checkboxes, and submit buttons.",
    code: `<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name">
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email">
  
  <input type="submit" value="Submit">
</form>`,
    color: "#FFD166"
  },
  {
    id: 4,
    title: "HTML5 Semantic Elements",
    content: "HTML5 introduced semantic elements that clearly describe their meaning to both the browser and the developer, making web pages more accessible and SEO-friendly.",
    code: `<header>
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <section>Content here...</section>
  </article>
</main>

<footer>
  <p>&copy; 2025 My Website</p>
</footer>`,
    color: "#6A0572"
  },
  {
    id: 5,
    title: "HTML Attributes",
    content: "HTML attributes provide additional information about HTML elements and are always specified in the start tag. They usually come in name/value pairs like name=\"value\".",
    code: `<a href="https://example.com" target="_blank" title="Visit Example">
  Example Website
</a>

<img src="image.jpg" alt="Description" width="300" height="200">

<input type="text" placeholder="Enter your name" disabled>`,
    color: "#5D2A42"
  },
  {
    id: 6,
    title: "HTML Best Practices",
    content: "Following best practices ensures your HTML is maintainable, accessible, and performs well across different browsers and devices.",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Accessible Page</title>
</head>
<body>
  <!-- Use semantic elements -->
  <header>
    <h1>My Website</h1>
  </header>
  
  <!-- Add alt text to images -->
  <img src="logo.png" alt="Company Logo">
  
  <!-- Use proper heading hierarchy -->
  <section>
    <h2>Section Title</h2>
    <p>Content here...</p>
  </section>
</body>
</html>`,
    color: "#247BA0"
  }
];

export default slideData;