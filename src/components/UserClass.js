import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 0,
    };
    console.log("UserClass constructor");
  }

  componentDidMount() {
    console.log("UserClass Component Mounted");
  }

  render() {
    console.log("UserClass Component Rendered");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count : {count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: @utkarshmishra0708</h2>
      </div>
    );
  }
}

export default UserClass;
