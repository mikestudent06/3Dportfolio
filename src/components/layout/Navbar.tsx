"use client";

import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/constants";

const HOME_SECTIONS = ["about", "projects", "experience", "contact"] as const;

function getNavLinkClass(active: boolean, mobile = false) {
  const base = mobile
    ? "text-lg py-2 px-3 rounded-xl transition-all duration-200"
    : "px-4 py-2 text-sm rounded-full transition-all duration-200";

  return active
    ? `${base} bg-primary/20 text-primary font-medium ring-1 ring-primary/40`
    : `${base} text-muted-foreground hover:text-foreground hover:bg-surface`;
}

function isNavLinkActive(
  href: string,
  isRoute: boolean | undefined,
  pathname: string,
  activeSection: string | null
) {
  if (href === "#all-projects" || href === "#projects") {
    return pathname === "/projects";
  }

  if (isRoute) {
    if (href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return pathname === href;
  }

  if (!href.startsWith("#")) {
    return false;
  }

  if (pathname !== "/") {
    return false;
  }

  return activeSection === href.slice(1);
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const updateActiveSection = () => {
      const offset = 140;
      let current: string = HOME_SECTIONS[0];

      for (const id of HOME_SECTIONS) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });

    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [pathname]);

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname !== "/") {
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(href.slice(1));
      }
    }
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (link: (typeof navigation.links)[number], index: number, mobile = false) => {
    const active = isNavLinkActive(link.href, link.isRoute, pathname, activeSection);
    const className = getNavLinkClass(active, mobile);

    if (link.isRoute) {
      return (
        <Link
          href={link.href}
          key={index}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          {link.label}
        </Link>
      );
    }

    if (link.href === "#all-projects") {
      return (
        <Link
          href="/projects"
          key={index}
          className={className}
          aria-current={active ? "page" : undefined}
        >
          {link.label}
        </Link>
      );
    }

    return (
      <a
        href={link.href}
        key={index}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(link.href);
        }}
        className={className}
        aria-current={active ? "page" : undefined}
      >
        {link.label}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          {navigation.logo.text}<span className="text-primary">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navigation.links.map((link, index) => renderNavLink(link, index))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button
            size="sm"
            onClick={() => {
              if (pathname !== "/") {
                window.location.href = "/#contact";
              } else {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Me contacter
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
            {navigation.links.map((link, index) => (
              <div key={index} onClick={() => setIsMobileMenuOpen(false)}>
                {link.isRoute ? (
                  <Link
                    href={link.href}
                    className={getNavLinkClass(
                      isNavLinkActive(link.href, link.isRoute, pathname, activeSection),
                      true
                    )}
                  >
                    {link.label}
                  </Link>
                ) : link.href === "#all-projects" ? (
                  <Link
                    href="/projects"
                    className={getNavLinkClass(pathname === "/projects", true)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={getNavLinkClass(
                      isNavLinkActive(link.href, link.isRoute, pathname, activeSection),
                      true
                    )}
                    aria-current={
                      isNavLinkActive(link.href, link.isRoute, pathname, activeSection)
                        ? "page"
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}

            <Button
              className="mt-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                if (pathname !== "/") {
                  window.location.href = "/#contact";
                } else {
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Me contacter
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
