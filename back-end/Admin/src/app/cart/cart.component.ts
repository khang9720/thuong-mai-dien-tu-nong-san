import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { Cart } from '../../Model/cart.models';
import { ShowService } from '../Controler/Cart/Show/show.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private Cr:ShowService,private cdr: ChangeDetectorRef) { }
  p:any;
  cart!:Cart[];
  ngOnInit(): void {
    this.showAllCart();
  }

  showAllCart()
  {
    this.Cr.getAllCart().subscribe((res:Cart[])=>{
      this.cart = res;
    })
  }

  
  status:any;
  checkStatus(a:any,b:any)
  {
    if(a == 1 && b < 2)
    {
      this.status = 1;
    }
    else
    {
      this.status = 0;
    }
  }
  cart2!:Cart;
  getIDCard(id:any)
  {
    this.Cr.getIDCart(id).subscribe((res:any)=>{
      this.cart2 = res;
    });
  }
  idOrder:any;
  cancelOrder(id:any)
  {
    console.log(id);
    this.Cr.cancelID(id).subscribe((res:any)=>{
      alert(res.message);
      this.ngOnInit();
    });
  }

  ngAfterViewChecked(){
    //your code to update the model
    this.cdr.detectChanges();
 }

  upShipp(id:any)
  {
    this.Cr.UpShip(id).subscribe((res:any)=>{
      alert(res.message);
      this.ngOnInit();
    })
  }
}
