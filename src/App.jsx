import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./pages/Login/login.page";
import { Register } from "./pages/Register/register.page";
import { Dashboard } from "./pages/Dashboard/dashboard.page";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/" element={<Dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
