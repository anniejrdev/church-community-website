// AboutTestimonials.jsx
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Catherine R.",
    text: "Jane Doe is an amazing photographer! Not only did she take stunning photos that exceeded our expectations, but she also made sure that everyone involved felt comfortable during the photo shoot.",
    image:
      "https://images.unsplash.com/photo-1692655128684-2662bf594fbb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBlb3BsZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "John K.",
    text: "I had a great experience working with Jane Doe! She was very professional, organized and encouraged me to feel at ease. Her photographs were stunning and captured the best moments of my event.",
    image:
      "https://images.unsplash.com/photo-1669475576662-af6f022dad1a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZSUyMHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function AboutTestimonials() {
  return (
    <section className="relative bg-[#111] text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
          What our community says
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          Christianity means a lot more than church membership.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-[#1c1c1c] p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <p className="text-gray-300 text-sm md:text-base mb-4">
              "{t.text}"
            </p>
            <div className="flex items-center space-x-3">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <span className="text-sm md:text-base font-medium">{t.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
