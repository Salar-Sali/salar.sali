import Burger from "./Burger";
import HeaderTabs from "./HeaderTabs";
import Logo from "./Logo";

/**
 * here we are gonna see a list of tabs or
 * a burger component
 */
function FixedHeader() {
  return (
    <div className="sticky top-0 flex justify-around items-center h-20  bg-black text-white py-2 md:py-4">
      <Logo>Elon</Logo>
      <HeaderTabs />
      <Burger />
    </div>
  );
}

export default FixedHeader;
