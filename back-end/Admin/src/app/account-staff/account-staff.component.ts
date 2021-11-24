import { Component, OnInit } from '@angular/core';
import { ShowStaffService } from '../Controler/Staff/Show/show-staff.service';
import { Account} from '../../Model/account.model';
@Component({
  selector: 'app-account-staff',
  templateUrl: './account-staff.component.html',
  styleUrls: ['./account-staff.component.css']
})
export class AccountStaffComponent implements OnInit {

  constructor(private stff:ShowStaffService) { }

  ngOnInit(): void {
    this.ShowStaff();
  }
  staff!:Account[];
  ShowStaff()
  {
    this.stff.showAccount().subscribe((res:Account[])=>{
      this.staff = res;
      //console.log(res);
    });
  }
  Acces:any;
  FilterAccount(a:any)
  {
    if(a == 1)
    {
      this.Acces = "Vô hiệu hóa tài khoản";
    }
    else
    {
      this.Acces = "Kích hoạt tài khoản";
    }
  }

}
