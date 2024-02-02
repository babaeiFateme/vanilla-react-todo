import React from "react";
import { Route, Routes } from "react-router-dom";
import  PanelLayout  from "./components/common/Layouts/PanelLayout/PanelLayout";
import Compeleted from "./pages/Compeleted/Compeleted.jsx";
import Pending from "./pages/Pending/Pending.jsx";
import Active from "./pages/Active/Active.jsx";
import Landing from "./pages/Landing.jsx";
const AppRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<PanelLayout />}>
                <Route index element={<Landing />} />
                <Route path="compelete" element={<Compeleted />} />
                <Route path="pending" element={<Pending />} />
                <Route path="active" element={<Active />} />
            </Route>
        </Routes>
    );
};

export default AppRoute;
