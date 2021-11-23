import { Component, OnInit, ViewChild } from '@angular/core';
import { ShowStaffService } from '../Controler/Staff/Show/show-staff.service';
import { Staff} from '../../Model/staff.model';
import { AddStaffService } from '../Controler/Staff/Add/add-staff.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  constructor(private stff:ShowStaffService,private add_stf :AddStaffService,private fromBD:FormBuilder,private rt:Router) { this.initFromStaff(); }

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
  //add staff
  staffData!:FormGroup;
  initFromStaff()
  {
    this.staffData = this.fromBD.group({
      Ma_NV: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Ten_NV: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Ngay_Sinh: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Gioi_Tinh: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Dia_Chi: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      SDT: new FormControl('',[Validators.required,Validators.maxLength(15)])
    })
  }
  onSubmit()
  {
    console.log(this.staffData.value);
    this.add_stf.addStaff(this.staffData.value).subscribe((res:any)=>{
      alert(res.message);
      if(res.status == true)
      {
        this.ShowStaff();
        this.navigateToStaff();
      }
    });
  }
  numberOnly(event:any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  navigateToStaff(){
    this.rt.navigate(['staff']);     
}
}
