import React from 'react';
import Section from '../uis/Section';
import H1 from '../uis/H1';
import P from '../uis/P';

// Example usage of the Section component
export default function SectionExample() {
  return (
    <div>
      {/* Basic Section with heading */}
      <Section heading="Basic Section">
        <div>
          <P text="This is a basic section with just a heading and content." />
        </div>
      </Section>

      {/* Section with custom background image */}
      <Section 
        heading="Section with Background" 
        bgimage="linear-gradient(180deg, #000000AA, #000000AA), url(/images/background-img.jpg)"
      >
        <div>
          <P text="This section has a custom background image." />
        </div>
      </Section>

      {/* Section with custom className and id */}
      <Section 
        heading="Custom Styled Section" 
        className="px-4 flex flex-col items-center"
        id="custom-section"
      >
        <div>
          <P text="This section has custom classes and an ID for navigation." />
        </div>
      </Section>

      {/* Section without heading */}
      <Section className="bg-gray-800">
        <div>
          <H1 text="Section without heading prop" />
          <P text="This section doesn't use the heading prop but has its own heading." />
        </div>
      </Section>
    </div>
  );
} 