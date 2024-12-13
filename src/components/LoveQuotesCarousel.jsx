import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles

const LoveQuotes = () => {
    const quotes = [
        "Love is not about how many days, months, or years you’ve been together. Love is about how much you love each other every single day.",
        "You are my today and all of my tomorrows.",
        "In your smile, I see something more beautiful than the stars.",
        "I have found the one whom my soul loves.",
    ];

    return (
        <section id='quotes' className="bg-gradient-to-r from-beige-light via-beige-medium to-beige-light py-10">
            <div className="container mx-auto text-center">
                <h3 className="text-4xl font-bold text-beige-dark mb-6">
                    Love Quotes
                </h3>

                {/* Swiper Carousel */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 5000, // Slide change interval in ms
                        disableOnInteraction: false, // Keeps autoplay even if user interacts with the carousel
                    }}
                    className="max-w-3xl mx-auto"
                >
                    {quotes.map((quote, index) => (
                        <SwiperSlide key={index}>
                            <blockquote className="p-6 bg-beige-medium rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                                <p className="text-beige-dark italic text-lg">
                                    “{quote}”
                                </p>
                            </blockquote>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default LoveQuotes;
