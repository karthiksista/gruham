// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-beige-medium z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="text-white text-2xl font-bold">Curly Mona's Blog</div>
        <ul className="flex space-x-8 text-white">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="ourstory"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link
              to="spotify"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Our Songs
            </Link>
          </li>
          <li>
            <Link
              to="timeline"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Journey
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Gallery
            </Link>
          </li>
          {/* <li>
            <Link
              to="quotes"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Love Quotes
            </Link>
          </li> */}
          <li>
            <Link
              to="blog"
              smooth={true}
              duration={1000}
              className="cursor-pointer hover:text-beige-light"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
