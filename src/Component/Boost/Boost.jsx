import React, { useState } from "react";
import "./Boost.css";

function OverlapLayout() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="overlap-container">
        <p>
          <span><strong>Khan Wallpaper</strong></span> offers a stunning range of premium wall wallpapers crafted to elevate any space. Whether you’re decorating your home, office, or showroom, we provide modern, classic, and 3D designs that bring your walls to life. Our wallpapers are made from high-quality materials, ensuring durability, easy maintenance, and long-lasting beauty.
        </p>

        {isExpanded && (
          <p>
            Explore our wide variety of textures, floral patterns, luxury metallics, and minimalistic themes — each designed to match your personality and décor style. At Khan Wallpaper, we believe every wall tells a story — let yours speak elegance and creativity.
          </p>
        )}

        {!isExpanded ? (
          <button onClick={() => setIsExpanded(true)}>View More</button>
        ) : (
          <button onClick={() => setIsExpanded(false)}>View Less</button>
        )}
      </div>
    </>
  );
}

export default OverlapLayout;
