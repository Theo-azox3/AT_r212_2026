const nav = document.querySelector('nav');
document.querySelector('.menu-btn').onclick = () => nav.classList.toggle('.is-open');
document.onkeydown = e => e.key === 'Escape' && nav.classList.remove('.is-open');