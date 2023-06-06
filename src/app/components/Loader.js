"use client";
import React, { useState, useEffect } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    // Simulating content loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className={`loader-wrapper ${isLoading ? "loading" : "hide-loader"}`}>
      <div className="TruckLoader">
        <img src="images/logo.png" alt="" />
        <div className="TruckLoader-cab"></div>
        <div className="TruckLoader-smoke"></div>
      </div>
    </div>
  );
}
