"use client";

import { useState, useEffect } from "react";

export default function TopButton() {
  const [buttonFixed, setButtonFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 615) {
        setButtonFixed(true);
      } else {
        setButtonFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#"
      className={`${
        buttonFixed ? "fixed" : "hidden"
      } right-8 bottom-8 py-3 px-2 bg-[#ff0040] border border-white rounded-lg cursor-pointer`}
    >
      <img src="/elements/up_arrow.png" alt="up_arrow" className="w-6" />
    </a>
  );
}
