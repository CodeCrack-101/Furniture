import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'NE26', category: 'Boss Mesh Chair', imageUrl: 'https://lofthome.com/cdn/shop/files/modern-mesh-ergonomic-office-chair-black-frame-ergohuman-e2modernloft-home-sg-269538.jpg' },
  { id: 2, name: 'NE29', category: 'Boss Mesh Chair', imageUrl: 'https://apollo.olx.in/v1/files/fkchfn8l3a51-IN/image' },
  { id: 3, name: 'NE34', category: 'Boss Mesh Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/1/484136975/MY/XK/OK/140823752/ergonomic-office-chairs.jpeg' },
  { id: 4, name: 'NE41', category: 'Boss Mesh Chair', imageUrl: 'https://image.made-in-china.com/365f3j00LmfPBIihfdRN/Popular-Navy-Blue-Revolving-24-Hours-Mesh-MID-Back-Office-Chair-in-Office-Workspace.webp' },
  { id: 5, name: 'NE42', category: 'Boss Mesh Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZY/ZS/QT/94333525/ce2b7072-69ac-44b9-8b7e-790b6199e672-500x500.jpg' },
  { id: 6, name: 'NE45', category: 'Boss Mesh Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/331499445/UE/FX/AW/73369659/88-1-500x500.jpg' },
  { id: 7, name: 'NE46', category: 'Boss Mesh Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjideuWETUtxV0ysk4qzBSYaRiSmYxX4Rxw9oDmht3JTL1RUshYaDswXqJLepzHHJoclQ&usqp=CAU' },
  { id: 8, name: 'NE49', category: 'Boss Mesh Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/UT/AR/UX/2998669/mow-009-1-500x500.jpg' },
];

const Bosss = () => {
  const whatsappNumber = "919594718112";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Category: Boss Mesh Chair</h1>
        <div className="category-grid">
          {allProducts.map(product => (
            <div key={product.id} className="category-card">
              <div className="category-image-wrapper2">
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
