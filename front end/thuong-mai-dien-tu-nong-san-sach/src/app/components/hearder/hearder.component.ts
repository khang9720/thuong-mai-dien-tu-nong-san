import { Component, OnInit } from '@angular/core'
import { TokenStorageService } from 'src/app/_services/token-storage.service'
@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
})
export class HearderComponent implements OnInit {
  isLoggedIn = false
  showAdminBoard = false
  showModeratorBoard = false
  phone?: any
  constructor(private tokenStorageService: TokenStorageService) {}

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
}
