import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "Default",
        avatar_url: "Dummy",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "  https://api.github.com/users/Utkarshmishra0708"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

  }

  componentDidUpdate () {
    console.log("Component Updated");
  }

  componentWillUnmount () {
    console.log("Component Unmounted");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="avatar" />
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        <h2>Contact: {login}</h2>
      </div>
    );
  }
}

export default UserClass;
