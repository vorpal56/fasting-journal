import React from "react";
import Reference from "gatsby-theme-garden/src/components/reference";

import "gatsby-theme-garden/src/components/references-block.css";

const ReferencesBlock = ({ references }) => {
  const footer = (
    <React.Fragment>
      <p>
        If you think this note resonated or was helpful, be it positive or negative, <a href="https://www.anthonysukadil.com/#contact">send me an email</a>! I would love to hear from you.
      </p>
    </React.Fragment>
  );

  if (!references.length) {
    return <div className="references-block">{footer}</div>;
  }

  return (
    <div className="references-block">
      <h3>Referred in</h3>
      <div>
        {references.map((ref) => (
          <Reference node={ref} key={ref.id} />
        ))}
      </div>
      <hr />
      {footer}
    </div>
  );
};

export default ReferencesBlock;