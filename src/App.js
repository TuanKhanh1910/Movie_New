import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/ListMovie/MovieDetails/MovieDetails";
import HomePage from "./pages/HomePage/HomePage";
import Loading from "./pages/Loading/Loading";
import Login from "./pages/Login/Login";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import Page404 from "./pages/Page404/Page404";
import UserManagement from "./pages/UserManagement/UserManagement";
import AdminTemplate from "./template/AdminTemplate/AdminTemplate";
import UserTemplate from "./template/UserTemplate";
import Regis from "./pages/Regis/Regis";
import BookTickets from "./pages/BookTickets/BookTickets";
import CheckoutTemplate from "./template/CheckoutTemPlate/CheckoutTemplate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserTemplate />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regis" element={<Regis />} />
          <Route path="/detail">
            <Route path=":maPhim" element={<MovieDetails />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminTemplate />}>
          <Route index element={<UserManagement />} />
        </Route>
        <Route path="/admin-login" element={<LoginAdmin />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/checkout" element={<CheckoutTemplate />}>
          <Route path=":id" element={<BookTickets />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
