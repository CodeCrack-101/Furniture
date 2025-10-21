import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'NE50', category: 'Boss Mesh Work Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/1/482185612/AZ/GP/YY/136623766/medium-back-office-chair-500x500.jpg' },
  { id: 2, name: 'NE51', category: 'Boss Mesh Work Chair', imageUrl: 'https://featherlitestore.com/wp-content/uploads/2021/12/Chair_DSC7538-1-300x300.jpg?crop=1' },
  { id: 3, name: 'NE53', category: 'Boss Mesh Work Chair', imageUrl: 'https://www.staples-3p.com/s7/is/image/Staples/6DB0997A-4E4A-4204-B992A227F4B3DB4B_sc7?wid=512&hei=512' },
  { id: 4, name: 'NE59', category: 'Boss Mesh Work Chair', imageUrl: 'https://5.imimg.com/data5/EQ/UB/UM/SELLER-2090394/queen-office-chair-500x500.jpg' },
  { id: 5, name: 'NE60', category: 'Boss Mesh Work Chair', imageUrl: 'https://m.media-amazon.com/images/I/71z3MDyBrLL.jpg' },
  { id: 6, name: 'NE62', category: 'Boss Mesh Work Chair', imageUrl: 'https://m.media-amazon.com/images/I/61DNXiTbWcS._UF1000,1000_QL80_.jpg' },
  { id: 7, name: 'NE63', category: 'Boss Mesh Work Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/507168882/YH/NM/XO/1801769/revolving-office-computer-chair-500x500.jpg' },
  { id: 8, name: 'NE65', category: 'Boss Mesh Work Chair', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/617qSmawpFL._AC_UL495_SR435,495_.jpg' },
];

const BosssWork = () => {   // 👈 Changed name
    const whatsappNumber = "919594718112";
  
    return (
      <>
        <Navbar />
        <div className="category-container">
          <h1 className="category-title">Category: Boss Mesh Work Chair</h1>
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
  
  export default BosssWork;
  