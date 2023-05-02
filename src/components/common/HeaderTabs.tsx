function HeaderTabs() {
  const tabs = ["Home", "About", "Work", "Blog", "Contact"];

  return (
    <div className=" hidden justify-center  gap-x-2 text-md font-medium	md:flex">
      {tabs.map((tab) => {
        return (
          <a
            href={tab !== "Home" ? `/${tab}` : "/"}
            key={tabs.indexOf(tab)}
            className="uppercase px-2 py-1 rounded tracking-wide duration-150 ease-in-out  hover:text-red-500 key={tabs.indexOf(tab)"
          >
            {tab}
          </a>
        );
      })}
    </div>
  );
}

export default HeaderTabs;
