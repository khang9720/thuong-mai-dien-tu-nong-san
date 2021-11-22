import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {liink} from '../../../../../Link/link';
@Injectable({
  providedIn: 'root'
})
export class ProducterService {

  constructor(private http:HttpClient) { }
  addURL = liink.bsaeURL + 'Add_Producter.php';
  addProducter(TypeData:any)
  {
    let payload = new HttpParams();
    payload = payload.append("Ma_NSX",TypeData.Ma_NSX);
    payload = payload.append("Ten_NSX",TypeData.Ten_NSX);
    payload = payload.append("Do_Tin_Cay",TypeData.Do_Tin_Cay);
    return this.http.post(this.addURL,payload);
  }
}
