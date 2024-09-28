// cách 1 hơi dài dòng
// const h1 = React.createElement(
//   "h1",
//   {
//     className: "heading",
//   },
//   "hello react!"
// );
// const p = React.createElement("p", null, "React is JS Library");

// nên ta có cách 2
const div = (
  <div className="container">
    <h1 className="heading">Hello React!</h1>
    <p>React is JavaScript Library</p>
  </div>
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(div);
