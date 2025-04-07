import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import RSVP from "./pages/RSVP";
import NavBar from "./components/NavBar";

import Accomodations from "./pages/Accomodations";
import Program from "./pages/Program";
import FakeGallery from "./pages/FakeGallery";
import RealGallery from "./pages/RealGallery";
import { LanguageProvider, LanguageSelector } from "./context/LanguageContext";
import Arrival from "./pages/Arrival";

const Root = () => {
  return (
    <>
      <NavBar />
      <LanguageSelector />
      <Outlet />
    </>
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
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/fakegallery" element={<FakeGallery />} />
            <Route path="/gallery" element={<RealGallery />} />

            <Route path="/arrival" element={<Arrival />} />
            <Route path="/accomodation" element={<Accomodations />} />
            <Route path="/program" element={<Program />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
