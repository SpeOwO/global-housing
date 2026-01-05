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
  ArrowRight,
  Search,
  ClipboardCheck,
  Key,
  HelpCircle,
  Plus,
  Minus,
  CheckCircle2,
  FileText,
  UserCheck,
  CreditCard,
  Building,
  HeartHandshake,
  ChevronRight
} from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const navigate = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const Navbar = () => (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16 h-20 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate('landing')}>
          <div className="w-10 h-10 bg-[#4A4238] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg text-center leading-none">GH</span>
          </div>
          <span className="text-xl font-extrabold text-[#4A4238] tracking-tight uppercase">Global Housing</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          <button onClick={() => navigate('about')} className={`text-base font-bold transition-colors text-[#4A4238] hover:text-[#D4C4A8]`}>회사 소개</button>
          <button onClick={() => navigate('partners')} className={`text-base font-bold transition-colors text-[#4A4238] hover:text-[#D4C4A8]`}>협력사</button>
          <button onClick={() => navigate('contact')} className={`text-base font-bold transition-colors text-[#4A4238] hover:text-[#D4C4A8]`}>문의하기</button>
        </div>

        <button className="md:hidden text-[#4A4238]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-[#F0EFEA] py-8 px-8 flex flex-col gap-6 shadow-xl">
          <button onClick={() => navigate('about')} className="text-left text-lg font-bold text-[#4A4238] py-2">회사 소개</button>
          <button onClick={() => navigate('partners')} className="text-left text-lg font-bold text-[#4A4238] py-2">협력사</button>
          <button onClick={() => navigate('contact')} className="text-left text-lg font-bold text-[#4A4238] py-2">문의하기</button>
        </div>
      )}
    </nav>
  );

  const LandingPage = () => (
    <div className="w-full">
      {/* 1. Hero Section - 원본 코드 유지 */}
      <section 
        className="relative min-h-screen flex items-center pt-24 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80&w=2000')",
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-10 max-w-4xl">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#4A4238] leading-tight md:leading-[1.2]">
                일본 집 구하기는?<br />
                <span className="text-[#D4C4A8]">글로벌 하우징</span>
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-500 mt-8 leading-relaxed">
                왜 모두 글로벌 하우징을 선택할까요?
              </p>
            </div>
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
        </div>
      </section>

      {/* 2. Rent/Sale Selection Section */}
      <section className="bg-white py-24 border-b border-[#F0EFEA]">
        <div className="w-full px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div 
            className="relative h-[550px] group overflow-hidden rounded-[4rem] cursor-pointer shadow-xl" 
            onClick={() => scrollToSection('rental-process')}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="absolute inset-0 bg-[#4A4238]/40 group-hover:bg-[#4A4238]/20 transition-colors duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6 text-center px-10">
              <div className="p-6 bg-white/20 backdrop-blur-md rounded-3xl mb-4 border border-white/30">
                <Building2 size={70} strokeWidth={1} />
              </div>
              <h3 className="text-5xl font-black uppercase tracking-tighter leading-none text-white">Rent</h3>
              <p className="text-2xl font-bold opacity-80 leading-relaxed text-white">일본 생활의 시작, 체계적인 임대 프로세스</p>
              <div className="pt-6 flex items-center gap-4 text-xl font-black group-hover:gap-8 transition-all duration-500 text-white">
                <span>PROCESS VIEW</span> <ArrowRight size={24} />
              </div>
            </div>
          </div>

          <div 
            className="relative h-[550px] group overflow-hidden rounded-[5rem] cursor-pointer shadow-xl" 
            onClick={() => scrollToSection('sale-section')}
          >
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000')" }}></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#D4C4A8] via-[#D4C4A8]/40 to-transparent group-hover:from-[#D4C4A8]/90 transition-all duration-500"></div>
            <div className="absolute bottom-20 left-16 right-16 text-white space-y-6">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-[2.5rem] flex items-center justify-center mb-4 border border-white/30 text-white">
                <Home size={40} strokeWidth={1} />
              </div>
              <h3 className="text-7xl font-black uppercase tracking-tighter leading-none text-white">Sale</h3>
              <p className="text-2xl font-bold opacity-80 leading-relaxed text-white">수익성 높은 일본 부동산 투자와 매매 서비스</p>
              <div className="pt-6 flex items-center gap-4 text-xl font-black group-hover:gap-8 transition-all duration-500 text-white">
                <span>SERVICE VIEW</span> <ArrowRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [수정된 섹션] 3. Rental Process Section - 간격을 최소화하여 이미지 흐름 강화 */}
      <section id="rental-process" className="bg-[#FAF9F6] py-40 border-b border-[#F0EFEA]">
        <div className="w-full px-4 md:px-10 lg:px-16">
          <div className="text-center mb-32">
            <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-xl uppercase block mb-4">How it works</span>
            <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] uppercase tracking-widest leading-none text-center">Rental Process</h2>
            <div className="w-32 h-2 bg-[#D4C4A8] mx-auto mt-8"></div>
          </div>
          
          {/* gap-x-4에서 gap-x-1로 줄여 이미지 사이의 여백을 최소화 */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-x-1 gap-y-20 relative">
            {[
              { id: 1, title: "상담 및 문의", desc: "라이프스타일 맞춤 상담" },
              { id: 2, title: "매물 선별 및 방문", desc: "직접/영상 투어 진행" },
              { id: 3, title: "신청 및 심사", desc: "특화 심사 노하우 지원" },
              { id: 4, title: "정산", desc: "초기 비용 확인 및 정산" },
              { id: 5, title: "계약 체결", desc: "안전한 정식 계약 완료" },
              { id: 6, title: "사후 관리", desc: "정착 및 사후 생활 지원" }
            ].map((step) => (
              <div key={step.id} className="flex flex-col items-center group px-1">
                
                {/* 이미지 영역: gap-x를 줄이고 둥근 프레임을 최적화 */}
                <div className="w-full aspect-square flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105">
                  <img 
                    src={`/src/assets/step${step.id}.png`} 
                    alt={step.title} 
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/200?text=Step" + step.id;
                    }}
                  />
                </div>

                {/* 텍스트 가독성 최적화 */}
                <div className="mt-4 text-center">
                  <h4 className="text-base lg:text-lg font-black text-[#4A4238] uppercase tracking-tighter leading-tight break-keep">{step.title}</h4>
                  <p className="hidden md:block text-[10px] lg:text-xs text-gray-400 font-bold mt-1 break-keep leading-relaxed opacity-80">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sale Section */}
      <section id="sale-section" className="bg-white py-40 overflow-hidden">
        <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-48 items-center">
          <div className="space-y-12">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-6xl md:text-7xl font-black text-[#4A4238] uppercase tracking-widest leading-tight">Sale Service</h2>
              <div className="w-32 h-2 bg-[#D4C4A8]"></div>
            </div>
            <p className="text-gray-600 leading-[2.2] text-2xl font-medium text-center lg:text-left">
              일본 부동산 시장의 투자 가치를 전문적으로 분석합니다. 
              수익형 부동산부터 거주용 주택까지, 글로벌 하우징의 전문가 팀이 법률 및 세무 상담을 포함한 토탈 매매 솔루션을 제공합니다.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
              {[
                { title: "전문가 컨설팅", desc: "15년 경력 투자 매니저 배정" },
                { title: "사후 관리 서비스", desc: "임대 관리 및 세무 업무 대행" }
              ].map((box, i) => (
                <div key={i} className="p-8 bg-[#FAF9F6] rounded-[2.5rem] border border-[#F0EFEA] hover:bg-[#4A4238] group transition-all duration-500 cursor-default">
                  <h4 className="text-xl md:text-2xl font-bold text-[#4A4238] group-hover:text-white mb-2 leading-none">{box.title}</h4>
                  <p className="text-gray-500 group-hover:text-white/70 text-base md:text-lg font-medium">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative text-center">
             <div className="bg-[#FAF9F6] p-12 rounded-[5rem] border border-[#F0EFEA] shadow-2xl relative z-10 mx-auto max-w-lg lg:max-w-none">
               <div className="bg-white aspect-square rounded-[3.5rem] flex flex-col items-center justify-center p-10 space-y-8 shadow-inner">
                 <Building size={100} className="text-[#D4C4A8]" strokeWidth={1} />
                 <div className="space-y-2">
                   <h3 className="text-3xl md:text-4xl font-black text-[#4A4238] uppercase tracking-tight leading-none text-[#4A4238]">Premium Asset</h3>
                   <p className="text-lg md:text-xl font-bold text-[#D4C4A8] leading-none text-center">Management Strategy</p>
                 </div>
                 <button className="px-10 py-4 bg-[#4A4238] text-white rounded-2xl font-bold text-lg hover:bg-[#3d362d] transition-all shadow-xl">
                   매매 상담 예약하기
                 </button>
               </div>
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#D4C4A8]/10 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-40 border-t border-[#F0EFEA]">
        <div className="w-full px-8 md:px-16 max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black text-[#4A4238] uppercase tracking-[0.3em] mb-4 text-center leading-none text-[#4A4238]">FAQ</h2>
            <div className="w-24 h-1.5 bg-[#D4C4A8] mx-auto"></div>
          </div>
          
          <div className="space-y-6">
            {[
              { q: "비자가 아직 안 나왔는데 미리 계약할 수 있나요?", a: "네, 입학 허가서나 채용 내정 통지서가 있다면 비자 발급 전에도 심사 진행 및 가계약이 가능한 매물들이 다수 있습니다." },
              { q: "한국에서 온라인으로 집을 보고 계약할 수 있나요?", a: "실시간 영상 투어와 IT 중설 시스템으로 한국에서도 정식 계약이 가능합니다. 입주일에 열쇠만 수령하세요." },
              { q: "초기 비용은 보통 어느 정도 드나요?", a: "일반적으로 월세의 4~5개월분이 소요됩니다. 예산에 맞는 매물을 우선 선별해 드립니다." },
              { q: "보증인이 없는 외국인도 계약이 가능한가요?", a: "네, 글로벌 하우징은 보증회사 제도를 활용하여 보증인 없이도 계약이 가능한 외국인 친화적 매물을 전문적으로 취급합니다." }
            ].map((item, idx) => (
              <div key={idx} className="rounded-[3rem] border border-[#F0EFEA] overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-10 flex justify-between items-center text-left bg-[#FAF9F6] hover:bg-gray-50 transition-colors"
                >
                  <div className="flex gap-6 items-center">
                    <HelpCircle size={32} className="text-[#D4C4A8] shrink-0" />
                    <span className="text-xl md:text-2xl font-bold text-[#4A4238] leading-tight text-[#4A4238]">{item.q}</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-[#4A4238]/10 flex items-center justify-center shrink-0">
                    {openFaq === idx ? <Minus size={20} className="text-[#4A4238]" /> : <Plus size={20} className="text-[#4A4238]" />}
                  </div>
                </button>
                {openFaq === idx && (
                  <div className="p-10 px-12 md:px-24 bg-white border-t border-[#F0EFEA] animate-in slide-in-from-top-4 duration-300 text-left">
                    <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const Footer = () => (
    <footer className="bg-white py-32 border-t border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16 text-center lg:text-left">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-24 mb-24 text-center lg:text-left">
          <div className="flex items-center gap-8 cursor-pointer mx-auto lg:mx-0" onClick={() => navigate('landing')}>
            <div className="w-16 h-16 bg-[#4A4238] rounded-full flex items-center justify-center shadow-xl text-center">
              <span className="text-white font-bold text-4xl leading-none text-center">GH</span>
            </div>
            <span className="text-4xl font-black text-[#4A4238] uppercase tracking-[0.2em] leading-none text-[#4A4238]">GLOBAL HOUSING</span>
          </div>

          <div className="flex flex-wrap justify-center gap-16 text-2xl font-black uppercase tracking-widest text-gray-400 mx-auto lg:mx-0">
            <button onClick={() => navigate('about')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">회사 소개</button>
            <button onClick={() => navigate('partners')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">협력사</button>
            <button onClick={() => navigate('contact')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">문의하기</button>
          </div>

          <div className="flex gap-14 mx-auto lg:mx-0">
            {[Facebook, Instagram, Twitter].map((Icon, idx) => (
              <Icon key={idx} className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer" size={48} />
            ))}
          </div>
        </div>
        <div className="pt-20 border-t border-[#F0EFEA] text-center">
          <p className="text-gray-300 text-xl font-medium uppercase tracking-[0.6em] leading-none">© 2024 Global Housing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="w-full min-h-screen selection:bg-[#4A4238] selection:text-white bg-white antialiased">
      <Navbar />
      <main className="w-full">
        {currentPage === 'landing' ? <LandingPage /> : (
          <div className="pt-48 pb-48 w-full px-8 md:px-16 min-h-[90vh] bg-[#FAF9F6] text-center flex flex-col items-center justify-center">
            <h2 className="text-7xl md:text-8xl font-black text-[#4A4238] uppercase tracking-widest mb-16 leading-none text-[#4A4238]">
              {currentPage === 'about' ? '회사 소개' : currentPage === 'partners' ? '협력사' : '문의하기'}
            </h2>
            <div className="w-64 h-4 bg-[#D4C4A8] rounded-full mb-24 mx-auto"></div>
            <p className="text-gray-400 text-4xl font-bold tracking-[0.2em]">이 페이지는 현재 준비 중입니다.</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;