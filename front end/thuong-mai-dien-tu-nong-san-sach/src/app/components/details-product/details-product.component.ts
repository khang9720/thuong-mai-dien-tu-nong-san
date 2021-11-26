import { Component, OnInit } from '@angular/core'
declare var qty: any

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.scss'],
})
export class DetailsProductComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    qty()
  }
}
