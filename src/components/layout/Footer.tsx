"use client";

import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, socialLinks, personalInfo } from "@/lib/constants";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const handleFooterLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      if (pathname !== '/') {
        window.location.href = `/${href}`;
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold tracking-tight">
              {navigation.logo.text}<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} {personalInfo.name}. Tous droits réservés.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navigation.links.map((link) => {
              // Si c'est le lien "Tous les projets", utiliser Next.js Link
              if (link.href === "#all-projects") {
                return (
                  <Link
                    href="/projects"
                    key={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              }
              // Sinon, utiliser la navigation par ancre
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleFooterLinkClick(link.href);
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const IconComponent = iconMap[social.icon as keyof typeof iconMap];
              if (!IconComponent || !social.href || social.href === "#") return null;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
