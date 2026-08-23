document.addEventListener('DOMContentLoaded', () => {

    // 1. Intersection Observer for Dynamic Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50px 0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target); // Animate once
            }
        });
    }, observerOptions);

    const animatableElements = document.querySelectorAll('.animate-on-scroll');
    animatableElements.forEach(el => scrollObserver.observe(el));

});

// 2. Modal Functions
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});
function handleFormSubmit(event) {
    event.preventDefault();
    const status = document.getElementById('formStatus');
    
    // محاكاة إرسال الرسالة بنجاح
    status.style.color = '#16a34a';
    status.innerText = 'تم إرسال رسالتك بنجاح! / Your message has been sent successfully!';
    
    // إعادة إعادة ضبط النموذج
    document.getElementById('contactForm').reset();
    
    setTimeout(() => {
        status.innerText = '';
    }, 5000);
}