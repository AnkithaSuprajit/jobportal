import "./App.css";
import Content from "./Content/Content";
import Search from "./Content/Search";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pagenotfound from "./PagenotFound/Pagenotfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/*" element={<Pagenotfound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
