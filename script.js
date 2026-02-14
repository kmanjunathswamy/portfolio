
    // ==========================================
    // Smooth Scrolling
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          const offsetTop = target.offsetTop - 70;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          const navbarCollapse = document.getElementById('navbarNav');
          if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse);
            bsCollapse.hide();
          }
        }
      });
    });

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // ==========================================
    // Scroll Animation Observer
    // ==========================================
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.section-animate').forEach(section => {
      observer.observe(section);
    });

    // ==========================================
    // Contact Form Handler
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      if (name && email && subject && message) {
        alert(`✅ Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
        contactForm.reset();
      } else {
        alert('⚠️ Please fill in all fields.');
      }
    });

    // ==========================================
    // Add Stagger Animation to Project Cards
    // ==========================================
    window.addEventListener('load', () => {
      const skillCards = document.querySelectorAll('.skill-card');
      skillCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
      });
    });
