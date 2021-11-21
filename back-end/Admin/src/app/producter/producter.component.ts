import { Component, OnInit } from '@angular/core';
import { ThemSpService} from '../Controler/Product/Add/them-sp.service'
import {  Producter } from '../../Model/producter.model'

@Component({
  selector: 'app-producter',
  templateUrl: './producter.component.html',
  styleUrls: ['./producter.component.css']
})
export class ProducterComponent implements OnInit {

  constructor(private producter:ThemSpService) { }
  producterr!:Producter[];
  ngOnInit(): void {
    this.getProducter();
  }
  getProducter()
  {
    this.producter.getNSX().subscribe((res:Producter[])=>{
      this.producterr = res;
    })
  }

}
