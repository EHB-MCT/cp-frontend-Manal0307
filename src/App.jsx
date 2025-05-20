import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Parallax from "./pages/Parallax";
import "./App.css";
import Sprookjes from "./pages/Sprookjes";
import Makingof from "./pages/Makingof";
import Layout2 from "./pages/Layout2";

function App() {
  const redirect = new URLSearchParams(window.location.search).get("redirect");
  if (redirect) {
    // Ajoute le basename ici
    window.history.replaceState(null, "", `/cp-frontend-Manal0307${redirect}`);
  }

  return (
    <BrowserRouter basename="/cp-frontend-Manal0307/">
      <Routes>
        {/* Toutes les pages avec le navbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sprookjes" element={<Sprookjes />} />
          <Route path="makingof/:id" element={<Makingof />} />
        </Route>

        {/* Page spéciale sans navbar principale */}
        <Route path="/parallax" element={<Layout2 />}>
          <Route index element={<Parallax />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
