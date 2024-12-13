import React from 'react';

function ImageGallery() {
    const images = [
        '../../public/image1.jpg',
        '../../public/image2.jpg',
        '../../public/image3.jpg',
        '../../public/image4.jpg',
        '../../public/image5.jpg',
        '../../public/image6.jpg',
    ];

    return (
        <section id='gallery'>
            <div className="bg-beige-light py-10" id="gallery">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold text-beige-dark mb-6">Our Photo Gallery</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {images.map((image, index) => (
                            <a key={index} href={image} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-120 object-cover rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-200 border border-beige-dark"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ImageGallery;
