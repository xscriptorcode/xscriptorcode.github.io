"use client";

import NavLink from "./navLink";
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
  { id: "portfolio", url: "/portfolio", title: <PortfolioIcon /> },
  { id: "resources", url: "/resources", title: <ResourcesIcon /> },
  { id: "xscriptor.com", url: "https://xscriptor.com", title: <XscriptorIcon /> },
];

const Navbar = () => {
  return (
    <div className="w-full flex justify-center px-2">
  <div className="inline-flex items-center justify-center gap-4
    rounded-2xl border border-white/30 bg-white/10 backdrop-blur-lg backdrop-saturate-200 shadow-lg
    px-2 py-2 text-yellow-400 text-xl z-20 transition-all">
    
    {links.map((link) => (
      <NavLink
        link={link}
        key={link.id}
        className="text-red-700 hover:text-yellow-300 hover:drop-shadow-[0_0_8px_#facc15] transition duration-300"
      />
    ))}
  </div>
</div>


  );
};

export default Navbar;
