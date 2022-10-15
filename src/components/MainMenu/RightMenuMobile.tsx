import React, { useState } from "react";
import { useFloating } from "@floating-ui/react-dom";

import { Menu as MenuIcon } from "@styled-icons/ionicons-solid";
import { MAIN_MENU_ITEMS } from "./constants";
import clsx from "clsx";

export type RightMenuMobileProps = { className?: string };

const RightMenuMobile: React.FC<RightMenuMobileProps> = ({ className }) => {
  const [showMenu, setShowMenu] = useState(false);
  const { x, y, reference, floating, strategy } =
    useFloating<HTMLButtonElement>({
      placement: "bottom-end",
    });

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLinkClick = () => {
    setShowMenu(false);
    return true
  };

  return (
    <div className={clsx("relative", className)}>
      <button ref={reference} onClick={handleShowMenu}>
        <MenuIcon className="text-dark-800" width={32} />
      </button>
      {showMenu && (
        <div
          ref={floating}
          style={{
            position: strategy,
            top: y ?? 0,
            left: x ?? 0,
          }}
          className="py-4 p-8 w-52 flex flex-col justify-center bg-white shadow-lg rounded-xl"
        >
          {MAIN_MENU_ITEMS.map((item, index) => (
            <a
              key={`main-menu-link-${index}`}
              href={item.path}
              onClick={handleLinkClick}
              className={clsx("font-link text-center text-lg my-2", {
                "border-b-[1px] border-b-primary-100 border-solid pb-3":
                  index < MAIN_MENU_ITEMS.length - 1,
              })}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default RightMenuMobile;
