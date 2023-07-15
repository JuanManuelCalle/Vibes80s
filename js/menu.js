const menuToggler = document.getElementById('menuToggler');
const mainnav = document.getElementById('mainnav');

menuToggler.addEventListener('click', function() {
  if (mainnav.style.display === 'none') {
    mainnav.style.display = 'block';
  } else {
    mainnav.style.display = 'none';
  }
});