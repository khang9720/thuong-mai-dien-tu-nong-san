import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { TokenStorageService } from 'src/app/_services/token-storage.service'
@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
})
export class HearderComponent implements OnInit {
  isLoggedIn = false
  phone?: any
  constructor(
    private tokenStorageService: TokenStorageService,
    private toastr: ToastrService,
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken()

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser()
      this.phone = user.TaiKhoan
    }
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
