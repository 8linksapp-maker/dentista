import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import CombinedSeoPage from './pages/CombinedSeoPage';
import { useDynamicColors } from './hooks/useDynamicColors';

// Placeholder components for routes not fully implemented in this demo
const About = () => <div className="p-20 text-center text-2xl">Página Sobre (Em construção)</div>;
const Contact = () => <div className="p-20 text-center text-2xl">Página Contato (Em construção)</div>;
const ServicesList = () => <div className="p-20 text-center text-2xl">Lista Completa de Serviços (Use a Home ou Navbar)</div>;

const App = () => {
  useDynamicColors(); // Aplica cores do CMS

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/servicos" element={<ServicesList />} />
            
            {/* Rota Individual de Serviço */}
            <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
            
            {/* Rota Estratégica SEO: Localidade + Serviço */}
            {/* Ex: /sao-paulo-jardins/implantes-dentarios */}
            <Route path="/:localidade/:servico" element={<CombinedSeoPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;