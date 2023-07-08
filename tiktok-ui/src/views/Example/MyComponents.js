import React from "react";
import ChildComponents from "./ChildComponents";

class MyComponents extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    arrJobs: [
      { id: "Job1", title: "DEV1", salary: " 100 $" },
      { id: "Job2", title: "DEV2", salary: " 200 $" },
      { id: "Job3", title: "DEV3", salary: " 300 $" },
    ],
  };
  handleChangefirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };
  handleChangelastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handleClickSubmit = (event) => {
    event.preventDefault();
    console.log(">>> check data input : ", this.state);
  };

  render() {
    console.log(">>> Check:", this.state);
    return (
      <>
        <form>
          <label>First Name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleChangefirstName(event)}
          />
          <br />
          <label>Last Name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleChangelastName(event)}
          />
          <br />
          <br />
          <input
            type="submit"
            onClick={(event) => this.handleClickSubmit(event)}
          />
        </form>
        <ChildComponents
          name={this.state.firstName}
          age={"2K"}
          address={"NA"}
          arrJobs={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponents;
