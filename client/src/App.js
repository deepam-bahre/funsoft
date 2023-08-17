import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddCustomerPage from "./pages/AddCustomerPage";
import CustomersPage from "./pages/CustomersPage";
import DashboardPage from "./pages/DashboardPage";
import Error404Page from "./pages/Error404Page";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./app.css";

function App() {
  return (
    <div className="App">
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/dashboard" element={<DashboardPage />}></Route>
            <Route path="/addcustomer" element={<AddCustomerPage />}></Route>
            <Route path="/customers" element={<CustomersPage />}></Route>
            <Route path="/*" element={<Error404Page />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
