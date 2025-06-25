import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-heading">ShelbyModels</h3>
            <p className="footer-description">
              {t('footer.description')}
            </p>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">{t('footer.quickLinks')}</h3>
            <ul className="footer-links">
              <li><Link to="/">{t('footer.links.home')}</Link></li>
              <li><Link to="/about">{t('footer.links.aboutUs')}</Link></li>
              <li><Link to="/models">{t('footer.links.models')}</Link></li>
              <li><Link to="/categories">{t('footer.links.categories')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">{t('footer.legal')}</h3>
            <ul className="footer-links">
              <li><Link to="/terms">{t('footer.links.termsOfService')}</Link></li>
              <li><Link to="/privacy">{t('footer.links.privacyPolicy')}</Link></li>
              <li><Link to="/cookies">{t('footer.links.cookiePolicy')}</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3 className="footer-heading">{t('footer.contact')}</h3>
            <ul className="footer-links">
              <li><Link to="/contact">{t('footer.links.contactUs')}</Link></li>
              <li><Link to="/support">{t('footer.links.support')}</Link></li>
              <li><Link to="/faq">{t('footer.links.faq')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} ShelbyModels. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer