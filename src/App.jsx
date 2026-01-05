import React, { useState } from 'react';
import { 
  Home, 
  Globe, 
  Target, 
  Building2, 
  Mail, 
  MapPin, 
  Instagram, 
  Youtube,
  Menu, 
  X, 
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  FileText,
  UserCheck,
  Building,
  HeartHandshake,
  ChevronRight,
  Award,
  Users,
  ShieldCheck,
  Map
} from 'lucide-react';

/**
 * [1. SHARED COMPONENTS & ASSETS]
 */

// 네이버 블로그 커스텀 아이콘 (꽉 찬 정자체 B 형상)
const NaverIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path 
      d="M6 2h8c3.866 0 7 2.686 7 6 0 1.933-1.067 3.633-2.652 4.5 1.585 0.867 2.652 2.567 2.652 4.5 0 3.314-3.134 6-7 6H6V2zm3 3v6h5c1.657 0 3-1.343 3-3s-1.343-3-3-3H9zm0 9v7h6c1.657 0 3-1.343 3-3s-1.343-4-3-4H9z" 
      fill="currentColor"
    />
  </svg>
);

/**
 * [2. NAVIGATION COMPONENTS]
 */

const Navbar = ({ currentPage, navigate, setIsMenuOpen, isMenuOpen }) => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#F0EFEA]">
    <div className="w-full px-8 md:px-16 h-20 flex justify-between items-center">
      <div className="flex items-center gap-3 cursor-pointer shrink-0" onClick={() => navigate('landing')}>
        <img 
          src="/src/assets/globalhousing.png" 
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
      <div className="md:hidden bg-white border-t border-[#F0EFEA] py-8 px-8 flex flex-col gap-6 shadow-xl">
        <button onClick={() => navigate('about')} className="text-left text-lg font-bold text-[#4A4238]">회사 소개</button>
        <button onClick={() => navigate('partners')} className="text-left text-lg font-bold text-[#4A4238]">협력사</button>
        <button onClick={() => navigate('contact')} className="text-left text-lg font-bold text-[#4A4238]">문의하기</button>
      </div>
    )}
  </nav>
);

/**
 * [3. LANDING PAGE COMPONENTS]
 */

