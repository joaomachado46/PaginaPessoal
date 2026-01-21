AOS.init({ once: true, duration: 800 });

// highlight link 
const links = document.querySelectorAll('.nav-link');
const sections = [...document.querySelectorAll('section[id]')];

const setActiveLink = () => {
  const y = window.scrollY + 120;
  let current = sections[0]?.id;

  for (const s of sections) {
    if (y >= s.offsetTop) current = s.id;
  }

  links.forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === `#${current}`);
  });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();

document.getElementById('year').textContent = new Date().getFullYear();
