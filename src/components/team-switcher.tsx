"use client";

import * as React from "react";
import { ChevronsUpDown, Plus } from "lucide-react";
import { memo, useCallback } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface Team {
  name: string;
  logo: React.ElementType;
  plan: string;
}

interface TeamSwitcherProps {
  teams: Team[];
  multiTeam?: boolean;
}

const TeamLogo = memo(function TeamLogo({ team }: { team: Team }) {
  return (
    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-green-600 text-sidebar-primary-foreground">
      <team.logo className="size-4" />
    </div>
  );
});

const TeamInfo = memo(function TeamInfo({ team }: { team: Team }) {
  return (
    <div className="grid flex-1 text-left text-sm leading-tight">
      <span className="truncate font-semibold">{team.name}</span>
      <span className="truncate text-xs">{team.plan}</span>
    </div>
  );
});

const TeamMenuItem = memo(function TeamMenuItem({ 
  team, 
  index, 
  isActive, 
  onSelect 
}: { 
  team: Team; 
  index: number; 
  isActive: boolean; 
  onSelect: (team: Team) => void;
}) {
  return (
    <DropdownMenuItem
      onClick={() => onSelect(team)}
      className={`gap-2 p-2 ${isActive ? 'bg-accent' : ''}`}
    >
      <div className="flex size-6 items-center justify-center rounded-sm border">
        <team.logo className="size-4 shrink-0" />
      </div>
      {team.name}
      <DropdownMenuShortcut>⌘{index + 1}</DropdownMenuShortcut>
    </DropdownMenuItem>
  );
});

const AddTeamMenuItem = memo(function AddTeamMenuItem() {
  return (
    <DropdownMenuItem className="gap-2 p-2">
      <div className="flex size-6 items-center justify-center rounded-md border bg-background">
        <Plus className="size-4" />
      </div>
      <div className="font-medium text-muted-foreground">
        Add team
      </div>
    </DropdownMenuItem>
  );
});

const SingleTeamButton = memo(function SingleTeamButton({ team }: { team: Team }) {
  return (
    <SidebarMenuButton
      size="lg"
      className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
    >
      <TeamLogo team={team} />
      <TeamInfo team={team} />
    </SidebarMenuButton>
  );
});

const MultiTeamDropdown = memo(function MultiTeamDropdown({ 
  teams, 
  activeTeam, 
  onTeamSelect 
}: { 
  teams: Team[]; 
  activeTeam: Team; 
  onTeamSelect: (team: Team) => void;
}) {
  const { isMobile } = useSidebar();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <TeamLogo team={activeTeam} />
          <TeamInfo team={activeTeam} />
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
        align="start"
        side={isMobile ? "bottom" : "right"}
        sideOffset={4}
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Teams
        </DropdownMenuLabel>
        {teams.map((team, index) => (
          <TeamMenuItem
            key={team.name}
            team={team}
            index={index}
            isActive={team.name === activeTeam.name}
            onSelect={onTeamSelect}
          />
        ))}
        <DropdownMenuSeparator />
        <AddTeamMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
});

export function TeamSwitcher({ teams, multiTeam = false }: TeamSwitcherProps) {
  const [activeTeam, setActiveTeam] = React.useState(teams[0]);

  const handleTeamSelect = useCallback((team: Team) => {
    setActiveTeam(team);
  }, []);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        {!multiTeam ? (
          <SingleTeamButton team={activeTeam} />
        ) : (
          <MultiTeamDropdown 
            teams={teams} 
            activeTeam={activeTeam} 
            onTeamSelect={handleTeamSelect}
          />
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
