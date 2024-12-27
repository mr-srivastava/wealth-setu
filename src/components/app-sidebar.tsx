"use client";

import * as React from "react";
import {
  ArrowLeftRight,
  Building2,
  GalleryVerticalEnd,
  Gauge,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
// import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Aadarsh Srivastava",
    email: "aadarsh.srivastava16@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "WealthSetu",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navItems: [
    {
      section: "Manage",
      items: [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: Gauge,
        },
        {
          title: "Partners",
          url: "/dashboard/partners",
          icon: Building2,
        },
        {
          title: "Ledger",
          url: "/dashboard/ledger",
          icon: ArrowLeftRight,
        },
      ],
    },
    {
      section: "Insights",
      items: [
        {
          title: "Reports",
          url: "#",
          icon: SquareTerminal,
          isActive: true,
          items: [
            {
              title: "Overview",
              url: "/dashboard/reports",
            },
            {
              title: "Monthly",
              url: "/dashboard/reports/monthly",
            },
            {
              title: "Year to Date",
              url: "/dashboard/reports/year-to-date",
            },
          ],
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {/* <NavProjects projects={data.projects} /> */}
        {data.navItems.map((section) => (
          <NavMain
            key={section.section}
            section={section.section}
            items={section.items}
          />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