const LandingPage = ({ navigate, scrollToSection }) => (
  <div className="w-full">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center pt-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80&w=2000')", backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <div className="space-y-10 max-w-4xl text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#4A4238] leading-tight md:leading-[1.2]">
              일본 집 구하기는?<br />글로벌 하우징
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-500 mt-8 leading-relaxed">
              왜 모두 글로벌 하우징을 선택할까요?
            </p>
          </div>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <button onClick={() => navigate('about')} className="inline-flex items-center justify-center bg-white border-2 border-[#4A4238] text-[#4A4238] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#4A4238] hover:text-white transition-all shadow-lg min-w-[200px]">알아보기</button>
            <button onClick={() => navigate('contact')} className="inline-flex items-center justify-center gap-3 bg-[#4A4238] text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#3d362d] transition-all shadow-2xl min-w-[200px]">문의하기 <ArrowRight size={24} /></button>
          </div>
        </div>
      </div>
    </section>

    {/* Rent/Sale Cards */}
    <section className="bg-white min-h-screen flex items-center py-20 border-b border-[#F0EFEA]">
      <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          { id: 'rental-process', title: 'Rent', sub: '임대 서비스', desc: '일본 생활의 시작, 체계적인 임대 프로세스', icon: Building2, img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000' },
          { id: 'sale-section', title: 'Sale', sub: '매매 서비스', desc: '수익성 높은 일본 부동산 투자 가이드', icon: Home, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000' }
        ].map((card, i) => (
          <div key={i} className="relative h-[600px] group overflow-hidden rounded-[3rem] cursor-pointer shadow-2xl transform transition-all duration-700 hover:-translate-y-4 isolate translate-z-0" onClick={() => scrollToSection(card.id)}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110" style={{ backgroundImage: `url(${card.img})` }}></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6 text-center px-10">
              <div className="p-7 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 mb-2"><card.icon size={50} strokeWidth={1} /></div>
              <div className="space-y-2">
                <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase">{card.sub}</span>
                <h3 className="text-7xl font-black uppercase tracking-tighter leading-none">{card.title}</h3>
              </div>
              <p className="text-xl font-bold opacity-90 max-w-xs">{card.desc}</p>
              <div className="pt-6 flex items-center gap-4 text-sm font-black tracking-widest bg-white text-[#4A4238] px-8 py-4 rounded-full translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl text-center">
                VIEW DETAILS <ArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Rental Process */}
    <section id="rental-process" className="bg-[#FAF9F6] min-h-screen flex items-center py-20 border-b border-[#F0EFEA]">
      <div className="w-full px-4 md:px-10 lg:px-16">
        <div className="text-center mb-16">
          <span className="text-[#D4C4A8] font-black tracking-[0.4em] text-sm uppercase block mb-2">How it works</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#4A4238] uppercase tracking-widest leading-none text-center">Rental Process</h2>
          <div className="w-20 h-1.5 bg-[#D4C4A8] mx-auto mt-6"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-0 gap-y-12 relative max-w-screen-xl mx-auto text-center">
          {[
            { id: 1, title: "1. 상담 및 문의", desc: "라이프스타일 맞춤 상담" },
            { id: 2, title: "2. 매물 선별 및 컨설팅", desc: "고객 맞춤형 매물 탐색" },
            { id: 3, title: "3. 내견", desc: "온/오프라인 내견 진행" },
            { id: 4, title: "4. 심사", desc: "입주 가능 여부 심사" },
            { id: 5, title: "5. 계약 체결", desc: "안전한 정식 계약 완료" },
            { id: 6, title: "6. 입주", desc: "이사 및 입주 완료" }
          ].map((step) => (
            <div key={step.id} className="flex flex-col items-center group px-0 relative text-center">
              <div className="w-full max-w-[180px] aspect-square flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105 px-1 mx-auto">
                <img src={`/src/assets/step${step.id}.png`} alt={step.title} className="w-full h-full object-contain" onError={(e) => { e.target.src = "https://via.placeholder.com/250?text=Step" + step.id; }} />
              </div>
              <div className="mt-2 text-center w-full px-1">
                <h4 className="text-sm lg:text-base font-black text-[#4A4238] uppercase tracking-tighter leading-tight break-keep">{step.title}</h4>
                <p className="hidden md:block text-[10px] text-gray-400 font-bold mt-1 break-keep leading-tight opacity-70">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Sale Service */}
    <section id="sale-section" className="bg-white min-h-screen flex items-center py-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FAF9F6] -z-0 hidden lg:block"></div>
      <div className="w-full px-8 md:px-16 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12 text-center lg:text-left">
          <div className="space-y-6">
            <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block">Investment Guide</span>
            <h2 className="text-6xl md:text-8xl font-black text-[#4A4238] uppercase tracking-widest leading-none">Sale<br />Service</h2>
            <div className="w-32 h-2 bg-[#4A4238] rounded-full mx-auto lg:mx-0"></div>
          </div>
          <p className="text-gray-600 leading-[2] text-xl md:text-2xl font-bold max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">단순한 매매를 넘어, 일본 부동산 시장의 흐름을 분석하고<br /><span className="text-[#4A4238]">최적의 자산 가치 창출</span>을 위한 토탈 솔루션을 제안합니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {[{ title: "전문가 컨설팅", desc: "15년 경력 투자 매니저 배정", icon: UserCheck }, { title: "사후 관리 서비스", desc: "임대 관리 및 세무 업무 지원", icon: HeartHandshake }].map((box, i) => (
              <div key={i} className="p-10 bg-[#FAF9F6] rounded-[2.5rem] border border-[#F0EFEA] hover:bg-[#4A4238] group transition-all duration-500 shadow-lg hover:shadow-2xl">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4C4A8] transition-all mx-auto lg:mx-0 text-center lg:text-left"><box.icon size={28} className="text-[#4A4238] group-hover:text-white" /></div>
                <h4 className="text-2xl font-black text-[#4A4238] group-hover:text-white mb-2 leading-none text-center lg:text-left">{box.title}</h4>
                <p className="text-gray-500 group-hover:text-white/70 text-base font-bold text-center lg:text-left">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative text-center">
           <div className="bg-white p-6 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(74,66,56,0.3)] relative z-10 mx-auto max-w-lg lg:max-w-none border border-[#F0EFEA]">
             <div className="bg-[#4A4238] aspect-square rounded-[4rem] flex flex-col items-center justify-center p-12 space-y-10 text-white shadow-inner">
               <Building size={100} className="text-[#D4C4A8]" strokeWidth={1} />
               <div className="space-y-4">
                 <h3 className="text-4xl font-black uppercase tracking-tight leading-none">Premium Asset</h3>
                 <p className="text-lg font-bold text-[#D4C4A8] uppercase tracking-[0.2em]">Management Strategy</p>
               </div>
               <button onClick={() => navigate('contact')} className="w-full bg-[#D4C4A8] text-[#4A4238] py-6 rounded-3xl font-black text-xl uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-2xl text-nowrap px-4">상담 예약하기</button>
             </div>
           </div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#D4C4A8]/10 rounded-full -z-10 animate-pulse"></div>
        </div>
      </div>
    </section>
  </div>
);

/**
 * [4. ABOUT US PAGE COMPONENTS]
 */

const AboutPage = ({ navigate }) => (
  <div className="w-full text-left">
    {/* Vision Section - pb-32를 추가하여 하단 Scroll 표시와의 겹침 방지 */}
    <section className="relative min-h-screen flex items-center pt-24 pb-40 bg-[#4A4238] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1449156001437-3a1661acda2e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center"></div>
      </div>
      <div className="relative w-full px-8 md:px-16 lg:px-24 z-10 text-center lg:text-left">
        <div className="max-w-5xl space-y-8 mx-auto lg:mx-0">
          <span className="inline-block text-center text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase px-4 py-2 border border-[#D4C4A8]/30 rounded-full mb-4">Our vision</span>
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter">Connecting <br /><span className="text-[#D4C4A8]">Global Lives</span></h1>
          <p className="text-xl md:text-3xl font-bold text-gray-300 max-w-3xl leading-relaxed mx-auto lg:mx-0">글로벌 하우징은 국경을 넘어 모든 고객이 일본에서 새로운 삶의 시작을 안심하고 설계할 수 있도록 돕는 신뢰의 가교입니다.</p>
        </div>
      </div>
      {/* Scroll Indicator - z-20으로 설정하여 텍스트 뒤로 가거나 겹칠 때 가독성 확보 */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-[#D4C4A8] z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-black tracking-widest uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#D4C4A8] to-transparent"></div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="bg-white min-h-screen flex items-center py-24 border-b border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase">Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] leading-tight uppercase">Core<br />Values</h2>
              <div className="w-32 h-2 bg-[#D4C4A8] rounded-full mx-auto lg:mx-0"></div>
            </div>
            <p className="text-xl text-gray-500 font-bold leading-relaxed text-center lg:text-left">단순한 중개를 넘어 라이프스타일 큐레이터로서 정착의 모든 과정을 함께합니다. 고객의 신뢰를 가장 큰 자산으로 여깁니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "전문성", sub: "Expertise", desc: "15년 이상의 풍부한 실무 경험과 분석력을 기반으로 최적의 솔루션을 제공합니다.", icon: Award },
              { title: "신뢰성", sub: "Trust", desc: "투명한 정보 공개와 정직한 상담으로 고객과의 두터운 신뢰 관계를 형성합니다.", icon: ShieldCheck },
              { title: "네트워크", sub: "Network", desc: "일본 전역의 폭넓은 파트너십을 통해 차별화된 매물 접근성을 보장합니다.", icon: Globe },
              { title: "고객 중심", sub: "Customized", desc: "개별 고객의 상황과 목적에 맞춘 1:1 맞춤형 컨설팅을 지향합니다.", icon: Users }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-[#FAF9F6] rounded-[2.5rem] border border-[#F0EFEA] hover:bg-[#4A4238] group transition-all duration-500 shadow-lg text-left isolate translate-z-0">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4C4A8] transition-all shadow-sm"><value.icon size={24} className="text-[#4A4238] group-hover:text-white" /></div>
                <h4 className="text-xl font-black text-[#4A4238] group-hover:text-white mb-1">{value.title}</h4>
                <span className="text-[#D4C4A8] font-bold text-xs uppercase tracking-widest block mb-4">{value.sub}</span>
                <p className="text-gray-400 group-hover:text-white/70 text-sm font-bold leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Shinjuku Miraina Tower Office */}
    <section className="bg-white min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-24 mb-16">
        <div className="max-w-4xl space-y-4">
          <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block">Premium Location</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] leading-tight text-center lg:text-left">Shinjuku <span className="text-[#D4C4A8]">Miraina Tower</span></h2>
          <div className="w-24 h-1.5 bg-[#4A4238] rounded-full mx-auto lg:mx-0"></div>
        </div>
      </div>
      <div className="w-full px-8 md:px-16 lg:px-24 grid grid-cols-1 gap-12 text-center lg:text-left">
        <div className="relative group isolate translate-z-0">
          <div className="bg-[#FAF9F6] p-4 rounded-[4rem] shadow-2xl overflow-hidden">
            <div className="relative aspect-[21/9] md:aspect-[2.4/1] w-full rounded-[3rem] overflow-hidden text-center lg:text-left mx-auto lg:mx-0">
              <img src="/src/assets/office.jpg" alt="신주쿠 미라이나 타워 전경" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12">
                 <p className="text-white text-xl md:text-3xl font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-700">A New Hub for Global Success in Shinjuku</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4C4A8]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mt-8">
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
            <p className="text-2xl md:text-3xl font-black text-[#4A4238] leading-tight">신주쿠의 새로운 중심, 미라이나 타워에서<br />글로벌 하우징의 미래를 만듭니다.</p>
            <p className="text-lg text-gray-500 font-bold leading-relaxed max-w-3xl mx-auto lg:mx-0">신주쿠역 미라이나 개찰구와 직접 연결된 '신주쿠 미라이나 타워'는 도쿄의 역동성을 상징하는 랜드마크입니다. 글로벌 하우징은 이곳에서 최첨단 비즈니스 환경과 압도적인 접근성을 바탕으로 고객을 맞이합니다.</p>
          </div>
          <div className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-[#F0EFEA] space-y-8 shadow-sm text-left">
            <div className="flex gap-5 items-center"><div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4A4238] shadow-sm shrink-0"><MapPin size={24} /></div><p className="font-black text-[#4A4238] uppercase tracking-widest text-sm">Office Info</p></div>
            <div className="space-y-2"><p className="text-gray-400 text-xs font-black uppercase tracking-widest">Address</p><p className="text-gray-600 font-bold leading-relaxed">4 Chome-1-6 Shinjuku, Shinjuku City, Tokyo 160-0022<br />Shinjuku Miraina Tower</p></div>
            <button onClick={() => navigate('contact')} className="w-full bg-[#4A4238] text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#3d362d] transition-all">상담 방문 예약하기</button>
          </div>
        </div>
      </div>
    </section>

    {/* CEO Message */}
    <section className="bg-[#FAF9F6] min-h-screen flex items-center py-24">
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20 items-center text-center lg:text-left">
          <div className="w-full lg:w-1/2 relative">
            <div className="bg-white p-6 rounded-[5rem] shadow-2xl relative z-10 border border-[#F0EFEA]">
              <div className="aspect-[3/4] rounded-[4rem] bg-gray-100 overflow-hidden text-center mx-auto lg:mx-0">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" alt="CEO" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4C4A8]/10 rounded-full -z-0 blur-3xl"></div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block">Ceo Message</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#4A4238] leading-tight">당신의 새로운 시작,<br />글로벌 하우징이 함께합니다.</h2>
            </div>
            <div className="space-y-8 text-lg text-gray-600 font-bold leading-relaxed italic">
              <p>"일본에서의 첫 시작은 설렘만큼이나 두려움도 크다는 것을 잘 알고 있습니다. 언어와 문화의 장벽 앞에서 누구보다 진심으로 임하겠습니다."</p>
              <p>"우리는 고객이 일본 사회에 안정적으로 정착하고 더 큰 미래를 꿈꿀 수 있는 주거 기반을 제공하는 것에 자부심을 느낍니다."</p>
            </div>
            <div className="pt-6 border-t border-[#4A4238]/10">
              <p className="text-2xl font-black text-[#4A4238]">Global Housing Team</p>
              <p className="text-[#D4C4A8] font-black tracking-widest uppercase text-sm">Global Real Estate Solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

/**
 * [5. CONTACT PAGE COMPONENT]
 */

const ContactPage = () => (
  <section id="contact" className="bg-[#FAF9F6] min-h-screen flex items-center py-20 pt-32 text-center lg:text-left">
    <div className="w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center text-center lg:text-left">
      <div className="space-y-10">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-black text-[#4A4238] uppercase tracking-widest leading-none">Contact Us</h2>
          <div className="w-24 h-1.5 bg-[#D4C4A8] mx-auto lg:mx-0"></div>
          <p className="text-2xl text-gray-500 font-medium">상담 신청 후 24시간 이내에 답변 드립니다.</p>
        </div>
        <div className="space-y-12">
          <div className="flex gap-8 items-start group justify-center lg:justify-start text-left">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#4A4238] shadow-md shrink-0 text-center"><MapPin size={32} /></div>
            <div className="pt-2">
              <p className="font-bold text-[#4A4238] uppercase text-sm mb-1 tracking-widest opacity-40">Office</p>
              <p className="text-gray-600 text-xl font-medium">4 Chome-1-6 Shinjuku, Tokyo</p>
              <p className="text-gray-400 text-sm font-bold uppercase">Shinjuku Miraina Tower</p>
            </div>
          </div>
          <div className="flex gap-8 items-center group justify-center lg:justify-start text-left">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#4A4238] shadow-md shrink-0 text-center"><Mail size={32} /></div>
            <div className="pt-1">
              <p className="font-bold text-[#4A4238] uppercase text-sm mb-1 tracking-widest opacity-40">Email</p>
              <p className="text-gray-600 text-xl font-medium">info@globalhousing.jp</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 lg:p-12 rounded-[4rem] shadow-2xl border border-[#F0EFEA] text-left">
        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 text-left">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">성함</label>
              <input type="text" placeholder="Your Name" className="w-full p-5 text-lg bg-[#FCFBFA] border border-[#F0EFEA] rounded-2xl outline-none focus:ring-4 focus:ring-[#4A4238]/5 transition-all" />
            </div>
            <div className="space-y-3 text-left">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">이메일</label>
              <input type="email" placeholder="Email Address" className="w-full p-5 text-lg bg-[#FCFBFA] border border-[#F0EFEA] rounded-2xl outline-none focus:ring-4 focus:ring-[#4A4238]/5 transition-all" />
            </div>
          </div>
          <div className="space-y-3 text-left">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-2">문의 내용</label>
            <textarea placeholder="궁금하신 내용을 입력해주세요" rows="5" className="w-full p-5 text-lg bg-[#FCFBFA] border border-[#F0EFEA] rounded-2xl outline-none focus:ring-4 focus:ring-[#4A4238]/5 resize-none transition-all"></textarea>
          </div>
          <button className="w-full bg-[#4A4238] text-white py-6 rounded-2xl font-bold text-xl uppercase tracking-[0.4em] hover:bg-[#3d362d] transition-all shadow-xl">Send Message</button>
        </form>
      </div>
    </div>
  </section>
);

/**
 * [6. FOOTER COMPONENT]
 */

const Footer = ({ navigate }) => (
  <footer className="bg-white py-24 border-t border-[#F0EFEA]">
    <div className="w-full px-8 md:px-16 text-center lg:text-left">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-16 text-center lg:text-left">
        <div className="flex items-center gap-8 cursor-pointer mx-auto lg:mx-0" onClick={() => navigate('landing')}>
          <img src="/src/assets/long_globalhousing.png" alt="Global Housing Logo" className="h-8 md:h-10 w-auto object-contain" onError={(e) => { e.target.style.display = 'none'; }} />
        </div>
        <div className="flex flex-wrap justify-center gap-12 text-lg font-black uppercase tracking-widest text-gray-400 mx-auto lg:mx-0 text-center lg:text-left">
          <button onClick={() => navigate('about')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">회사 소개</button>
          <button onClick={() => navigate('partners')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">협력사</button>
          <button onClick={() => navigate('contact')} className="hover:text-[#4A4238] transition-colors leading-none text-gray-400">문의하기</button>
        </div>
        <div className="flex gap-10 mx-auto lg:mx-0 text-center lg:text-left">
          <Instagram className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer" size={32} />
          <NaverIcon size={32} className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer" />
          <Youtube className="text-gray-300 hover:text-[#4A4238] transition-colors cursor-pointer" size={32} />
        </div>
      </div>
      <div className="pt-16 border-t border-[#F0EFEA] text-center text-gray-300 text-xs font-bold uppercase tracking-[0.6em]">
        © 2024 Global Housing. All rights reserved.
      </div>
    </div>
  </footer>
);

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
      
      <Navbar currentPage={currentPage} navigate={navigate} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
      
      <main className="w-full">
        {currentPage === 'landing' && <LandingPage navigate={navigate} scrollToSection={scrollToSection} />}
        {currentPage === 'about' && <AboutPage navigate={navigate} />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'partners' && (
          <div className="pt-48 pb-32 w-full px-8 md:px-16 min-h-[90vh] bg-[#FAF9F6] text-center flex flex-col items-center justify-center text-[#4A4238]">
            <h2 className="text-6xl md:text-7xl font-black uppercase tracking-widest mb-10 leading-none">협력사</h2>
            <div className="w-48 h-2 bg-[#D4C4A8] rounded-full mb-16 mx-auto"></div>
            <p className="text-gray-400 text-3xl font-bold tracking-[0.2em]">이 페이지는 현재 준비 중입니다.</p>
          </div>
        )}
      </main>
      
      <Footer navigate={navigate} />
    </div>
  );
};

export default App;