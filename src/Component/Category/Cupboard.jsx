import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'NE1', category: 'Steel Cupboard', imageUrl: 'https://s.alicdn.com/@sc04/kf/Haae1a17753ae46e2a166e21a3e05fe9bx/Service-Minimalist-Style-Clothing-Wardrobe-Storage-Home-Furniture-Large-Corner-Swing-Wardrobe-One-Stop-Custom-Made-Closet-White.jpg' },
  { id: 2, name: 'NE2', category: 'Steel Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/61sf9HX7ZLL.jpg' },
  { id: 3, name: 'NE3', category: 'Steel Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/81aSx18-zEL._AC_UF894,1000_QL80_.jpg' },
  { id: 4, name: 'NE4', category: 'Steel Cupboard', imageUrl: 'https://reliablestorage.co.in/inner_product_img/9-stainless-steel/e-ss-cupboard/ss-cupboard-2.jpg' },
  { id: 5, name: 'NE5', category: 'Steel Cupboard', imageUrl: 'https://image.made-in-china.com/202f0j00jqfobSQcMOky/Bedroom-Steel-or-Iron-Almirah-Cupboard-Designs-Steel-Wardrobe-Cupboard-for-Clothes.webp' },
  { id: 6, name: 'NE6', category: 'Steel Cupboard', imageUrl: 'https://image.made-in-china.com/202f0j00acYbmKpWkOkw/Safe-Steel-Locker-Wardrobe-with-Mirror-Singapore-Saudi-Arabia.webp' },
  { id: 7, name: 'NE7', category: 'Steel Cupboard', imageUrl: 'https://5.imimg.com/data5/OX/TJ/OB/SELLER-2282829/large-metal-cupboard-500x500.jpg' },
  { id: 8, name: 'NE8', category: 'Steel Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/51LjfLHB55L.jpg' },
];

const Bosss = () => {
  const whatsappNumber = "919594718112";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Category: Steel Cupboard</h1>
        <div className="category-grid">
          {allProducts.map(product => (
            <div key={product.id} className="category-card">
              <div className="category-image-wrapper">
                <img src={product.imageUrl} alt={product.name} className="category-image"/>
              </div>
              <div className="category-info">
                <h3 className="category-name">{product.name}</h3>
                <h3 className="category-pricee">{product.Price}</h3>
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

export default Bosss;
