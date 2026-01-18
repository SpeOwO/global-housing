import React, { useState } from 'react'
import {
  ArrowRight,
  Home,
  Building2,
  Building,
  UserCheck,
  HeartHandshake,
  MessageCircle,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react'

/**
 * [3. LANDING PAGE COMPONENT]
 */

const LandingPage = ({ navigate, scrollToSection }) => {
  // State to manage flipped cards on mobile/click interactions
  const [flippedCards, setFlippedCards] = useState([])

  // Function to toggle card flip state
  const toggleFlip = id => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    )
  }

  // FAQ Data List
  const faqList = [
    {
      id: 1,
      role: '한국 거주 투자자',
      name: '김OO 님',
      img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
      q: '"일본 거주 비자가 없어도 매매가 가능한가요?"',
      a: '네, 가능합니다. 비거주자 명의로도 등기 등록 및 소유권 행사가 완전히 보장됩니다.',
    },
    {
      id: 2,
      role: '주재원 준비중',
      name: '이OO 님',
      img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
      q: '"일본 은행에서 대출을 받을 수 있나요?"',
      a: '비거주자 대출 상품은 제한적이나, 한국계 은행 동경 지점 등을 통해 대출 연계가 가능합니다.',
    },
    {
      id: 3,
      role: '임대 수익 희망',
      name: '박OO 님',
      img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
      q: '"구매 후 관리는 어떻게 해야 하나요?"',
      a: '글로벌 하우징의 PM(Property Management) 팀이 임차인 모집부터 월세 징수, 시설 관리까지 대행해 드립니다.',
    },
  ]

  return (
    <div className="w-full animate-in fade-in duration-500">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center pt-24 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1522444195799-478538b28823?auto=format&fit=crop&q=80&w=2000')",
        }}
      >
        <div className="absolute inset-0 bg-white/50"></div>
        <div className="relative w-full px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center py-20">
          <div className="space-y-10 max-w-4xl text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#4A4238] leading-tight md:leading-[1.2] break-keep">
                일본 집 구하기는?
                <br />
                글로벌 하우징
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-gray-500 mt-8 leading-relaxed break-keep">
                왜 모두 글로벌 하우징을 선택할까요?
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <button
                onClick={() => navigate('about')}
                className="inline-flex items-center justify-center bg-white border-2 border-[#4A4238] text-[#4A4238] px-12 py-5 rounded-2xl font-bold text-xl hover:bg-[#4A4238] hover:text-white transition-all shadow-lg min-w-[200px]"
              >
                알아보기
              </button>
              <button
                onClick={() => navigate('contact')}
                className="inline-flex items-center justify-center gap-3
                        bg-[#D4C4A8] text-[#4A4238] border-2 border-[#4A4238]
                        px-12 py-5 rounded-2xl font-bold text-xl
                        hover:bg-[#4A4238] hover:text-white
                        transition-all shadow-xl min-w-[200px]"
              >
                문의하기 <ArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Rent/Sale Cards */}
      <section className="bg-[#FAF9F6] min-h-screen flex items-center py-20 border-b border-[#F0EFEA]">
        <div className="w-full px-6 md:px-12 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              id: 'rental-process',
              title: 'Rent',
              sub: '임대 서비스',
              desc: '일본 생활의 시작, 체계적인 임대 프로세스',
              icon: Building2,
              img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&q=80&w=1000',
            },
            {
              id: 'sale-section',
              title: 'Sale',
              sub: '매매 서비스',
              desc: '수익성 높은 일본 부동산 투자 가이드',
              icon: Home,
              img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
            },
          ].map((card, i) => (
            <div
              key={i}
              className="relative h-[480px] group overflow-hidden rounded-[3rem] cursor-pointer shadow-2xl transform transition-all duration-700 hover:-translate-y-4 isolate translate-z-0"
              onClick={() => scrollToSection(card.id)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] group-hover:scale-110"
                style={{ backgroundImage: `url(${card.img})` }}
              ></div>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white space-y-6 text-center px-10">
                <div className="p-7 bg-white/10 backdrop-blur-xl rounded-[2rem] border border-white/20 mb-2">
                  <card.icon size={50} strokeWidth={1} />
                </div>
                <div className="space-y-2">
                  <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase">
                    {card.sub}
                  </span>
                  <h3 className="text-7xl font-black uppercase tracking-tighter leading-none break-keep">
                    {card.title}
                  </h3>
                </div>
                <p className="text-xl font-bold opacity-90 max-w-xs break-keep">
                  {card.desc}
                </p>
                <div
                  className="
                      pt-6 flex items-center gap-4 text-sm font-black tracking-widest
                      bg-white text-[#4A4238] px-8 py-4 rounded-full
                      shadow-xl text-center
                      opacity-100 translate-y-0
                      md:opacity-0 md:translate-y-10
                      md:group-hover:opacity-100 md:group-hover:translate-y-0
                      transition-all duration-500
                  "
                >
                  View Details <ArrowRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rental Process */}
      <section
        id="rental-process"
        className="bg-white min-h-screen flex items-center py-20 border-b border-[#F0EFEA]"
      >
        <div className="w-full px-4 md:px-10 lg:px-16">
          <div className="text-center mb-16">
            <span className="text-[#D4C4A8] font-black tracking-[0.4em] text-sm uppercase block mb-2">
              How it works
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#4A4238] uppercase tracking-widest leading-none text-center">
              Rental Process
            </h2>
            <div className="w-20 h-1.5 bg-[#D4C4A8] mx-auto mt-6"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-0 gap-y-12 relative max-w-screen-xl mx-auto text-center">
            {[
              {
                id: 1,
                title: '1. 상담 및 문의',
                desc: '라이프스타일 맞춤 상담',
              },
              {
                id: 2,
                title: '2. 매물 선별 및 컨설팅',
                desc: '고객 맞춤형 매물 탐색',
              },
              { id: 3, title: '3. 내견', desc: '온/오프라인 내견 진행' },
              { id: 4, title: '4. 심사', desc: '입주 가능 여부 심사' },
              { id: 5, title: '5. 계약 체결', desc: '안전한 정식 계약 완료' },
              { id: 6, title: '6. 입주', desc: '이사 및 입주 완료' },
            ].map(step => (
              <div
                key={step.id}
                className="flex flex-col items-center group px-0 relative text-center"
              >
                <div className="w-full max-w-[180px] aspect-square flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105 px-1 mx-auto">
                  <img
                    src={`/step${step.id}.png`}
                    alt={step.title}
                    className="w-full h-full object-contain"
                    onError={e => {
                      e.target.src =
                        'https://via.placeholder.com/250?text=Step' + step.id
                    }}
                  />
                </div>
                <div className="mt-2 text-center w-full px-1">
                  <h4 className="text-sm lg:text-base font-black text-[#4A4238] uppercase tracking-tighter leading-tight break-keep">
                    {step.title}
                  </h4>
                  <p className="hidden md:block text-[10px] text-gray-400 font-bold mt-1 break-keep leading-tight opacity-70">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sale Service (Redesigned) */}
      <section
        id="sale-section"
        className="bg-[#FAF9F6] min-h-screen flex items-center py-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FAF9F6] -z-0 hidden lg:block"></div>

        {/* Container with items-stretch to match height */}
        <div className="w-full px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch relative z-10">
          {/* Left Column: Investment Guide & Premium Asset (Flex Col + Justify Between) */}
          <div className="flex flex-col justify-between h-full gap-12 lg:gap-12">
            {/* Top Text */}
            <div className="space-y-6 text-center lg:text-left">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block">
                Investment Guide
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-[#4A4238] uppercase tracking-widest leading-none break-keep">
                Sale
                <br />
                Service
              </h2>
              <div className="w-32 h-2 bg-[#4A4238] rounded-full mx-auto lg:mx-0"></div>
              <p className="text-gray-600 leading-[2] text-xl md:text-2xl font-bold break-keep text-center lg:text-left mt-6">
                단순한 매매를 넘어, 일본 부동산 시장의 흐름을 분석하고
                <br />
                <span className="text-[#4A4238]">최적의 자산 가치 창출</span>을
                위한 토탈 솔루션을 제안합니다.
              </p>
            </div>

            {/* Premium Asset Card (Bottom) */}
            <div className="bg-[#4A4238] rounded-[2.5rem] p-8 md:p-8 shadow-2xl relative overflow-hidden group mt-8 lg:mt-0">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4C4A8]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#D4C4A8]/20 transition-all duration-700"></div>
              <div className="relative z-10 flex flex-col gap-6 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
                  <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm border border-white/10 shrink-0">
                    <Building
                      size={32}
                      className="text-[#D4C4A8]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">
                      Premium Asset
                    </h3>
                    <p className="text-[#D4C4A8] font-bold tracking-widest text-xs uppercase">
                      Management Strategy
                    </p>
                  </div>
                </div>
                <p className="text-white/70 text-sm font-medium leading-relaxed break-keep text-center lg:text-left">
                  전문가와 함께하는 실패 없는 일본 부동산 투자,
                  <br className="hidden sm:block" />
                  지금 바로 상담받아보세요.
                </p>
                <button
                  onClick={() => navigate('contact')}
                  className="w-full bg-[#D4C4A8] text-[#4A4238] px-8 py-4 rounded-xl font-bold text-base hover:bg-white transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  상담 예약하기 <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ List (Flip Cards) */}
          <div className="flex flex-col gap-6 w-full mt-8 lg:mt-0 h-full">
            {/* FAQ Header */}
            <div className="flex items-center gap-3 px-2 mb-2 lg:mt-2">
              <span className="bg-[#EFEBE4] text-[#4A4238] font-black px-3 py-1 rounded-full text-[10px] tracking-widest uppercase">
                FAQ
              </span>
              <h3 className="text-xl font-black text-[#4A4238]">
                이런 고민이 있으신가요?
              </h3>
            </div>

            {/* FAQ List with Flip Interaction */}
            <div className="flex flex-col justify-between h-full gap-4">
              {faqList.map(item => (
                <div
                  key={item.id}
                  className="group [perspective:1000px] h-36 w-full cursor-pointer"
                  onClick={() => toggleFlip(item.id)}
                >
                  <div
                    className={`relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] shadow-lg rounded-[2rem] hover:shadow-2xl 
                        ${flippedCards.includes(item.id) ? '[transform:rotateY(180deg)]' : 'lg:group-hover:[transform:rotateY(180deg)]'}`}
                  >
                    {/* Front Face: Question */}
                    <div className="absolute inset-0 h-full w-full bg-white rounded-[2rem] p-4 md:p-5 border border-[#F0EFEA] [backface-visibility:hidden] flex flex-col justify-center">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-white shadow-md">
                          <img
                            src={item.img}
                            alt="User"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[10px] font-bold text-gray-400">
                              {item.role} {item.name}
                            </span>
                            <HelpCircle size={16} className="text-[#D4C4A8]" />
                          </div>
                          <h4 className="text-base font-black text-[#4A4238] leading-snug break-keep">
                            {item.q}
                          </h4>
                          <div className="text-[10px] text-[#D4C4A8] font-bold mt-1 flex items-center gap-1 opacity-100">
                            답변 확인하기 <ArrowRight size={10} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Back Face: Answer */}
                    <div className="absolute inset-0 h-full w-full bg-[#4A4238] rounded-[2rem] p-5 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center items-center text-center border border-[#4A4238] overflow-hidden">
                      {/* Decorative Background Blur */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4C4A8]/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                      <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <div className="bg-white/10 p-1.5 rounded-full mb-2 inline-flex items-center justify-center">
                          <CheckCircle2 size={16} className="text-[#D4C4A8]" />
                        </div>
                        <p className="text-white/95 text-xs font-bold leading-relaxed break-keep">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
