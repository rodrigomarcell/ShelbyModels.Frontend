import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Recursos de tradução
const resources = {
  pt: {
    translation: {
      // Header
      header: {
        publish: "Anunciar"
      },

      // Search Bar
      searchBar: {
        locationPlaceholder: "Onde está você?",
        searchPlaceholder: "O que procura?",
        searchButton: "Procurar"
      },

      // Filters
      filters: {
        city: "Cidade",
        search: "O que você procura?",
        gender: "Gênero",
        advanced: "Filtros avançados",
        confirmCity: "Confirmar cidade",
        popularCities: "Cidades populares"
      },
      gender: { F: "Garotas", M: "Homens", TW: "Mulher trans", TM: "Homem trans" },
      home: { loadMore: "Carregar mais", noResults: "Nenhum perfil encontrado", selectCity: "Selecione uma cidade" },
      card: { video: "Vídeo", view: "Ver perfil", priceHour: "R$/h", verified: "Verificada", notVerified: "Não verificada", favAdd: "Adicionar aos favoritos", favRemove: "Remover dos favoritos" },
      profile: { services: "Serviços", bio: "Sobre", whatsapp: "Chamar no WhatsApp", report: "Denunciar" },
      legal: { disclaimer: "O ShelbyModels não intermedeia pagamentos ou encontros. Responsabilidade do anunciante." },
      modal: { advancedTitle: "Filtros avançados", close: "Fechar" },

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

        // New footer structure
        cities: "CIDADES",
        brandName: "SHELBY MODELS",
        mainDisclaimer: "ShelbyModels.com.br é um magazine online de anúncios de acompanhantes. Não somos agência, nem intermediamos qualquer contato ou pagamento entre anunciantes e visitantes. O conteúdo exibido é de responsabilidade exclusiva das anunciantes, incluindo fotos, textos e informações de contato. Ao utilizar este site, o usuário declara ser maior de 18 anos e estar ciente de que o conteúdo possui natureza adulta. Todo e qualquer contato deve ser feito diretamente com as acompanhantes, via telefone ou redes sociais indicadas no perfil. O site não realiza agendamentos, não se responsabiliza por pagamentos ou serviços contratados.",

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
        copyright: "Todos os direitos reservados.",

        // New footer content based on reference image
        brazilTitle: "Brasil, país do Carnaval e das acompanhantes mais alegres do mundo!",
        brazilDescription1: "Exuberante, misterioso e intenso, tão ultramoderno como antigo, com uma sociedade de várias etnias, vegetação incomparável e cidades imensas se encontram no Brasil, um país vasto de personalidade indecifrável. Localizada na América Latina e conhecido pelas suas famosas praias e festivais extravagantes, com mais de 212 milhões de cidadãos, é o mais povoado da região e conseguiu se transformar em uma das principais potências econômicas do hemisfério sul.",
        brazilDescription2: "O país se estende desde a bacia do Amazonas até o Uruguai, passando pela costa atlântica, trazendo um intenso fluxo de turistas que chegam em busca de diversão, sensualidade, clima tropical e garotas de programa que se entregam aos encantos do sexo em um clima de festa.",
        brazilDescription3: "A diversidade cultural deste país é tão fascinante quanto suas escorts",
        brazilDescription4: "A cultura e costumes do Brasil são reflexo da mistura dos grupos que formaram a sua identidade: os portugueses, os povos nativos e os imigrantes que vieram da África. Podemos notar as influências europeias nas cidades mais importantes, como São Paulo, lugar de acompanhantes VIP dominado pelo glamour característico do Velho Mundo. Por outro lado, a importância e o destaque do povo indígena se refletem na cozinha brasileira, a qual se caracteriza pela grande variedade de pratos à base de carnes e frutas exóticas. Já as atrações deixadas pela marca da música e em diversos estilos, dança e música alta, gritos e risadas, expressões folclóricas inesquecíveis e celebrações populares intermináveis, construídas a partir de centenas de lendas e crenças tão antigas quanto originais.",
        brazilDescription5: "Diversão e acompanhantes gostosas! Os brasileiros adoram festas",
        brazilDescription6: "Carros alegóricos, fantasias exuberantes, dança e música alta, gritos e risadas, expressões folclóricas inesquecíveis e celebrações populares intermináveis, construídas a partir de centenas de lendas e crenças tão antigas quanto originais. O Brasil parece ser um país que vive em festa, que escolhe fugir da realidade mediante celebrações como o Carnaval, o qual é significativamente importante no Rio de Janeiro, cidade com garotas de programa fabulosas e onde se encontram festas desenhadas com o intuito de renovar a energia em um ambiente de alegria extraordinária.",
        brazilDescription7: "Os desejos se tornam realidade com as garotas de programa do ShelbyModels",
        brazilDescription8: "Prazer, relaxamento e excitação na companhia das garotas de programa de beleza incomparável. ShelbyModels oferece tudo isso e mais, dando a possibilidade de localizar as melhores escorts do Brasil. Os encontros sexuais destas prostitutas conseguem superar até mesmo os mais experientes e exigentes, pelo simples fato de que é na cama onde elas se movem com verdadeira audácia e ousadia. Estamos falando de acompanhantes que fazem dos encontros eróticos momentos em que a alegria e a dedicação estão sempre presentes, tanto de dia como de noite. O encanto de seus serviços otimiza ao máximo o fetichismo de seus clientes, transformando cada aventura íntima em uma memória inesquecível, às vezes de forma sutil ou poética, às vezes com força e intensidade sem limites.",

        mainPages: "Páginas principais de Brasil",
        mainCities: "Cidades principais do Brasil",
        mainSearches: "Principais pesquisas em Brasil",

        disclaimer: {
          attention: "ATENÇÃO:",
          text: "Não somos agência, somos um site de anúncios de acompanhantes. O site não intermedia os serviços anunciados, se isentando de qualquer responsabilidade. Toda a negociação é feita diretamente com a anunciante através do número de telefone que consta no perfil. Nunca efetue pagamento de PIX adiantado antes de ver a anunciante pessoalmente. Caso não seja a mesma das fotos, recuse o serviço e denuncie."
        },

        // Company info
        companyName: "ShelbyModels Global Classifieds OOD",
        companyAddress: "Boulevard Shipchenski Prohod",
        companyDetails: "Number 18 • Floor 3 • Office 301",
        companyLocation: "Slatina, Sofia 1113, Bulgaria",

        // Legal links
        legalTexts: "Textos Legais",
        privacyPolicy: "Política Privacidade",
        cookies: "Cookies",
        contact: "Contatar",
        seeAll: "Ver tudo"
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
      header: { publish: "Publish Ad" },

      // Search Bar
      searchBar: {
        locationPlaceholder: "Where are you?",
        searchPlaceholder: "What are you looking for?",
        searchButton: "Search"
      },

      // Filters
      filters: { city: "City", search: "What are you looking for?", gender: "Gender", advanced: "Advanced filters", confirmCity: "Confirm city", popularCities: "Popular cities" },
      gender: { F: "Girls", M: "Men", TW: "Trans woman", TM: "Trans man" },
      home: { loadMore: "Load more", noResults: "No profiles found", selectCity: "Select a city" },
      card: { video: "Video", view: "View profile", priceHour: "R$/h", verified: "Verified", notVerified: "Not verified", favAdd: "Add to favorites", favRemove: "Remove from favorites" },
      profile: { services: "Services", bio: "About", whatsapp: "Chat on WhatsApp", report: "Report" },
      legal: { disclaimer: "ShelbyModels does not intermediate payments or meetings. Advertisers are responsible." },
      modal: { advancedTitle: "Advanced filters", close: "Close" },

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

        // New footer structure
        cities: "CITIES",
        brandName: "SHELBY MODELS",
        mainDisclaimer: "ShelbyModels.com.br is an online magazine for escort advertisements. We are not an agency, nor do we mediate any contact or payment between advertisers and visitors. The content displayed is the exclusive responsibility of the advertisers, including photos, texts and contact information. By using this site, the user declares to be over 18 years old and aware that the content is adult in nature. Any and all contact must be made directly with the companions, via phone or social networks indicated in the profile. The site does not make appointments, is not responsible for payments or contracted services.",

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
        copyright: "All rights reserved.",

        // New footer content based on reference image
        brazilTitle: "Brazil, country of Carnival and the happiest companions in the world!",
        brazilDescription1: "Exuberant, mysterious and intense, as ultramodern as ancient, with a society of various ethnicities, incomparable vegetation and immense cities are found in Brazil, a vast country with an indecipherable personality. Located in Latin America and known for its famous beaches and extravagant festivals, with more than 212 million citizens, it is the most populated in the region and has managed to become one of the main economic powers of the southern hemisphere.",
        brazilDescription2: "The country extends from the Amazon basin to Uruguay, passing through the Atlantic coast, bringing an intense flow of tourists who arrive in search of fun, sensuality, tropical climate and program girls who surrender to the charms of sex in a festive atmosphere.",
        brazilDescription3: "The cultural diversity of this country is as fascinating as its escorts",
        brazilDescription4: "The culture and customs of Brazil are a reflection of the mixture of groups that formed its identity: the Portuguese, the native peoples and the immigrants who came from Africa. We can note the European influences in the most important cities, such as São Paulo, a place of VIP companions dominated by the characteristic glamour of the Old World. On the other hand, the importance and prominence of the indigenous people are reflected in Brazilian cuisine, which is characterized by the great variety of dishes based on meat and exotic fruits. The attractions left by the mark of music and in various styles, dance and loud music, screams and laughter, unforgettable folkloric expressions and endless popular celebrations, built from hundreds of legends and beliefs as ancient as they are original.",
        brazilDescription5: "Fun and hot companions! Brazilians love parties",
        brazilDescription6: "Allegorical cars, exuberant costumes, dance and loud music, screams and laughter, unforgettable folkloric expressions and endless popular celebrations, built from hundreds of legends and beliefs as ancient as they are original. Brazil seems to be a country that lives in celebration, that chooses to escape from reality through celebrations like Carnival, which is significantly important in Rio de Janeiro, a city with fabulous program girls and where parties are designed with the intention of renewing energy in an atmosphere of extraordinary joy.",
        brazilDescription7: "Dreams come true with ShelbyModels program girls",
        brazilDescription8: "Pleasure, relaxation and excitement in the company of program girls of incomparable beauty. ShelbyModels offers all this and more, giving the possibility to locate the best escorts in Brazil. The sexual encounters of these prostitutes manage to surpass even the most experienced and demanding, for the simple fact that it is in bed where they move with true audacity and boldness. We are talking about companions who make erotic encounters moments where joy and dedication are always present, both day and night. The charm of their services maximizes their clients' fetishism, transforming each intimate adventure into an unforgettable memory, sometimes subtly or poetically, sometimes with force and intensity without limits.",

        mainPages: "Main pages of Brazil",
        mainCities: "Main cities of Brazil",
        mainSearches: "Main searches in Brazil",

        disclaimer: {
          attention: "ATTENTION:",
          text: "We are not an agency; we are an escort ad site. The site does not mediate the advertised services, thus disclaiming any liability. All negotiation is done directly with the advertiser through the phone number listed on the profile. Never make an advance PIX payment before seeing the advertiser in person. If she is not the same as in the photos, refuse the service and report it."
        },

        // Company info
        companyName: "ShelbyModels Global Classifieds OOD",
        companyAddress: "Boulevard Shipchenski Prohod",
        companyDetails: "Number 18 • Floor 3 • Office 301",
        companyLocation: "Slatina, Sofia 1113, Bulgaria",

        // Legal links
        legalTexts: "Legal Texts",
        privacyPolicy: "Privacy Policy",
        cookies: "Cookies",
        contact: "Contact",
        seeAll: "See all"
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
