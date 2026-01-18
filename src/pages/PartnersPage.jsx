import {
  GraduationCap,
  BookOpen,
  Truck,
  FileSearch,
  ShieldCheck,
} from 'lucide-react'

/**
 * [5. PARTNERS PAGE COMPONENT]
 */

const PartnersPage = () => {
  const partnerList = [
    {
      id: 1,
      name: '메이지 한국인 유학생회',
      category: 'Student Community',
      desc: '메이지 대학교 한국인 유학생들의 권익 증진과 정보 교류를 돕는 공식 커뮤니티입니다.',
      icon: GraduationCap,
    },
    {
      id: 2,
      name: '와세다 한국인 유학생회',
      category: 'Student Community',
      desc: '와세다 대학교 한국 유학생들의 안정적인 일본 정착과 네트워크를 지원합니다.',
      icon: GraduationCap,
    },
    {
      id: 3,
      name: 'XX 일본어학원',
      category: 'Education',
      desc: '도쿄 중심부에 위치한 명문 어학원으로, 학생들의 일본어 능력 향상과 진학을 책임집니다.',
      icon: BookOpen,
    },
    {
      id: 4,
      name: 'YY 이사 서비스',
      category: 'Settlement',
      desc: '한국어 지원이 가능한 프리미엄 이사 서비스로, 안심하고 이삿짐을 맡기실 수 있습니다.',
      icon: Truck,
    },
    {
      id: 5,
      name: 'ZZ 행정서사 사무소',
      category: 'Legal & Visa',
      desc: '복잡한 비자 문제와 법률 자문을 전문적으로 제공하는 글로벌 하우징의 법률 파트너입니다.',
      icon: FileSearch,
    },
    {
      id: 6,
      name: 'Global Living Insurance',
      category: 'Insurance',
      desc: '외국인 거주자를 위한 최적의 화재 보험 및 생활 보험 상품을 제안합니다.',
      icon: ShieldCheck,
    },
  ]

  return (
    <div className="w-full animate-in fade-in duration-500 text-center">
      <section className="bg-white pt-40 pb-20 border-b border-[#F0EFEA] text-center">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center text-center text-center">
          <span className="text-[#D4C4A8] font-black tracking-[0.5em] text-sm uppercase block mb-4 text-center">
            Our Network
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-[#4A4238] uppercase tracking-widest leading-none text-center break-keep">
            Official<br></br>Partners
          </h2>
          <div className="w-24 h-1.5 bg-[#D4C4A8] mx-auto mt-10 rounded-full text-center"></div>
          <p className="mt-8 text-xl text-gray-500 font-bold max-w-2xl mx-auto text-center text-center break-keep whitespace-nowrap">
            글로벌 하우징과 함께 더 높은 가치를 만들어가는 검증된 파트너사들을
            소개합니다.
          </p>
        </div>
      </section>

      <section className="bg-[#FAF9F6] py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
            {partnerList.map(partner => (
              <div
                key={partner.id}
                className="bg-white p-10 rounded-[3rem] shadow-sm border border-[#F0EFEA] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center text-center isolate translate-z-0"
              >
                <div className="w-20 h-20 bg-[#FAF9F6] rounded-[1.5rem] flex items-center justify-center mb-8 group-hover:bg-[#4A4238] transition-colors duration-500">
                  <partner.icon
                    size={40}
                    className="text-[#4A4238] group-hover:text-[#D4C4A8] transition-colors"
                  />
                </div>
                <div className="space-y-4 flex-grow text-center">
                  <span className="text-[#D4C4A8] font-black text-[10px] uppercase tracking-[0.3em] block break-keep">
                    {partner.category}
                  </span>
                  <h4 className="text-2xl font-black text-[#4A4238] break-keep">
                    {partner.name}
                  </h4>
                  <div className="w-10 h-1 bg-[#F0EFEA] mx-auto text-center"></div>
                  <p className="text-gray-500 font-bold leading-relaxed text-sm text-center break-keep">
                    {partner.desc}
                  </p>
                </div>
                <button className="mt-10 px-8 py-3 bg-[#FAF9F6] text-[#4A4238] rounded-full font-black text-xs uppercase tracking-widest border border-[#F0EFEA] group-hover:bg-[#4A4238] group-hover:text-white group-hover:border-[#4A4238] transition-all">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnersPage
