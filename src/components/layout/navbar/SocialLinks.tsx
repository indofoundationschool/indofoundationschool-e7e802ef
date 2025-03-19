import { Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

type SocialLinkProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  ariaLabel: string;
  index?: number;
  isMobile?: boolean;
};

const SocialLink = ({ icon: Icon, url, ariaLabel, index = 0, isMobile = false }: SocialLinkProps) => {
  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${
        isMobile 
          ? 'p-3 text-gray-700 hover:text-white bg-gradient-to-r from-blue-50 to-blue-100 hover:from-school-blue hover:to-school-blue-dark rounded-full' 
          : 'p-2 text-gray-700 hover:text-white hover:from-school-blue hover:to-school-blue-dark hover:bg-gradient-to-r rounded-full'
      } transition-all duration-300 hover:shadow-md flex items-center justify-center`}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: (isMobile ? 0.5 : 0.4) + (index * 0.1) }}
    >
      <Icon width={isMobile ? 20 : 18} height={isMobile ? 20 : 18} />
    </motion.a>
  );
};

export const socialLinks = [
  { icon: Instagram, url: "https://www.instagram.com/indofoundationschool?igsh=czV4OXd6dXVkb3Vi&utm_source=qr", ariaLabel: "Instagram" },
  { icon: Facebook, url: "https://facebook.com", ariaLabel: "Facebook" },
  { icon: Youtube, url: "https://www.youtube.com/@indofoundationschool", ariaLabel: "YouTube" },
];

const SocialLinks = ({ isMobile = false }: { isMobile?: boolean }) => {
  const containerClass = isMobile 
    ? "flex items-center justify-center space-x-6 pt-5 border-t border-blue-100 mt-5"
    : "flex items-center space-x-3 ml-6";

  return (
    <motion.div 
      className={containerClass}
      initial={{ opacity: 0, y: isMobile ? 20 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: isMobile ? 0.5 : 0.2, duration: 0.3 }}
    >
      {socialLinks.map((social, index) => (
        <SocialLink 
          key={index}
          icon={social.icon}
          url={social.url}
          ariaLabel={social.ariaLabel}
          index={index}
          isMobile={isMobile}
        />
      ))}
    </motion.div>
  );
};

export default SocialLinks;
