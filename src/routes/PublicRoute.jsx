import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/public/HomePage";
import MovieDetailPage from "../pages/public/MovieDetailPage";
import MoviePage from "../pages/public/MoviePage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";
import PaymentPage from "../pages/public/PaymentPage";
import ShowtimePage from "../pages/public/ShowtimePage";
import AddCategory from "../pages/admin/AddCategory.jsx";
import AddMovie from "@/pages/admin/AddMovie.jsx";

const PublicRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movieDetail" element={<MovieDetailPage />} />
      <Route path="/movie" element={<MoviePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/showtime" element={<ShowtimePage />} />
      <Route path="/addcategory" element={<AddCategory />} />
      <Route path="/addmovie" element={<AddMovie />} />
    </Routes>
  );
};

export default PublicRoute;
