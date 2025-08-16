import React from "react";
import "./OrbitingCircles.css";

export default function OrbitingCircleLayer({
  items,
  radius = 100,
  duration = 20,
  reverse = false,
  iconSize = 40,
  className = "",   // ← اضافه شد
}) {
  const count = items.length;

  return (
    <div
      className="orbiting-wrapper"
      style={{
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      <div
        className="orbiting-path "
        style={{
          width: `${radius * 2}px`,
          height: `${radius * 2}px`,
        }}
      />

      {items.map((Item, index) => {
        const angle = (360 / count) * index;
        const delay = (duration / count) * index;

        return (
          <div
            key={index}
            className={`orbiting-item ${className}`}
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`,
              animationDuration: `${duration}s`,
              animationDirection: reverse ? "reverse" : "normal",
              animationDelay: `-${delay}s`,
            }}
          >
            {/* پاس دادن پراپ size به آیکون */}
            <Item size={iconSize} />
          </div>
        );
      })}
    </div>
  );
}
