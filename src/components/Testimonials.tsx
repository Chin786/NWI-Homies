import React, { useRef } from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Interior Designer",
      content:
        "The quality of furniture from LuxeFurn is exceptional. Their attention to detail and customer service sets them apart from other retailers.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Homeowner",
      content:
        "I furnished my entire home with pieces from LuxeFurn. The modern designs and comfort level exceeded my expectations.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Architect",
      content:
        "As an architect, I appreciate the craftsmanship and design philosophy behind each piece. LuxeFurn is my go-to recommendation for clients.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400",
    },
  ];
  const testimonialsRef = useRef(null);
  return (
    <section
      ref={testimonialsRef}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gray50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-slate-500 rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold dark:text-white text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm dark:text-white text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-white italic">
                {testimonial.content}
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
