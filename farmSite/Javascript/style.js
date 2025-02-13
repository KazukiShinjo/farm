document.addEventListener('DOMContentLoaded', function () {
  const login = document.getElementById('icon');
  login.addEventListener('mouseover', function () {
    login.style.display = 'Login';
  }, false);
})
document.addEventListener('DOMContentLoaded', function () {
  const login = document.getElementById('icon');
  login.addEventListener('mouseout', function () {
    login.style.display = '';
  }, false);
})