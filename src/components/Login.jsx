import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Login = () => {
  const navigate = useNavigate();
  const { logInUser, signInWithGoogle } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);
    // Login User
    logInUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };

  const handleSignInWithGoogle = () => {
    signInWithGoogle()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col ">
        <h2 className="font-bold text-3xl">Login Now</h2>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className="font-semibold text-center mx-5 mb-5">
            If you are new ? Please
            <Link className="btn ml-3" to="/registration">
              Registration
            </Link>
          </p>
          <button onClick={handleSignInWithGoogle} className="btn btn-ghost">
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
