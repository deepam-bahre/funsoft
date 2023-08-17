import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  let navigate = useNavigate();
  const [details, setDetails] = useState({
    username: "",
    password: "",
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
      .post("http://localhost:5000/user/signin", details)
      .then((data) => {
        console.log(data.data);
        localStorage.setItem("userData", JSON.stringify(data.data));
        setLoading(false);
        alert("log in success will redirect you to dashboard");
        navigate("/dashboard");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        setErrorMsg(err.response.data.message);
        console.log(err);
      });
  };
  return (
    <div>
      <div
        className="container-fluid mt-4"
        style={{
          maxWidth: "450px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 className="mt-4 mb-4">LOGIN AS ADMIN</h1>
        <h4 className="mb-4">
          <span className="text-primary fw-bold">fun</span>
          <span className="text-warning fw-bold">soft</span>
        </h4>
        {loading && (
          <div
            className="alert alert-info"
            role="alert"
            style={{ width: "100%" }}
          >
            processing....
          </div>
        )}
        {error && (
          <div
            className="alert alert-danger d-flex align-items-center"
            role="alert"
            style={{ width: "100%" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2"
              viewBox="0 0 16 16"
              role="img"
              aria-label="Warning:"
            >
              <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <div>{error_msg}</div>
          </div>
        )}

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

export default LoginPage;
