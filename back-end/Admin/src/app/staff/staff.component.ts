import { Component, OnInit } from '@angular/core';
import { ShowStaffService } from '../Controler/Staff/Show/show-staff.service';
import { Staff} from '../../Model/staff.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private stff:ShowStaffService) { }

  ngOnInit(): void {
    this.ShowStaff();
  }
  //Show data staff
  staff!:Staff[];
  ShowStaff()
  {
    this.stff.showAllStaff().subscribe((res:Staff[])=>{
      this.staff = res;
      console.log(res);
    });
  }
  gender:any;
  checkSex(number:any)
  {
    if(number == 0)
    {
      this.gender = "Nữ"
    }
    else if(number == 1)
    {
      this.gender = "Nam"
    }
  }
}
