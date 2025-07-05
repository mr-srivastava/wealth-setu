import {
  IconUserCheck,
  IconTarget,
  IconShieldCheck,
  IconUsers,
  IconEye,
  IconHeadset,
  IconChartPie4Filled,
  IconShieldHeart,
  IconEmergencyBed,
  IconMapPinFilled,
  IconPhoneFilled,
  IconMailFilled,
} from '@tabler/icons-react';

// Icon mapping service
export const iconMap: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  IconUserCheck,
  IconTarget,
  IconShieldCheck,
  IconUsers,
  IconEye,
  IconHeadset,
  IconChartPie4Filled,
  IconShieldHeart,
  IconEmergencyBed,
  IconMapPinFilled,
  IconPhoneFilled,
  IconMailFilled,
};

export function getIconComponent(
  iconName: string
): React.ComponentType<Record<string, unknown>> | null {
  return iconMap[iconName] || null;
}
