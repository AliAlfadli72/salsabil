import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// ─── Eager: load Home immediately (above the fold) ───
import Home from "./pages/Home";

// ─── Lazy: load all other pages only when navigated to ───
const About        = lazy(() => import("./pages/About"));
const Distribution = lazy(() => import("./pages/Distribution"));
const Contact      = lazy(() => import("./pages/Contact"));
const Products     = lazy(() => import("./pages/Products"));
const Quality      = lazy(() => import("./pages/Quality"));

// Minimal loading fallback — avoids layout shift
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-brand-200 border-t-brand-600 rounded-full animate-spin" />
    </div>
  );
}

// Scroll to top on route change
function ScrollRestorer() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollRestorer />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"             element={<Home />} />
              <Route path="/about"        element={<About />} />
              <Route path="/products"     element={<Products />} />
              <Route path="/quality"      element={<Quality />} />
              <Route path="/distribution" element={<Distribution />} />
              <Route path="/contact"      element={<Contact />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
