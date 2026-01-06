/**
 * [3. LANDING PAGE COMPONENT]
 */

import { ArrowRight, Home, Building2, Building, UserCheck, HeartHandshake } from 'lucide-react';

const LandingPage = ({ navigate, scrollToSection }) => (
  <div className="w-full animate-in fade-in duration-500">
    {/* Hero Section */}
    <section className="relative min-h-screen flex items-center pt-24 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80&w=2000')", backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-white/50"></div>
      <div className="relative w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
        <div className="space-y-10 max-w-4xl text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#4A4238] leading-tight md:leading-[1.2] break-keep">
              일본 집 구하기는?<br />
              글로벌 하우징
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-gray-500 mt-8 leading-relaxed break-keep">
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
          <div key={i} className="relative h-[480px] group overflow-hidden rounded-[3rem] cursor-pointer shadow-2xl transform transition-all duration-700 hover:-translate-y-4 isolate translate-z-0" onClick={() => scrollToSection(card.id)}>
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110" style={{ backgroundImage: `url(${card.img})` }}></div>
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6 text-center px-10">
              <div className="p-7 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 mb-2"><card.icon size={50} strokeWidth={1} /></div>
              <div className="space-y-2">
                <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase">{card.sub}</span>
                <h3 className="text-7xl font-black uppercase tracking-tighter leading-none break-keep">{card.title}</h3>
              </div>
              <p className="text-xl font-bold opacity-90 max-w-xs break-keep">{card.desc}</p>
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
                <img src={`/step${step.id}.png`} alt={step.title} className="w-full h-full object-contain" onError={(e) => { e.target.src = "https://via.placeholder.com/250?text=Step" + step.id; }} />
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
            <h2 className="text-6xl md:text-8xl font-black text-[#4A4238] uppercase tracking-widest leading-none break-keep">Sale<br />Service</h2>
            <div className="w-32 h-2 bg-[#4A4238] rounded-full mx-auto lg:mx-0"></div>
          </div>
          <p className="text-gray-600 leading-[2] text-xl md:text-2xl font-bold max-w-2xl mx-auto lg:mx-0 break-keep">단순한 매매를 넘어, 일본 부동산 시장의 흐름을 분석하고<br /><span className="text-[#4A4238]">최적의 자산 가치 창출</span>을 위한 토탈 솔루션을 제안합니다.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            {[{ title: "전문가 컨설팅", desc: "15년 경력 투자 매니저 배정", icon: UserCheck }, { title: "사후 관리 서비스", desc: "임대 관리 및 세무 업무 지원", icon: HeartHandshake }].map((box, i) => (
              <div key={i} className="p-10 bg-[#FAF9F6] rounded-[2.5rem] border border-[#F0EFEA] hover:bg-[#4A4238] group transition-all duration-500 shadow-lg hover:shadow-2xl text-center lg:text-left">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#D4C4A8] transition-all mx-auto lg:mx-0 text-center lg:text-left"><box.icon size={28} className="text-[#4A4238] group-hover:text-white" /></div>
                <h4 className="text-2xl font-black text-[#4A4238] group-hover:text-white mb-2 leading-none break-keep">{box.title}</h4>
                <p className="text-gray-500 group-hover:text-white/70 text-base font-bold break-keep">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative text-center">
           <div className="bg-white p-6 rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(74,66,56,0.3)] relative z-10 mx-auto max-w-lg lg:max-w-none border border-[#F0EFEA]">
             <div className="bg-[#4A4238] aspect-square rounded-[4rem] flex flex-col items-center justify-center p-12 space-y-10 text-white shadow-inner">
               <Building size={100} className="text-[#D4C4A8]" strokeWidth={1} />
               <div className="space-y-4">
                 <h3 className="text-4xl font-black uppercase tracking-tight leading-none break-keep">Premium Asset</h3>
                 <p className="text-lg font-bold text-[#D4C4A8] uppercase tracking-[0.2em] break-keep">Management Strategy</p>
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

export default LandingPage;
