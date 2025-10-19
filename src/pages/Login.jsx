import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { logInUser, setUser, resetPassword } = use(AuthContext);
  const [error, setError] = useState('')

  const emailRef = useRef();
  // console.log(emailRef.current.value)

  const location = useLocation();
  // console.log(location)
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    logInUser(email, password)
      .then(res => {
        setUser(res.user)
        navigate(`${location.state ? location.state : '/'}`)
      })
      .catch(error => {
        setError(error.code)
        // console.log(error.code)
      })
  }

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    resetPassword(email)
      .then(() => {
        alert('We send a email to you')
      })
      .catch(er => {
        console.log(er.code)
      })
  }

  return (
    <div className="flex justify-center mt-15">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl pt-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input ref={emailRef} type="email" className="input" name="email" placeholder="Email" />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" name="password" placeholder="Password" />
            <div>
              <button onClick={handleResetPassword} className="link link-hover">Forgot password?</button>
            </div>
            {
              error && <p className="text-red-400 text-xs">{ error}</p>
            }
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
        </form>
        <p className="text-center pb-5">Dont’t Have An Account ? <Link className=" text-secondary font-semibold" to={`/auth/register`}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
