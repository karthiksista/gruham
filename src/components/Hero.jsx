import React from "react";
import "animate.css"; // Import Animate.css

const Hero = () => {
  return (
    <section
      id='hero'
      className="hero bg-cover bg-center h-screen relative"
      style={{
        backgroundImage: "url('public/IMG_3813.jpg')", // Replace with your image URL
      }}
    >
      {/* Text Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 flex justify-center items-center text-center">
        <div className="text-white space-y-6 px-4">
          <h1 className="text-6xl text-beige-accent font-bold text-shadow-md animate__animated animate__zoomIn">
            Welcome to Our Love Story
          </h1>
          <p className="text-xl text-beige-accent animate__animated animate__fadeIn animate__delay-1s">
            Discover the journey of a lifetime together.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
