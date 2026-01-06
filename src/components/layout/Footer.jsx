import { Instagram, Youtube } from 'lucide-react';
import NaverIcon from '../icons/NaverIcon';

/**
 * [7. FOOTER COMPONENT]
 */

const Footer = ({ navigate }) => (
  <footer className="bg-white py-24 border-t border-[#F0EFEA]">
    <div className="w-full px-8 md:px-16 text-center lg:text-left text-center text-center">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-16 text-center lg:text-left text-center">
        <div className="flex items-center gap-8 cursor-pointer mx-auto lg:mx-0 text-center lg:text-left text-center" onClick={() => navigate('landing')}>
          <img src="/long_globalhousing.png" alt="Global Housing Logo" className="h-8 md:h-10 w-auto object-contain text-center text-center" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="flex flex-wrap justify-center gap-12 text-lg font-black uppercase tracking-widest text-gray-400 mx-auto lg:mx-0 text-center lg:text-left text-center">
          <button onClick={() => navigate('about')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">회사 소개</button>
          <button onClick={() => navigate('partners')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">협력사</button>
          <button onClick={() => navigate('contact')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">문의하기</button>
        </div>
        <div className="flex gap-10 mx-auto lg:mx-0 text-center text-center text-center text-center">
          <Instagram className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer text-center text-center" size={32} />
          <NaverIcon size={32} className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer text-center text-center" />
          <Youtube className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer text-center text-center" size={32} />
        </div>
      </div>
      <div className="pt-16 border-t border-[#F0EFEA] text-center text-gray-300 text-xs font-bold uppercase tracking-[0.6em] text-center text-center">
        © 2024 Global Housing. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;