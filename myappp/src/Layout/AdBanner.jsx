import React, { useState } from "react";

const AdBanner = () => {
  const [display, setDisplay] = useState(true);

  const handleClick = () => {
    setDisplay(false);
  };

  return (
    <div>
      {display && (
        <div className="AdBanner">
          <h6 className="text-center">
            🎉Free delivery on orders above 699!
          </h6>
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-secondary btn-sm"
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default AdBanner;
