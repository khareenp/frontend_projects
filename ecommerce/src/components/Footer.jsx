import React from "react";

const Footer = () => {
  const links = ["about", "skincare", "makeup", "supplements"];
  return (
    <footer className=" bg-dark text-light py-4">
      <div className="flex justify-between">
        <a className="navbar__brand text-2xl text-yellow " href="/">
          Gigi's SkinCare
        </a>
        <div className="flex space-x-6 items-center">
          {links.map((link) => (
            <a className="" href="/">
              {link}
            </a>
          ))}
        </div>
      </div>
      <p className="text-dark-grey text-sm">
        React Js Project of Gigi's Essentials
      </p>
    </footer>
  );
};

export default Footer;
