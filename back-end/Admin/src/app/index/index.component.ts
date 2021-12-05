import { Component, OnInit } from '@angular/core';
import { Revenue } from '../../Model/revenue.model';
import { ShowDtService } from '../Controler/Revenue/Show/show-dt.service';
import { Visualization_Revenue } from '../../Model/revenue_visualization.model';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private dt:ShowDtService) { }
  today: number = Date.now();
  ngOnInit(): void {
    this.show();
    this.showY();
    this.showD();
  }
  dtt!:Revenue;
  doanhThuT:any;
  thang:any;
  nam:any;
  show()
  {
    this.dt.getRevenue().subscribe((res:any)=>{
      this.dtt = res;
      this.doanhThuT = this.dtt.Total_Month;
    })
    this.showV();
  }

  dttY!:Revenue;
  doanhThuN:any;
  showY()
  {
    
    this.dt.getRevenueY().subscribe((res:any)=>{
      this.dttY = res;
      this.doanhThuN = this.dttY.Total_Year;
    })
  }

  dttD!:Revenue;
  doanhThuD:any;
  showD()
  {
    
    this.dt.getRevenueD().subscribe((res:any)=>{
      this.dttD = res;
      this.doanhThuD = this.dttD.Total_Day;
    })
  }


  dtV!:Visualization_Revenue[];
  va!:any[];
  
  showV()
  {
    
    this.dt.getRevenueV().subscribe((res:any)=>{
      this.dtV = res;
      this.va = this.dtV;
      console.log(this.dtV);
    })
  }

  //Visualization

  view:[number,number] = [700, 400];

  showXAxis = false;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Loại sản phẩm';
  showYAxisLabel = true;
  yAxisLabel = 'Doanh thu';
  xAxisTickFormattingFn = true;
  yAxisTickFormattingFn = false;


  

  onSelect(data:any){
    console.log('Item clicked', data);
  }

  
}
