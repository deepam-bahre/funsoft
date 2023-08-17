import React from "react";
import { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router";

function AddCustomerPage() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    id_no: "",
    nationality: "",
    city: "",
    occupation: "",
    account_number: "",
    customer_type: "",
    non_individual_reg_no: "",
    non_individual_description: "",
    non_individual_date: "",
    non_individual_notes: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    const token = user.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .post("http://localhost:5000/customer/add", details, config)
      .then((data) => {
        console.log(data.data);
        alert("customer added successfully");
        navigate("/customers");
      })
      .catch((err) => {
        alert(err.response.data);
        if (err.response.status === 401) {
          alert(`${err.response.data} , redirecting to login`);
          navigate("/");
        }
        console.log(err);
      });
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content-wrapper pb-3">
        <div className="container-fluid">
        <div className="row justify-content-center">
        <div className="col-md-8 col-md-offset-4">
        <h3 className="mb-2 mt-3 ps-4" style={{color:"#000"}}>Add Customers</h3>
        <form
            className="row g-3 mr-4 ml-4"
            style={{ marginTop: "0.1px" }}
            onSubmit={handleSubmit}
          >
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                first name
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="firstname"
                value={details.firstname}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                last name
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="lastname"
                value={details.lastname}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                required
                onChange={handleChange}
                name="email"
                value={details.email}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                mobile number
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
            <div className="col-md-4">
              <label htmlFor="inputEmail4" className="form-label">
                account number
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="account_number"
                value={details.account_number}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputPassword4" className="form-label">
                customer type
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="customer_type"
                value={details.customer_type}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputPassword4" className="form-label">
                national id no.
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="id_no"
                value={details.id_no}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputEmail4" className="form-label">
                non-individual regNo.
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="non_individual_reg_no"
                value={details.non_individual_reg_no}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputEmail4" className="form-label">
                non individual regDate
              </label>
              <input
                type="date"
                className="form-control"
                required
                onChange={handleChange}
                name="non_individual_date"
                value={details.non_individual_date}
              />
            </div>

            <div className="col-md-4">
              <label htmlFor="inputPassword4" className="form-label">
                non individual_description
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="non_individual_description"
                value={details.non_individual_description}
              />
            </div>

            <div className="col-md-5">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="city"
                value={details.city}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                nationality
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="nationality"
                value={details.nationality}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="inputZip" className="form-label">
                occupation
              </label>
              <input
                type="text"
                className="form-control"
                required
                onChange={handleChange}
                name="occupation"
                value={details.occupation}
              />
            </div>
            <div className="col-md-12">
              <div>
                <textarea
                  className="form-control"
                  placeholder="notes"
                  id="floatingTextarea"
                  defaultValue={""}
                  required
                  onChange={handleChange}
                  name="non_individual_notes"
                  value={details.non_individual_notes}
                />
              </div>
            </div>
            <div className="col-2">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    defaultValue="option1"
                    defaultChecked
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Is Active
                  </label>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Not Active
                  </label>
                </div>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>    
        </div>
      </div>
    </div>
  );
}

export default AddCustomerPage;
