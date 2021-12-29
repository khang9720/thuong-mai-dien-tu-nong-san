import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { AuthService } from 'src/app/_services/auth.service'
import { TokenStorageService } from 'src/app/_services/token-storage.service'
import { Md5 } from 'ts-md5'

declare const showHidePassword: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  regArr: any = {}

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private tokenStorageService: TokenStorageService,
    private toastr: ToastrService,
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
    console.log(Md5.hashStr(password))

    this.authService.login(phone, Md5.hashStr(password)).subscribe(
      (data) => {
        let status = data
        if (status.Status == 3) {
          this.tokenStorage.saveToken(data.accessToken)
          this.tokenStorage.saveUser(data)
          this.isLoginFailed = false
          this.isLoggedIn = true
          this.reLoad()
        } else if (status.Status == 2) {
          this.isLoggedIn = false
          let messenger = status.Mess
          this.showSuccess(messenger, false)
        }
        console.log(this.isLoggedIn)
        console.log(data)
      },
      (err) => {
        this.errorMessage = err.error.message
        this.isLoginFailed = true
      },
    )
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
  showSuccess(messenger: any, status: any) {
    if (status == true) {
      this.toastr.success(messenger, 'Thông báo', { timeOut: 3000 })
    } else {
      this.toastr.warning(messenger, 'Thông báo', { timeOut: 3000 })
    }
  }
}
