import { Route, Routes, useNavigate } from "react-router-dom";
import TestpageComponent from "../components/TestPage/TestpageComponent";
import NestedTest from "./NestedTest";

function TestPage() {
  const navigate = useNavigate();
  return (
    <div className="text-center flex flex-col gap-y-3 just justify-center items-center h-screen">
      <p className="text-4xl">Test page</p>
      <TestpageComponent />
      <button
        onClick={() => navigate("1")}
        className="py-1 px-4 border border-black rounded-md"
      >
        test 1
      </button>
      <button
        onClick={() => navigate("2")}
        className="py-1 px-4 border border-black rounded-md"
      >
        test 2
      </button>
      <button
        onClick={() => navigate("3")}
        className="py-1 px-4 border border-black rounded-md"
      >
        test 3
      </button>
      <button
        onClick={() => navigate("4")}
        className="py-1 px-4 border border-black rounded-md"
      >
        test 4
      </button>
      <button
        className="p-2 rounded-md border border-black"
        onClick={() => navigate("/")}
      >
        Main page
      </button>
      <Routes>
        <Route path="nestedtest" element={<NestedTest />} />
      </Routes>
    </div>
  );
}

export default TestPage;
