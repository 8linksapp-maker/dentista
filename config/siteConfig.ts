import { SiteData } from '../types/siteData';

export const defaultSiteData: SiteData = {
  id: 'local-site',
  domain: 'sorrisoperfeito.com.br',
  settings: {
    companyName: 'Sorriso Perfeito Odontologia',
    slogan: 'Tecnologia de ponta e atendimento humanizado. Agende sua avaliação gratuita!',
    logoUrl: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=200',
    contact: {
      phone: '(11) 3333-4444',
      whatsapp: '(11) 99999-8888',
      email: 'contato@sorrisoperfeito.com.br',
      address: { street: 'Rua Oscar Freire, 1200', neighborhood: 'Jardins', city: 'São Paulo', state: 'SP', zipCode: '01426-000', country: 'BR' }
    },
    socialMedia: { 
      instagram: 'https://instagram.com/sorrisoperfeito', 
      facebook: 'https://facebook.com/sorrisoperfeito',
      googleMyBusiness: 'https://goo.gl/maps/example'
    },
    colors: {
      primary: '#0ea5e9',
      secondary: '#64748b',
      accent: '#f59e0b',
      background: '#ffffff',
      foreground: '#1a1a1a',
    },
    openingHours: 'Segunda a Sexta das 08:00 às 19:00, Sábado das 08:00 às 14:00',
    priceRange: '$$',
  },
  seo: {
    defaultTitle: 'Sorriso Perfeito Odontologia | Tratamento Dentário em São Paulo',
    titleTemplate: '%s | Sorriso Perfeito Odontologia',
    defaultDescription: 'Clínica odontológica em SP especializada em Implantes, Clareamento e Ortodontia. Avaliação gratuita, parcelamento em 12x e estacionamento. Agende!',
    siteUrl: 'https://www.sorrisoperfeito.com.br',
    ogImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200',
    twitterHandle: '@sorrisoperfeito',
    schema: {
      type: 'Dentist',
      aggregateRating: {
        ratingValue: '4.9',
        reviewCount: '523'
      }
    },
    pages: {
      home: {
        title: 'Tratamento Dentário em São Paulo | Sorriso Perfeito Odontologia',
        description: 'Clínica odontológica líder em SP. Especialistas em Implantes, Lentes de Contato e Ortodontia Digital. Agende sua avaliação gratuita hoje!',
      },
      sobre: {
        title: 'Sobre Nós',
        description: 'Conheça a Sorriso Perfeito Odontologia, há 15 anos oferecendo tratamento dentário humanizado e tecnológico em São Paulo.',
      },
      contato: {
        title: 'Contato',
        description: 'Entre em contato com a Sorriso Perfeito Odontologia. Orçamento grátis para tratamento dentário em São Paulo via WhatsApp ou Telefone.',
      },
      servicos: {
        title: 'Nossos Tratamentos e Serviços',
        description: 'Confira todos os serviços de tratamento dentário oferecidos pela Sorriso Perfeito Odontologia em São Paulo: Implantes, Clareamento, Canal e mais.',
      },
    },
  },
  pages: {
    home: {
      hero: { 
        title: 'Precisa de Tratamento Dentário em São Paulo? Atendemos Hoje!', 
        subtitle: 'Recupere seu sorriso com a melhor tecnologia de SP. Primeira consulta gratuita, parcelamento em até 12x e estacionamento próprio.', 
        ctaText: 'Solicitar Orçamento Grátis', 
        ctaLink: '/contato',
        backgroundImage: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920'
      },
      about: { 
        title: 'Por que escolher a Sorriso Perfeito Odontologia?', 
        description: 'Há 15 anos transformando vidas em São Paulo. Nossa equipe de especialistas utiliza odontologia digital para garantir tratamentos mais rápidos, precisos e indolores. Sua satisfação é nossa prioridade absoluta.', 
        highlights: [
          { icon: 'Clock', value: '24h', label: 'Disponibilidade' },
          { icon: 'Users', value: '5k+', label: 'Sorrisos Renovados' },
          { icon: 'Star', value: '4.9', label: 'Avaliação Google' },
          { icon: 'Award', value: '100%', label: 'Garantia de Satisfação' }
        ] 
      },
      services: { title: 'Tratamentos Especializados', subtitle: 'Soluções completas em reabilitação oral e estética para você voltar a sorrir com confiança.' },
      contact: { title: 'Fale Conosco Agora', subtitle: 'Não deixe sua saúde bucal para depois. Orçamento grátis e sem compromisso.', formTitle: 'Solicite seu Orçamento' },
    },
  },
  services: [
    { 
      id: '1', 
      slug: 'clareamento-dental', 
      name: 'Clareamento Dental', 
      headline: 'Clareamento Dental em São Paulo - Sorriso Branco Hoje!', 
      description: 'Deseja um sorriso radiante e jovial? Nosso tratamento de Clareamento Dental a Laser elimina manchas causadas por café, vinho e tabaco em tempo recorde. Utilizamos géis clareadores de alta potência com dessensibilizantes exclusivos, garantindo dentes brancos sem dor ou desconforto.', 
      shortDescription: 'Dentes até 3 tons mais brancos na primeira sessão. Agende agora!', 
      benefits: [
        'Resultado visível na 1ª sessão',
        'Tecnologia Zero Sensibilidade',
        'Proteção do esmalte dentário',
        'Sorriso mais jovem e atraente'
      ], 
      howItWorks: [
        { number: 1, title: 'Avaliação Gratuita', description: 'Analisamos a cor atual e saúde dos seus dentes.' },
        { number: 2, title: 'Proteção', description: 'Isolamento da gengiva para total segurança.' },
        { number: 3, title: 'Aplicação Laser', description: 'Ativação do gel clareador com luz LED de alta potência.' },
        { number: 4, title: 'Sorriso Novo', description: 'Saia do consultório com dentes brilhantes.' }
      ], 
      faqs: [
        { question: 'O clareamento estraga o esmalte?', answer: 'Não! Utilizamos produtos aprovados pela ANVISA que agem apenas na pigmentação.' },
        { question: 'Quanto tempo dura o efeito?', answer: 'Com bons cuidados, o resultado pode durar até 2 anos.' },
        { question: 'Posso parcelar?', answer: 'Sim, parcelamos todo o tratamento em até 12x.' }
      ], 
      ctaText: 'Quero Dentes Mais Brancos' 
    },
    { 
      id: '2', 
      slug: 'implantes-dentarios', 
      name: 'Implantes Dentários', 
      headline: 'Implantes Dentários em São Paulo - Volte a Mastigar!', 
      description: 'A perda de dentes afeta sua autoestima e mastigação. Nossos Implantes Dentários de titânio importado são a solução definitiva para substituir dentes perdidos. Com a técnica de Carga Imediata, você pode entrar no consultório e sair com dentes fixos no mesmo dia (sujeito a avaliação óssea). Recupere o prazer de comer o que quiser.', 
      shortDescription: 'Substitua dentes perdidos e recupere sua segurança ao sorrir.', 
      benefits: [
        'Mastigação firme e segura',
        'Aparência 100% natural',
        'Preserva a estrutura óssea',
        'Durabilidade vitalícia'
      ], 
      howItWorks: [
        { number: 1, title: 'Tomografia', description: 'Exame 3D para planejamento preciso da cirurgia.' },
        { number: 2, title: 'Instalação', description: 'Procedimento cirúrgico rápido e indolor com sedação.' },
        { number: 3, title: 'Prótese', description: 'Instalação do dente provisório ou definitivo.' },
        { number: 4, title: 'Revisão', description: 'Acompanhamento para garantir a osseointegração.' }
      ], 
      faqs: [
        { question: 'Colocar implante dói?', answer: 'O procedimento é feito com anestesia local e é muito tranquilo, muitas vezes mais simples que uma extração.' },
        { question: 'Quanto custa um implante?', answer: 'Temos opções nacionais e importadas. Agende sua avaliação gratuita para um orçamento exato.' }
      ], 
      ctaText: 'Solicitar Avaliação de Implante' 
    },
    { 
      id: '3', 
      slug: 'ortodontia', 
      name: 'Ortodontia', 
      headline: 'Ortodontia em São Paulo - Alinhe seu Sorriso!', 
      description: 'Dentes tortos prejudicam sua estética e sua mordida. Trabalhamos com o que há de mais moderno em Ortodontia: desde aparelhos autoligados que aceleram o tratamento, até alinhadores invisíveis (tipo Invisalign) que corrigem seus dentes de forma discreta e confortável. Tenha o sorriso alinhado que sempre sonhou.', 
      shortDescription: 'Aparelhos invisíveis e convencionais para crianças e adultos.', 
      benefits: [
        'Tratamentos até 50% mais rápidos',
        'Opções estéticas transparentes',
        'Melhora na respiração e fala',
        'Facilidade na higienização'
      ], 
      howItWorks: [
        { number: 1, title: 'Escaneamento', description: 'Molde digital 3D da sua arcada (sem massinha).' },
        { number: 2, title: 'Planejamento', description: 'Simulação do resultado final antes de começar.' },
        { number: 3, title: 'Instalação', description: 'Colocação do aparelho ou entrega dos alinhadores.' },
        { number: 4, title: 'Manutenção', description: 'Consultas periódicas para ajustes e evolução.' }
      ], 
      faqs: [
        { question: 'Quanto tempo leva o tratamento?', answer: 'Casos simples podem ser resolvidos em 6 meses com alinhadores.' },
        { question: 'Adulto pode usar aparelho?', answer: 'Com certeza! A ortodontia é eficaz em qualquer idade.' }
      ], 
      ctaText: 'Agendar Avaliação Ortodôntica' 
    },
    { 
      id: '4', 
      slug: 'limpeza-profissional', 
      name: 'Limpeza Profissional', 
      headline: 'Limpeza Dental em São Paulo - Previna Doenças!', 
      description: 'A escovação diária não remove 100% das bactérias. Nossa Limpeza Profissional (Profilaxia) utiliza ultrassom e jato de bicarbonato para remover tártaro, placa bacteriana e manchas superficiais. É o procedimento essencial para prevenir cáries, gengivite e mau hálito. Mantenha sua saúde bucal em dia.', 
      shortDescription: 'Remoção de tártaro, placa e manchas para um hálito puro.', 
      benefits: [
        'Prevenção de cáries e doenças gengivais',
        'Hálito fresco imediato',
        'Remoção de manchas de café',
        'Procedimento rápido e indolor'
      ], 
      howItWorks: [
        { number: 1, title: 'Exame Clínico', description: 'Verificação geral da saúde dos dentes e gengivas.' },
        { number: 2, title: 'Ultrassom', description: 'Remoção indolor de placas calcificadas (tártaro).' },
        { number: 3, title: 'Jato Profissional', description: 'Polimento e remoção de manchas com bicarbonato.' },
        { number: 4, title: 'Flúor', description: 'Aplicação para fortalecer o esmalte.' }
      ], 
      faqs: [
        { question: 'De quanto em quanto tempo devo fazer?', answer: 'Recomendamos a cada 6 meses para garantir a saúde bucal.' },
        { question: 'O jato de bicarbonato dói?', answer: 'Não, pode causar apenas um leve desconforto em dentes sensíveis.' }
      ], 
      ctaText: 'Agendar Limpeza Agora' 
    },
    { 
      id: '5', 
      slug: 'tratamento-de-canal', 
      name: 'Tratamento de Canal', 
      headline: 'Tratamento de Canal em São Paulo - Alívio da Dor!', 
      description: 'Está sentindo dor de dente intensa? Não espere piorar! O Tratamento de Canal (Endodontia) é a única forma de salvar um dente infectado e aliviar a dor imediatamente. Utilizamos microscópio operatório e localizadores apicais digitais para um tratamento preciso, seguro e, na maioria das vezes, em sessão única.', 
      shortDescription: 'Livre-se da dor de dente hoje mesmo. Atendimento de urgência.', 
      benefits: [
        'Alívio imediato da dor',
        'Salva o dente da extração',
        'Técnica mecanizada (mais rápida)',
        'Anestesia computadorizada sem dor'
      ], 
      howItWorks: [
        { number: 1, title: 'Urgência', description: 'Atendimento prioritário para alívio da dor.' },
        { number: 2, title: 'Acesso', description: 'Remoção da polpa infectada (nervo).' },
        { number: 3, title: 'Limpeza', description: 'Desinfecção dos canais radiculares.' },
        { number: 4, title: 'Obturação', description: 'Selamento do canal para evitar novas infecções.' }
      ], 
      faqs: [
        { question: 'Tratar canal escurece o dente?', answer: 'Com as técnicas modernas que usamos, o escurecimento é raro.' },
        { question: 'Dói muito?', answer: 'Não! O tratamento é feito para TIRAR a dor, sob anestesia potente.' }
      ], 
      ctaText: 'Tenho Urgência / Dor' 
    },
    { 
      id: '6', 
      slug: 'protese-dentaria', 
      name: 'Prótese Dentária', 
      headline: 'Prótese Dentária em São Paulo - Sorriso Completo!', 
      description: 'Recupere sua capacidade de mastigar e falar com clareza. Oferecemos todos os tipos de próteses dentárias: fixas, removíveis (dentaduras modernas), sobre implantes e coroas de porcelana pura. Nossas próteses são desenhadas digitalmente para garantir adaptação perfeita e estética natural que devolve sua dignidade.', 
      shortDescription: 'Próteses fixas e móveis com estética natural e conforto.', 
      benefits: [
        'Reabilitação total da mastigação',
        'Rejuvenescimento facial',
        'Materiais resistentes e estéticos',
        'Adaptação confortável'
      ], 
      howItWorks: [
        { number: 1, title: 'Moldagem', description: 'Cópia fiel da sua boca para confecção da peça.' },
        { number: 2, title: 'Prova', description: 'Teste estético e funcional (altura e cor).' },
        { number: 3, title: 'Finalização', description: 'Instalação da prótese polida e ajustada.' },
        { number: 4, title: 'Adaptação', description: 'Ajustes finos para máximo conforto.' }
      ], 
      faqs: [
        { question: 'Qual a melhor prótese?', answer: 'A prótese sobre implante (protocolo) oferece a melhor fixação.' },
        { question: 'Quanto tempo demora para ficar pronta?', answer: 'Depende do tipo, mas trabalhamos com laboratório próprio para agilizar.' }
      ], 
      ctaText: 'Solicitar Orçamento de Prótese' 
    }
  ],
  locations: [
    { 
      id: '1', 
      slug: 'sao-paulo-jardins', 
      name: 'Jardins', 
      city: 'São Paulo', 
      state: 'SP',
      neighborhood: 'Jardins', 
      headline: 'Dentista nos Jardins, São Paulo', 
      description: 'Procurando dentista nos Jardins? A Sorriso Perfeito oferece infraestrutura de luxo e tecnologia de ponta na região da Av. Paulista e Oscar Freire. Agende sua avaliação gratuita.', 
      isActive: true 
    },
    { 
      id: '2', 
      slug: 'sao-paulo-moema', 
      name: 'Moema', 
      city: 'São Paulo', 
      state: 'SP',
      neighborhood: 'Moema', 
      headline: 'Dentista em Moema, São Paulo', 
      description: 'Clínica odontológica referência em Moema. Atendimento humanizado e estacionamento no local (Valet). Especialistas em implantes e estética dental perto do Shopping Ibirapuera.', 
      isActive: true 
    },
    { 
      id: '3', 
      slug: 'sao-paulo-itaim-bibi', 
      name: 'Itaim Bibi', 
      city: 'São Paulo', 
      state: 'SP',
      neighborhood: 'Itaim Bibi', 
      headline: 'Dentista no Itaim Bibi, São Paulo', 
      description: 'Excelência em odontologia no Itaim Bibi. Tratamentos rápidos para executivos e moradores da região da Faria Lima. Clareamento, limpeza e emergências.', 
      isActive: true 
    },
    { 
      id: '4', 
      slug: 'sao-paulo-pinheiros', 
      name: 'Pinheiros', 
      city: 'São Paulo', 
      state: 'SP',
      neighborhood: 'Pinheiros', 
      headline: 'Dentista em Pinheiros, São Paulo', 
      description: 'Consultório odontológico moderno em Pinheiros, próximo ao Metrô Faria Lima. Tratamentos acessíveis com qualidade premium. Ortodontia e Implantes.', 
      isActive: true 
    },
    { 
      id: '5', 
      slug: 'sao-paulo-vila-mariana', 
      name: 'Vila Mariana', 
      city: 'São Paulo', 
      state: 'SP',
      neighborhood: 'Vila Mariana', 
      headline: 'Dentista na Vila Mariana, São Paulo', 
      description: 'Sua saúde bucal em dia na Vila Mariana. Dentistas experientes para toda a família. Próximo ao Metrô Santa Cruz. Aceitamos convênios para reembolso.', 
      isActive: true 
    },
    { 
      id: '6', 
      slug: 'sao-paulo-santo-amaro', 
      name: 'Santo Amaro', 
      city: 'São Paulo', 
      state: 'SP',
      neighborhood: 'Santo Amaro', 
      headline: 'Dentista em Santo Amaro, São Paulo', 
      description: 'Odontologia de alta qualidade na Zona Sul. Clínica completa em Santo Amaro para implantes, próteses e aparelhos. Facilidade de pagamento.', 
      isActive: true 
    }
  ],
  combinedPages: [
    {
      id: 'cp-1',
      serviceId: '2',
      locationId: '1',
      isActive: true,
      customHeadline: 'Implantes Dentários Premium nos Jardins - SP',
      customDescription: 'Recupere seu sorriso com a melhor clínica de implantes dos Jardins. Carga imediata e sedação para seu conforto.',
      createdAt: '2024-01-14',
    },
    {
      id: 'cp-2',
      serviceId: '1',
      locationId: '2',
      isActive: true,
      customHeadline: 'Clareamento Dental a Laser em Moema',
      createdAt: '2024-01-15',
    },
    {
      id: 'page-1768435617745',
      serviceId: '6',
      locationId: '4',
      isActive: true,
      createdAt: '2026-01-15T00:06:57.745Z',
    }
  ],
  media: { 
    heroImages: [], 
    serviceImages: {
      '1': { url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800', alt: 'Clareamento Dental Antes e Depois' },
      '2': { url: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800', alt: 'Implante Dentário Titânio' },
      '3': { url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800', alt: 'Aparelho Ortodôntico Transparente' },
      '4': { url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800', alt: 'Limpeza Dental Profissional' },
      '5': { url: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800', alt: 'Tratamento de Canal sem dor' },
      '6': { url: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800', alt: 'Prótese Dentária Fixa' },
    } 
  },
};