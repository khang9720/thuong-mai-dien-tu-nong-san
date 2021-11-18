import { Component, OnInit } from '@angular/core'
declare const showHidePassword: any
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    showHidePassword()
  }
}
