// ハンバーガー
const hamburger = document.querySelector('.hamburger');
const headerInner = document.querySelector('.header_inner');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    headerInner.classList.toggle('active');
});

// フェードアップ
const fadeIns = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

fadeIns.forEach(function(fadeIn) {
    observer.observe(fadeIn);
});