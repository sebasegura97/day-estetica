import Link from "next/link";
import { clsx } from "clsx";

import { MAIN_MENU_ITEMS } from "./constants";

const RightMenuDesktop: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={clsx("flex flex-row", className)}>
      {MAIN_MENU_ITEMS.map((item, index) => (
        <a
          key={`right-menu-desktop-${index}`}
          href={item.path}
          className={clsx({
            "font-sans text-xl mr-6": index < MAIN_MENU_ITEMS.length,
          })}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default RightMenuDesktop;
