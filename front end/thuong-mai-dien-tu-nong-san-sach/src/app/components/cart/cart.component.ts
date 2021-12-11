import { Component, OnInit } from '@angular/core'
declare var qty: any

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    qty()
  }
}
