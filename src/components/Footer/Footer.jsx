import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  // Cities data based on reference image
  const mainCities = [
    'Cuiabá', 'Rondonópolis', 'Fortaleza', 'Rio de Janeiro', 'Gatas do Babado',
    'Brasília', 'Belém', 'Sinop', 'Acompanhantes Maceió'
  ];

  return (
    <footer className="footer">
      <div className="container">
        {/* Top section with cities */}
        <div className="footer-top">
          <div className="footer-cities">
            <span className="cities-label">{t('footer.cities')}:</span>
            <div className="cities-links">
              {mainCities.map((city, index) => (
                <Link
                  key={city}
                  to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`}
                  className="city-link"
                >
                  {city}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Middle section with site name and disclaimer */}
        <div className="footer-middle">
          <div className="site-name">
            <h2 className="footer-brand">{t('footer.brandName')}</h2>
          </div>

          <div className="footer-disclaimer-text">
            <p>
              {t('footer.mainDisclaimer')}
            </p>
          </div>
        </div>

        {/* Bottom section with legal links and copyright */}
        <div className="footer-bottom">
          <div className="legal-links">
            <Link to="/legal" className="legal-link">{t('footer.legalTexts')}</Link>
            <Link to="/privacy" className="legal-link">{t('footer.privacyPolicy')}</Link>
            <Link to="/cookies" className="legal-link">{t('footer.cookies')}</Link>
            <Link to="/contact" className="legal-link">{t('footer.contact')}</Link>
          </div>

          <div className="footer-copyright">
            <p>© {currentYear} - {t('footer.copyright')} • v1.0.1</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
