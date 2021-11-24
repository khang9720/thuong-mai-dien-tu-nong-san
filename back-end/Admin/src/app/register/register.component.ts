import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddStaffService } from '../Controler/Staff/Add/add-staff.service';
import { Staff } from '../../Model/staff.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private stff:AddStaffService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idStaff();
  }

  staff !:Staff;
  code_Staff:any;
  phone_number: any;
  idStaff()
  {
    const routeParams= this.route.snapshot.params;
    this.stff.fixStaff(routeParams.id).subscribe((data:any)=>{
      this.staff = data;
      this.code_Staff = this.staff.Ma_NV;
      this.phone_number = this.staff.SDT;
      console.log(this.staff);
    });
  }

}
