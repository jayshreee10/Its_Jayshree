import React, { useState } from "react";

const LinkPreview = ({ text, previewContent, linkUrl }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <div className="link-preview-container">
      <strong
        className="preview-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {text}
      </strong>
      {isHovered && (
        <div className="preview-modal">
          <iframe
            src={previewContent}
            title="Website Preview"
            className="preview-iframe"
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default LinkPreview;
