// src/components/TeacherThanks.tsx
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function TeacherThanks() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-16 mb-8 text-center"
    >
      <div className="inline-flex items-center gap-2 px-6 py-4 bg-white/50 rounded-full border border-gray-200 shadow-sm">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Heart className="h-5 w-5 fill-pink-400 text-pink-400" />
        </motion.div>
        <p className="text-gray-600">
          Made with gratitude for my teacher who made physics come alive
        </p>
      </div>
    </motion.div>
  );
}