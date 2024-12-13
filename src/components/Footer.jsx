
import React from 'react';

function Footer() {
  return (
    <footer className="bg-beige-medium text-beige-light py-6">
      <div className="container mx-auto text-center">
        <p>© 2024 Curly Mona's Blog.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-beige-accent transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-beige-accent transition-colors">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-beige-accent transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>

  );
}

export default Footer;
