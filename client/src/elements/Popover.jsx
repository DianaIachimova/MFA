import { useState } from "react";

function Popover({
  children,
  content,
  contentWidth,
  chevronPosition = {},
  left,
}) {
  const [visible, setVisible] = useState(false);
  const onMouseLeave = () => setVisible(false);
  const onMouseEnter = () => setVisible(true);

  return (
    <div
      className={`relative${visible ? " z-10" : ""}`}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      {children}

      {visible && (
        <div className="absolute -left-5" style={{ width: contentWidth, left }}>
          <div
            className="w-4 h-4 bg-neutral-900 border-t border-l border-neutral-700 rotate-45 absolute"
            style={{
              top: chevronPosition.top || -8,
              left: chevronPosition.left || 50,
            }}
          />

          <div className="bg-neutral-900 border border-neutral-700  rounded-md w-full">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}

export default Popover;
