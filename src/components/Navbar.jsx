import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, setUser, signOutUser } = use(AuthContext);
  // console.log(user)
  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-between">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-3">
        <NavLink to={`/`}>Home</NavLink>
        <NavLink to={`/about`}>About</NavLink>
        <NavLink to={`/career`}>Career</NavLink>
      </div>
      <div className="login flex gap-2 items-center">
        <span className="w-10 h-10 rounded-full border overflow-hidden inline-block">
          <img
            src={user && user.photoURL ? user.photoURL : userImg}
            alt="User"
            className="w-full h-full object-cover"
          />
        </span>

        {user ? (
          <button onClick={handleSignOut} className="btn btn-primary px-10">
            SignOut
          </button>
        ) : (
          <Link to={`/auth`} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
