"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import {
  FaUser,
  FaHeart,
  FaEnvelope,
  FaCog,
  FaSignOutAlt,
  FaQuestionCircle,
} from "react-icons/fa"; // Importing icons from react-icons

export default function HeaderBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "My Profile", icon: <FaUser /> },
    { name: "Matches", icon: <FaHeart /> },
    { name: "Messages", icon: <FaEnvelope /> },
    { name: "Favorites", icon: <FaHeart /> },
    { name: "Settings", icon: <FaCog /> },
    { name: "Help", icon: <FaQuestionCircle /> },
    { name: "Log Out", icon: <FaSignOutAlt /> },
  ];

  return (
    <Navbar
      className="bg-gradient-to-r from-pink-400 via-red-400 to-pink-600"
      onMenuOpenChange={setIsMenuOpen}
      style={{
        backgroundColor: "#FFEBEE", // Soft Pink background color
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* Replace with your logo or use an icon here */}
          <span className="text-3xl">💖</span>{" "}
          {/* Heart emoji as a placeholder */}
          <p className="font-bold text-xl text-white">DateQuest</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden md:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" href="#" className="text-gray-200 text-2xl">
            MatcheMe
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            color="primary"
            href="#"
            className="text-gray-200 text-2xl"
            aria-current="page"
          >
            Likes
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="#" className="text-gray-200 text-2xl">
            Messages
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link color="foreground" href="#">
            Login
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="#"
            variant="bordered"
            className="text-white"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link
              color={
                index === 1
                  ? "primary" // Matches item in primary color
                  : index === menuItems.length - 1
                  ? "danger" // Log Out in danger color
                  : "foreground"
              }
              className="w-full flex items-center gap-2" // Flex for icon alignment
              href="#"
              size="lg"
            >
              {item.icon} {/* Icon next to the item name */}
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
