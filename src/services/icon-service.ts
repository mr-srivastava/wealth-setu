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

// Type for valid icon names
export type IconName =
  | 'IconUserCheck'
  | 'IconTarget'
  | 'IconShieldCheck'
  | 'IconUsers'
  | 'IconEye'
  | 'IconHeadset'
  | 'IconChartPie4Filled'
  | 'IconShieldHeart'
  | 'IconEmergencyBed'
  | 'IconMapPinFilled'
  | 'IconPhoneFilled'
  | 'IconMailFilled';

// Icon mapping service
export const iconMap: Record<
  IconName,
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
  // Add runtime validation
  if (!iconName.startsWith('Icon')) {
    return null;
  }
  return (
    (iconMap[iconName as IconName] as React.ComponentType<
      Record<string, unknown>
    >) || null
  );
}
