import React from "react";
import { useEffect, useState } from "react";
import "../styles/TextAnimation.css";

export default function TextAnimation() {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <>
      <div className="container">
        <h1 className={`text-right ${showText ? "show" : ""}`}>Wah</h1>
        <h1 className={`text-left ${showText ? "show" : ""}`}>Hmu Hmu</h1>
      </div>
    </>
  );
}
