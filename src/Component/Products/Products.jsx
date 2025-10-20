import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../../Component/Footer/Footer'
import Dial from '../../Component/Dial/Dial'

const allProducts = [
  { id: 1, name: 'Armchair (1-Seater)', category: 'Sofa', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/473374132/WG/NV/PV/34834503/sofas-accent-chairs-cookie-boucle-amor-1-seater-sofa-35-46554415989027-500x500.jpg' },
  { id: 2, name: 'Loveseat (2-Seater)', category: 'Sofa', imageUrl: 'https://craftsmill.in/cdn/shop/files/sofas-accent-chairs-salmon-red-soft-velvet-touch-fabric-swanson-2-seater-sofa-66-46580831879459.jpg?v=1725047637' },
  { id: 3, name: 'Standard Sofa (3-Seater)', category: 'Sofa', imageUrl: 'https://www.ediy.in/sofamaking/images/items/20170707_122803_595f30fb4a777.jpg' },
  { id: 4, name: 'Sectional Sofa', category: 'Sofa', imageUrl: 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/b/p/a1e18853-5f6b-4575-b42b-6c376b416583/assets/6afc322ccc9e483fafbd136b57aaa53a.jpeg?scale=both&width=450&height=450' },
  { id: 5, name: 'Chesterfield Sofa', category: 'Sofa', imageUrl: 'https://www.gulmoharlane.com/uploads/gulmoharlane/products/web-view-253703l-copy-180742l-517303760096812_l.jpg?v=591' },
  { id: 6, name: 'Sofa Bed', category: 'Sofa', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2K6qZJvb7gRj9INxN-MbGagDgMYwg6RKCrVSnx8tnEYjCcC85FWtxKa6zm-r7Rd1InQ&usqp=CAU' },
  { id: 7, name: 'Mid-Century Modern Sofa', category: 'Sofa', imageUrl: 'https://www.eshopregal.in/wp-content/uploads/2022/10/IMG_9981-1.jpg' },
  { id: 8, name: 'Tuxedo Sofa', category: 'Sofa', imageUrl: 'https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/13223262_fpx.tif' },
  { id: 9, name: 'Sectional Sofa', category: 'Sofa', imageUrl: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000011806059-1000011806059-2907_01-2100.jpg' },
  { id: 10, name: 'Minimalist Chair', category: 'Chair', imageUrl: 'https://omacme.in/cdn/shop/files/Luxe506main.jpg?v=1709542780&width=640' },
  { id: 11, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://www.josmostudio.com/cdn/shop/files/1_84.webp?v=1752143351&width=1946' },
  { id: 12, name: 'Dining Chair', category: 'Chair', imageUrl: 'https://www.lunafurn.com/cdn/shop/products/2243S_noBG_side1.jpg?v=1669864785&width=1214' },
  { id: 14, name: 'Armchair', category: 'Chair', imageUrl: 'https://cdn.prod.website-files.com/5f2b10811da7064399ed3a1c/64b13cc63d5c3867f25a4920_1.jpg' },
  { id: 15, name: 'Rocking Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/61B59pIw4sL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg' },
  { id: 16, name: 'Office Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/31WoODYF7ML._SR290,290_.jpg' },
  { id: 17, name: 'Bar Stool', category: 'Chair', imageUrl: 'https://homeplacepdx.com/cdn/shop/files/PortlandfurniturestoreDuvalBarstoolLCDUBACHRGR_1.webp?v=1712258953&width=1200' },
  { id: 18, name: 'Wingback Chair', category: 'Chair', imageUrl: 'https://www.shutterstock.com/image-photo/elegant-beige-tufted-wingback-chair-600nw-2445710639.jpg' },
  { id: 19, name: 'Oak Cupboard', category: 'Cupboard', imageUrl: 'https://www.roselandfurniture.com/cdn/shop/files/RF2595-Surrey-Oak-Small-Cupboard---Angle1.jpg?v=1707827392&width=1200' },
  { id: 20, name: 'Modern Bookshelf', category: 'Cupboard', imageUrl: 'https://cdn.shopify.com/s/files/1/0653/7697/7075/files/3q4kogrz71t0hvrxox8tnk37jyyg_21885697-96e0-4033-9164-5e308c71fdc1.jpg?v=1747400143' },
  { id: 21, name: 'Wardrobe', category: 'Cupboard', imageUrl: 'https://www.zorin.co.in/cdn/shop/products/ZRNWRAlpha2DWalnut_2_1024x.jpg?v=1711694597' },
  { id: 22, name: 'Kitchen Cabinet', category: 'Cupboard', imageUrl: 'https://ebansal.com/cdn/shop/files/kitchencabinate2ndwn_3__1500x1500_9c416149-d8e2-4b74-aa17-975995991017.jpg?v=1682398080' },
  { id: 23, name: 'Sideboard', category: 'Cupboard', imageUrl: 'https://furniturebydesign.nz/cdn/shop/files/PLINTSIDEN_1.jpg?v=1746054807' },
  { id: 24, name: 'Display Cabinet', category: 'Cupboard', imageUrl: 'https://www.antiquemahogany.com.au/assets/alt_2/15216.jpg?20210629101550' },
  { id: 25, name: 'Shoe Cabinet', category: 'Cupboard', imageUrl: 'https://i5.walmartimages.com/seo/Facilehome-Entryway-Shoe-Cabinet-3-Flip-Drawer-Modern-Tipping-Shoe-Rack-Organizer-for-Hallway-Bedroom-Indoor-White_60f4b0cd-7b8d-47b9-a0bc-a8e0fc06fcc2.d112dec9fdb000eaf7a4879c02129290.jpeg' },
  { id: 26, name: 'Filing Cabinet', category: 'Cupboard', imageUrl: 'https://featherlitefurniture.com/wp-content/uploads/2023/01/Untitled-2-35.jpg' },
];

const ProductSearch = () => {
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

  const navigate = useNavigate()

  return (
    <>
    <Navbar/>
    <Dial/>
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
      <button className='btn' onClick={()=>navigate('/contact')}>Enquiry Now</button>
      </div>
      <Footer/>
    </>
  );
};

export default ProductSearch;
