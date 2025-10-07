import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        login: "Default",
        avatar_url: "https://via.placeholder.com/150",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Utkarshmishra0708");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    return (
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center w-80 text-center">
        <img
          className="w-32 h-32 rounded-full mb-4 border-4 border-orange-400"
          src={avatar_url}
          alt="avatar"
        />
        <h2 className="text-xl font-bold">{name}</h2>
        <h3 className="text-gray-300">{location}</h3>
        <h3 className="text-gray-300">{login}</h3>
      </div>
    );
  }
}

export default UserClass;
