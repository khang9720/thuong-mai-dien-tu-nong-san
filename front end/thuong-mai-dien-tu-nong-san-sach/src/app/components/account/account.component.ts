import { DatePipe } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { ToastrService } from 'ngx-toastr'
import { CustomerService } from 'src/app/services/customer.service'
import { TokenStorageService } from 'src/app/_services/token-storage.service'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  isLoggedIn = false
  phone?: any
  constructor(
    private tokenStorageService: TokenStorageService,
    private datePipe: DatePipe,
    private toastr: ToastrService,
    private customer: CustomerService,
  ) {}
  infoArray: any = {}

  reactiveForm!: FormGroup
  fullNamePtn =
    '/[^a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]/u'
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken()

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser()
      this.phone = user.TaiKhoan
    }
  }

  day = new Date()
  onSubmit(): void {
    if (this.infoArray.sex != 0) {
      this.infoArray.sex = 1
    }
    if (this.infoArray.day == Date.now() || this.infoArray.firstname == null) {
      this.showSuccess('Bạn chưa điền đủ thông tin', false)
    } else {
      let Ma_KH = this.phone
      let ten = this.infoArray.firstname
      let ngaySinh = this.datePipe.transform(this.day, 'yyyy-MM-dd')
      let Gioi_Tinh = this.infoArray.sex
      this.customer
        .update_detail_customer(Ma_KH, ten, ngaySinh, Gioi_Tinh)
        .subscribe(
          (data) => {
            let messenger = data
            this.showSuccess(messenger.message, true)
          },
          (error) => {
            console.log(error)
          },
        )
    }
  }
  showSuccess(messenger: any, status: any) {
    if (status == true) {
      this.toastr.success(messenger, 'Thông báo', { timeOut: 3000 })
    } else {
      this.toastr.warning(messenger, 'Thông báo', { timeOut: 3000 })
    }
  }
}
