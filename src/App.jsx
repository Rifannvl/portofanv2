import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Sidebar from "./components/Sidebar";
import GridWithElements from "./components/GridBackground";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-row">
        <div className="">
          <Sidebar />
        </div>

        <div className=" container mx-auto ps-48 ">
          <Routes>
            <Route
              path="/"
              element={
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <Home />
                </motion.div>
              }
            />
            <Route
              path="/about"
              element={
                <motion.div
                  key={location.pathname}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                >
                  <About />
                </motion.div>
              }
            />
            <Route
              path="/services"
              element={<h1 className="text-2xl font-bold">Services Page</h1>}
            />
            <Route
              path="/contact"
              element={<h1 className="text-2xl font-bold">Contact Page</h1>}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
