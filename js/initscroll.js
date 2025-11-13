javascript// 스크롤 페이드인 + 슬라이드업 애니메이션
function initScrollAnimation() {
  // 애니메이션을 적용할 요소들
  const aboutContent = document.querySelector('.about-content');
  const aboutTxt = document.querySelector('.about-txt');
  const txtItems = document.querySelectorAll('.txt-title, .txt1');
  
  // Intersection Observer 옵션
  const options = {
    threshold: 0.15, // 15%가 보이면 트리거
    rootMargin: '0px 0px -100px 0px' // 하단 100px 여유
  };
  
  // Observer 콜백
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, options);
  
  // about-content 관찰
  if (aboutContent) {
    observer.observe(aboutContent);
  }
  
  // about-txt 내부 요소들 순차적으로 관찰
  txtItems.forEach((item, index) => {
    item.style.transitionDelay = `${0.2 + (index * 0.1)}s`;
    observer.observe(item);
  });
}

// DOM 로드 후 실행
document.addEventListener('DOMContentLoaded', initScrollAnimation);