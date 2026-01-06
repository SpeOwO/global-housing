// 카카오톡 커스텀 아이콘

const KakaoIcon = ({ size = 24, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.707 4.8 4.315 6.084l-1.104 4.05c-.05.185.163.342.316.24l4.782-3.15c.55.08 1.114.126 1.691.126 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"/>
  </svg>
);

export default KakaoIcon;