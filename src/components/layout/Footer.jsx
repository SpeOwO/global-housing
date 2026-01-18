import { Instagram, Youtube } from 'lucide-react'
import NaverIcon from '../icons/NaverIcon'

/**
 * [7. FOOTER COMPONENT]
 */
/**
 * [7. FOOTER COMPONENT]
 */
const Footer = ({ navigate }) => {
  // 소셜 미디어 링크 이동 함수
  const openSocialLink = url => {
    window.open(url, '_blank')
  }

  return (
    <footer className="bg-white py-24 border-t border-[#F0EFEA]">
      <div className="w-full px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-16 mb-16 text-center lg:text-left">
          {/* Logo */}
          <div
            className="flex items-center gap-8 cursor-pointer mx-auto lg:mx-0"
            onClick={() => navigate && navigate('landing')}
          >
            <img
              src="/long_globalhousing.png"
              alt="Global Housing Logo"
              className="h-8 md:h-10 w-auto object-contain"
              onError={e => {
                e.target.style.display = 'none'
              }}
            />
            {/* 로고 이미지가 없을 경우 대체 텍스트 표시 (선택사항) */}
            {/* <span className="text-xl font-black text-[#4A4238] uppercase tracking-widest">Global Housing</span> */}
          </div>

          {/* Navigation Links */}
          <div
            className="
            flex flex-nowrap justify-center
            gap-6 md:gap-12
            text-sm md:text-lg
            font-black uppercase
            tracking-[0.15em] md:tracking-widest
            text-gray-400
            whitespace-nowrap
          "
          >
            <button
              onClick={() => navigate && navigate('about')}
              className="hover:text-[#4A4238] transition-colors leading-none"
            >
              회사 소개
            </button>
            <button
              onClick={() => navigate && navigate('partners')}
              className="hover:text-[#4A4238] transition-colors leading-none"
            >
              협력사
            </button>
            <button
              onClick={() => navigate && navigate('contact')}
              className="hover:text-[#4A4238] transition-colors leading-none"
            >
              문의하기
            </button>
          </div>

          {/* Social Icons (Order: Instagram -> Youtube -> Blog) */}
          <div className="flex gap-10 mx-auto lg:mx-0">
            {/* 1. Instagram */}
            <button
              onClick={() =>
                openSocialLink(
                  'https://www.instagram.com/global_housing_korea/'
                )
              }
              className="text-gray-300 hover:text-[#E1306C] transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={32} />
            </button>

            {/* 2. Youtube */}
            <button
              onClick={() =>
                openSocialLink('https://www.youtube.com/@GlobalHousing_KR')
              }
              className="text-gray-300 hover:text-[#FF0000] transition-colors duration-300"
              aria-label="Youtube"
            >
              <Youtube size={32} />
            </button>

            {/* 3. Naver Blog */}
            <button
              onClick={() =>
                openSocialLink('https://blog.naver.com/global-housing')
              }
              className="text-gray-300 hover:text-[#03C75A] transition-colors duration-300"
              aria-label="Naver Blog"
            >
              <NaverIcon size={32} />
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="
          pt-16 border-t border-[#F0EFEA]
          text-center text-gray-300 text-xs font-bold uppercase leading-loose
          tracking-[0.25em] md:tracking-[0.6em]
        "
        >
          © 2024 Global Housing.
          <br className="md:hidden" />
          All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
