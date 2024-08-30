const Heading = React.createElement("h1", { id: "home" }, "Welcome to react");

console.log(Heading); //returns a object

/***
 * <div id="parent">
 *      <div id="child">
 *          <h1>Welcome to js</h1>
 *      </div>
 * </div>
 * 
 * React.createElement --> gives an object with the values
 * root.render --> converts the object to tag and renders to the root id
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "Welcome to js"),React.createElement("h1", {}, "Welcome to React")] // for creating siblings
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);