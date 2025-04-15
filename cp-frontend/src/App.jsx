import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Parallax from "./pages/Parallax";
import "./App.css";
import Sprookjes from "./pages/Sprookjes";
import Makingof from "./pages/Makingof";
import Layout2 from "./pages/Layout2";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="sprookjes" element={<Sprookjes />} />
            <Route path="makingof" element={<Makingof />} />
          </Route>

          <Route path="parallax" element={<Layout2 />}>
            <Route index element={<Parallax />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
