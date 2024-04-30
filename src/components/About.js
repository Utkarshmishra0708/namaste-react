import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("About constructor");
  }

  componentDidMount() {
    console.log("About Component Mounted");
  }
  render() {
    console.log("About Component Rendered");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React Web Series</h2>
        <UserClass name="Utkarsh Mishra class" location="Gurugram Class" />
      </div>
    );
  }
}

export default About;
