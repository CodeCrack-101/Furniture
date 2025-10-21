import React from "react";
import Footer from '../../Component/Footer/Footer';
import Navbar from '../../Component/Navbar/Navbar';
import './Boos-chair.css';

const allProducts = [
  { id: 1, name: 'NE1', category: 'Lounge Chair', imageUrl: 'https://www.dtalemodern.com/media/cachei/0x0/catalog/product/m/o/moris_miura_7_2855_1754566186.jpg' },
  { id: 2, name: 'NE2', category: 'Lounge Chair', imageUrl: 'https://dagmar-london.com/cdn/shop/files/OleWanscherFD1190134_r1_layered_crop_2000x2500pxcopy.jpg?v=1745966913' },
  { id: 3, name: 'NE3', category: 'Lounge Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrCnPXL1Eki1FpbbfAlBGVkQiUpWQL6B4we7r4XIJayzb80k8ZyOMPNg8EoWSioHdcTg&usqp=CAU' },
  { id: 4, name: 'NE4', category: 'Lounge Chair', imageUrl: 'https://www.diiiz.com/59359-home_default/Michelin-armchair.jpg' },
  { id: 5, name: 'NE5', category: 'Lounge Chair', imageUrl: 'https://images.hermanmiller.group/m/3436f79ab96b9121/W-DWR_2188_10001594_cloud_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill' },
  { id: 6, name: 'NE6', category: 'Lounge Chair', imageUrl: 'https://ak1.ostkcdn.com/images/products/is/images/direct/eff07df1e7705d2d9670b7ce500f83318d0a4d19/Modern-Swivel-Accent-Chair-Lounge-Chair-with-Metal-Base-Frame%2CBrown%2BWhite.jpg?impolicy=medium' },
  { id: 7, name: 'NE7', category: 'Lounge Chair', imageUrl: 'https://furnicher.com/media/catalog/product/cache/ff6375c02efcd14391b98ee90859c6e8/c/6/c645badb-6a03-4ac3-945f-454fdd423530_1.jpg' },
  { id: 8, name: 'NE8', category: 'Lounge Chair', imageUrl: 'https://res.litfad.net/site/img/item/2023/09/27/9708942/600x600.jpg' },
];

const longe = () => {
  const whatsappNumber = "919594718112";

  return (
    <>
      <Navbar />
      <div className="category-container">
        <h1 className="category-title">Category: Lounge Chair</h1>
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

export default longe;
