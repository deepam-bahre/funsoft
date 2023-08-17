import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {

  let navigate = useNavigate();
  const [details, setDetails] = useState({
    username: "",
    password: "",
    phone:""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [error_msg, setErrorMsg] = useState();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    setLoading(true);
    await axios
      .post("http://localhost:5000/user/signup", details)
      .then((data) => {
        console.log(data.data);
        //localStorage.setItem("userData", JSON.stringify(data.data));
        setLoading(false);
        alert("log in success will redirect you to Sign In page");
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMsg(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <h1>this page will be developed when required</h1> */}
<div>
<h1 className="mb-3 text-center">Register</h1>
<h4 className="mb-4 text-center">
          <span className="text-primary fw-bold">fun</span>
          <span className="text-warning fw-bold">soft</span>
        </h4>
      <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              username
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={handleChange}
              name="username"
              value={details.username}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              required
              onChange={handleChange}
              name="phone"
              value={details.phone}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={handleChange}
              name="password"
              value={details.password}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <br />
          <p className="mt-4">
            Dont have an account?? <Link to="/register">REGISTER HERE</Link>
          </p>
        </form>
</div>
      
    </div>
  );
}

export default RegisterPage;
