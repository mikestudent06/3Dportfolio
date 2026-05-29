"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/constants";

const Navbar3D = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleAnchor = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`;
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileOpen(false);
  };

  const renderLink = (link: (typeof navigation.links)[0], i: number) => {
    if (link.isRoute) {
      return (
        <li key={i}>
          <Link href={link.href} className="group">
            <span>{link.label}</span>
            <span className="underline" />
          </Link>
        </li>
      );
    }
    if (link.href === "#skills") {
      return (
        <li key={i}>
          <Link href="/skills" className="group">
            <span>{link.label}</span>
            <span className="underline" />
          </Link>
        </li>
      );
    }
    if (link.href === "#projects" || link.href === "#all-projects") {
      return (
        <li key={i}>
          <Link href="/projects" className="group">
            <span>{link.label}</span>
            <span className="underline" />
          </Link>
        </li>
      );
    }
    return (
      <li key={i} className="group">
        <a
          href={link.href}
          onClick={(e) => {
            e.preventDefault();
            handleAnchor(link.href);
          }}
        >
          <span>{link.label}</span>
          <span className="underline" />
        </a>
      </li>
    );
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <Link href="/" className="logo">
          {navigation.logo.fullName}
        </Link>

        <nav className="desktop hidden lg:block">
          <ul>{navigation.links.map(renderLink)}</ul>
        </nav>

        <a
          href="#contact"
          className="contact-btn group hidden lg:flex"
          onClick={(e) => {
            e.preventDefault();
            handleAnchor("#contact");
          }}
        >
          <div className="inner">
            <span>Me contacter</span>
          </div>
        </a>

        <button
          type="button"
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden px-5 pb-5 bg-black border-t border-black-50">
          <ul className="flex flex-col gap-4 py-4">
            {navigation.links.map((link, i) => (
              <li key={i}>
                {link.isRoute ? (
                  <Link href={link.href} onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ) : link.href === "#skills" ? (
                  <Link href="/skills" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ) : link.href === "#projects" || link.href === "#all-projects" ? (
                  <Link href="/projects" onClick={() => setMobileOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleAnchor(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar3D;
