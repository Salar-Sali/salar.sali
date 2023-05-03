import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import WorkPageDetail from "./components/WorkPage/WorkPageDetail";
import BlogPage from "./pages/BlogPage";
import { store } from "./app/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Portfolio" element={<WorkPage />} />
            <Route path="/Portfolio/:id" element={<WorkPageDetail />} />
            <Route path="/blog" element={<BlogPage />} />
            {/* redirect */}
            <Route path="/lost" element={<Navigate to="/" />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
