import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import CardDetails from "./components/WorkPage/WorkPageDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:id" element={<CardDetails />} />
          {/* <Route path="/test/:id" element={<DynamicTest />} /> */}
          {/* redirect */}
          <Route path="/lost" element={<Navigate to="/" />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
