import { useState } from "react";

const Modal = () => {
  const [isVisible, setIsVisible] = useState("block"); // 'none' to hide, 'block' to show
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
        <h1>Modal</h1>
      </div>
    </div>
  );
};

export default Modal;
