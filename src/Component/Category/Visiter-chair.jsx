import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'NE66', category: 'Visitor Chair', imageUrl: 'https://media.makrocambodiaclick.com/PRODUCT_1658747016501.jpeg' },
  { id: 2, name: 'NE67', category: 'Visitor Chair', imageUrl: 'https://www.chennaichairs.com/images/thumbs/0006760_okazaki-visitor-chair_550.webp' },
  { id: 3, name: 'NE73', category: 'Visitor Chair', imageUrl: 'https://noboss.in/cdn/shop/products/10057323_1_800x.jpg?v=1606621766' },
  { id: 4, name: 'NE75', category: 'Visitor Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/7/329480674/CC/XZ/DH/79276195/1-500x500.jpg'},
  { id: 5, name: 'NE78', category: 'Visitor Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380678692/PY/XW/VN/1186061/office-visitor-chair-500x500.jpg' },
  { id: 6, name: 'NE79', category: 'Visitor Chair', imageUrl: 'https://image.made-in-china.com/391f0j00YMUiormSZLRF/Office-Furniture-Cheap-Stacking-Visitor-Chair-with-Chrome-Frame.webp' },
  { id: 7, name: 'NE80', category: 'Visitor Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34Rkpjsu1yJwS0F_Id-6bAZf_RZBuNXldGKMwsfHtGY-2QKXUpMID4balx7MtN7enR6A&usqp=CAU' },
  { id: 8, name: 'NE81', category: 'Visitor Chair', imageUrl: 'https://m.media-amazon.com/images/I/41VGUPHpY4L.jpg' },
];

const Visitor = () => {
  const whatsappNumber = "919594718112";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Category: Visitor Chair</h1>
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

export default Visitor;
