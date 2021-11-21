import { Component, OnInit } from '@angular/core';
import { Product } from '../../Model/product.model';
import { Producter } from '../../Model/producter.model';
import { Type } from '../../Model/type.model';
import { ProductService } from '../Controler/ShowData/product.service';
import { ThemSpService } from '../Controler/Product/Add/them-sp.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/compat/storage'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private product:ProductService,private add:ThemSpService,private fromBD:FormBuilder,private ff:AngularFireStorage) { this.innitFromProducts();}
  sanpham!: Product[];
  isLoading = false;
  ngOnInit(): void {
    this.getAllPro();
    this.getType();
    this.getProducter();
  }
  //Get data to API
  getAllPro(){
    this.product.getAllProduct().subscribe((data:Product[])=>{
      this.sanpham = data;

    });
  }
  //Get data Type to API
  loai!:Type[];
  getType()
  {
    this.add.getLSP().subscribe((data:Type[])=>{
      this.loai = data;
    });
  }
  //Get data Producter to API
  nsx!:Producter[];
  getProducter()
  {
    this.add.getNSX().subscribe((data:Producter[])=>{
      this.nsx = data;
    });
  }
  
  fromProduct!: FormGroup;
  innitFromProducts()
  {
    this.myDate = Date.now();
    this.fromProduct = this.fromBD.group({
      Ma_SP: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Ten_SP: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      //Hinh: new FormControl(this.name),
      Don_Gia : new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Mo_Ta: new FormControl('',[Validators.required,Validators.maxLength(1500)]),
      Ma_NSX: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Ma_LSP: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Giam_Gia: new FormControl('',[Validators.required,Validators.maxLength(15)]),
      Kich_Hoat: new FormControl('',[Validators.required,Validators.maxLength(15)])
    });
  }
  //Check the product code exists or not
  checkData:any;
  onClickCheckProduct()
  {
    this.isLoading = true;
    this.add.checkCodeProducts(this.fromProduct.value).subscribe((res:any)=>{
      console.log(this.fromProduct.value);
      if(res)
      {
        this.isLoading = false;
        this.checkData = res;
        console.log(JSON.stringify(res));
          if(this.checkData.Status == 2)
            alert("Mã có thể sử dụng ");
          else        
            alert("Mã đã tồn tại");
      }
      
    },(err)=>{
      alert('Có vấn đề xảy ra');
      this.isLoading = false;
    });
  }
  //Add data to mySQL
  myDate :any;
  onSubmit()
  {
    this.myDate = Date.now();
    //console.log(this.myDate);
    //console.log(this.fromProduct.value);
    this.link = ("/files" + this.myDate);
    this.ff.upload(this.link,this.path);
    this.add.add(this.fromProduct.value,this.link).subscribe(res=>{
      console.log("Thành công",JSON.stringify(res));
      alert("Thành công");
    },(err)=>{
      console.log(err);
    });

    //console.log(this.link);
  }
  //Up load img to firebase
  path:any;
  name:any;
  upload($event:any){
    this.path = $event.target.files[0];
    //this.name = $event.target.files[0].name;
    //console.log(this.name);
  }
  link:any;
}
