import { Component, OnInit } from '@angular/core';
import { ShowStaffService } from '../Controler/Staff/Show/show-staff.service';
import { Account} from '../../Model/account.model';
import { AddStaffService } from '../Controler/Staff/Add/add-staff.service'
@Component({
  selector: 'app-account-staff',
  templateUrl: './account-staff.component.html',
  styleUrls: ['./account-staff.component.css']
})
export class AccountStaffComponent implements OnInit {

  constructor(private stff:ShowStaffService,private add:AddStaffService) { }

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
  buutonStatus(a:any,MA:any)
  {
    if(a == 1)
    {
      this.Acces = "Vô hiệu hóa tài khoản";
      this.add.Status_Account('0',MA).subscribe((res:any)=>{
        alert(res.message);
        this.ShowStaff();
      })
      
    }
    else
    {
      this.Acces = "Kích hoạt tài khoản";
      this.add.Status_Account('1',MA).subscribe((res:any)=>{
        alert(res.message);
        this.ShowStaff();
      })
      
    }
  }

  resss2 : any;
  sortAcess()
  {
    if(this.resss2)
    {
      let newarrs = this.staff.sort((a:any,b:any)=>b.KichHoat - a.KichHoat)
      this.resss2 = !this.resss2
    }
    else if(!this.resss2)
    {
      let newarrs = this.staff.sort((a:any,b:any)=>a.KichHoat - b.KichHoat)
      this.resss2 = !this.resss2
    }
  }
 p:any;
 NV:any;
 SearchNC(){
  this.staff = this.staff.filter(res =>{
    return res.Ten_NV.toLocaleLowerCase().match(this.NV.toLocaleLowerCase());
    
  });

  }
  emtySearch()
  {
    if(this.NV == "")
    {
      this.ngOnInit();
    }
  }
}
