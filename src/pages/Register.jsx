import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState('');
  const navigate = useNavigate()
  const { createUser, setUser, updateUser } = use(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log(e.target)
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    if (name.length < 5) {
      setError('Name should have at-least 5 characters')
      return;
    }

    // console.log({name, photo, email, password})
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
              setUser({...user, displayName: name, photoURL: photo })
            navigate('/')
            // console.log(user)
          })
          .catch((error) => {
            setUser(user)
            console.log(error.message)
          })
        // console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
      });
  };
  return (
    <div className="flex justify-center mt-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
        <h2 className="font-semibold text-2xl text-center">
          Register your account
        </h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name input */}
            <label className="label">Your Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Name"
              name="name"
              required
            />
            {error && <p>{error }</p>}
            {/* Photo Input */}
            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photo"
              required
            />
            {/* Email Input */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              required
              placeholder="Email"
            />
            {/* Password input */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              required
              placeholder="Password"
            />
            {/* checkbox */}
            <div className="flex gap-1 items-center">
              <input type="checkbox" className="checkbox checkbox-md" />
              <label className="label">Accept Terms and Conditions</label>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>
          </fieldset>
        </form>
        <p className="text-center pb-5">
          Already Have An Account ?{" "}
          <Link className=" text-secondary font-semibold" to={`/auth`}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
