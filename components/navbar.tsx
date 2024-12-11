"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import NextLink from "next/link";
import clsx from "clsx";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const router = useRouter();

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("sihmail");
        router.push("/login");
      }
    });
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white shadow-lg border-b border-gray-300 flex flex-row justify-center items-center"
    >
      {/* Logo */}
      <NavbarContent className="">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex flex-row items-center justify-center gap-2"
            href="/"
          >
            <img
              src="https://envs.sh/1r2.png"
              alt="SIH-2024"
              className="w- h-14 rounded-full"
            />
            <span className="text-xl font-bold">SIH&apos;24</span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Profile and Mobile Toggle Button */}
      <NavbarContent
        className="lg:hidden flex flex-row justify-center items-center gap-4"
        style={{ flexGrow: 0 }}
      >
        <NavbarItem className="flex gap-2">
          <Avatar onClick={() => (window.location.href = "/profile")}>
            <AvatarImage src={"/defpic1.jpg"} alt="profile" />
            <AvatarFallback> </AvatarFallback>
          </Avatar>
        </NavbarItem>
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex flex-row justify-center items-center gap-4 ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.label === "Logout" ? (
              <button
                onClick={handleLogout}
                className={clsx(
                  "text-black transition-all duration-300 hover:text-primary hover:font-medium",
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
              >
                <span className="text-base sm:text-lg">{item.label}</span>
              </button>
            ) : (
              <NextLink
                className={clsx(
                  "text-black transition-all duration-300 hover:text-primary hover:font-medium",
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                href={item.href}
              >
                <span className="text-base sm:text-lg">{item.label}</span>
              </NextLink>
            )}
          </NavbarItem>
        ))}

        {/* Desktop Profile */}
        <NavbarContent className="hidden sm:flex sm:basis-full justify-center sm:justify-end">
          <NavbarItem className="flex gap-2">
            <Avatar onClick={() => (window.location.href = "/profile")}>
              <AvatarImage src={"/defpic.jpg"} alt=" " />
              <AvatarFallback> </AvatarFallback>
            </Avatar>
          </NavbarItem>
        </NavbarContent>
      </ul>

      {/* Mobile Menu */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem
            key={item.href}
            className={clsx(
              "text-black transition-all duration-300 hover:text-primary hover:font-medium",
              item.label === "Home" || item.label === "Contact Us"
                ? "border-b-2 border-black rounded-sm p-2 hover:bg-gray-100 hover:text-black"
                : "p-3",
            )}
          >
            {item.label === "Logout" ? (
              <div className="flex justify-center items-center">
                <button
                  onClick={handleLogout}
                  className="text-base bg-red-500 p-2 rounded-md text-white"
                >
                  {item.label}
                </button>
              </div>
            ) : (
              <NextLink href={item.href}>
                <span className="text-base">{item.label}</span>
              </NextLink>
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};
