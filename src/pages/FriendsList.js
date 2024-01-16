import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { NavLink } from "react-router-dom";

const FriendsList = () => {
  const { axioWithAuthInstance } = useAuth();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axioWithAuthInstance
      .get("friends")
      .then((res) => {
        console.log("friends res", res);
        setFriends(res.data);
      })
      .catch((err) => {
        console.error("friends err", err);
      });
  }, []);
  return (
    <div>
      <h2>FRIEND LIST</h2>
      <ul className="list">
        {friends.map((friend, key) => (
          <NavLink key={key} to={`/friends/${friend.id}`}>
            <li>
              -{friend.name}-{friend.email}
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};
export default FriendsList;
