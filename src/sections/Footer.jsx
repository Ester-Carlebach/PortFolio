import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation('common');

  return (
    <footer className="footer">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-gray-500 text-sm">
          {t('footer.copyright', { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
