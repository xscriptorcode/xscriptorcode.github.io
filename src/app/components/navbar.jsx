"use client";

import NavLink from "./navLink";
import ContactIcon from "./navbarIcons/ContactIcon";
import PortfolioIcon from "./navbarIcons/PortfolioIcon";
import HomeIcon from "./navbarIcons/HomeIcon";
import ResourcesIcon from "./navbarIcons/ResourcesIcon";
import XscriptorIcon from "./navbarIcons/XscriptorIcon";
import GitHubIcon from "./navbarIcons/GitHubIcon";
import { PagesStyles } from "./pagesstyles";

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
    <div className={`${PagesStyles.navcontainer}`}>
    <div className={`${PagesStyles.navstyles}`}>
    {links.map((link) => (
      <NavLink
        link={link}
        key={link.id}
        className={`${PagesStyles.navbariconsstyles}`}
      />
    ))}
  </div>
</div>


  );
};

export default Navbar;
