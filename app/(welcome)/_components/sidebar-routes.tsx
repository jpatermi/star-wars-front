"use client";

import { Film, PersonStanding, Orbit, CarFront, Home } from "lucide-react";

import { SidebarItem } from "./sidebar-item";

const routes = [
  {
    icon: Home,
    label: "Welcome",
    href: "/",
  },
  {
    icon: Film,
    label: "Films",
    href: "/films",
  },
  {
    icon: PersonStanding,
    label: "People",
    href: "/people",
  },
  {
    icon: Orbit,
    label: "Planets",
    href: "/planets",
  },
  {
    icon: CarFront,
    label: "Starships",
    href: "/starships",
  },
];

export const SidebarRoutes = () => {

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}