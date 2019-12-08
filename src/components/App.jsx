import React from "react";
import ClassComponent from "./ClassComponent";
import FunctionalComponent from "./FunctionalComponent";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Functional Component</h1>
        <FunctionalComponent />
        <h1>Class Component</h1>
        <ClassComponent />{" "}
      </>
    );
  }
}

export default App;
