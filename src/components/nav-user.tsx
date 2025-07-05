"use client";

import {
  BadgeCheck,
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOut,
  Sparkles,
} from "lucide-react";
import React, { memo } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface MenuItem {
  icon: React.ElementType;
  label: string;
  action?: () => void;
}

interface MenuGroup {
  items: MenuItem[];
}

const menuGroups: MenuGroup[] = [
  {
    items: [
      {
        icon: Sparkles,
        label: "Upgrade to Pro",
      },
    ],
  },
  {
    items: [
      {
        icon: BadgeCheck,
        label: "Account",
      },
      {
        icon: CreditCard,
        label: "Billing",
      },
      {
        icon: Bell,
        label: "Notifications",
      },
    ],
  },
  {
    items: [
      {
        icon: LogOut,
        label: "Log out",
      },
    ],
  },
];

const UserAvatar = memo(function UserAvatar({ user }: { user: User }) {
  return (
    <Avatar className="h-8 w-8 rounded-lg">
      <AvatarImage src={user.avatar} alt={user.name} />
      <AvatarFallback className="rounded-lg">
        {user.name.split(' ').map(n => n[0]).join('')}
      </AvatarFallback>
    </Avatar>
  );
});

const UserInfo = memo(function UserInfo({ user }: { user: User }) {
  return (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-semibold">{user.name}</span>
      <span className="truncate text-xs">{user.email}</span>
    </div>
  );
});

const MenuItemComponent = memo(function MenuItemComponent({ item }: { item: MenuItem }) {
  const IconComponent = item.icon;
  
  return (
    <DropdownMenuItem onClick={item.action}>
      <IconComponent />
      {item.label}
    </DropdownMenuItem>
  );
});

const MenuGroupComponent = memo(function MenuGroupComponent({ group, index }: { group: MenuGroup; index: number }) {
  return (
    <React.Fragment key={index}>
      <DropdownMenuGroup>
        {group.items.map((item, itemIndex) => (
          <MenuItemComponent key={`${index}-${itemIndex}`} item={item} />
        ))}
      </DropdownMenuGroup>
      {index < menuGroups.length - 1 && <DropdownMenuSeparator />}
    </React.Fragment>
  );
});

interface NavUserProps {
  user: User;
}

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <UserAvatar user={user} />
              <UserInfo user={user} />
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <UserAvatar user={user} />
                <UserInfo user={user} />
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {menuGroups.map((group, index) => (
              <MenuGroupComponent key={index} group={group} index={index} />
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
