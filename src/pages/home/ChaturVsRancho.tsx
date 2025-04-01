import { motion } from 'framer-motion';
import { BrainCircuit, Lightbulb, Clock } from 'lucide-react';
import marketing from '../../assets/Marketing.jpeg';

export default function ChaturVsRancho() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-blue-50/20 to-purple-50/10">
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-blue-200/40 to-purple-200/40"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, (Math.random() * 50) - 25],
            x: [0, (Math.random() * 40) - 20],
          }}
          transition={{
            duration: Math.random() * 12 + 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      ))}

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header with image */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-10 mb-16"
        >
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-orange-500 bg-clip-text text-transparent mb-4">
              <span className="text-gray-800">Are You a</span> Chatur <span className="text-gray-800">or a</span> Rancho?
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              JEE success isn't about mugging up formulas. Discover your true learning style through this fun assessment!
            </p>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-md opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white">
              <img
                src={marketing} // Your image path
                alt="Chatur vs Rancho learning styles comparison"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Core Skills */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <BrainCircuit className="h-8 w-8 text-blue-600" />,
              title: "Analytical Ability",
              desc: "Break down complex problems systematically",
              color: "from-blue-100 to-blue-50"
            },
            {
              icon: <Lightbulb className="h-8 w-8 text-purple-600" />,
              title: "Conceptual Clarity",
              desc: "Understand the why behind every formula",
              color: "from-purple-100 to-purple-50"
            },
            {
              icon: <Clock className="h-8 w-8 text-orange-600" />,
              title: "Accuracy & Endurance", 
              desc: "Perform under pressure for 3 long hours",
              color: "from-orange-100 to-orange-50"
            }
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${skill.color} p-6 rounded-xl shadow-sm border border-gray-200/50 hover:shadow-md transition-all hover:-translate-y-1`}
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-lg bg-white shadow-sm">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{skill.title}</h3>
              </div>
              <p className="text-gray-600">{skill.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block max-w-2xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-200/50">
            <p className="text-xl md:text-2xl font-medium text-gray-800 mb-6 leading-relaxed">
              "We don't train students to <span className="line-through text-red-400">cram</span>.<br />
              We train them to <span className="font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">think like Rancho</span> — with clarity, confidence and calm."
            </p>
            
            <a
              href="https://tally.so/r/w8MlvP"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 group"
            >
              <span className="group-hover:scale-110 transition-transform">Take the Free Assessment</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}