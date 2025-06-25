import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recursos de tradução
const resources = {
  pt: {
    translation: {
      // Header
      header: {
        publishAd: "Publicar anúncio",
        cityList: "Lista de cidades",
        locateMe: "Me localize",
        searchFilters: "Filtros de pesquisa",
        seeAllCities: "Ver todas as cidades"
      },
      
      // Search Bar
      searchBar: {
        locationPlaceholder: "Onde está você?",
        searchPlaceholder: "O que procura?",
        searchButton: "Procurar"
      },
      
      // Filters
      filters: {
        category: "Categoria:",
        gender: "Sexo:",
        categories: {
          acompanhantes: "Acompanhantes",
          massagens: "Massagens", 
          videochamadas: "Videochamadas"
        },
        genders: {
          garotas: "Garotas",
          trans: "Trans",
          homens: "Homens"
        }
      },
      
      // Model Card
      modelCard: {
        verified: "Verificado",
        specialty: "Especialidade:",
        viewProfile: "Ver Perfil",
        top: "Top",
        featured: "Destaque",
        recorded: "Gravado",
        online: "Online",
        offline: "Offline",
        years: "anos",
        reviews: "avaliações",
        lastSeen: "Visto por último",
        ago: "atrás"
      },
      
      // Model Page
      modelPage: {
        loading: "Carregando informações do modelo...",
        notFound: "Modelo não encontrado.",
        backToHome: "Voltar ao Início",
        backToModels: "Voltar aos Modelos",
        verified: "Verificado",
        specialty: "Especialidade",
        about: "Sobre",
        aboutDescription: "Modelo profissional com expertise em {{specialty}}. Baseado em {{location}}. Disponível para reservas e colaborações.",
        connect: "Conectar",
        contactNow: "Contatar Agora",
        bookSession: "Reservar Sessão"
      },
      
      // Home Page
      homePage: {
        featuredModels: "Modelos em Destaque",
        showMoreModels: "Mostrar Mais Modelos"
      },
      
      // Footer
      footer: {
        description: "Conectando modelos talentosos com oportunidades exclusivas em um ambiente premium.",
        quickLinks: "Links Rápidos",
        legal: "Legal",
        contact: "Contato",
        links: {
          home: "Início",
          aboutUs: "Sobre Nós",
          models: "Modelos",
          categories: "Categorias",
          termsOfService: "Termos de Serviço",
          privacyPolicy: "Política de Privacidade",
          cookiePolicy: "Política de Cookies",
          contactUs: "Fale Conosco",
          support: "Suporte",
          faq: "FAQ"
        },
        copyright: "Todos os direitos reservados."
      },
      
      // Cities
      cities: {
        "São Paulo": "São Paulo",
        "Rio de Janeiro": "Rio de Janeiro",
        "ABC Paulista": "ABC Paulista",
        "Campinas": "Campinas",
        "Porto Alegre": "Porto Alegre",
        "Recife": "Recife",
        "Fortaleza": "Fortaleza",
        "Curitiba": "Curitiba",
        "São José dos Campos": "São José dos Campos",
        "Belo Horizonte": "Belo Horizonte"
      },
      
      // Language Switcher
      language: {
        portuguese: "Português",
        english: "English"
      }
    }
  },
  en: {
    translation: {
      // Header
      header: {
        publishAd: "Publish Ad",
        cityList: "City List",
        locateMe: "Locate Me",
        searchFilters: "Search Filters",
        seeAllCities: "See All Cities"
      },
      
      // Search Bar
      searchBar: {
        locationPlaceholder: "Where are you?",
        searchPlaceholder: "What are you looking for?",
        searchButton: "Search"
      },
      
      // Filters
      filters: {
        category: "Category:",
        gender: "Gender:",
        categories: {
          acompanhantes: "Companions",
          massagens: "Massages",
          videochamadas: "Video Calls"
        },
        genders: {
          garotas: "Girls",
          trans: "Trans",
          homens: "Men"
        }
      },
      
      // Model Card
      modelCard: {
        verified: "Verified",
        specialty: "Specialty:",
        viewProfile: "View Profile",
        top: "Top",
        featured: "Featured",
        recorded: "Recorded",
        online: "Online",
        offline: "Offline",
        years: "years old",
        reviews: "reviews",
        lastSeen: "Last seen",
        ago: "ago"
      },
      
      // Model Page
      modelPage: {
        loading: "Loading model information...",
        notFound: "Model not found.",
        backToHome: "Back to Home",
        backToModels: "Back to Models",
        verified: "Verified",
        specialty: "Specialty",
        about: "About",
        aboutDescription: "Professional model with expertise in {{specialty}}. Based in {{location}}. Available for bookings and collaborations.",
        connect: "Connect",
        contactNow: "Contact Now",
        bookSession: "Book Session"
      },
      
      // Home Page
      homePage: {
        featuredModels: "Featured Models",
        showMoreModels: "Show More Models"
      },
      
      // Footer
      footer: {
        description: "Connecting talented models with exclusive opportunities in a premium environment.",
        quickLinks: "Quick Links",
        legal: "Legal",
        contact: "Contact",
        links: {
          home: "Home",
          aboutUs: "About Us",
          models: "Models",
          categories: "Categories",
          termsOfService: "Terms of Service",
          privacyPolicy: "Privacy Policy",
          cookiePolicy: "Cookie Policy",
          contactUs: "Contact Us",
          support: "Support",
          faq: "FAQ"
        },
        copyright: "All rights reserved."
      },
      
      // Cities
      cities: {
        "São Paulo": "São Paulo",
        "Rio de Janeiro": "Rio de Janeiro", 
        "ABC Paulista": "ABC Paulista",
        "Campinas": "Campinas",
        "Porto Alegre": "Porto Alegre",
        "Recife": "Recife",
        "Fortaleza": "Fortaleza",
        "Curitiba": "Curitiba",
        "São José dos Campos": "São José dos Campos",
        "Belo Horizonte": "Belo Horizonte"
      },
      
      // Language Switcher
      language: {
        portuguese: "Português",
        english: "English"
      }
    }
  }
};

i18n
  // Detecta o idioma do navegador automaticamente
  .use(LanguageDetector)
  // Passa a instância do i18n para o react-i18next
  .use(initReactI18next)
  // Inicializa o i18n
  .init({
    resources,
    fallbackLng: 'pt', // Idioma padrão se a detecção falhar
    debug: false, // Mude para true se quiser ver logs de debug
    
    // Opções do detector de idioma
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage']
    },
    
    interpolation: {
      escapeValue: false, // Não é necessário para React como XSS já é prevenido por padrão
    }
  });

export default i18n; 