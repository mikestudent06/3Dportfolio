import { personalInfo } from "@/lib/constants";
import { SocialLinks } from "@/components/ui/SocialLinks";

const Footer3D = () => (
  <footer className="footer relative z-10">
    <div className="footer-container">
      <div className="flex flex-col justify-center">
        <p className="text-white-50 text-sm">{personalInfo.location}</p>
      </div>
      <SocialLinks />
      <div className="flex flex-col justify-center">
        <p className="text-center md:text-end text-white-50">
          © {new Date().getFullYear()} {personalInfo.name}. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer3D;
