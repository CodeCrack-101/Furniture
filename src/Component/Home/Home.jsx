import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import Dial from '../Dial/Dial';
import Footer from '../Footer/Footer';
import Body from '../Body1/Body';
import B from '../Body2/B';
import Chooseus from '../../Component/Choose/Chooseus';
import Hurry from '../C/Hurry';
import Boost from '../Boost/Boost';
import ShopReviews from '../Shopreview/Shopreview';
import AdBanner from '../AdBanner'

const Home = () => {
  return (
    <>
      <Helmet>
        {/* 🔹 SEO Title & Meta */}
        <title>Shirig Furniture | Modern Sofas, Chairs & Home Decor</title>
        <meta
          name="description"
          content="Buy premium sofas, chairs, and home furniture online at Shirig. Stylish, durable, and affordable furniture crafted for every home."
        />
        <meta
          name="keywords"
          content="sofas, chairs, recliners, tables, home furniture, modern furniture, Shirig"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.shirig.com/" />

        {/* 🔹 Structured Data (Schema for Google) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              "name": "Shirig Furniture",
              "url": "https://www.shirig.com",
              "logo": "https://www.shirig.com/logo.png",
              "description": "Buy premium sofas, chairs, and modern furniture at Shirig.",
              "sameAs": [
                "https://www.instagram.com/shirig",
                "https://www.facebook.com/shirig"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "addressCountry": "India"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Your Page Layout */}
      <AdBanner />
      <Navbar />
      <Header />
      <Boost />
      <Dial />
      <Body />
      <B />
      <Hurry />
      <ShopReviews/>
      <Chooseus />
      <Footer />
    </>
  );
};

export default Home;
