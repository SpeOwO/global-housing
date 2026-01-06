import { Mail, Instagram, Youtube, MapPin, ExternalLink, MessageCircle } from 'lucide-react';
import KakaoIcon from '../components/icons/KakaoIcon';
import NaverIcon from '../components/icons/NaverIcon';

/**
 * [6. CONTACT PAGE COMPONENT]
 */

const ContactPage = () => (
  <div className="w-full animate-in fade-in duration-500 text-center">
    <section className="bg-white pt-40 pb-20 border-b border-[#F0EFEA] text-center text-center">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center text-center">
        <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block mb-4 text-center text-center">Connect with us</span>
        <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] uppercase tracking-widest leading-none text-center break-keep">Contact Us</h2>
        <div className="w-24 h-1.5 bg-[#D4C4A8] mx-auto mt-10 rounded-full text-center text-center text-center"></div>
        <p className="mt-8 text-xl text-gray-500 font-bold text-center text-center text-center break-keep">성공적인 일본 정착을 위한 첫걸음, 글로벌 하우징이 함께합니다.</p>
      </div>
    </section>

    <section className="bg-[#FAF9F6] py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-center">
          {[
            { label: 'E-mail', value: 'info@globalhousing.jp', icon: Mail, color: 'bg-blue-50 text-blue-600', link: 'mailto:info@globalhousing.jp' },
            { label: 'LINE', value: 'GlobalHousing_JP', icon: MessageCircle, color: 'bg-green-50 text-green-600', link: '#' },
            { label: 'Insta DM', value: '@globalhousing', icon: Instagram, color: 'bg-pink-50 text-pink-600', link: '#' },
            { label: 'KakaoTalk', value: '글로벌하우징', icon: KakaoIcon, color: 'bg-yellow-50 text-yellow-700', link: '#' }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-[#F0EFEA] hover:shadow-xl transition-all group text-center text-center text-center"
            >
              <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon size={32} />
              </div>
              <p className="text-gray-400 font-black text-[10px] uppercase tracking-widest mb-1 text-center break-keep">{item.label}</p>
              <p className="text-[#4A4238] font-black text-lg break-all text-center break-keep">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center text-center text-center">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left text-center">
          <h3 className="text-3xl font-black text-[#4A4238] uppercase tracking-tighter text-center break-keep">Official Media</h3>
          <p className="text-gray-500 font-bold text-center break-keep">다양한 채널을 통해 일본 부동산 정보를 확인하세요.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-center">
          {[
            { name: 'Instagram', desc: '최신 매물 정보와 일본 생활 트렌드', icon: Instagram, color: 'text-pink-600' },
            { name: 'Naver Blog', desc: '전문적인 일본 부동산 시장 분석 및 가이드', icon: NaverIcon, color: 'text-green-600' },
            { name: 'YouTube', desc: '생생한 매물 투어 및 현지 생활 브이로그', icon: Youtube, color: 'text-red-600' }
          ].map((media, i) => (
            <div key={i} className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-[#F0EFEA] hover:bg-[#4A4238] group transition-all duration-500 text-center text-center text-center">
              <media.icon size={48} className={`${media.color} group-hover:text-white transition-colors mb-6 text-center mx-auto text-center`} />
              <h4 className="text-2xl font-black text-[#4A4238] group-hover:text-white mb-2 text-center break-keep">{media.name}</h4>
              <p className="text-gray-500 group-hover:text-white/70 font-bold mb-6 text-center text-center break-keep">{media.desc}</p>
              <div className="inline-flex items-center gap-2 text-[#D4C4A8] font-black text-sm uppercase tracking-widest text-center">
                Visit Channel <ExternalLink size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#FAF9F6] py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center lg:text-left text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block text-center lg:text-left">Main Office</span>
              <h3 className="text-4xl md:text-5xl font-black text-[#4A4238] leading-tight text-center lg:text-left break-keep">Shinjuku <br />Miraina Tower</h3>
              <div className="w-20 h-1 bg-[#4A4238] mx-auto lg:mx-0 text-center lg:text-left"></div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex gap-6 items-start justify-center lg:justify-start text-left text-left">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4A4238] shadow-sm shrink-0 text-center"><MapPin size={24} /></div>
                <div className="text-left text-left text-left">
                  <p className="font-black text-[#4A4238] text-sm uppercase tracking-widest mb-1 opacity-40 text-left">Location</p>
                  <p className="text-gray-600 font-bold text-lg leading-relaxed text-left break-keep">4 Chome-1-6 Shinjuku, Shinjuku City,<br />Tokyo 160-0022</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[4rem] shadow-xl text-center"><div className="aspect-video bg-gray-100 rounded-[3rem] flex items-center justify-center overflow-hidden text-center"><img src="/office.jpg" alt="Miraina Tower" className="w-full h-full object-cover" /></div></div>
        </div>
      </div>
    </section>
  </div>
);

export default ContactPage;