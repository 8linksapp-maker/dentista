import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSiteData } from '../hooks/useSiteData';
import { MapPin, Phone, Calendar, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const CombinedSeoPage = () => {
  const { localidade, servico } = useParams();
  const { data: site } = useSiteData();

  // 1. Encontrar a combinação correta
  const page = site.combinedPages.find(p => {
    const location = site.locations.find(l => l.id === p.locationId);
    const service = site.services.find(s => s.id === p.serviceId);
    return location?.slug === localidade && service?.slug === servico;
  });

  // 2. Se não existir ou não estiver ativa, redirecionar ou 404
  if (!page || !page.isActive) {
    console.log("Combinação não encontrada:", { localidade, servico });
    return <div className="p-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
      <p>A combinação de serviço e localidade não existe.</p>
      <Link to="/" className="text-primary mt-4 inline-block">Ir para Home</Link>
    </div>;
  }

  // 3. Carregar dados relacionados
  const location = site.locations.find(l => l.id === page.locationId)!;
  const service = site.services.find(s => s.id === page.serviceId)!;
  const bgImage = site.media.serviceImages[service.id]?.url;

  // 4. Construir o conteúdo dinâmico (SEO Strategy)
  const headline = page.customHeadline || `${service.name} em ${location.neighborhood}, ${location.city}`;
  const description = page.customDescription || `Procurando por ${service.name} em ${location.neighborhood}? A Sorriso Perfeito oferece tecnologia de ponta e atendimento especializado.`;
  
  return (
    <div className="min-h-screen bg-slate-50">
      <SEO 
        title={`${headline} | Sorriso Perfeito`}
        description={description}
        image={bgImage}
        canonical={`${site.seo.siteUrl}/${location.slug}/${service.slug}`}
      />
      {/* Dynamic Hero */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-6">
              <MapPin size={14} className="mr-1" />
              Atendendo {location.neighborhood} e Região
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
              {headline}
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato" className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-bold rounded-lg shadow-md text-white bg-primary hover:bg-primary-dark transition-all duration-300 hover:scale-105">
                <Calendar className="mr-2" size={20} />
                Agendar Avaliação
              </Link>
              <a href={`tel:${site.settings.contact.phone}`} className="inline-flex justify-center items-center px-6 py-3 border border-gray-300 text-base font-bold rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                <Phone className="mr-2" size={20} />
                {site.settings.contact.phone}
              </a>
            </div>
          </div>
          <div className="rounded-2xl h-80 w-full flex items-center justify-center bg-gray-100 overflow-hidden shadow-xl relative">
            {bgImage ? (
              <>
                <img src={bgImage} alt={`${service.name} em ${location.neighborhood}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </>
            ) : (
              <span className="text-lg text-gray-400">Imagem: {service.name}</span>
            )}
          </div>
        </div>
      </div>

      {/* Benefits specific to this service */}
      <div className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Por que escolher a Sorriso Perfeito em {location.neighborhood}?
          </h2>
          
          <div className="space-y-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="text-green-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{benefit}</h3>
                  <p className="text-slate-600 text-sm">Garantimos a melhor experiência para pacientes de {location.neighborhood}.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Footer for Landing Page */}
      <div className="bg-slate-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Cuide do seu sorriso sem sair de {location.neighborhood}
          </h2>
          <p className="text-slate-400 mb-8">
            Agende hoje mesmo sua consulta para {service.name}.
          </p>
          <Link to="/contato" className="inline-block bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition-colors transform hover:-translate-y-1 shadow-lg">
            Solicitar Orçamento
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CombinedSeoPage;