import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

import NavBar from "./components/NavBar";

import Accomodations from "./pages/Accomodations";
import Program from "./pages/Program";

import { LanguageProvider, LanguageSelector } from "./context/LanguageContext";
import Footer from "./components/Footer";
import Attendance from "./pages/Attendance";

const Root = () => {
  return (
    <div style={{ position: "relative" }}>
      <NavBar />
      <LanguageSelector />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route element={<Root />}>
            <Route index element={<Home />} />

            <Route path="/attendance" element={<Attendance />} />

            <Route path="/accomodation" element={<Accomodations />} />
            <Route path="/program" element={<Program />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
