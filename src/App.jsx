import { useState } from 'react';

import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import ContactPage from './pages/ContactPage';

/**
 * [MAIN APP COMPONENT]
 */

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    if (currentPage !== 'landing') {
      setCurrentPage('landing');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full min-h-screen selection:bg-[#4A4238] selection:text-white bg-white antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
        body, #root {
          font-family: 'Noto Sans KR', 'Noto Sans JP', sans-serif !important;
        }
      `}</style>
      
      <NavBar currentPage={currentPage} navigate={navigate} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      
      <main className="w-full">
        {currentPage === 'landing' && <LandingPage navigate={navigate} scrollToSection={scrollToSection} />}
        {currentPage === 'about' && <AboutPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'partners' && <PartnersPage />}
      </main>
      
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;