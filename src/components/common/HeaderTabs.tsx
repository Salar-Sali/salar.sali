import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../app/store";
import { setHeader } from "../../feature/headerSlice";
import { TabsNames } from "./TabsNames";

function HeaderTabs() {
  // const tabs = ["Home", "About", "Portfolio", "Blog", "Contact"];
  const tabs = [
    TabsNames.HOME,
    TabsNames.ABOUT,
    TabsNames.PORTFOLIO,
    TabsNames.BLOG,
    TabsNames.CONTACT,
  ];
  const header = useSelector((state: RootState) => state.header.value);

  const dispatch = useDispatch();
  const handleTabClick = (tab: string) => {
    dispatch(setHeader(tab));
  };
  return (
    <div className=" hidden   gap-x-2 text-md h-full font-medium	md:flex md:items-center  md:justify-center">
      {tabs.map((tab) => {
        return (
          <Link
            to={tab !== TabsNames.HOME ? `/${tab}` : "/"}
            key={tabs.indexOf(tab)}
            className={`uppercase px-2 py-1 rounded tracking-wide duration-150 ease-in-out h-full flex items-center 
            ${header === tab ? "bg-red-500 text-white " : ""} 
            ${header === tab ? "" : "hover:text-red-500"}
            `}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </Link>
        );
      })}
    </div>
  );
}

export default HeaderTabs;
