import { Menu, X } from 'lucide-react'

/**
 * [2. NAVIGATION COMPONENTS]
 */

const NavBar = ({ currentPage, navigate, setIsMenuOpen, isMenuOpen }) => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-[#F0EFEA]">
    <div className="w-full px-8 md:px-16 h-20 flex justify-between items-center">
      <div
        className="flex items-center gap-3 cursor-pointer shrink-0"
        onClick={() => navigate('landing')}
      >
        <img
          src="/globalhousing.png"
          alt="글로벌 하우징 로고"
          className="h-10 md:h-12 w-auto object-contain"
          onError={e => {
            e.target.onerror = null
            e.target.src =
              'https://via.placeholder.com/250x50?text=Global+Housing'
          }}
        />
      </div>

      <div className="hidden md:flex items-center gap-10">
        <button
          onClick={() => navigate('about')}
          // 수정됨: 선택 시 진한 색(#4A4238), 미선택 시 연한 회색(gray-400)
          className={`text-base font-bold transition-colors ${
            currentPage === 'about'
              ? 'text-[#4A4238] font-black' // 선택됨: 진한 갈색 + 더 굵게
              : 'text-gray-400 hover:text-[#4A4238]' // 미선택: 회색 -> 호버 시 진한 갈색
          }`}
        >
          회사 소개
        </button>
        <button
          onClick={() => navigate('contact')}
          // 수정됨: 위와 동일한 로직 적용
          className={`text-base font-bold transition-colors ${
            currentPage === 'contact'
              ? 'text-[#4A4238] font-black'
              : 'text-gray-400 hover:text-[#4A4238]'
          }`}
        >
          문의하기
        </button>
      </div>

      <button
        className="md:hidden text-[#4A4238]"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </div>

    {isMenuOpen && (
      <div className="md:hidden bg-white border-t border-[#F0EFEA] py-8 px-8 flex flex-col gap-6 shadow-xl text-left">
        <button
          onClick={() => {
            navigate('about')
            setIsMenuOpen(false) // 모바일에서는 클릭 후 메뉴 닫기 추가 (UX 권장)
          }}
          // 모바일 메뉴에도 동일한 색상 로직 적용
          className={`text-left text-lg font-bold transition-colors ${
            currentPage === 'about' ? 'text-[#4A4238]' : 'text-gray-400'
          }`}
        >
          회사 소개
        </button>
        <button
          onClick={() => {
            navigate('contact')
            setIsMenuOpen(false)
          }}
          className={`text-left text-lg font-bold transition-colors ${
            currentPage === 'contact' ? 'text-[#4A4238]' : 'text-gray-400'
          }`}
        >
          문의하기
        </button>
      </div>
    )}
  </nav>
)

export default NavBar
