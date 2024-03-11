const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
 * nested elements
 * <div id:"parent">
 *      <div id:"child">
 *          <h1></h1>
 *          <h2></h2>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("h1", { id: "heading", xyz: "abc" }, "Hello from react!"),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "head" }, "i am h1 tag"),
    React.createElement("h2", { id: "h2" }, "i am h2 Element"),
  ])
);
// console.log(parent);
root.render(parent);

//  JSX
