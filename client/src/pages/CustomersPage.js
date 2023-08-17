import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function CustomersPage() {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [customers, setCustomers] = useState([]);
  const fetchCustomers = async () => {
    const token = user.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .get("http://localhost:5000/customer", config)
      .then((customers) => {
        setCustomers(customers.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCustomers();
    console.log(customers);
  }, []);

  const deleteCustomer = async (id) => {
    const token = user.token;
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    await axios
      .delete(`http://localhost:5000/customer/delete/${id}`, config)
      .then((deleted) => {
        alert(deleted.data.message);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content-wrapper pt-4" style={{minHeight: "0", maxHeight: "60vh"}}>
        <div className="content container-fluid">
          <table className="table table-striped table-bordered" style={{background: "#fff !important", boxShadow:"rgb(0 0 0 / 28%) 0px 1px 3px 0px", borderColor: "#000"}}>
            <thead>
              <tr>
                <th scope="col">first name</th>
                <th scope="col">last name</th>
                <th scope="col">phone</th>
                <th scope="col">id number</th>
                <th scope="col">email</th>
                <th scope="col">city</th>
                <th scope="col">nationality</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer._id}>
                  <td>{customer.firstname}</td>
                  <td>{customer.lastname}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.id_no}</td>
                  <td>{customer.email}</td>
                  <td>{customer.city}</td>
                  <td>{customer.nationality}</td>
                  <td>
                    <button
                      className="btn-danger btn-small"
                      onClick={() => deleteCustomer(customer._id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CustomersPage;
