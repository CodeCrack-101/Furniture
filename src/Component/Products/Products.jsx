import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Products.css'
import Navbar from '../Navbar/Navbar';
import Footer from '../../Component/Footer/Footer'
import Dial from '../../Component/Dial/Dial'

const allProducts = [
  { id: 1, name: 'Boss Chair',category: 'Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMfV5PhqmJZZ42YgLjc_3rFgzr9GtITwmIsG5tSpD_Lz57cR8SYhk85Xz8bW7yjQk3Qg&usqp=CAU'},
  { id: 2, name: 'Boss Chair',  category: 'Chair', imageUrl: 'https://cellbell.in/cdn/shop/files/IMG_4779.jpg?v=1757584171&width=1946'},
  { id: 3, name: 'Boss Chair', category: ' Chair', imageUrl: 'https://m.media-amazon.com/images/I/614D+qMFwUL.jpg'},
  { id: 4, name: 'Boss Chair', category: 'Chair', imageUrl: 'https://smartinteriorsystem.com/wp-content/uploads/2021/08/KNEE-TILT1.jpg'},
  { id: 5, name: 'Boss Chair',category: 'Chair', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/61e-Cv8e2PL._AC_UL375_SR375,375_.jpg'},
  { id: 6, name: 'Boss Chair', category: 'Chair', imageUrl: 'https://www.highmoon.ae/shop/wp-content/uploads/2022/04/1R5A9599-600x759.jpg'},
  { id: 7, name: 'Boss Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/5/513785994/IX/KB/RG/4156198/203-presidential-chair-500x500.png'},
  { id: 8, name: 'Boss Chair',category: 'Chair', imageUrl: 'https://fohfurniture.com/wp-content/uploads/2017/04/FOH-1239-1-2.jpg'},
  { id: 9, name: 'Armchair (1-Seater)', category: 'Sofa', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/12/473374132/WG/NV/PV/34834503/sofas-accent-chairs-cookie-boucle-amor-1-seater-sofa-35-46554415989027-500x500.jpg' },
  { id: 10, name: 'Loveseat (2-Seater)', category: 'Sofa', imageUrl: 'https://craftsmill.in/cdn/shop/files/sofas-accent-chairs-salmon-red-soft-velvet-touch-fabric-swanson-2-seater-sofa-66-46580831879459.jpg?v=1725047637' },
  { id: 11, name: 'Standard Sofa (3-Seater)', category: 'Sofa', imageUrl: 'https://www.ediy.in/sofamaking/images/items/20170707_122803_595f30fb4a777.jpg' },
  { id: 12, name: 'Sectional Sofa', category: 'Sofa', imageUrl: 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/b/p/a1e18853-5f6b-4575-b42b-6c376b416583/assets/6afc322ccc9e483fafbd136b57aaa53a.jpeg?scale=both&width=450&height=450' },
  { id: 13, name: 'Chesterfield Sofa', category: 'Sofa', imageUrl: 'https://www.gulmoharlane.com/uploads/gulmoharlane/products/web-view-253703l-copy-180742l-517303760096812_l.jpg?v=591' },
  { id: 14, name: 'Sofa Bed', category: 'Sofa', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL2K6qZJvb7gRj9INxN-MbGagDgMYwg6RKCrVSnx8tnEYjCcC85FWtxKa6zm-r7Rd1InQ&usqp=CAU' },
  { id: 15, name: 'Mid-Century Modern Sofa', category: 'Sofa', imageUrl: 'https://www.eshopregal.in/wp-content/uploads/2022/10/IMG_9981-1.jpg' },
  { id: 16, name: 'Tuxedo Sofa', category: 'Sofa', imageUrl: 'https://images.bloomingdalesassets.com/is/image/BLM/products/2/optimized/13223262_fpx.tif' },
  { id: 17, name: 'Sectional Sofa', category: 'Sofa', imageUrl: 'https://media-uk.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/homecentre/1000011806059-1000011806059-2907_01-2100.jpg' },
  { id: 18, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://lofthome.com/cdn/shop/files/modern-mesh-ergonomic-office-chair-black-frame-ergohuman-e2modernloft-home-sg-269538.jpg' },
  { id: 19, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://apollo.olx.in/v1/files/fkchfn8l3a51-IN/image' },
  { id: 20, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/1/484136975/MY/XK/OK/140823752/ergonomic-office-chairs.jpeg' },
  { id: 21, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://image.made-in-china.com/365f3j00LmfPBIihfdRN/Popular-Navy-Blue-Revolving-24-Hours-Mesh-MID-Back-Office-Chair-in-Office-Workspace.webp' },
  { id: 22, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2022/1/ZY/ZS/QT/94333525/ce2b7072-69ac-44b9-8b7e-790b6199e672-500x500.jpg' },
  { id: 23, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/8/331499445/UE/FX/AW/73369659/88-1-500x500.jpg' },
  { id: 24, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjideuWETUtxV0ysk4qzBSYaRiSmYxX4Rxw9oDmht3JTL1RUshYaDswXqJLepzHHJoclQ&usqp=CAU' },
  { id: 25, name: 'Boss Mesh Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/UT/AR/UX/2998669/mow-009-1-500x500.jpg' },
  { id: 26, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/1/482185612/AZ/GP/YY/136623766/medium-back-office-chair-500x500.jpg' },
  { id: 27, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://featherlitestore.com/wp-content/uploads/2021/12/Chair_DSC7538-1-300x300.jpg?crop=1' },
  { id: 28, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://www.staples-3p.com/s7/is/image/Staples/6DB0997A-4E4A-4204-B992A227F4B3DB4B_sc7?wid=512&hei=512' },
  { id: 29, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/EQ/UB/UM/SELLER-2090394/queen-office-chair-500x500.jpg' },
  { id: 30, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/71z3MDyBrLL.jpg' },
  { id: 31, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/61DNXiTbWcS._UF1000,1000_QL80_.jpg' },
  { id: 32, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2025/4/507168882/YH/NM/XO/1801769/revolving-office-computer-chair-500x500.jpg' },
  { id: 33, name: 'Boss Mesh Work Chair', category: 'Chair', imageUrl: 'https://images-eu.ssl-images-amazon.com/images/I/617qSmawpFL._AC_UL495_SR435,495_.jpg' },
  { id: 34, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://s.alicdn.com/@sc04/kf/Haae1a17753ae46e2a166e21a3e05fe9bx/Service-Minimalist-Style-Clothing-Wardrobe-Storage-Home-Furniture-Large-Corner-Swing-Wardrobe-One-Stop-Custom-Made-Closet-White.jpg' },
  { id: 35, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/61sf9HX7ZLL.jpg' },
  { id: 36, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/81aSx18-zEL._AC_UF894,1000_QL80_.jpg' },
  { id: 37, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://reliablestorage.co.in/inner_product_img/9-stainless-steel/e-ss-cupboard/ss-cupboard-2.jpg' },
  { id: 38, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://image.made-in-china.com/202f0j00jqfobSQcMOky/Bedroom-Steel-or-Iron-Almirah-Cupboard-Designs-Steel-Wardrobe-Cupboard-for-Clothes.webp' },
  { id: 39, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://image.made-in-china.com/202f0j00acYbmKpWkOkw/Safe-Steel-Locker-Wardrobe-with-Mirror-Singapore-Saudi-Arabia.webp' },
  { id: 40, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://5.imimg.com/data5/OX/TJ/OB/SELLER-2282829/large-metal-cupboard-500x500.jpg' },
  { id: 41, name: 'Steel Cupboard', category: 'Cupboard', imageUrl: 'https://m.media-amazon.com/images/I/51LjfLHB55L.jpg' },
  { id: 42, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://www.dtalemodern.com/media/cachei/0x0/catalog/product/m/o/moris_miura_7_2855_1754566186.jpg' },
  { id: 43, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://dagmar-london.com/cdn/shop/files/OleWanscherFD1190134_r1_layered_crop_2000x2500pxcopy.jpg?v=1745966913' },
  { id: 44, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNrCnPXL1Eki1FpbbfAlBGVkQiUpWQL6B4we7r4XIJayzb80k8ZyOMPNg8EoWSioHdcTg&usqp=CAU' },
  { id: 45, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://www.diiiz.com/59359-home_default/Michelin-armchair.jpg' },
  { id: 46, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://images.hermanmiller.group/m/3436f79ab96b9121/W-DWR_2188_10001594_cloud_f.png?trim=auto&trim-sd=2&blend-mode=darken&blend=f8f8f8&bg=f8f8f8&auto=format&w=1200&q=68&h=1200&pad=120&fit=fill' },
  { id: 47, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://ak1.ostkcdn.com/images/products/is/images/direct/eff07df1e7705d2d9670b7ce500f83318d0a4d19/Modern-Swivel-Accent-Chair-Lounge-Chair-with-Metal-Base-Frame%2CBrown%2BWhite.jpg?impolicy=medium' },
  { id: 48, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://furnicher.com/media/catalog/product/cache/ff6375c02efcd14391b98ee90859c6e8/c/6/c645badb-6a03-4ac3-945f-454fdd423530_1.jpg' },
  { id: 49, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://res.litfad.net/site/img/item/2023/09/27/9708942/600x600.jpg' },
  { id: 50, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://media.makrocambodiaclick.com/PRODUCT_1658747016501.jpeg' },
  { id: 51, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://www.chennaichairs.com/images/thumbs/0006760_okazaki-visitor-chair_550.webp' },
  { id: 52, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://noboss.in/cdn/shop/products/10057323_1_800x.jpg?v=1606621766' },
  { id: 53, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2023/7/329480674/CC/XZ/DH/79276195/1-500x500.jpg'},
  { id: 54, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://5.imimg.com/data5/SELLER/Default/2024/1/380678692/PY/XW/VN/1186061/office-visitor-chair-500x500.jpg' },
  { id: 55, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://image.made-in-china.com/391f0j00YMUiormSZLRF/Office-Furniture-Cheap-Stacking-Visitor-Chair-with-Chrome-Frame.webp' },
  { id: 56, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT34Rkpjsu1yJwS0F_Id-6bAZf_RZBuNXldGKMwsfHtGY-2QKXUpMID4balx7MtN7enR6A&usqp=CAU' },
  { id: 57, name: 'Visitor Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/41VGUPHpY4L.jpg' },
  { id: 58, name: 'Minimalist Chair', category: 'Chair', imageUrl: 'https://omacme.in/cdn/shop/files/Luxe506main.jpg?v=1709542780&width=640' },
  { id: 59, name: 'Lounge Chair', category: 'Chair', imageUrl: 'https://www.josmostudio.com/cdn/shop/files/1_84.webp?v=1752143351&width=1946' },
  { id: 60, name: 'Dining Chair', category: 'Chair', imageUrl: 'https://media.furniturerow.com/image/list/bl_optimize/t_sku_image2/w_1024/f_jpg/CS-HCHTCY.json' },
  { id: 61, name: 'Armchair', category: 'Chair', imageUrl: 'https://cdn.prod.website-files.com/5f2b10811da7064399ed3a1c/64b13cc63d5c3867f25a4920_1.jpg' },
  { id: 62, name: 'Rocking Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/61B59pIw4sL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg' },
  { id: 63, name: 'Office Chair', category: 'Chair', imageUrl: 'https://m.media-amazon.com/images/I/31WoODYF7ML._SR290,290_.jpg' },
  { id: 64, name: 'Bar Stool', category: 'Chair', imageUrl: 'https://sinhupfatt.com/wp-content/uploads/2024/01/BS-717-1.jpg' },
  { id: 65, name: 'Wingback Chair', category: 'Chair', imageUrl: 'https://www.shutterstock.com/image-photo/elegant-beige-tufted-wingback-chair-600nw-2445710639.jpg' },
  { id: 66, name: 'Oak Cupboard', category: 'Cupboard', imageUrl: 'https://www.roselandfurniture.com/cdn/shop/files/RF2595-Surrey-Oak-Small-Cupboard---Angle1.jpg?v=1707827392&width=1200' },
  { id: 67, name: 'Modern Bookshelf', category: 'Cupboard', imageUrl: 'https://cdn.shopify.com/s/files/1/0653/7697/7075/files/3q4kogrz71t0hvrxox8tnk37jyyg_21885697-96e0-4033-9164-5e308c71fdc1.jpg?v=1747400143' },
  { id: 68, name: 'Wardrobe', category: 'Cupboard', imageUrl: 'https://www.zorin.co.in/cdn/shop/products/ZRNWRAlpha2DWalnut_2_1024x.jpg?v=1711694597' },
  { id: 69, name: 'Kitchen Cabinet', category: 'Cupboard', imageUrl: 'https://ebansal.com/cdn/shop/files/kitchencabinate2ndwn_3__1500x1500_9c416149-d8e2-4b74-aa17-975995991017.jpg?v=1682398080' },
  { id: 70, name: 'Sideboard', category: 'Cupboard', imageUrl: 'https://furniturebydesign.nz/cdn/shop/files/PLINTSIDEN_1.jpg?v=1746054807' },
  { id: 71, name: 'Display Cabinet', category: 'Cupboard', imageUrl: 'https://www.antiquemahogany.com.au/assets/alt_2/15216.jpg?20210629101550' },
  { id: 72, name: 'Shoe Cabinet', category: 'Cupboard', imageUrl: 'https://i5.walmartimages.com/seo/Facilehome-Entryway-Shoe-Cabinet-3-Flip-Drawer-Modern-Tipping-Shoe-Rack-Organizer-for-Hallway-Bedroom-Indoor-White_60f4b0cd-7b8d-47b9-a0bc-a8e0fc06fcc2.d112dec9fdb000eaf7a4879c02129290.jpeg' },
  { id: 73, name: 'Filing Cabinet', category: 'Cupboard', imageUrl: 'https://featherlitefurniture.com/wp-content/uploads/2023/01/Untitled-2-35.jpg' },
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
                <div className="product-image-wrapper3">
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
