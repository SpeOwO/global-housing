import {
  Mail,
  Instagram,
  Youtube,
  MapPin,
  ExternalLink,
  MessageCircle,
} from 'lucide-react'
import KakaoIcon from '../components/icons/KakaoIcon'
import NaverIcon from '../components/icons/NaverIcon'

/**
 * [6. CONTACT PAGE COMPONENT]
 */

const ContactPage = () => (
  <div className="w-full animate-in fade-in duration-500 text-center">
    <section className="bg-white pt-40 pb-20 border-b border-[#F0EFEA] text-center">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block mb-4 text-center">
          Connect with us
        </span>
        <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] uppercase tracking-widest leading-none text-center break-keep">
          Contact Us
        </h2>
        <div className="w-24 h-1.5 bg-[#D4C4A8] mx-auto mt-10 rounded-full text-center"></div>
        <p className="mt-8 text-xl text-gray-500 font-bold text-center break-keep">
          성공적인 일본 정착을 위한 첫걸음, 글로벌 하우징이 함께합니다.
        </p>
      </div>
    </section>

    {/* Official Channel Section - 수정됨 */}
    <section className="bg-[#FAF9F6] py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
          <h3 className="text-3xl font-black text-[#4A4238] uppercase tracking-tighter text-center break-keep">
            Official Channel
          </h3>
          <p className="text-gray-500 font-bold text-center break-keep">
            다양한 채널을 통해 상담이 가능합니다.
          </p>
        </div>

        {/* Grid 변경: lg:grid-cols-4 -> md:grid-cols-3 (Media 섹션과 동일한 레이아웃) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              label: 'E-mail',
              value: 'Email 문의',
              icon: Mail,
              color: 'text-blue-600', // 배경색 제거하고 텍스트 색상만 유지
              link: 'mailto:kek8274@gmail.com',
            },
            {
              label: 'Insta DM',
              value: '@global_housing_korea',
              icon: Instagram,
              color: 'text-pink-600',
              link: 'https://www.instagram.com/global_housing_korea/',
            },
            {
              label: 'KakaoTalk',
              value: '모바일 전용',
              icon: KakaoIcon,
              color: 'text-yellow-500',
              link: 'http://qr.kakao.com/talk/s02.pBdxuFbz5mBgmm_P_IrBMCY-',
            },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target={item.label === 'E-mail' ? undefined : '_blank'}
              rel="noopener noreferrer"
              // Media 섹션과 동일한 카드 스타일 적용 (배경은 흰색으로 유지하여 섹션 배경과 분리)
              className="bg-white p-10 rounded-[3rem] border border-[#F0EFEA]
                         hover:bg-[#4A4238] group transition-all duration-500
                         text-center block shadow-sm hover:shadow-xl"
            >
              {/* 아이콘 스타일 변경: 박스 형태 제거, 큰 아이콘 적용 */}
              <item.icon
                size={48}
                className={`${item.color} group-hover:text-white transition-colors mb-6 mx-auto`}
              />

              {/* 텍스트 스타일 변경: Media 섹션과 폰트 크기/스타일 통일 */}
              <h4 className="text-2xl font-black text-[#4A4238] group-hover:text-white mb-2 break-keep tracking-tight">
                {item.label}
              </h4>
              <p className="text-gray-500 group-hover:text-white/70 font-bold mb-6 break-all">
                {item.value}
              </p>

              {/* 하단 링크 텍스트 추가 */}
              <div className="inline-flex items-center gap-2 text-[#D4C4A8] font-black text-sm uppercase tracking-widest">
                Connect <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 text-center md:text-left">
          <h3 className="text-3xl font-black text-[#4A4238] uppercase tracking-tighter text-center break-keep">
            Official Media
          </h3>
          <p className="text-gray-500 font-bold text-center break-keep">
            다양한 미디어를 통해 일본 부동산 정보를 확인하세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              name: 'Instagram',
              desc: '최신 매물 정보와 일본 생활 트렌드',
              icon: Instagram,
              color: 'text-pink-600',
              link: 'https://www.instagram.com/global_housing_korea/',
            },
            {
              name: 'YouTube',
              desc: '생생한 매물 투어 및 현지 생활 브이로그',
              icon: Youtube,
              color: 'text-red-600',
              link: 'https://www.youtube.com/@GlobalHousing_KR',
            },
            {
              name: 'Naver Blog',
              desc: '전문적인 일본 부동산 시장 분석 및 리포트',
              icon: NaverIcon,
              color: 'text-green-600',
              link: 'https://blog.naver.com/global-housing',
            },
          ].map((media, i) => (
            <a
              key={i}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FAF9F6] p-10 rounded-[3rem] border border-[#F0EFEA]
                      hover:bg-[#4A4238] group transition-all duration-500
                      text-center block"
            >
              <media.icon
                size={48}
                className={`${media.color} group-hover:text-white transition-colors mb-6 mx-auto`}
              />
              <h4 className="text-2xl font-black text-[#4A4238] group-hover:text-white mb-2 break-keep">
                {media.name}
              </h4>
              <p className="text-gray-500 group-hover:text-white/70 font-bold mb-6 break-keep">
                {media.desc}
              </p>
              <div className="inline-flex items-center gap-2 text-[#D4C4A8] font-black text-sm uppercase tracking-widest">
                Visit Channel <ExternalLink size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-[#FAF9F6] py-24">
      <div className="max-w-7xl mx-auto px-8 md:px-16 text-center lg:text-left">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
          <div className="space-y-10 text-center lg:text-left">
            <div className="space-y-4 text-center lg:text-left">
              <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block text-center lg:text-left">
                Main Office
              </span>
              <h3
                className="text-4xl md:text-5xl font-black text-[#4A4238] leading-[1.4] text-center lg:text-left break-keep"
                style={{ lineHeight: '1.25' }}
              >
                Shinjuku <br />
                Miraina Tower
              </h3>
              <div className="w-20 h-1 bg-[#4A4238] mx-auto lg:mx-0 text-center lg:text-left"></div>
            </div>
            <div className="space-y-6 text-center lg:text-left">
              <div className="flex gap-6 items-start justify-center lg:justify-start text-left">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#4A4238] shadow-sm shrink-0 text-center">
                  <MapPin size={24} />
                </div>
                <div className="text-left">
                  <p className="font-black text-[#4A4238] text-sm uppercase tracking-widest mb-1 opacity-40 text-left">
                    Location
                  </p>
                  <p className="text-gray-600 font-bold text-lg leading-relaxed text-left break-keep">
                    4 Chome-1-6 Shinjuku, Shinjuku City,
                    <br />
                    Tokyo 160-0022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-[4rem] shadow-xl text-center">
            <div className="aspect-video bg-gray-100 rounded-[3rem] flex items-center justify-center overflow-hidden text-center">
              <img
                src="/office.jpg"
                alt="Miraina Tower"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default ContactPage
