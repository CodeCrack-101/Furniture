import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 2, name: 'NE2',category: 'Boss Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMfV5PhqmJZZ42YgLjc_3rFgzr9GtITwmIsG5tSpD_Lz57cR8SYhk85Xz8bW7yjQk3Qg&usqp=CAU'},
  { id: 1, name: 'NE1',  category: 'Boss Chair', imageUrl: 'https://cellbell.in/cdn/shop/files/IMG_4779.jpg?v=1757584171&width=1946'},
  { id: 3, name: 'NE3', category: 'Boss Chair', imageUrl: 'https://m.media-amazon.com/images/I/614D+qMFwUL.jpg'},
  { id: 4, name: 'NE4', category: 'Boss Chair', imageUrl: 'https://smartinteriorsystem.com/wp-content/uploads/2021/08/KNEE-TILT1.jpg'},
  { id: 5, name: 'NE5',category: 'Boss Chair', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/61e-Cv8e2PL._AC_UL375_SR375,375_.jpg'},
  { id: 6, name: 'NE6', category: 'Boss Chair', imageUrl: 'https://www.highmoon.ae/shop/wp-content/uploads/2022/04/1R5A9599-600x759.jpg'},
  { id: 7, name: 'NE7', category: 'Boss Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/513785994/IX/KB/RG/4156198/203-presidential-chair-500x500.png'},
  { id: 7, name: 'NE9',category: 'Boss Chair', imageUrl: 'https://fohfurniture.com/wp-content/uploads/2017/04/FOH-1239-1-2.jpg'},
];


const Boss = () => {
  const whatsappNumber = "919594718112";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Category: Boss Chair</h1>
        <div className="category-grid">
          {allProducts.map(product => (
            <div key={product.id} className="category-card">
              <div className="category-image-wrapper2">
                <img src={product.imageUrl} alt={product.name} className="category-image"/>
              </div>
              <div className="category-info">
                <h3 className="category-name">{product.name}</h3>
                <h3 className="category-price">{product.Price}</h3>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  Enquiry
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Boss;


