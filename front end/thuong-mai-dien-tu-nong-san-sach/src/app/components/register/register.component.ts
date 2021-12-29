import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { CustomerService } from 'src/app/services/customer.service'
import { Md5 } from 'ts-md5/dist/md5'
CustomerService
declare const showHidePassword: any
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  regArr: any = {}
  constructor(
    private fb: FormBuilder,
    private customer: CustomerService,
    private toastr: ToastrService,
  ) {}

  reactiveForm!: FormGroup
  passwordPtn = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'
  phonePtn = '[0]{1}[0-9]{2}[0-9]{3}[0-9]{4}'
  registerArray: any = {}

  submitRegister = false
  messenger: any = {}

  ngOnInit(): void {
    showHidePassword()
  }
  onSubmit() {
    console.log(this.reactiveForm.value)
  }
  pwdSubmit() {
    alert(this.registerArray)
  }
  save(): void {
    let acc = this.registerArray.phone
    let password = this.registerArray.password
    this.customer.Register(acc, Md5.hashStr(password)).subscribe(
      (data) => {
        this.submitRegister = true
        this.messenger = data
        if (this.messenger.status == true)
          this.showSuccess(this.messenger.message, true)
        else {
          this.showSuccess(this.messenger.message, false)
        }
        console.log(data)
      },
      (error) => {
        console.log(error)
      },
    )
  }
  showSuccess(messenger: any, status: any) {
    if (status == true) {
      this.toastr.success(messenger, 'Thông báo', { timeOut: 3000 })
    } else {
      this.toastr.warning(messenger, 'Thông báo', { timeOut: 3000 })
    }
  }
}
