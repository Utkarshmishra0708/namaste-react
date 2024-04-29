import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, location} = this.props;
    const {count, count2} = this.state;
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @utkarshmishra0708</h2>
      </div>
    );
  }
}

export default UserClass;
