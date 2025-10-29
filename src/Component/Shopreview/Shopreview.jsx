import React, { useState } from 'react';
import './ShopReviews.css';

const reviewsData = [
  {
    id: 1,
    text: "Bhai bhot achi service kiya hai wapis new jaise lag rahe hai aur aap ne jo price lagaya hai woh bhi affordable hai",
    author: "Juniad Khan"
  },
  {
    id: 2,
    text: "I called Shree chair service for my office chairs, and they repaired perfectly. The chairs feel brand New now . The technical on time and the price was reasonable too, Highly recommended.",
    author: "Faizan Khan"
  },
  {
    id: 3,
    text: "Excellent service. Genuine part and Vikas explained everything about way of using the chair. Reasonable prize. Quick home service was provided with assurance",
    author: "Afghan khan"
  },
  {
    id: 4,
    text: "Highly recommended for repair service and new installation of office chairs....because. experienced their work of excellence",
    author: "Manihar Sohail"
  }
];

const reviewUrl = "https://g.page/r/CZ-EN8xRtgRkEAE/review";

function ShopReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    const isFirstReview = currentIndex === 0;
    const newIndex = isFirstReview ? reviewsData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextReview = () => {
    const isLastReview = currentIndex === reviewsData.length - 1;
    const newIndex = isLastReview ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <div className="reviews-container">
      <h2>What Our Customers Say</h2>
      
      <div className="review-display-area"> {/* New wrapper for review and arrows */}
        {/* Display only the current review card */}
        <div className="review-card">
          <p className="review-text">"{currentReview.text}"</p>
          <p className="review-author">- {currentReview.author}</p>
        </div>
        
        {/* Arrows are now below the card */}
        <div className="review-navigation">
          <button onClick={prevReview} className="nav-button prev-button">
            &lt; 
          </button>
          <button onClick={nextReview} className="nav-button next-button">
            &gt;
          </button>
        </div>
      </div>
      
      {/* The main button remains at the bottom */}
      <a 
        href={reviewUrl} 
        className="review-button" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Write a Review
      </a>
    </div>
  );
}

export default ShopReviews;