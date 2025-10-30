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
      <Navbar />
      <Header />
      <Boost />
      {/* 
      <Dial />
      <Body />
      <B />
      <Hurry />
      <ShopReviews/>
      <Chooseus />
      <Footer />
      <AdBanner /> */}
    </> 
  );
};

export default Home;
