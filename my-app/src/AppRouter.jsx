import { Route, Routes } from "react-router-dom";
import { Active, All, Compeleted, Pending } from "./pages/Landing";
import { PanelLayout } from "./components/Layouts";

const AppRouter = () => {
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

export default AppRouter;
