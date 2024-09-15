import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "I am ready");

/* JXS transpiled before it reaches the js - Done by parcel - babel
JXS => React.createElement => object => HTMLElement(render);
jsx - is not a HTML inside js */
const jsx = <h1>Hello guy</h1>;

// React element
const alterHeading = (
  <div>
    <h1>I am ready</h1>
  </div>
);

//React functional component 1
const HeadingComponent1 = () => {
  return (
    <div>
      <h1>This is my first component</h1>
    </div>
  );
};

//React functional component 2
// react component composition (conponent with another component)
const HeadingComponent2 = () => {
  return (
    <div>
      <HeadingComponent1 />
      <div>
        <h1>This is my second component</h1>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
