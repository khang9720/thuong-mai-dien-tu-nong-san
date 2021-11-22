import { Component, OnInit } from '@angular/core';
import { ThemSpService} from '../Controler/Product/Add/them-sp.service';
import {  Producter } from '../../Model/producter.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProducterService} from '../Controler/Product/Add/Producter/producter.service'
@Component({
  selector: 'app-producter',
  templateUrl: './producter.component.html',
  styleUrls: ['./producter.component.css']
})
export class ProducterComponent implements OnInit {
  
  constructor(private producter:ThemSpService,private add_producter:ProducterService,private fromBD:FormBuilder) { this.intFrom();}
  producterr!:Producter[];
  ngOnInit(): void {
    this.getProducter();
    this.getQuantity();
  }
  getProducter()
  {
    this.producter.getNSX().subscribe((res:Producter[])=>{
      this.producterr = res;
    })
  }
  public quantities: Array<number> = [];
  getQuantity() {
    for (let i = 1; i <= 100; i++) {
      this.quantities.push(i)
    }
  }
  //Add data producter
  fromProducter !:FormGroup;
  intFrom()
  {
    this.fromProducter = this.fromBD.group({
      Ma_NSX : new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Ten_NSX : new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Do_Tin_Cay : new FormControl('',[Validators.required,Validators.maxLength(15)])
    });
  }
  data:any;
  onSubmit()
  {
    //console.log(this.fromProducter.value)
    this.add_producter.addProducter(this.fromProducter.value).subscribe((res:any)=>{
      this.data = res;
      alert(this.data.message);
    });
  }

}
