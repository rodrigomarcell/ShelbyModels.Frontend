import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Footer.css'

function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()
  
  // Cities data based on reference image
  const mainCities = [
    'São Paulo', 'Rio de Janeiro', 'ABC Paulista', 'Campinas', 'Porto Alegre',
    'Recife', 'Fortaleza', 'Curitiba', 'São José dos Campos', 'Belo Horizonte',
    'Sorocaba', 'Osasco', 'Guarulhos', 'Salvador', 'Praia Grande',
    'Jundiaí', 'Santos', 'Duque de Caxias', 'Niterói', 'Brasília',
    'Americana', 'Piracicaba', 'Manaus', 'Nova Iguaçu', 'Ribeirão Preto'
  ]
  
  // Main searches data based on reference image
  const mainSearches = [
    'Peitudas', 'Com áudio', 'Sexo anal', 'Fetichismo', 'À domicílio',
    'Com vídeo', 'PSE', 'De luxo', 'Com TD positivos', 'WhatsApp',
    'Rosto visível', 'Econômicas', 'Massagem erótica', 'Gordinhas', 'Maduras',
    'Telegram'
  ]
  
  return (
    <footer className="footer">
      <div className="container">
        {/* Brazil description section */}
        <div className="footer-brazil-section">
          <h2 className="brazil-title">{t('footer.brazilTitle')}</h2>
          
          <div className="brazil-content">
            <p className="brazil-paragraph">
              {t('footer.brazilDescription1')}
            </p>
            
            <p className="brazil-paragraph">
              {t('footer.brazilDescription2')}
            </p>
            
            <h3 className="brazil-subtitle">{t('footer.brazilDescription3')}</h3>
            
            <p className="brazil-paragraph">
              {t('footer.brazilDescription4')}
            </p>
            
            <h3 className="brazil-subtitle">{t('footer.brazilDescription5')}</h3>
            
            <p className="brazil-paragraph">
              {t('footer.brazilDescription6')}
            </p>
            
            <h3 className="brazil-subtitle">{t('footer.brazilDescription7')}</h3>
            
            <p className="brazil-paragraph">
              {t('footer.brazilDescription8')}
            </p>
          </div>
        </div>
        
        {/* Main pages section */}
        <div className="footer-links-section">
          <h3 className="section-title">{t('footer.mainPages')}</h3>
          
          <div className="subsection">
            <h4 className="subsection-title">{t('footer.mainCities')}</h4>
            <div className="links-grid">
              {mainCities.map((city, index) => (
                <Link 
                  key={city} 
                  to={`/city/${city.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="footer-link"
                >
                  {city}
                </Link>
              ))}
              <Link to="/all-cities" className="footer-link see-all">
                + {t('footer.seeAll')}
              </Link>
            </div>
          </div>
          
          <div className="subsection">
            <h4 className="subsection-title">{t('footer.mainSearches')}</h4>
            <div className="links-grid">
              {mainSearches.map((search, index) => (
                <Link 
                  key={search} 
                  to={`/search/${search.toLowerCase().replace(/\s+/g, '-')}`} 
                  className="footer-link"
                >
                  {search}
                </Link>
              ))}
              <Link to="/all-searches" className="footer-link see-all">
                + {t('footer.seeAll')}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Company info and legal section */}
        <div className="footer-bottom">
          <div className="company-info">
            <div className="company-details">
              <p className="company-name">{t('footer.companyName')}</p>
              <p className="company-address">{t('footer.companyAddress')}</p>
              <p className="company-address">{t('footer.companyDetails')}</p>
              <p className="company-address">{t('footer.companyLocation')}</p>
            </div>
          </div>
          
          <div className="legal-links">
            <Link to="/legal" className="legal-link">{t('footer.legalTexts')}</Link>
            <Link to="/privacy" className="legal-link">{t('footer.privacyPolicy')}</Link>
            <Link to="/cookies" className="legal-link">{t('footer.cookies')}</Link>
            <Link to="/contact" className="legal-link">{t('footer.contact')}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer