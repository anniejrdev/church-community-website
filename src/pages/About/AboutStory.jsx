// AboutStory.jsx
import { motion } from "framer-motion";

export default function AboutStory() {
  return (
    <section className="bg-[#fce9da] py-16 px-4 md:px-8 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-28 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-gray-800"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Church Story
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-6">
            In the heart of a quiet village, St. Mary’s church stood as a beacon
            of unity and hope. Every Christmas Eve, its bells filled the still
            skies. From inside, aglow with anticipation, Father Thomas raised
            his voice in song, and the humble birth that changed the world at
            Bethlehem echoed. Voices rose in harmony and the missing was
            replaced. A weary traveler, finally found solace within her heart,
            breathing new life. The memories cherished, members near and afar
            united beneath the tall lit glass shrine. Through faith and
            community, St. Mary’s lit hearts, illuminating the way for all who
            sought it.
          </p>

          {/* Beliefs Section */}
          <div>
            <h3 className="font-semibold text-lg md:text-xl mb-3">
              Our Beliefs
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-sm md:text-base text-gray-700">
              <li>In the Essential beliefs we have unity.</li>
              <li>In the Non-essential beliefs we have liberty.</li>
              <li>In all our beliefs we maintain an attitude of love.</li>
            </ul>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1693956965359-f6bfdf022d9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGNodXJjaCUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Church Interior"
            className="shadow-lg w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
