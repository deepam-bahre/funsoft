import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function DashboardPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <h1>hello dashboard</h1>
          </div>
        </div>
        <section className="content">
          <div
            className="container-fluid"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2>this page will be available on request</h2>
          </div>
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
