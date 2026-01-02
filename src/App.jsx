import React, { useState } from 'react';
import { 
  Home, 
  Globe, 
  Target, 
  Building2, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Menu, 
  X, 
  ArrowRight 
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 페이지 이동 함수
  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Header: 와이어프레임 좌측 로고 / 우측 메뉴 구성 ---
  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16 h-24 flex justify-between items-center">
        {/* Logo (와이어프레임 좌측 상단) */}
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate('landing')}>
          <div className="w-12 h-12 bg-[#4A4238] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">GH</span>
          </div>
          <span className="text-2xl font-extrabold text-[#4A4238] tracking-tight">GLOBAL HOUSING</span>
        </div>

        {/* Desktop Menu (와이어프레임 우측 상단) */}
        <div className="hidden md:flex items-center gap-12">
          <button onClick={() => navigate('about')} className={`text-lg font-semibold transition-colors ${currentPage === 'about' ? 'text-[#D4C4A8]' : 'text-[#4A4238] hover:text-[#D4C4A8]'}`}>About Us</button>
          <button onClick={() => navigate('partners')} className={`text-lg font-semibold transition-colors ${currentPage === 'partners' ? 'text-[#D4C4A8]' : 'text-[#4A4238] hover:text-[#D4C4A8]'}`}>Partner</button>
          <button onClick={() => navigate('contact')} className={`text-lg font-semibold transition-colors ${currentPage === 'contact' ? 'text-[#D4C4A8]' : 'text-[#4A4238] hover:text-[#D4C4A8]'}`}>Contact Us</button>
        </div>

        {/* 모바일 토글 */}
        <button className="md:hidden text-[#4A4238]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#F0EFEA] py-8 px-8 flex flex-col gap-6 shadow-xl">
          <button onClick={() => navigate('about')} className="text-left text-xl font-bold text-[#4A4238] py-2">About Us</button>
          <button onClick={() => navigate('partners')} className="text-left text-xl font-bold text-[#4A4238] py-2">Partner</button>
          <button onClick={() => navigate('contact')} className="text-left text-xl font-bold text-[#4A4238] py-2">Contact Us</button>
        </div>
      )}
    </nav>
  );

  // --- Landing Page Content ---
  const LandingPage = () => (
    <div className="w-full">
      {/* 1. Hero Section - 배경 이미지 적용 및 줄 간격 수정 */}
      <section 
        className="relative min-h-screen flex items-center pt-24 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80&w=2000')",
          backgroundAttachment: 'fixed'
        }}
      >
        {/* 가독성을 위한 오버레이 */}
        <div className="absolute inset-0 bg-white/50"></div>

        <div className="relative w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-10 max-w-4xl">
            <div className="space-y-4">
              {/* 줄 간격을 leading-tight 또는 arbitrary value [1.2] 등으로 조정했습니다. */}
              <h1 className="text-5xl md:text-5xl lg:text-6xl font-black text-[#4A4238] leading-normal md:leading-normal">
                일본 집 구하기는?<br />
                <span className="text-[#D4C4A8]">글로벌 하우징</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-500 mt-8 leading-relaxed">
                왜 모두 글로벌 하우징을 선택할까요?
              </p>
            </div>
            
            {/* 버튼 영역: 와이어프레임 하단 배치 */}
            <div className="flex flex-wrap gap-6 pt-4">
              <button 
                onClick={() => navigate('about')}
                className="inline-flex items-center justify-center bg-white border-2 border-[#4A4238] text-[#4A4238] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#4A4238] hover:text-white transition-all shadow-lg min-w-[200px]"
              >
                알아보기
              </button>
              <button 
                onClick={() => navigate('contact')}
                className="inline-flex items-center justify-center gap-3 bg-[#4A4238] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#3d362d] transition-all shadow-2xl min-w-[200px]"
              >
                문의하기 <ArrowRight size={24} />
              </button>
            </div>
          </div>
          
          {/* 와이어프레임 우측: 이미지 박스 영역 */}
          <div className="relative hidden lg:block">
            <div className="bg-white/30 backdrop-blur-md rounded-[5rem] aspect-square border border-white/40 shadow-2xl flex flex-col items-center justify-center group overflow-hidden">
               <Home size={200} strokeWidth={0.5} className="text-[#4A4238]/10 group-hover:scale-110 transition-transform duration-700" />
               <p className="mt-12 font-black text-4xl tracking-[0.5em] text-[#4A4238]/20 uppercase">Global Housing</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us (3-Column Layout) */}
      <section className="bg-white py-40 border-b border-[#F0EFEA]">
        <div className="w-full px-8 md:px-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#4A4238] text-center mb-32 uppercase tracking-widest">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 lg:gap-40">
            <div className="text-center space-y-10 group">
              <div className="w-32 h-32 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto text-[#4A4238] shadow-sm group-hover:bg-[#4A4238] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                <Globe size={56} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-tight">Japanese Lifestyle</h3>
                <p className="text-gray-500 text-xl leading-relaxed">일본의 주거 문화와 환경을 심층적으로 분석하여 고객의 삶에 가장 조화로운 공간을 제안합니다.</p>
              </div>
            </div>
            <div className="text-center space-y-10 group">
              <div className="w-32 h-32 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto text-[#4A4238] shadow-sm group-hover:bg-[#4A4238] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                <Target size={56} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-tight">Customer Focus</h3>
                <p className="text-gray-500 text-xl leading-relaxed">고객 만족을 최우선으로, 모든 과정에서 투명하고 신속한 소통을 약속합니다.</p>
              </div>
            </div>
            <div className="text-center space-y-10 group">
              <div className="w-32 h-32 bg-[#FAF9F6] rounded-full flex items-center justify-center mx-auto text-[#4A4238] shadow-sm group-hover:bg-[#4A4238] group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-2">
                <Building2 size={56} />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold uppercase tracking-tight">Global Housing</h3>
                <p className="text-gray-500 text-xl leading-relaxed">글로벌 네트워크를 기반으로 누구나 안심하고 이용할 수 있는 부동산 서비스를 제공합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Intro (Global Housing - 텍스트 좌측, 이미지 우측) */}
      <section className="bg-[#FAF9F6] py-40">
        <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-6xl font-black text-[#4A4238] uppercase tracking-widest leading-tight">Global Housing</h2>
              <div className="w-32 h-2 bg-[#D4C4A8]"></div>
            </div>
            <p className="text-gray-600 leading-[2.2] text-2xl font-medium">
              글로벌 하우징은 풍부한 전문 지식과 실무 노하우를 바탕으로 일본 부동산 시장의 새로운 가치를 창출합니다. 
              단순한 공간 중개를 넘어, 고객의 새로운 시작과 미래를 함께 설계하는 신뢰의 동반자가 되겠습니다. 
              엄격하게 선별된 매물 데이터베이스를 통해 최상의 주거 솔루션을 제공합니다.
            </p>
          </div>
          <div className="bg-white p-12 rounded-[5rem] border border-[#F0EFEA] shadow-2xl">
             <div className="bg-[#FCFBFA] aspect-[16/10] rounded-[3rem] flex items-center justify-center text-gray-300 font-bold text-3xl italic border border-[#F0EFEA] uppercase tracking-widest">
               [인테리어 이미지]
             </div>
          </div>
        </div>
      </section>

      {/* 4. Our Partner (와이어프레임 하단 중앙 타이틀) */}
      <section className="bg-white py-40 border-t border-[#F0EFEA]">
        <div className="w-full px-8 md:px-16">
          <h2 className="text-5xl md:text-6xl font-black text-[#4A4238] text-center mb-32 uppercase tracking-[0.5em]">Our Partner</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-60 border border-[#F0EFEA] rounded-[2.5rem] flex items-center justify-center text-gray-300 font-black text-4xl hover:bg-[#FAF9F6] transition-all cursor-default uppercase tracking-widest shadow-sm">Logo</div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Contact Us (와이어프레임 정보 좌측, 폼 우측) */}
      <section className="bg-[#FAF9F6] py-40">
        <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48">
          <div className="space-y-20">
            <h2 className="text-6xl font-black text-[#4A4238] uppercase tracking-wider">Contact Us</h2>
            <div className="space-y-16">
              <div className="flex gap-10 items-start">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#4A4238] shadow-md shrink-0 border border-[#F0EFEA]">
                  <MapPin size={40} />
                </div>
                <div className="pt-4 space-y-2">
                  <p className="font-bold text-[#4A4238] uppercase text-lg mb-2 tracking-widest opacity-40">Address</p>
                  <p className="text-gray-600 text-2xl font-medium leading-relaxed">Tokyo, Minato-ku, Azabu-juban 1-2-3, Global Bld 4F</p>
                </div>
              </div>
              <div className="flex gap-10 items-center">
                <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-[#4A4238] shadow-md shrink-0 border border-[#F0EFEA]">
                  <Mail size={40} />
                </div>
                <div className="space-y-2">
                  <p className="font-bold text-[#4A4238] uppercase text-lg mb-2 tracking-widest opacity-40">E-mail</p>
                  <p className="text-gray-600 text-2xl font-medium leading-relaxed">info@globalhousing.jp</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-16 lg:p-24 rounded-[5rem] shadow-2xl border border-[#F0EFEA]">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Your Name</label>
                <input type="text" placeholder="성함을 입력해주세요" className="w-full p-6 text-xl bg-[#FCFBFA] border border-[#F0EFEA] rounded-3xl outline-none focus:ring-4 focus:ring-[#4A4238]/5 transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Email Address</label>
                <input type="email" placeholder="이메일을 입력해주세요" className="w-full p-6 text-xl bg-[#FCFBFA] border border-[#F0EFEA] rounded-3xl outline-none focus:ring-4 focus:ring-[#4A4238]/5 transition-all" />
              </div>
              <div className="space-y-4">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-widest ml-2">Message</label>
                <textarea placeholder="문의 내용을 남겨주세요" rows="6" className="w-full p-6 text-xl bg-[#FCFBFA] border border-[#F0EFEA] rounded-3xl outline-none focus:ring-4 focus:ring-[#4A4238]/5 resize-none transition-all"></textarea>
              </div>
              <button className="w-full bg-[#4A4238] text-white py-8 rounded-3xl font-bold text-2xl uppercase tracking-[0.4em] hover:bg-[#3d362d] transition-all shadow-2xl shadow-[#4A4238]/30 mt-6">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );

  // --- Footer: 와이어프레임 하단 구성 ---
  const Footer = () => (
    <footer className="bg-white py-32 border-t border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20 mb-20">
          {/* Logo & Text (좌측) */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-[#4A4238] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-3xl">GH</span>
            </div>
            <span className="text-3xl font-bold text-[#4A4238] uppercase tracking-[0.3em]">GLOBAL HOUSING</span>
          </div>

          {/* Nav Links (중앙) */}
          <div className="flex flex-wrap justify-center gap-12 lg:gap-20 text-xl font-bold uppercase tracking-widest text-gray-400">
            <button onClick={() => navigate('about')} className="hover:text-[#4A4238] transition-colors">About Us</button>
            <button onClick={() => navigate('partners')} className="hover:text-[#4A4238] transition-colors">Partner</button>
            <button onClick={() => navigate('contact')} className="hover:text-[#4A4238] transition-colors">Contact Us</button>
          </div>

          {/* Social (우측) */}
          <div className="flex gap-10">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <Icon key={idx} className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer" size={36} />
            ))}
          </div>
        </div>
        <div className="pt-16 border-t border-[#F0EFEA] text-center">
          <p className="text-gray-300 text-lg uppercase tracking-[0.6em]">© 2024 Global Housing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="w-full min-h-screen selection:bg-[#4A4238] selection:text-white bg-white antialiased">
      <Navbar />
      <main className="w-full">
        {currentPage === 'landing' ? <LandingPage /> : (
          <div className="pt-64 pb-48 w-full px-8 md:px-16 min-h-[90vh] bg-[#FAF9F6]">
            <h2 className="text-8xl font-black text-[#4A4238] uppercase tracking-widest mb-16">{currentPage}</h2>
            <div className="w-48 h-3 bg-[#D4C4A8] rounded-full mb-20"></div>
            <p className="text-gray-400 text-3xl font-medium tracking-widest">이 페이지는 현재 준비 중입니다.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;