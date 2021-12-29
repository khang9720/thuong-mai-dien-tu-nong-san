import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

const Register_CustomerUrl =
  'http://localhost:80/Newfolder/Register_Customer.php'
const Update_Detail_CustomerUrl =
  'http://localhost:80/Newfolder/Update_Detail_Customer.php'
@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(public http: HttpClient) {}

  Register(account: any, password: any): Observable<any> {
    return this.http.get(
      `${Register_CustomerUrl}?TaiKhoan=${account}&Password=${password}`,
    )
  }
  update_detail_customer(
    Ma_KH: any,
    Ten_KH: any,
    Ngay_Sinh: any,
    Gioi_Tinh: any,
  ): Observable<any> {
    return this.http.get(
      `${Update_Detail_CustomerUrl}?Ma_KH=${Ma_KH}&Ten_KH=${Ten_KH}&Ngay_Sinh=${Ngay_Sinh}&Gioi_Tinh=${Gioi_Tinh}`,
    )
  }
}
