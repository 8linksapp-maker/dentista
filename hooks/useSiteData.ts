import { useState } from 'react';
import { defaultSiteData } from '../config/siteConfig';
import { SiteData } from '../types/siteData';

/**
 * Hook para acessar os dados do site (Git-based CMS).
 * 
 * ARQUITETURA DE DADOS:
 * A "fonte da verdade" deste site é o arquivo `config/siteConfig.ts`.
 * 
 * COMO EDITAR O SITE:
 * 1. Edite o arquivo `config/siteConfig.ts` no repositório.
 * 2. Faça o Commit & Push.
 * 3. O Deploy ocorre automaticamente (Vercel/Netlify).
 * 
 * Vantagens desta abordagem (GitOps):
 * - Zero latência (dados compilados estaticamente)
 * - Histórico de alterações gratuito (Git History)
 * - Rollback instantâneo
 * - Zero custo de banco de dados
 */
export const useSiteData = () => {
  // Nesta arquitetura, os dados são constantes e carregados em build-time/runtime imediato.
  // Não há "loading" assíncrono real, pois não há fetch externo.
  const [data] = useState<SiteData>(defaultSiteData);
  
  return { 
    data, 
    isLoading: false, 
    error: null 
  };
};

// Alias para manter compatibilidade caso necessário
export const useSiteDataSimple = useSiteData;