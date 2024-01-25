import React from "react";
import { Route, Routes } from "react-router-dom";
import PanelLayout from "../components/Layouts/PanelLayout/PanelLayout";
import { Active, All, Compeleted, Pending } from "../pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<PanelLayout />}>
                <Route index element={<All />} />
                <Route path="compelete" element={<Compeleted />} />
                <Route path="pending" element={<Pending />} />
                <Route path="active" element={<Active />} />
            </Route>
        </Routes>
    );
};

export default App;
