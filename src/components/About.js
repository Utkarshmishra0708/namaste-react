import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
        <h1 className="text-4xl font-bold mb-4 text-orange-400">About Us</h1>
        <div className="mb-4">
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h2 className="text-xl font-semibold">{loggedInUser}</h2>
            )}
          </UserContext.Consumer>
        </div>
        <h2 className="text-lg text-gray-200 mb-6">
          This is Namaste React Web Series
        </h2>
        <UserClass />
      </div>
    );
  }
}

export default About;
