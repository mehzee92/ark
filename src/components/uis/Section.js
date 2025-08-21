import React from 'react';
import H1 from './H1';
import SectionHeading from './SectionHeading';

const Section = ({children, heading, bgimage, className = "", id = ""}) => {
    const style = bgimage ? { backgroundImage: bgimage } : {};
    
    return (
      <section 
        className={`section-wrapper   ${className}`}
        style={style}
        id={id}
      >
        <div className="w-full space-y-2 lg:space-y-10">
          {heading && (
            <div className="text-center show">
              <SectionHeading text={heading} />
            </div>
          )}
          <div>
            {children}
          </div>
        </div>
      </section>
    );
  };
  
  export default Section; 