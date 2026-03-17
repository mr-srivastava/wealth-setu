'use client';

import React, { memo, useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Section, type SectionId } from '@/data/homepage-data';
import { getComponent } from '@/services/component-service';
import { getIconComponent } from '@/services/icon-service';
import { HomepageDataService } from '@/services/data-service';

// Constants
const HOMEPAGE_DATA_QUERY_KEY = ['homepageData'] as const;
const ICON_PREFIX = 'Icon';

interface DynamicHomepageProps {
  className?: string;
}

// Type guard for icon strings
function isIconString(value: unknown): value is string {
  return typeof value === 'string' && value.startsWith(ICON_PREFIX);
}

// Process data to replace icon strings with icon component names
// This keeps data serializable and lets components handle rendering
function processSectionData(data: unknown): Record<string, unknown> {
  if (!data || typeof data !== 'object') return {};

  const processed = { ...(data as Record<string, unknown>) };

  for (const [key, value] of Object.entries(processed)) {
    if (isIconString(value)) {
      // Keep as string - components will resolve it
      // This maintains data structure without creating React elements
      processed[key] = value;
    } else if (Array.isArray(value)) {
      processed[key] = value.map(item =>
        typeof item === 'object' && item !== null
          ? processSectionData(item)
          : item
      );
    } else if (typeof value === 'object' && value !== null) {
      processed[key] = processSectionData(value);
    }
  }

  return processed;
}

// Component to resolve icon strings to React components
const IconResolver = memo(function IconResolver({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) {
  const IconComponent = getIconComponent(iconName);

  if (!IconComponent) {
    console.warn(`Icon not found: ${iconName}`);
    return null;
  }

  return <IconComponent className={className} />;
});

IconResolver.displayName = 'IconResolver';

// Enhanced data processor that handles icon resolution at render time
function enhanceDataWithIcons(
  data: Record<string, unknown>
): Record<string, unknown> {
  const enhanced = { ...data };

  for (const [key, value] of Object.entries(enhanced)) {
    if (isIconString(value)) {
      // Replace icon string with IconResolver component
      enhanced[key] = <IconResolver iconName={value} />;
    } else if (Array.isArray(value)) {
      enhanced[key] = value.map(item => {
        if (typeof item === 'object' && item !== null) {
          return enhanceDataWithIcons(item as Record<string, unknown>);
        }
        return item;
      });
    } else if (typeof value === 'object' && value !== null) {
      enhanced[key] = enhanceDataWithIcons(value as Record<string, unknown>);
    }
  }

  return enhanced;
}

const SectionRenderer = memo(function SectionRenderer({
  section,
}: {
  section: Section;
}) {
  const Component = getComponent(section.type);

  if (!Component) {
    // Better error handling - could use error boundary
    console.error(`Component not found for type: ${section.type}`);
    return (
      <div className="p-4 bg-destructive/10 border border-destructive/20 rounded">
        <p className="text-destructive">
          Component &quot;{section.type}&quot; not found
        </p>
      </div>
    );
  }

  // Process and enhance data with icons
  const processedData = processSectionData(section.data);
  const enhancedData = enhanceDataWithIcons(processedData);

  return <Component {...enhancedData} className={section.className} />;
});

SectionRenderer.displayName = 'SectionRenderer';

const DynamicHomepageContent = memo(function DynamicHomepageContent({
  sections,
  sectionOrder,
}: {
  sections: Section[];
  sectionOrder: SectionId[];
}) {
  // Memoize section map for performance
  const sectionMap = useMemo(
    () => new Map(sections.map(section => [section.id, section])),
    [sections]
  );

  // Validate section order
  const validSections = useMemo(() => {
    return sectionOrder
      .map(sectionId => {
        const section = sectionMap.get(sectionId);
        if (!section) {
          console.warn(`Section not found: ${sectionId}`);
          return null;
        }
        return { sectionId, section };
      })
      .filter(
        (item): item is { sectionId: SectionId; section: Section } =>
          item !== null
      );
  }, [sectionOrder, sectionMap]);

  return (
    <>
      {validSections.map(({ sectionId, section }) => (
        <SectionRenderer key={sectionId} section={section} />
      ))}
    </>
  );
});

DynamicHomepageContent.displayName = 'DynamicHomepageContent';

// Loading component
const LoadingState = memo(function LoadingState({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`flex items-center justify-center min-h-screen ${className}`}
    >
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
});

LoadingState.displayName = 'LoadingState';

// Error component
const ErrorState = memo(function ErrorState({
  error,
  className,
}: {
  error: Error | null;
  className: string;
}) {
  return (
    <div
      className={`flex items-center justify-center min-h-screen ${className}`}
    >
      <div className="text-center">
        <p className="text-destructive">
          Error: {error?.message || 'Failed to load homepage data'}
        </p>
      </div>
    </div>
  );
});

ErrorState.displayName = 'ErrorState';

export default function DynamicHomepage({
  className = '',
}: DynamicHomepageProps) {
  const {
    data: homepageData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: HOMEPAGE_DATA_QUERY_KEY,
    queryFn: () => HomepageDataService.getHomepageData(),
    staleTime: 5 * 60 * 1000, // 5 minutes - data is mostly static
  });

  if (isLoading) {
    return <LoadingState className={className} />;
  }

  if (isError) {
    return (
      <ErrorState
        error={error instanceof Error ? error : new Error('Unknown error')}
        className={className}
      />
    );
  }

  if (!homepageData) {
    return null;
  }

  return (
    <div className={className}>
      <DynamicHomepageContent
        sections={homepageData.sections}
        sectionOrder={homepageData.sectionOrder}
      />
    </div>
  );
}
