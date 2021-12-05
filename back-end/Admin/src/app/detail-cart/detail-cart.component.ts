import { Component, OnInit } from '@angular/core';
import { Cart } from '../../Model/cart.models';
import { ShowService } from '../Controler/Cart/Show/show.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartDetails } from '../../Model/carts_details.model';


@Component({
  selector: 'app-detail-cart',
  templateUrl: './detail-cart.component.html',
  styleUrls: ['./detail-cart.component.css']
})
export class DetailCartComponent implements OnInit {

  constructor(private cr:ShowService,private rt:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idCart();
    this.getIDDetailsCard();
  }

  cart !: Cart;
  Ma_DH:any;
  Date:any;
  Ship:any;
  ID_KH:any;
  ID_NV:any;

  Money:any;
  Sale:any;
  Total:any;
  Note:any;
  Status:any;
  idCart()
  {
    const routeParams= this.route.snapshot.params;
    this.cr.getIDCart(routeParams.id).subscribe((data:any)=>{
      this.cart = data;
      this.Ma_DH = this.cart.Ma_DH;
      this.Date =this.cart.Ngay_Ban;
      this.Ship =this.cart.Giao_Hang;
      this.ID_KH =this.cart.Ma_KH;
      this.ID_NV =this.cart.Ma_NV;
      this.Note = this.cart.Ghi_Chu;
      this.Money = this.cart.Tong_Tien;
      this.Sale = this.cart.Khuyen_Mai;
      this.Total = this.cart.Thanh_Tien;
      this.Status = this.cart.Trang_Thai;
    });
  }
  decart!:CartDetails[]
  getIDDetailsCard()
  {
    const routeParams= this.route.snapshot.params;
    this.cr.getIDDeitailsCart(routeParams.id).subscribe((data:CartDetails[])=>{
      this.decart = data;
    })
  }

  deleteProduct(sp:any)
  {
    console.log(sp);
    const routeParams2= this.route.snapshot.params;
    this.cr.deleteDetailsOrder(routeParams2.id,sp).subscribe((res:any)=>{
      alert(res.message);
      this.ngOnInit();
    })
  }

  cart2!:CartDetails;
  SP:any;
  getIDCard(id:any)
  {
    const routeParams3= this.route.snapshot.params;
    console.log(id);
    this.cr.IDNoRow(routeParams3.id,id).subscribe((res:any)=>{
      this.cart2 = res;
      this.SP = this.cart2.Ma_SP;
      console.log(this.SP);
    });
  }
  
  showw:any;
  filter(a:any,b:any)
  {
    if(a == 0 && b<2)
    {
      this.showw = 0;
    }
    else
    {
      this.showw = 1;
    }
  }

  
}
