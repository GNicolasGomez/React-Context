import React, { useEffect } from "react";
import { useContext } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  const { users, getUsers, getProfiles } = useContext(UserContext);
  
  useEffect(() => {
    getUsers();
    // console.log(users)
  }, []);

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <a
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          key={user.id}
          href="#"
          onClick={()=> getProfiles(user.id)}
        > <img src={user.avatar} className="img-fluid mr-4 rounded-circle" width="70" alt="" />
          <p className="">
          {" "}
          {`${user.first_name} ${user.last_name}`}
          </p>
        </a>
      ))}
    </div>
  );
};

export default UserList;
