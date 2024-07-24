import React from 'react';
import './App.css';
import DashboardPage from "./pages/desktop/DashboardPage";
import {Route, Routes} from "react-router-dom";
import ReportsPage from "./pages/desktop/ReportsPage";
import OrdersPage from "./pages/desktop/OrdersPage";
import SupportPage from "./pages/SupportPage";
import UsersPage from "./pages/desktop/UsersPage";
import Navbar from "./components/Navbar";
import MobileTabs from "./components/MobileTabs";
import 'bootstrap-icons/font/bootstrap-icons.css';
import HomePage from "./pages/mobile/HomePage";
import ScanInPage from "./pages/mobile/ScanInPage";
import ScanOutPage from "./pages/mobile/ScanOutPage";
import StockCountPage from "./pages/mobile/StockCountPage";

function App() {
    return (
        <div className="App">
            <div className="desktop-only">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<DashboardPage/>}></Route>
                    <Route path="/reports" element={<ReportsPage/>}></Route>
                    <Route path="/orders" element={<OrdersPage/>}></Route>
                    <Route path="/users" element={<UsersPage/>}></Route>
                    <Route path="/support" element={<SupportPage/>}></Route>
                </Routes>
            </div>
            
            <div className="mobile-only mb-3"></div>
            <div className="mobile-only">
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/scanin" element={<ScanInPage/>}></Route>
                    <Route path="/scanout" element={<ScanOutPage/>}></Route>
                    <Route path="/count" element={<StockCountPage/>}></Route>
                    <Route path="/support" element={<SupportPage/>}></Route>
                </Routes>
                {/*<MobileTabs />*/}
            </div>
        </div>
    )
}

export default App;
