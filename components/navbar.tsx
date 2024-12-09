'use client';
import { useRouter } from "next/navigation";
import Swal from "sweetalert2"; // Import SweetAlert2
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { FaInstagram } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const router = useRouter(); // Use useRouter to programmatically navigate

  const handleLogout = (event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default link behavior

    // Show SweetAlert confirmation dialog
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("sihmail"); // Clear localStorage

        // Redirect to login page after logout
        router.push("/login"); // Using Next.js router for navigation
      }
    });
  };

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white shadow-lg border-b border-gray-300"
    >
      {/* Left Section */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img
              src="https://envs.sh/1J1.png"
              alt="SIH-2024"
              className="w-10 h-10 rounded-full"
            />
            <p className="font-bold text-inherit !text-black text-xl md:text-2xl">SIH-2024</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-black" />
      </NavbarContent>

      {/* Right Section */}
      <NavbarContent className="flex basis-1/5 sm:basis-full justify-end">
        <NavbarItem className="flex gap-2">
          <Link
            href="https://www.instagram.com/ajce.in/"
            className="transition-all duration-300 hover:scale-110"
          >
            <FaInstagram className="text-black text-xl sm:text-2xl" />
          </Link>

          <Avatar onClick={() => window.location.href = '/profile'}>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </NavbarItem>
      </NavbarContent>

      {/* Links for Larger Screens */}
      <ul className="hidden lg:flex gap-4 justify-start ml-2">
        {siteConfig.navItems.map((item) => (
          <NavbarItem key={item.href}>
            {item.label === "Logout" ? (
              <a
                href="#"
                onClick={handleLogout}  // Attach the logout handler here
                className={clsx(
                  "text-black transition-all duration-300 hover:text-primary hover:font-medium",
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
              >
                <span className="text-base sm:text-lg">{item.label}</span>
              </a>
            ) : (
              <NextLink
                className={clsx(
                  "text-black transition-all duration-300 hover:text-primary hover:font-medium",
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
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
                : ""
            )}
          >
            {item.label === "Logout" ? (
              <a
                href="#"
                onClick={handleLogout}  // Attach the logout handler here
                className="text-base"
              >
                {item.label}
              </a>
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
