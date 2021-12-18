import { Component, OnInit } from '@angular/core'
declare const showHidePassword: any

@Component({
  selector: 'app-password-update',
  templateUrl: './password-update.component.html',
  styleUrls: ['./password-update.component.scss'],
})
export class PasswordUpdateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    showHidePassword()
  }
}
