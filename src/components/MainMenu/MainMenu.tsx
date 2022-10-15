import clsx from "clsx";
import Logo from "../../icons/Logo";
import RightMenu from "./RightMenu";

const MainMenu: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <nav className={clsx("fixed top-0 inset-x-0 bg-white w-full z-50", className)}>
      <div className="flex items-center justify-between container m-auto py-3 px-4 sm:px-6 md:px-8">
        <Logo width={120} fill="#333333" />
        <RightMenu />
      </div>
    </nav>
  );
};

export default MainMenu;
