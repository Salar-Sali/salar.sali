import { useNavigate } from "react-router-dom";
import MainPageComponent from "../components/HomePage/MainPageComponent";

function MainPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-y-2 justify-center  items-center h-screen">
      <h2 className="text-4xl">The main page</h2>
      <MainPageComponent />
      <button
        className="text-xl p-2 rounded-md border border-black"
        onClick={() => navigate("/test")}
      >
        test page
      </button>
    </div>
  );
}

export default MainPage;
