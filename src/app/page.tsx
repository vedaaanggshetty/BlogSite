'use client'

import FeaturedSection from './components/FeaturedSection';
import Header from './components/Header';
import Hero from './components/Hero';
// import SeeWhat from './components/SeeWhat';
// import SearchBar from './components/SearchBar';
// import Recent from './components/Recent';
// import Recommended from './components/Recommended';
// import Footer from './components/Footer';

export default function Home() {
  return (
    
    <div> 
      <Header />
      <Hero />
      <FeaturedSection/>
      {/* <SearchBar/> */}
      {/* <SeeWhat /> */}
      {/* <Recent /> */}
      {/* <Recommended />
      <Footer /> */}
    </div>
  );
}