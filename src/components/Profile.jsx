import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Please login </h1>;

  return <div>welcome {user.username}</div>;
};

export default Profile;
