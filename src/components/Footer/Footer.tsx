import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="du-footer du-footer-center p-10 bg-primary text-primary-content rounded-none">
      <nav className="grid grid-cols-3 text-left gap-x-10 gap-y-4 uppercase ">
        {footerNavLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="du-link du-link-hover col-span-1 mr-auto"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <Link
        href={"/"}
        className="text-3xl tracking-tighter flex flex-col gap-1"
      >
        <span className=" font-bold ">BMOR</span>
        <span className="">Immigration And Visa Services</span>
      </Link>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link
            href={
              "https://www.linkedin.com/in/v-ravi-regulated-canadian-immigration-consultant-rcic-93299490/"
            }
          >
            <FaLinkedin size={27} />
          </Link>
          <Link href={"https://www.instagram.com/bmorimmi/?hl=en"}>
            <FaInstagram size={27} />
          </Link>
          <Link href={"https://www.facebook.com/bmor.immi.7/"}>
            <FaFacebook size={27} />
          </Link>
        </div>
      </nav>
      <aside>
        <Link className="hover:cursor-default " href="/dashboard">Copyright © 2024 - All right reserved by BMOR</Link>
      </aside>
    </footer>
  );
};

export default Footer;

interface NavLinkType {
  name: string;
  href: string;
}
export const navBarNavLinks: NavLinkType[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "study", href: "/study" },
];
export const footerNavLinks: NavLinkType[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Contact Us", href: "/contact" },
  { name: "study", href: "/study" },
  { name: "express entry", href: "/express-entry" },
  { name: "work", href: "/work" },
  { name: "privacy policy", href: "/privacyPolicy.docx" },
  { name: "terms and conditions", href: "/terms-and-conditions" },
];
