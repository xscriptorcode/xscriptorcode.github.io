"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathName}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
