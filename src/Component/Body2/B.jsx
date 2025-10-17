import React, { useState, useEffect } from 'react';
import './B.css'
import { useNavigate } from 'react-router-dom';7
// --- Product Data ---
// In a real application, this would likely come from an API
const allProducts = [
  { id: 1, name: 'Minimalist Chair', category: 'Chair', imageUrl: 'https://omacme.in/cdn/shop/files/Luxe506main.jpg?v=1709542780&width=640' },
  { id: 2, name: 'Velvet Sofa', category: 'Sofa', imageUrl: 'https://homesofrajasthan.com/wp-content/uploads/2023/05/sf191.jpeg' },
  { id: 3, name: 'Oak Cupboard', category: 'Cupboard', imageUrl: 'https://www.roselandfurniture.com/cdn/shop/files/RF2595-Surrey-Oak-Small-Cupboard---Angle1.jpg?v=1707827392&width=1200' },
  { id: 4, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://www.josmostudio.com/cdn/shop/files/1_84.webp?v=1752143351&width=1946' },
  { id: 5, name: 'Modern Bookshelf', category: 'Cupboard', imageUrl: 'https://cdn.shopify.com/s/files/1/0653/7697/7075/files/3q4kogrz71t0hvrxox8tnk37jyyg_21885697-96e0-4033-9164-5e308c71fdc1.jpg?v=1747400143' },
  { id: 7, name: 'Dining Chair', category: 'Chair', imageUrl: 'https://www.lunafurn.com/cdn/shop/products/2243S_noBG_side1.jpg?v=1669864785&width=1214' },
  { id: 8, name: 'Sectional Sofa', category: 'Sofa', imageUrl: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000011806059-1000011806059-2907_01-2100.jpg' },
  { id: 9, name: 'Wardrobe', category: 'Cupboard', imageUrl: 'https://www.zorin.co.in/cdn/shop/products/ZRNWRAlpha2DWalnut_2_1024x.jpg?v=1711694597' },
];

const ProductSearch = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    // Filter logic
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

  return (
    <>
      <div className="product-search-container">
        <div className="search-header">
          <h1>Find Your Perfect Furniture</h1>
          <p>Search for chairs, sofas, cupboards, and more.</p>
          <input
            type="text"
            placeholder="e.g., 'chair' or 'sofa'"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="product-grid">
            {filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <img src={product.imageUrl} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No products found for "{searchTerm}". Try a different search!</p>
          </div>
        )}
        <button className='btn' onClick={()=>navigate('/Product')}>View More</button>
      </div>
    </>
  );
};

export default ProductSearch;
