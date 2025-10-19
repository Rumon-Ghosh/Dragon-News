import React, { use } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Provider/AuthProvider";

const SocialLogin = () => {
  const { user, logWithGoogle, logWithGithub } = use(AuthContext);

  const handleGoogleLogin = () => {
    logWithGoogle()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  const handleGithubLogin = () => {
    logWithGithub()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };

  return user ? null : (
    <div>
      <h2 className="font-bold mb-3">Login With</h2>
      <div className="gap-2 flex flex-col">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary"
        >
          <FcGoogle size={24} /> Log with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="btn btn-outline btn-primary"
        >
          <BsGithub size={24} /> Log with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
