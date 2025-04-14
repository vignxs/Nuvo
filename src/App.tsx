import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { NotFound } from "./pages/NotFound";
import ShopPage from "./pages/Shop";
import BirdsPage from "./pages/Birds";
import AccessoriesPage from "./pages/Accessories";
import FishPage from "./pages/Fish";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/fish" element={<FishPage />} />
        <Route path="/birds" element={<BirdsPage />} />
        <Route path="/accessories" element={<AccessoriesPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Home />} /> {/* Redirect to home page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
