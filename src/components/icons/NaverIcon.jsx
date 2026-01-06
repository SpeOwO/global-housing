// 네이버 블로그 커스텀 아이콘 (잘림 방지 및 꽉 찬 정자체 B 형상 수정)

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

export default NaverIcon;