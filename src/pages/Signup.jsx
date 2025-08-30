import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-80 text-black">
        <h2 className="text-2xl font-bold mb-6 text-center">Seller Signup</h2>
        <input type="text" placeholder="Name" className="w-full mb-4 p-2 border rounded" />
        <input type="text" placeholder="Email" className="w-full mb-4 p-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full mb-6 p-2 border rounded" />
        <button onClick={() => navigate('/')} className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded">Sign Up</button>
      </div>
    </div>
  );
};

export default Signup;
