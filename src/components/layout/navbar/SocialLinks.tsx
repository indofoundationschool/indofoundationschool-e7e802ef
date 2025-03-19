
import { Instagram, Facebook, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

type SocialLinkProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  url: string;
  ariaLabel: string;
  index?: number;
  isMobile?: boolean;
  color: string;
};

const SocialLink = ({ icon: Icon, url, ariaLabel, index = 0, isMobile = false, color }: SocialLinkProps) => {
  return (
    <motion.a 
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${
        isMobile 
          ? 'p-3 text-white bg-gradient-to-r rounded-full transition-transform' 
          : 'p-2 text-white rounded-full transition-transform'
      } transition-all duration-300 hover:shadow-lg flex items-center justify-center`}
      style={{ 
        backgroundColor: color,
        transform: 'scale(1)',
      }}
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
  { 
    icon: Instagram, 
    url: "https://www.instagram.com/indofoundationschool?igsh=czV4OXd6dXVkb3Vi&utm_source=qr", 
    ariaLabel: "Instagram",
    color: "#E1306C" // Instagram brand color
  },
  { 
    icon: Facebook, 
    url: "https://facebook.com", 
    ariaLabel: "Facebook",
    color: "#1877F2" // Facebook brand color
  },
  { 
    icon: Youtube, 
    url: "https://www.youtube.com/@indofoundationschool", 
    ariaLabel: "YouTube",
    color: "#FF0000" // YouTube brand color
  },
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
          color={social.color}
        />
      ))}
    </motion.div>
  );
};

export default SocialLinks;
