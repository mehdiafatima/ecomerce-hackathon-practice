import React from 'react';
import HeroBanner from "./components/HeroBanner";
import FlashSale from "./components/FlashSale"
import CategorySection from './components/CategorySection';
import BestSelling from './components/BestSellingproducts';
import ImageComponent from './components/ImageComponent';
import OurProduct from './components/OurProducts';
import NewArrival from './components/NewArrival';
import Features from './components/Features';


const Home = () => {
  return (
    <div>
      
      <main>
        <HeroBanner />
        <br></br>
        <br></br>
        <FlashSale />
        <br></br>
        <br></br>
        <CategorySection/>
        <br></br>
        <br></br>
       <BestSelling/>
       <br></br>
       <br></br>
       <ImageComponent/>
      <br></br>
      <br></br>

    <OurProduct/>
    <br></br>
    <br></br>
    <NewArrival/>
    <br></br>
    <br></br>
    <Features/>
  
    
   

      </main>
    </div>
  );
};

export default Home;
