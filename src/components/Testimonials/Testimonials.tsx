import {
  IconArrowNarrowRight,
  IconQuoteFilled,
  IconStarFilled,
  IconUserFilled,
} from '@tabler/icons-react';
import React, { memo } from 'react';

interface Testimonial {
  name: string;
  review: string;
  profession: string;
  clientAge: number;
}

interface TestimonialsProps {
  className?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Rajesh Sharma',
    review:
      "WealthSetu has transformed my approach to financial planning. Their expert guidance helped me create a diversified portfolio that's perfectly aligned with my retirement goals.",
    profession: 'IT Professional',
    clientAge: 5,
  },
  {
    name: 'Priya Patel',
    review:
      'The personalized attention and comprehensive insurance solutions provided by WealthSetu have given my family complete peace of mind. They truly care about their clients.',
    profession: 'Business Owner',
    clientAge: 3,
  },
  {
    name: 'Amit Kumar',
    review:
      'As a first-time investor, WealthSetu made the entire process simple and transparent. Their regular portfolio reviews and updates keep me confident about my investments.',
    profession: 'Healthcare Professional',
    clientAge: 2,
  },
];

const TestimonialCard = memo(function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="text-primary mb-6">
        <IconQuoteFilled
          size={'2.25rem'}
          className="opacity-20 transform -scale-x-100"
        />
      </div>
      <blockquote className="text-muted-foreground mb-6">
        &quot;{testimonial.review}&quot;
      </blockquote>
      <div className="border-t border-border pt-4">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center">
            <IconUserFilled className="text-primary" />
          </div>
          <div className="ml-4">
            <div className="font-semibold text-foreground">
              {testimonial.name}
            </div>
            <div className="text-sm text-muted-foreground">
              {testimonial.profession} • Client for {testimonial.clientAge}{' '}
              years
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

const TestimonialsHeader = memo(function TestimonialsHeader() {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-foreground mb-4">
        Client Success Stories
      </h2>
      <div className="h-1 w-20 bg-primary rounded mx-auto"></div>
      <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        Hear from our clients about their journey to financial success with
        WealthSetu.
      </p>
    </div>
  );
});

const TestimonialsGrid = memo(function TestimonialsGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {TESTIMONIALS.map(testimonial => (
        <TestimonialCard key={testimonial.name} testimonial={testimonial} />
      ))}
    </div>
  );
});

const RatingDisplay = memo(function RatingDisplay() {
  return (
    <div className="flex items-center justify-center space-x-2 mb-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <IconStarFilled key={index} className="text-yellow-400" />
      ))}
      <span className="ml-2 text-muted-foreground font-semibold">
        4.9/5 Average Rating
      </span>
    </div>
  );
});

const TestimonialsCTA = memo(function TestimonialsCTA() {
  return (
    <div className="mt-16 text-center">
      <RatingDisplay />
      <a
        href="#contact"
        className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors duration-300"
      >
        Start Your Success Story
        <IconArrowNarrowRight className="ml-2" />
      </a>
    </div>
  );
});

export default function Testimonials({ className = '' }: TestimonialsProps) {
  return (
    <section id="testimonials" className={`py-20 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader />
        <TestimonialsGrid />
        <TestimonialsCTA />
      </div>
    </section>
  );
}
