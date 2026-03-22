import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">

          <p className="text-center md:text-center text-gray-500 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
    </footer>
  );
};

export default Footer;
