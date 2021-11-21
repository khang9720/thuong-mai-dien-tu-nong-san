import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private rt:Router) { }
  
  token:any;

  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(!this.token)
    {
      this.rt.navigate(['']);
    }
  }

  //Remove token khỏi data để đăng xuất
  logOUt()
  {
    window.localStorage.removeItem('token');
    this.rt.navigate(['']);
  }

}
