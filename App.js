const heading = React.createElement("h1", {id: "heading", abc: "xyz"}, "Hello World from React JS!");
console.log(heading); // JS object, React element

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

/* ========================================================================================================== */

/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>I am H1 tag</h1>
 *      <h2>I am H2 tag</h2>
 *    </div>
 * </div>
 **/

const parent = React.createElement(
  "div",
  {id: "parent"},
  React.createElement(
    "div",
    {id: "child"},
    [ // Array of children will make them siblings
      React.createElement("h1", {}, "I am h1 tag!"),
      React.createElement("h2", {}, "I am h2 tag!")
    ]
  )
);

console.log(parent);
root.render(parent);

/* ========================================================================================================== */


/**
 * <div id="parent">
 *   <div id="child1">
 *     <p>Hello, I am P tag!</p>
 *   </div>
 *   <div id="child2">
 *     <h3>Hello I am h3 tag!</h3>
 *     <h4>Hello I am h4 tag!</h4>
 *   </div>
 * </div>
 */

const newparent = React.createElement(
  "div",
  {id: "parent"},
  [
    React.createElement(
      "div",
      {id: "child1"},
      React.createElement("p", {}, "Hello, I am P tag!")
    ),
    React.createElement(
      "div",
      {id: "child2"},
      [
        React.createElement("h3", {}, "Hello I am h3 tag!"),
        React.createElement("h4", {}, "Hello I am h4 tag!")
      ]
    )
  ]
);

root.render(newparent);