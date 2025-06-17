import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2> Pagina Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
