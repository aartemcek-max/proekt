document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .review, .faq__item, .about__inner').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.id = 'scrollTop';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #c4a47c, #9e7f5c);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 999;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const showNotification = (message) => {
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: linear-gradient(135deg, #c4a47c, #9e7f5c);
            color: #0a0a0a;
            padding: 15px 25px;
            border-radius: 12px;
            font-weight: 600;
            z-index: 1000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        `;
        document.body.appendChild(notification);
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    };

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    const bookingBtn = document.getElementById('bookingBtn');
    if (bookingBtn) {
        bookingBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('✨ Спасибо! Скоро мы свяжемся с вами для бронирования ✨');
        });
    }

    const questionBtn = document.getElementById('questionBtn');
    if (questionBtn) {
        questionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showNotification('📧 Напишите нам на milo@elama.ru, и мы ответим в ближайшее время!');
        });
    }

    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.style.color = '#c4a47c';
        }
    });
});