const { Component } = require("react");

const TableHead = () => {
  return (
    //setting heading and row name
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

//getting the details for the props and creating a function for table body
const TableBody = (props) => {
  const { character } = props;
  const rows = character.map((characters) => {
    return (
      <tr>
        <td>{characters.name}</td>
        <td>{characters.job}</td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    //fetching the details for app.js using props
    const { character } = this.props;

    return (
      <>
        <div className="table">
          <TableHead />
          <TableBody character={character} />
        </div>
      </>
    );
  }
}

export default Table;
