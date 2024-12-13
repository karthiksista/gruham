import React from "react";
import { motion } from "framer-motion"; // For smooth animations

const Timeline = () => {
  const events = [
    { date: "2022", description: "We met for the first time.", icon: "❤️" },
    { date: "2023", description: "The vibe and the friendship continued", icon: "❤️" },
    { date: "2024", description: "The third time, where it all started", icon: "❤️" },
    { date: "2024", description: "Engaged.", icon: "💍" },
  ];

  return (
    <section className="bg-beige-light py-10" id="timeline">
      <div className="container mx-auto">
        <h3 className="text-4xl font-bold text-beige-dark text-center mb-10">
          Our Love Journey
        </h3>
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-beige-dark rounded-lg"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className={`flex items-center space-x-6 ${index % 2 === 0 ? "flex-row-reverse" : ""
                  }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-beige-medium text-beige-dark flex items-center justify-center text-2xl shadow-lg">
                  {event.icon}
                </div>

                {/* Content */}
                <div className="max-w-lg p-6 bg-beige-medium rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h4 className="text-xl font-bold text-beige-dark">{event.date}</h4>
                  <p className="text-beige-dark mt-2">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
