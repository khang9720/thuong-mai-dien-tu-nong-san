function showHidePassword() {
  var password = document.getElementById('password')
  var toggler = document.getElementById('toggler')

  var newPassword = document.getElementById('newPassword')
  var newToggler = document.getElementById('newToggler')

  var retype = document.getElementById('retype')
  var retypeToggler = document.getElementById('retypeToggler')
  showHidePassword = () => {
    if (password.type == 'password') {
      password.setAttribute('type', 'text')
      toggler.classList.add('fa-eye-slash')
    } else {
      toggler.classList.remove('fa-eye-slash')
      password.setAttribute('type', 'password')
    }
  }

  showHidePasswordNew = () => {
    if (newPassword.type == 'password') {
      newPassword.setAttribute('type', 'text')
      newToggler.classList.add('fa-eye-slash')
    } else {
      newToggler.classList.remove('fa-eye-slash')
      newPassword.setAttribute('type', 'password')
    }
  }
  showHidePasswordRetype = () => {
    if (retype.type == 'password') {
      retype.setAttribute('type', 'text')
      retypeToggler.classList.add('fa-eye-slash')
    } else {
      retypeToggler.classList.remove('fa-eye-slash')
      retype.setAttribute('type', 'password')
    }
  }
  toggler.addEventListener('click', showHidePassword)
  try {
    newToggler.addEventListener('click', showHidePasswordNew)
  } catch (error) {}
  retypeToggler.addEventListener('click', showHidePasswordRetype)
}
