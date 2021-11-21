import { Component, OnInit } from '@angular/core';
import { ThemSpService} from '../Controler/Product/Add/them-sp.service'
import {  Type } from '../../Model/type.model'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TypeService} from '../Controler/Product/Add/Type/type.service'
@Component({
  selector: 'app-typeproduct',
  templateUrl: './typeproduct.component.html',
  styleUrls: ['./typeproduct.component.css']
})
export class TypeproductComponent implements OnInit {

  constructor(private typpe:ThemSpService,private fromBD:FormBuilder,private tyype:TypeService) {this.innitFromProducts(); }
  type!:Type[];
  ngOnInit(): void {
    this.getType();
  }
  //Call API type
  getType()
  {
    this.typpe.getLSP().subscribe((res:Type[])=>{
      this.type = res;
    })
  }
  //Add Type to data
  fromProduct!: FormGroup;
  //Get data to from
  innitFromProducts()
  {
    this.fromProduct = this.fromBD.group({
      Ma_LSP: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Ten_LSP: new FormControl('',[Validators.required,Validators.maxLength(15)]),
    });
  }
  //Click button Add 
  dataType:any;
  onSubmit()
  {
     this.tyype.addType(this.fromProduct.value).subscribe((res:any)=>{
      this.dataType = res;
      alert(this.dataType.message);
     }) 
  }
}
