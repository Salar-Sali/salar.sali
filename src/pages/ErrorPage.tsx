import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setHeader } from "../feature/headerSlice";
import { TabsNames } from "../components/common/TabsNames";

function ErrorPage() {
  const dispatch = useDispatch();
  const handleTabClick = (tab: string) => {
    dispatch(setHeader(tab));
  };
  return (
    <div className="h-screen flex flex-col gap-y-5 justify-center items-center text-4xl">
      <h3>ErrorPage</h3>
      <Link
        className="p-2 rounded-md border border-black"
        onClick={() => handleTabClick(TabsNames.HOME)}
        to="/"
      >
        Home
      </Link>
    </div>
  );
}

export default ErrorPage;
