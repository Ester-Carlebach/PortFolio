import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
        
          <p className="text-center md:text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Ester Carlebach All rights reserved.
          </p>
    </footer>
  );
};

export default Footer;
