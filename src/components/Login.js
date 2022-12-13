import React from "react";

function Login() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-purple-900 text-white m-auto">
      <div className="bg-purple-700 flex-col justify-center">
        <form className="mx-auto  bg-purple-700 rounded-lg px-8 p-8">
          <h2 className="text-4xl font-bold text-white text-center">SIGN IN</h2>
          <div className="flex flex-col py-2 text-purple-200">
            <label>User Name</label>
            <input type="text" placeholder="Enter Your Name"></input>
          </div>

          <div  className="flex flex-col py-2 text-purple-200">
            <label>Password</label>
            <input type="password" placeholder="Enter Your Password"></input>
          </div>
          <button className="bg-blue-800 rounded-lg my-3 py-2 text-lg">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
