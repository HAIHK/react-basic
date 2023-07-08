import React from "react";

class ChildComponents extends React.Component {
  state = {
    firstName: "",
    lastName: "",
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
    console.log(">>> check props :", this.props);

    let { name, age, address, arrJobs } = this.props;
    return (
      <>
        <div className="job-lists">
          {arrJobs.map((item, index) => {
            return (
              <div>
                {item.title} - {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponents;
