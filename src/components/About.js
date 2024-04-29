import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h2>This is Namaste React Web Series</h2>
      <User name="Utkarsh Mishra function" location="Gurugram function"/>

      <UserClass name="Utkarsh Mishra class" location="Gurugram Class" />
    </div>
  );
};

export default About;
