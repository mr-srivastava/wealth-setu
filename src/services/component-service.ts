import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Services from '@/components/Services/Services';
import WhyUs from '@/components/WhyUs/WhyUs';
import Process from '@/components/Process/Process';
import Testimonials from '@/components/Testimonials/Testimonials';
import Contact from '@/components/Contact/Contact';
import Partners from '@/components/Partners/Partners';

// Component mapping service
export const componentMap: Record<
  string,
  React.ComponentType<Record<string, unknown>>
> = {
  Hero,
  About,
  Services,
  WhyUs,
  Process,
  Testimonials,
  Contact,
  Partners,
};

export function getComponent(
  componentType: string
): React.ComponentType<Record<string, unknown>> | null {
  return componentMap[componentType] || null;
}
