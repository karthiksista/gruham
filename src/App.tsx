import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import SpotifyPlaylist from "./components/SpotifyPlaylist";
import Timeline from "./components/Timeline";
import BlogGrid from "./components/BlogGrid";
import Footer from "./components/Footer";
import ImageGallery from './components/ImageGallery';
// import LoveQuotesCarousel from './components/LoveQuotesCarousel';

function App() {
  return (
    <div className="bg-pink-50 text-gray-800">
       <Navbar />
      <Hero />
      <OurStory />
      <SpotifyPlaylist />
      <Timeline />
      <ImageGallery />
      {/* <LoveQuotesCarousel /> */}
      <BlogGrid />
      <Footer />
    </div>
  );
}

export default App;
