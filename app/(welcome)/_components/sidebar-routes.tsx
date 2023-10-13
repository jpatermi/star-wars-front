"use client";

import { Layout, Film, PersonStanding, Orbit, CarFront, Home } from "lucide-react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  const isTeacherPage = pathname?.includes("/teacher");

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