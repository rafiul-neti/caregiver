import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  return (
    <section className="footer footer-horizontal footer-center bg-neutral text-neutral-content rounded p-10 mt-12">
      {/* Brand Identity */}
      <aside>
        <div className="flex items-center gap-2 mb-2">
          <Heart className="text-secondary fill-secondary" size={28} />
          <span className="text-2xl font-black tracking-tighter text-white">
            Care<span className="text-primary">.xyz</span>
          </span>
        </div>
        <p className="font-bold">
          Providing reliable care since 2024. <br />
          Trusted by families, powered by compassion.
        </p>
      </aside>

      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-6">
        <Link href="/about" className="link link-hover font-medium">
          About us
        </Link>
        <Link href="/services" className="link link-hover font-medium">
          Our Services
        </Link>
        <Link href="/contact" className="link link-hover font-medium">
          Contact
        </Link>
        <Link href="/privacy" className="link link-hover font-medium">
          Privacy Policy
        </Link>
      </nav>

      {/* Social Media */}
      <nav>
        <div className="grid grid-flow-col gap-6">
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            className="hover:text-secondary transition-colors duration-300"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="hover:text-primary transition-colors duration-300"
            aria-label="Facebook"
          >
            <Facebook size={24} />
          </a>
        </div>
      </nav>

      {/* Copyright */}
      <aside className="border-t border-neutral-content/10 w-full pt-6">
        <p className="text-xs opacity-60 uppercase tracking-widest">
          Copyright © {new Date().getFullYear()} - All rights reserved by
          Care.xyz Ltd
        </p>
      </aside>
    </section>
  );
};

export default Footer;
