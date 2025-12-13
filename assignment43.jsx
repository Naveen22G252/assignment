import './App.css';

// App.jsx
import React from "react";

// Block vs Inline
const BlockInlineDemo = () => (
  <div>
    <h2>Block vs Inline Elements</h2>
    <p>This is a paragraph (block)</p>
    <div>This is a div (block)</div>
    <span>This is a span (inline)</span>
    <b>Bold text (inline)</b>
  </div>
);

// Semantic Tags
const SemanticDemo = () => (
  <div>
    <h2>Semantic Tags</h2>
    <header>Header</header>
    <nav>Navigation Bar</nav>
    <main>
      <section>
        <article>
          <h3>Article Title</h3>
          <p>Article content goes here...</p>
        </article>
        <aside>Sidebar info</aside>
      </section>
    </main>
    <footer>Footer</footer>
  </div>
);

// Forms
const FormDemo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <div>
      <h2>Forms</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// Tables & Lists
const TableListDemo = () => (
  <div>
    <h2>Lists & Tables</h2>

    <h3>Ordered List</h3>
    <ol>
      <li>First Item</li>
      <li>Second Item</li>
    </ol>

    <h3>Unordered List</h3>
    <ul>
      <li>Apple</li>
      <li>Orange</li>
    </ul>

    <h3>Table</h3>
    <table border="1">
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      <tr>
        <td>Arun</td>
        <td>25</td>
      </tr>
      <tr>
        <td>Kumar</td>
        <td>30</td>
      </tr>
    </table>
  </div>
);

// Embed Demo
const EmbedDemo = () => (
  <div>
    <h2>Embed / Iframe</h2>
    <iframe width="300" height="150" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video" />
  </div>
);

// Main App
export default function App() {
  return (
    <div>
      <BlockInlineDemo />
      <SemanticDemo />
      <FormDemo />
      <TableListDemo />
      <EmbedDemo />
    </div>
  );
}
