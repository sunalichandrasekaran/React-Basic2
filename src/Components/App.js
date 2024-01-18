import React from "react";
import Table from "./Tables";

class App extends React.Component {
  render() {
    const details = [
      {
        name: "sunali",
        job: "Developer",
      },
      {
        name: "Ps",
        job: "Coder",
      },
      {
        name: "kavi",
        job: "Developer",
      },
      {
        name: "shanma",
        job: "Developer",
      },
      {
        name: "nanadhini",
        job: "Teacher",
      },
    ];
    return (
      <>
        {/* created table in Tables.js */}
        <h2>Table</h2>
        <Table character={details} />
      </>
    );
  }
}

export default App;
