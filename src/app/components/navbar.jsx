"use client";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./navLink";
import {motion} from "framer-motion";
import ContactIcon from "./navbarIcons/ContactIcon";
import PortfolioIcon from "./navbarIcons/PortfolioIcon";
import HomeIcon from "./navbarIcons/HomeIcon";
import ResourcesIcon from "./navbarIcons/ResourcesIcon";
import XscriptorIcon from "./navbarIcons/XscriptorIcon";
import GitHubIcon from "./navbarIcons/GitHubIcon";

const links = [
  { id: "home", url: "/", title: <HomeIcon /> },
  { id: "github", url: "/repos", title: <GitHubIcon /> },
  { id: "contact", url: "/contact", title: <ContactIcon /> },
  { id: "portfolio", url: "/portafolio", title: <PortfolioIcon /> },
  { id: "resources", url: "/resources", title: <ResourcesIcon /> },
  { id: "xscriptor.com", url: "https://xscriptor.com", title: <XscriptorIcon /> },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotation: 45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotation: -45,
      backgroundColor: "rgb(255, 255, 255)",
    }
  }

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition:{
        when: "beforeChildren",
        staggerChildren: 0.02,
      }
    },
  };

  const ListItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x:0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl z-20 bg-black text-white">
      {/* Links */}
      <div className="flex justify-center items-center gap-8 w-full">

        {links.map((link) => (
          <NavLink link={link} key={link.id} className="text-white"/>
        ))}
      </div>
      {/* Responsive menu */}
      <div className="md:hidden">
        {/* Menu Button */}
        <button 
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}>
          <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-yellow-400 rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-yellow-400 rounded"></motion.div>
          <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-yellow-400 rounded origin-left"></motion.div>
        </button>
        {/* Menu list */}
        {open && (
          <motion.div variants={listVariants} initial="closed" animate="opened" className="fixed top-0 left-0 w-screen h-screen bg-black text-yellow-400 flex flex-col items-center justify-center gap-8 text-4xl z-40">
            <button 
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen((prev) => !prev)}>
          <motion.div variants={topVariants} animate={closed ? "opened" : "closed"} className="w-10 h-1 bg-yellow-400 rounded origin-left"></motion.div>
          <motion.div variants={centerVariants} animate={closed ? "opened" : "closed"} className="w-10 h-1 bg-yellow-400 rounded origin-left"></motion.div>
          <motion.div variants={bottomVariants} animate={closed ? "opened" : "closed"} className="w-10 h-1 bg-yellow-400 rounded origin-left"></motion.div>
            </button>
            {links.map((link) => (
              <motion.div variants={ListItemVariants} key={link.id}>
                <Link href={link.url}>
                  {link.id}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
