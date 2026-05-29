import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { socialLinks } from "@/lib/constants";

const iconMap = {
  Github,
  Linkedin,
  Twitter,
} as const;

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  linkClassName?: string;
};

export function SocialLinks({
  className = "",
  iconClassName = "w-5 h-5",
  linkClassName = "icon",
}: SocialLinksProps) {
  return (
    <div className={`socials ${className}`}>
      {socialLinks.map((social) => {
        const Icon = iconMap[social.icon as keyof typeof iconMap];
        if (!Icon || !social.href || social.href === "#") return null;

        return (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClassName}
            aria-label={social.label}
          >
            <Icon className={iconClassName} />
          </Link>
        );
      })}
    </div>
  );
}
