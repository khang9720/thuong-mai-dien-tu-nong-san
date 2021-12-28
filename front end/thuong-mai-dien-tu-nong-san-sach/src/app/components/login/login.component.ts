import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { AuthService } from 'src/app/_services/auth.service'
import { TokenStorageService } from 'src/app/_services/token-storage.service'

declare const showHidePassword: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  regArr: any = {}

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private tokenStorageService: TokenStorageService,
  ) {}
  reactiveForm!: FormGroup

  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  phonePtn = '[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}'
  loginArray: any = {}

  tkLogin = false
  isLoggedIn = false
  isLoginFailed = false
  errorMessage = ''

  ngOnInit(): void {
    showHidePassword()
    this.checklogin()
  }
  onSubmit(): void {
    const phone = this.loginArray.phone
    const password = this.loginArray.password
    console.log(phone, password)

    this.authService.login(phone, password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken)
        this.tokenStorage.saveUser(data)
        this.isLoginFailed = false
        this.isLoggedIn = true
        console.log(data)
        this.reLoad()
      },
      (err) => {
        this.errorMessage = err.error.message
        this.isLoginFailed = true
      },
    )
  }
  pwdSubmit() {
    alert(this.loginArray)
  }
  checklogin(): void {
    if (this.tokenStorage.getToken() != null) {
      this.tkLogin = true
    } else {
      this.tkLogin = false
    }
  }
  reLoad(): void {
    window.location.reload()
  }
  logout(): void {
    this.tokenStorageService.signOut()
    window.location.reload()
  }
}
