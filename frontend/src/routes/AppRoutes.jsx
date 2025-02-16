import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import Articles from "../pages/Articles/Articles.jsx";
import NotFound from "../pages/NotFound/NotFound.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
