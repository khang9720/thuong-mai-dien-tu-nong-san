import { Component, OnInit } from '@angular/core';
import { LoginService } from '../Controler/Login/login.service'
import {FormBuilder,FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private lg_ad:LoginService,private fromBD:FormBuilder,public rt:Router) {this.innitFromLogin(); }
  loginFrom!: FormGroup;
  data:any;
  token:any;
  ngOnInit(): void {
    this.token = localStorage.getItem('token');
    if(this.token)
    this.rt.navigate(['index']);
  }
  //Lấy dữ liệu từ from
  innitFromLogin()
  {
    this.loginFrom = this.fromBD.group({
      account: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      password: new FormControl('',[Validators.required,Validators.maxLength(15)])
    });
  }
  //Nhấn đăng nhập
  onSubmitLogin()
  {
    //console.log(this.loginFrom.value);
    this.lg_ad.loginAD(this.loginFrom.value).subscribe(res=>{
      if(res){
        //console.log(JSON.stringify(res));
        //localStorage.setItem("name",this.data.Ten);
        this.data = res;
        switch(this.data.Status){
          case 3:
            localStorage.setItem("name",this.data.Ten);
            this.navigateToHome();
          //console.log(this.ac.Token);
          //alert(this.data.Ten);
          localStorage.setItem("token",this.data.Token); //Chuyển token để xác nhận đăng nhập
           //Chuyển Tên để xác show tên ADMIN
          break;
          case 2:
            alert(this.data.Mess);
            break;
        }
      }
    });
  }

  //Chuyển trang sang index
  navigateToHome(){
    this.rt.navigate(['index']);     
}

}
