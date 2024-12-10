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
      className="bg-white shadow-lg border-b border-gray-300"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img
              src="https://envs.sh/1rN.png"
              alt="SIH-2024"
              className="w-32 h-14 rounded-full"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Toggle Button */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>

      <NavbarContent className="flex basis-1/5 sm:basis-full justify-end">
        <NavbarItem className="flex gap-2">
          <Avatar onClick={() => (window.location.href = "/profile")}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </NavbarItem>
      </NavbarContent>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-4 justify-start ml-2">
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
      </ul>

      {/* Mobile Menu */}
      <NavbarMenu>
        {siteConfig.navItems.map((item) => (
          <NavbarMenuItem
            key={item.href}
            color="black"
            className={clsx(
              "text-black transition-all duration-300 hover:text-primary hover:font-medium",
              item.label === "Home" || item.label === "Contact Us"
                ? "border-b-2 border-black rounded-sm p-2 hover:bg-gray-100"
                : "p-3",
            )}
          >
            {item.label === "Logout" ? (
              <button onClick={handleLogout} className="text-base">
                {item.label}
              </button>
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