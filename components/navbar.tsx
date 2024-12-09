'client'
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
} from "@/components/ui/avatar"

import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import clsx from "clsx";
import { FaInstagram } from "react-icons/fa6";

import { siteConfig } from "@/config/site";

export const Navbar = () => {

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
              src="https://envs.sh/1J1.png"
              alt="SIH-2024"
              className="w-10 h-10 rounded-full"
            />
            <p className="font-bold text-inherit !text-black text-xl md:text-2xl">SIH-2024</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  "text-black transition-all duration-300 hover:text-primary hover:font-medium",
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                href={item.href}
              >
                <span className="text-base sm:text-lg">{item.label}</span>
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link href="https://www.instagram.com/ajce.in/" className="transition-all duration-300 hover:scale-110">
            <FaInstagram className="text-black text-xl sm:text-2xl" />
          </Link>

            <Avatar className="" onClick={() => window.location.href = '/profile'}>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>



    </NextUINavbar>
  );
};
