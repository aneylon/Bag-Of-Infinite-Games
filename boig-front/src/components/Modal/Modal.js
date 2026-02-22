import { useState } from "react";

const Modal = ({ content, show = true }) => {
  const [isVisible, setIsVisible] = useState(show ? "block" : "none"); // 'none' to hide, 'block' to show
  const toggleModel = () => {
    if (isVisible === "none") {
      setIsVisible("block");
    }
    if (isVisible === "block") {
      setIsVisible("none");
    }
  };
  return (
    <div
      onClick={toggleModel}
      style={{
        display: isVisible,
        position: "fixed",
        zIndex: 1,
        backgroundColor: "black", // Fall back if transparency not supported
        backgroundColor: "rgba(0,0,0,0.5)",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
        // TODO : disallow clicking outside the modal
      }}
    >
      <div
        style={{
          margin: "15% auto",
          padding: "40px",
          width: "80%",
          backgroundColor: "white",
          border: "3px solid black",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default Modal;
