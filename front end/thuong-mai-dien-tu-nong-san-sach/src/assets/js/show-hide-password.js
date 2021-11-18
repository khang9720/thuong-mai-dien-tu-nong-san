function showHidePassword() {
  var password = document.getElementById('password')
  var toggler = document.getElementById('toggler')
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
  retypeToggler.addEventListener('click', showHidePasswordRetype)
}
