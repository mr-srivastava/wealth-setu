'use client';

import React, { useEffect, useState, memo } from 'react';
import { HomepageData, Section } from '@/data/homepage-data';
import { getComponent } from '@/services/component-service';
import { getIconComponent } from '@/services/icon-service';
import { HomepageDataService } from '@/services/data-service';

interface DynamicHomepageProps {
  className?: string;
}

const SectionRenderer = memo(function SectionRenderer({
  section,
}: {
  section: Section;
}) {
  const Component = getComponent(section.type);

  if (!Component) {
    console.warn(`Component not found for type: ${section.type}`);
    return null;
  }

  // Process data to replace icon strings with actual components
  const processedData = processSectionData(section.data);

  return <Component {...processedData} className={section.className} />;
});

function processSectionData(data: unknown): Record<string, unknown> {
  if (!data || typeof data !== 'object') return {};

  const processed = Object.assign({}, data as Record<string, unknown>);

  // Process objects
  for (const [key, value] of Object.entries(processed)) {
    if (typeof value === 'string' && value.startsWith('Icon')) {
      // Replace icon string with component
      const IconComponent = getIconComponent(value);
      if (IconComponent) {
        processed[key] = <IconComponent />;
      }
    } else if (Array.isArray(value)) {
      // Process arrays by mapping over their items
      processed[key] = value.map(item =>
        typeof item === 'object' && item !== null
          ? processSectionData(item)
          : item
      );
    } else if (typeof value === 'object' && value !== null) {
      // Recursively process nested objects
      processed[key] = processSectionData(value);
    }
  }

  return processed;
}

const DynamicHomepageContent = memo(function DynamicHomepageContent({
  sections,
  sectionOrder,
}: {
  sections: Section[];
  sectionOrder: string[];
}) {
  // Create a map for quick section lookup
  const sectionMap = new Map(sections.map(section => [section.id, section]));

  return (
    <>
      {sectionOrder.map(sectionId => {
        const section = sectionMap.get(sectionId);
        if (!section) {
          console.warn(`Section not found: ${sectionId}`);
          return null;
        }
        return <SectionRenderer key={sectionId} section={section} />;
      })}
    </>
  );
});

export default function DynamicHomepage({
  className = '',
}: DynamicHomepageProps) {
  const [homepageData, setHomepageData] = useState<HomepageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadHomepageData() {
      try {
        setLoading(true);
        const data = await HomepageDataService.getHomepageData();
        setHomepageData(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to load homepage data'
        );
      } finally {
        setLoading(false);
      }
    }

    loadHomepageData();
  }, []);

  if (loading) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${className}`}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={`flex items-center justify-center min-h-screen ${className}`}
      >
        <div className="text-center">
          <p className="text-red-600">Error: {error}</p>
        </div>
      </div>
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
