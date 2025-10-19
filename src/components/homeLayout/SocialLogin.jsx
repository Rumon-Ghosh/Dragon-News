import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
  return (
    <div>
      <h2 className='font-bold mb-3'>Login With</h2>
      <div className="gap-2 flex flex-col">
        <button className='btn btn-outline btn-secondary'> <FcGoogle size={24} /> Log with Google</button>
        <button className='btn btn-outline btn-primary'> <BsGithub size={24} /> Log with Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;