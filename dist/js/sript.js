// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
 
  if (window.pageYOffset > fixedNav) {
     header.classList.add('navbar-fixed');
  } else {
     header.classList.remove('navbar-fixed');
  }
 };
 
 // Hamburger
 const hamburger = document.querySelector('#hamburger');
 const navMenu = document.querySelector('#nav-menu');
 
 hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('hidden');
 });
 
 // Klik di luar hamburger
 window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
     hamburger.classList.remove('hamburger-active');
     navMenu.classList.add('hidden');
  }
 });
 
 // keranjang
 // Select the elements
 const keranjangBtn = document.getElementById('keranjang');
 const keranjangSidebar = document.getElementById('keranjang-sidebar');
 
 // Add the event listeners
 keranjangBtn.addEventListener('click', function () {
  keranjangSidebar.classList.toggle('hidden');
 });
 
 // klik sembarang
