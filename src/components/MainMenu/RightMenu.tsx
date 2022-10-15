import React from "react";
import RightMenuDesktop from "./RightMenuDesktop";
import RightMenuMobile from "./RightMenuMobile";

export default function MyMenu() {
  // const theme = useTheme()
  // const matches = useMediaQuery(theme.breakpoints.up("md"))

  // return matches ? <RightMenuDesktop /> : <RightMenuMobile />
  return (
    <>
      <RightMenuDesktop className="hidden md:block" />
      <RightMenuMobile className="md:hidden" />
    </>
  );
}
