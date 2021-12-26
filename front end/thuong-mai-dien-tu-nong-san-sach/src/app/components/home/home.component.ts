import { Component, OnInit } from '@angular/core'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private product: ProductService) {}

  products: any

  ngOnInit(): void {
    this.productAll()
  }
  productAll(): void {
    this.product.getAll().subscribe(
      (data) => {
        this.products = data
        for (const item of this.products) {
          item.Thanh_Tien = Number(
            item.Thanh_Tien.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            }),
          )
          item.Don_Gia = Number(
            item.Don_Gia.toLocaleString('vi', {
              style: 'currency',
              currency: 'VND',
            }),
          )
        }
      },
      (error) => {
        console.log(error)
      },
    )
  }
}
