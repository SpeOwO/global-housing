/**
 * [2. NAVIGATION COMPONENTS]
 */

import { Menu, X } from 'lucide-react';

const NavBar = ({ currentPage, navigate, setIsMenuOpen, isMenuOpen }) => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#F0EFEA]">
    <div className="w-full px-8 md:px-16 h-20 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate('landing')}>
        <img 
          src="/globalhousing.png" 
          alt="글로벌 하우징 로고" 
          className="h-10 md:h-12 w-auto object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://via.placeholder.com/250x50?text=Global+Housing';
          }}
        />
      </div>

      <div className="hidden md:flex items-center gap-10">
        <button onClick={() => navigate('about')} className={`text-base font-bold transition-colors ${currentPage === 'about' ? 'text-[#D4C4A8]' : 'text-[#4A4238] hover:text-[#D4C4A8]'}`}>회사 소개</button>
        <button onClick={() => navigate('partners')} className={`text-base font-bold transition-colors ${currentPage === 'partners' ? 'text-[#D4C4A8]' : 'text-[#4A4238] hover:text-[#D4C4A8]'}`}>협력사</button>
        <button onClick={() => navigate('contact')} className={`text-base font-bold transition-colors ${currentPage === 'contact' ? 'text-[#D4C4A8]' : 'text-[#4A4238] hover:text-[#D4C4A8]'}`}>문의하기</button>
      </div>

      <button className="md:hidden text-[#4A4238]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-[#F0EFEA] py-8 px-8 flex flex-col gap-6 shadow-xl text-left">
        <button onClick={() => navigate('about')} className="text-left text-lg font-bold text-[#4A4238]">회사 소개</button>
        <button onClick={() => navigate('partners')} className="text-left text-lg font-bold text-[#4A4238]">협력사</button>
        <button onClick={() => navigate('contact')} className="text-left text-lg font-bold text-[#4A4238]">문의하기</button>
      </div>
    )}
  </nav>
);

export default NavBar;