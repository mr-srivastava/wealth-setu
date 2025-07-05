'use client';

import { ChevronRight, type LucideIcon } from 'lucide-react';
import React, { memo } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';

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

const NavSubItem = memo(function NavSubItem({ item }: { item: NavItem }) {
  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild>
        <Link href={item.url}>
          <span>{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
});

const NavCollapsibleItem = memo(function NavCollapsibleItem({
  item,
}: {
  item: NavItemsWithChildren;
}) {
  return (
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
            {item.items?.map(subItem => (
              <NavSubItem key={subItem.title} item={subItem} />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
});

const NavSimpleItem = memo(function NavSimpleItem({
  item,
}: {
  item: NavItemsWithChildren;
}) {
  return (
    <SidebarMenuSubItem key={item.title}>
      <SidebarMenuSubButton asChild>
        <Link href={item.url} className="text-green-600">
          {item.icon && <item.icon />}
          <span className="text-sidebar-accent-foreground">{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
});

const NavItemRenderer = memo(function NavItemRenderer({
  item,
}: {
  item: NavItemsWithChildren;
}) {
  if (item.items) {
    return <NavCollapsibleItem item={item} />;
  }
  return <NavSimpleItem item={item} />;
});

export function NavMain({ section, items }: NavMainProps) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{section}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map(item => (
          <NavItemRenderer key={item.title} item={item} />
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
