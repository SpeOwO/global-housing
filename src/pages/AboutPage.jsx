/**
 * [4. ABOUT US PAGE COMPONENTS]
 */
import { Award, ShieldCheck, Globe, Users, MapPin } from 'lucide-react';

const AboutPage = ({ navigate }) => (
  <div className="w-full text-left animate-in fade-in duration-500">
    {/* Vision Section */}
    <section className="relative min-h-screen flex items-center pt-24 pb-32 bg-[#4A4238] overflow-hidden text-left">
      <div className="absolute inset-0 opacity-20 text-left">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1449156001437-3a1661acda2e?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center text-left"></div>
      </div>
      <div className="relative w-full px-8 md:px-16 lg:px-24 z-10 text-center lg:text-left text-left">
        <div className="max-w-5xl space-y-8 mx-auto lg:mx-0 text-left">
          <span className="inline-block text-center text-[#D4C4A8] font-black tracking-[0.5em] text-xs uppercase px-4 py-2 border border-[#D4C4A8]/30 rounded-full mb-4">Our vision</span>
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tighter text-left break-keep">Connecting <br /><span className="text-[#D4C4A8]">Global Lives</span></h1>
          <p className="text-lg md:text-2xl font-bold text-gray-300 max-w-3xl leading-relaxed mx-auto lg:mx-0 text-left break-keep">글로벌 하우징은 국경을 넘어 모든 고객이 일본에서 새로운 삶의 시작을 안심하고 설계할 수 있도록 돕는 신뢰의 가교입니다.</p>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-[#D4C4A8] z-20">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-black tracking-widest uppercase">Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#D4C4A8] to-transparent"></div>
        </div>
      </div>
    </section>

    <section className="bg-white min-h-screen flex items-center py-24 border-b border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase">Philosophy</span>
              <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] leading-tight uppercase break-keep">Core<br />Values</h2>
              <div className="w-32 h-2 bg-[#D4C4A8] rounded-full mx-auto lg:mx-0"></div>
            </div>
            <p className="text-xl text-gray-500 font-bold leading-relaxed text-center lg:text-left break-keep">단순한 중개를 넘어 라이프스타일 큐레이터로서 정착의 모든 과정을 함께합니다. 고객의 신뢰를 가장 큰 자산으로 여깁니다.</p>
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
                <h4 className="text-xl font-black text-[#4A4238] group-hover:text-white mb-1 break-keep">{value.title}</h4>
                <span className="text-[#D4C4A8] font-bold text-xs uppercase tracking-widest block mb-4 break-keep">{value.sub}</span>
                <p className="text-gray-400 group-hover:text-white/70 text-sm font-bold leading-relaxed break-keep">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-white min-h-screen flex flex-col justify-center py-24 relative overflow-hidden">
      <div className="w-full px-8 md:px-16 lg:px-24 mb-16">
        <div className="max-w-4xl space-y-4">
          <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block">Premium Location</span>
          <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] leading-tight text-center lg:text-left break-keep">Shinjuku <span className="text-[#D4C4A8]">Miraina Tower</span></h2>
          <div className="w-24 h-1.5 bg-[#4A4238] rounded-full mx-auto lg:mx-0 text-center lg:text-left"></div>
        </div>
      </div>
      <div className="w-full px-8 md:px-16 lg:px-24 grid grid-cols-1 gap-12 text-center lg:text-left">
        <div className="relative group isolate translate-z-0">
          <div className="bg-[#FAF9F6] p-4 rounded-[4rem] shadow-2xl overflow-hidden">
            <div className="relative aspect-[21/9] md:aspect-[2.4/1] w-full rounded-[3rem] overflow-hidden text-center lg:text-left mx-auto lg:mx-0 text-left">
              <img src="/office.jpg" alt="신주쿠 미라이나 타워 전경" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-12 text-left">
                 <p className="text-white text-xl md:text-3xl font-black tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-700 break-keep">A New Hub for Global Success in Shinjuku</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4C4A8]/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start mt-8 text-left">
          <div className="lg:col-span-2 space-y-6 text-center lg:text-left text-left">
            <p className="text-2xl md:text-3xl font-black text-[#4A4238] leading-tight text-left break-keep">신주쿠의 새로운 중심, 미라이나 타워에서<br />글로벌 하우징의 미래를 만듭니다.</p>
            <p className="text-lg text-gray-500 font-bold leading-relaxed max-w-3xl mx-auto lg:mx-0 text-center lg:text-left text-center lg:text-left text-left break-keep">신주쿠역 미라이나 개찰구와 직접 연결된 '신주쿠 미라이나 타워'는 도쿄의 역동성을 상징하는 랜드마크입니다. 글로벌 하우징은 이곳에서 최첨단 비즈니스 환경과 압도적인 접근성을 바탕으로 고객을 맞이합니다.</p>
          </div>
          <div className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-[#F0EFEA] shadow-sm text-left">
            <div className="flex gap-5 items-center text-left text-left"><div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4A4238] shadow-sm shrink-0"><MapPin size={24} /></div><p className="font-black text-[#4A4238] uppercase tracking-widest text-sm break-keep">Office Info</p></div>
            <div className="space-y-2 text-left"><p className="text-gray-400 text-xs font-black uppercase tracking-widest text-left break-keep">Address</p><p className="text-gray-600 font-bold leading-relaxed text-left break-keep">4 Chome-1-6 Shinjuku, Shinjuku City, Tokyo 160-0022<br />Shinjuku Miraina Tower</p></div>
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
              <div className="aspect-[3/4] rounded-[4rem] bg-gray-100 overflow-hidden text-center mx-auto lg:mx-0 text-center">
                 <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1000" alt="CEO" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D4C4A8]/10 rounded-full -z-0 blur-3xl text-center lg:text-left text-center lg:text-left"></div>
          </div>
          <div className="w-full lg:w-1/2 space-y-10 text-center lg:text-left text-left">
            <div className="space-y-6 text-center lg:text-left text-left">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block text-left">Ceo Message</span>
              <h2 className="text-4xl md:text-6xl font-black text-[#4A4238] leading-tight text-left break-keep">당신의 새로운 시작,<br />글로벌 하우징이 함께합니다.</h2>
            </div>
            <div className="space-y-8 text-lg text-gray-600 font-bold leading-relaxed italic text-center lg:text-left text-left break-keep">
              <p>"일본에서의 첫 시작은 설렘만큼이나 두려움도 크다는 것을 잘 알고 있습니다. 언어와 문화의 장벽 앞에서 누구보다 진심으로 임하겠습니다."</p>
              <p>"우리는 고객이 일본 사회에 안정적으로 정착하고 더 큰 미래를 꿈꿀 수 있는 주거 기반을 제공하는 것에 자부심을 느낍니다."</p>
            </div>
            <div className="pt-6 border-t border-[#4A4238]/10 text-center lg:text-left">
              <p className="text-2xl font-black text-[#4A4238] break-keep">Global Housing Team</p>
              <p className="text-[#D4C4A8] font-black tracking-widest uppercase text-sm break-keep">Global Real Estate Solution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;