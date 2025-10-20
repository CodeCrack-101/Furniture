import React, { useState, useEffect } from 'react';
import './B.css';
import { useNavigate } from 'react-router-dom';

const allProducts = [
  { id: 1, name: 'Boss Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/10/350488058/SQ/KM/MG/7199438/boss-hb-500x500.png' },
  { id: 2, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://www.bestbuy-officechairs.co.uk/media/img/shop/srcpd/013001.jpg' },
  { id: 3, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://img.ofo.co.uk/media/img/shop/srcpd/122790.jpg' },
  { id: 4, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://www.josmostudio.com/cdn/shop/files/1_84.webp?v=1752143351&width=1946' },
  { id: 5, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/MY/FT/MY-41397653/visitor-chairs-ocz-182-250x250.jpg' },
  { id: 6, name: 'Dining Chair', category: 'Chair', imageUrl: 'https://www.lunafurn.com/cdn/shop/products/2243S_noBG_side1.jpg?v=1669864785&width=1214' },
  { id: 7, name: 'Cafe Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/MY/FT/MY-41397653/visitor-chairs-ocz-182-250x250.jpg' },
  { id: 8, name: 'Bar Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/YR/SI/MY-39072337/the-ergonomico-bar-stool-black-500x500-500x500.jpg' },
  { id: 9, name: 'Waiting Chair', category: 'Chair', imageUrl: 'https://cdn.moglix.com/p/xAbeZSiMiuqYm-xxlarge.jpg' },
  { id: 10, name: 'Sofa', category: 'Sofa', imageUrl: 'https://cdn.shopify.com/s/files/1/0758/7397/6610/files/75001-38-SD-P1-KO_1_large.jpg?v=1715376191' },
  { id: 11, name:'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/51wjnEJgxOL.jpg' },
];

const ProductSearch = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  useEffect(() => {
    const results = allProducts.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm]);

const handleCategoryClick = (productName) => {
  if (productName === 'Boss Chair') navigate(`/category/boss-chair`);
  else if (productName === 'Boss Mesh Chair') navigate(`/category/boss-mesh-chair`);
  else if (productName === 'Boss Mesh Work Chair') navigate(`/category/boss-mesh-work-chair`);
  else if (productName === 'Lounge Chair') navigate(`/category/lounge-chair`);
  else if (productName === 'Visitor Chair') navigate(`/category/visitor-chair`);
  else if (productName === 'Cafe Chair') navigate(`/product`);
  else if (productName === 'Bar Chair') navigate(`/product`);
  else if (productName === 'Waiting Chair') navigate(`/product`);
  else if (productName === 'Sofa') navigate(`/product`);
  else if (productName === 'Steel Cupboard') navigate(`/product`);
};


  return (
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
                <img
                  onClick={() => handleCategoryClick(product.name)}
                  src={product.imageUrl}
                  alt={product.name}
                />
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
      <button className='btn' onClick={()=>navigate('/product')}>View More</button>
    </div>
  );
};

export default ProductSearch;
