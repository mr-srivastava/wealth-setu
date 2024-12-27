"use client";

import { ChevronRight, type LucideIcon } from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

interface NavItem {
  title: string;
  url: string;
}

interface NavItemsWithChildren extends NavItem {
  icon?: LucideIcon;
  isActive?: boolean;
  items?: Array<NavItem>;
}

interface NavMainProps {
  section: string;
  items: Array<NavItemsWithChildren>;
}

export function NavMain({ section, items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{section}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <>
            {item.items ? (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon className="text-green-600" />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ) : (
              <SidebarMenuSubItem>
                <SidebarMenuSubButton asChild>
                  <Link href={item.url} className="text-green-600">
                    {item.icon && <item.icon />}
                    <span className="text-sidebar-accent-foreground">
                      {item.title}
                    </span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            )}
          </>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
