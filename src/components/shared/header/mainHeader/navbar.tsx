"use client";
// Packages
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Local imports
import { cn } from "@/lib/utils";
import Hideon from "@/provider/Hideon";
import DesktopNavbar from "./DesktopNavbar";
const MobileTabletNavbar = dynamic(() => import("./MobileTabletNavbar"), {
  ssr: false,
});

interface Props {
  loggedin: boolean;
}

function Navbar({ loggedin }: Props) {
  const pathName = usePathname();

  return (
    <Hideon
      routes={[
        "/age-alert",
        "/vendor-dashboard",
        "/login",
        "/registration",
        "/reset-password",
        "/forgot-password",
      ]}
    >
      <header className={cn("bg-white", pathName !== "/" && "")}>
        <div className="lg:hidden">
          <MobileTabletNavbar loggedin={loggedin} />
        </div>
        <div className="hidden lg:block">
          <DesktopNavbar pathName={pathName} loggedin={loggedin} />
        </div>
      </header>
    </Hideon>
  );
}

export default Navbar;
