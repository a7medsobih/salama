// Navbar scroll effect
$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
        $('.header').addClass('scrolled');
    } else {
        $('.header').removeClass('scrolled');
    }
});

let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {


        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);

        // لو المستخدم نزل أكتر من 10 بكسل والقائمة مفتوحة
        if (Math.abs(currentScroll - lastScrollTop) > 10 && navbarCollapse.classList.contains('show') && bsCollapse) {
            bsCollapse.hide(); // اقفل القائمة
        }

        lastScrollTop = currentScroll;
    }
});

$('a[href^="#"]').on('click', function (e) {
    const target = $(this).attr('href');
    if (target.length > 1 && $(target).length) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $(target).offset().top - 80,
            },
            500,
            'linear'
        );
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    function activateNavLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - sectionHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", activateNavLink);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".navbar-brand", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power2.out"
});

gsap.from(".nav-item", {
    duration: 1,
    y: -50,
    opacity: 0,
    stagger: 0.1,
    delay: 0.5,
    ease: "power2.out"
});