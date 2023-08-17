import React from "react";

function Error404Page() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "100px" }}>404 ERROR</h1>
      <h1>page you are looking for doesn't exist or was removed</h1>
      <h1>
        click to see who made this here{" "}
        <a href="https://devriz.herokuapp.com" target="_blank" rel="noreferrer">
          DEV RIZ
        </a>
      </h1>
    </div>
  );
}

export default Error404Page;
