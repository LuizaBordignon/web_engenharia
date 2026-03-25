const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn-login')
const errorMsg = document.getElementById('error-msg')

btn.addEventListener('click', function() {

  const emailValue = email.value
  const passwordValue = password.value

  if (emailValue === '' || passwordValue === '') {
    errorMsg.textContent = 'preencha todos os campos'
    errorMsg.classList.add('visible')
    return
  }

  if (emailValue === 'operador@planta42.com' && passwordValue === '123456') {
    btn.textContent = 'carregando...'
    btn.classList.add('loading')

    setTimeout(function() {
      window.location.href = 'dashboard.html'
    }, 800)

  } else {
    errorMsg.textContent = 'e-mail ou senha incorretos'
    errorMsg.classList.add('visible')
  }

})