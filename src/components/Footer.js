import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";


const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass='footer-links' itemClass='footer-link' />

      <ul className="footer-icons">
        {socialLinks.map((ico) => {
          const { id, icon } = ico;
          return (
            <li key={id}>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer
