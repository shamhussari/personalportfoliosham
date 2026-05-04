// Navigation logic
const navItems = document.querySelectorAll('.nav-list li');
const pages = document.querySelectorAll('.page');

navItems.forEach(item => {
  item.addEventListener('click', () => {
    // Activate nav
    navItems.forEach(nav => nav.classList.remove('active'));
    item.classList.add('active');

    // Show page
    const pageName = item.getAttribute('data-page');
    pages.forEach(page => {
      page.id === pageName ? page.classList.add('active') : page.classList.remove('active');
    });
  });
});

// Contact form submit
document.getElementById('contact-form').addEventListener('submit', function(e){
  e.preventDefault();
  const first = document.getElementById('firstName').value;
  const last = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  alert(`Message sent by ${first} ${last} (${email})`);
  this.reset();
});