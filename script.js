// header toggle//
let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
});

// typing effect
let typed = new Typed('.auto-input',{
    strings:['Mechatronics Engineer','Data Analytics Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,
});

// active link state

//get all section
let sections = document.querySelectorAll('section')

//get all links
let navLinks=document.querySelectorAll(' nav ul li a')



// Smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to the current navigation item based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    document.querySelectorAll('nav ul li a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href').slice(1) === currentSection) {
            a.classList.add('active');
        }
    });
});






