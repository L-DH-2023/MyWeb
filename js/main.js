// 全站脚本：文件很小，先只做两件事，方便你理解结构

// 1. 页脚年份自动更新，不用每年手改
const yearEl = document.querySelector('#year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2. 元素滚动进入视口时淡入上移
//    CSS 里已经写好 .reveal（隐藏）和 .is-visible（显示），这里只负责加类名
const revealEls = document.querySelectorAll('.reveal');

if (revealEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // 只播一次，滚回来不重复
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}
