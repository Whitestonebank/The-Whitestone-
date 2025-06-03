document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMsg = document.getElementById('error-msg');

  if (username === 'Sarahhilton' && password === 'giveaway') {
    window.location.href = 'dashboard.html';
  } else {
    errorMsg.textContent = 'Invalid username or password.';
  }
});
