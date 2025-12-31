// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'grid'/'none';
            }
        });
    });
});
document.querySelector('.contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you! Your message has been sent.');
    e.target.reset();
});
const aboutText = document.querySelector('.about-text');
const aboutImage = document.querySelector('.about-image');

window.addEventListener('scroll', () => {
    const sectionTop = document.querySelector('#about').offsetTop;
    const scrollPos = window.scrollY + window.innerHeight - 150;

    if (scrollPos > sectionTop) {
        aboutText.classList.add('show');
        aboutImage.classList.add('show');
    }
});
