// Packages
import { PopoverGroup } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";

// Local imports
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import HeaderIconMenu from "../headerIconMenu/headerIconMenu";
import AuctionList from "./AuctionList";
// import Dropdown, { AuctionMobileMenu } from "./demonav";
import { useAppSelector } from "@/redux/store";
import { Bell, CircleUser, Gift, Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";

interface DesktopNavbarProps {
  pathName: string;
  loggedin: boolean;
}



function DesktopNavbar({ pathName, loggedin }: DesktopNavbarProps) {

   const cartItems = useAppSelector((state) => state.cart.items);
   const wishListItems = useAppSelector((state) => state.wishlist.items);
   const [itemCount, setItemCount] = useState(0);
   const [wishListitemCount, setwishListItemCount] = useState(0);

   useEffect(() => {
     setItemCount(cartItems.length); // Ensure client-only data updates after hydration
   }, [cartItems]);
   useEffect(() => {
    setwishListItemCount(wishListItems.length); // Ensure client-only data updates after hydration
   }, [wishListItems]);

   const Navicons = [
    {
      href: "/notifications",
      icon: <Bell />,
      alt: "bell-icon",
      count: 4,
      srOnlyText: "View notifications",
    },
    {
      href: "/wishlist",
      icon: <Heart />,
      alt: "heart-icon",
      count: wishListitemCount,
      srOnlyText: "View wishlist",
    },
    {
      href: "/cart",
      icon: <ShoppingCart />,
      alt: "cart-icon",
      count: itemCount,
      srOnlyText: "View cart",
    },
    {
      href: "/account",
      icon: <CircleUser />,
      alt: "user-icon",
      srOnlyText: "View account",
    },
    {
      href: "/rewards",
      icon: <Gift />,
      alt: "rewards",
      srOnlyText: "View rewards",
    }
  ];
  return (
    <nav
      aria-label="Global"
      className="mx-auto h-[74px] flex container items-center justify-between"
    >
      <div className="flex ">
        <Link href="/" className="">
          <span className="sr-only">Pacific Rim</span>
          <Image
            alt=""
            src="/assets/img/header-logo.png"
            width={92}
            height={50}
            className="h-[50px] w-[92px] lg:w-[100px]"
          />
        </Link>
      </div>
      <PopoverGroup className="hidden lg:flex lg:gap-x-[36px] ">
        <Link
          href="/"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/" ? "text-primary-blue-main dark:text-primary-pink-main" : "text-black font-normal"
          )}
        >
          Home
        </Link>
        {/* <Link
          href="/about"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/about" ? "text-primary-blue-main dark:text-primary-pink-main" : "text-black font-normal"
          )}
        >
          About
        </Link> */}
        <Link
          href=""
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/products"
              ? "text-primary-blue-main dark:text-primary-pink-main"
              : "text-black font-normal"
          )}
        >
          <AuctionList />
        </Link>
         <Link
          href="/products"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/products"
              ? "text-primary-blue-main dark:text-primary-pink-main"
              : "text-black font-normal"
          )}
        >
         Products
        </Link>
         {/* <Link
          href="/about"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/about"
              ? "text-primary-blue-main dark:text-primary-pink-main"
              : "text-black font-normal"
          )}
        >
         About Us
        </Link> */}
       
        {/* <Link
          href=""
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "" ? "text-primary-blue-main dark:text-primary-pink-main" : "text-black font-normal"
          )}
        >
          <PagesList />
        </Link> */}
        {!logindd <Link
          href="/blogs"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/blogs" ? "text-primary-blue-main dark:text-primary-pink-main" : "text-black font-normal"
          )}
        >
          Blog
        </Link>}
        
        {loggedin ?(

          <Link
          href="/vendor-dashboard"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/vendor-dashboard" ? "text-primary-blue-main dark:text-primary-pink-main" : "text-black font-normal"
          )}
          >
          My Store
        </Link>
        ): null}

        <Link
          href="/plans"
          className={cn(
            "text-[20px] font-medium hover:text-primary-blue-main dark:hover:text-primary-pink-main",
            pathName === "/plans" ? "text-primary-blue-main dark:text-primary-pink-main" : "text-black font-normal"
          )}
        >
          Membership
        </Link>
      </PopoverGroup>
      <div>
        {!loggedin ? (
          <div className="hidden lg:flex lg:flex-1 gap-x-[20px] lg:justify-end">
            <Button variant="outline" asChild size="md" className="dark:bg-white dark:hover:bg-[#482D721A] dark:text-black dark:border dark:border-[#6741a521] dark:shadow">
              <Link href="/login">Log in</Link>
            </Button>
            <Button size="md" asChild>
              <Link href="/registration">Sign up</Link>
            </Button>
          </div>
        ) : (
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <HeaderIconMenu icons={Navicons} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default DesktopNavbar;
