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
        transition={{ duration: 0.5, ease: "easeIn" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
