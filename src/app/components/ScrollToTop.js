'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // ✅ Scroll to top on hard reload
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ✅ Scroll to top on route change (App Router-safe)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Toggle visibility of scroll-to-top button
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#1E1E1E] text-white shadow-md hover:shadow-lg transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
