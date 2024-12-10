export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "SIH-2024",
  description: "SIH-2024 Amal Jyothi College of Engineering",
  navItems: [
    {
      label: "Home",
      href: "./",
    },
    {
      label: "Contact Us",
      href: "./contactus",
    },
    {
      label: "Logout",
      href: "#", // Use "#" as a placeholder href
      onClick: (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Prevent the default anchor behavior

        // Show confirmation message before logout
        const confirmLogout = window.confirm(
          "Are you sure you want to logout?",
        );

        if (confirmLogout) {
          localStorage.removeItem("sihmail"); // Remove the item from localStorage

          // Redirect to login page after logout
          window.location.href = "./login";
        }
      },
    },
  ],
};
