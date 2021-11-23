import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {liink} from '../../../../Link/link';
@Injectable({
  providedIn: 'root'
})
export class AddStaffService {

  constructor(private http:HttpClient) { }

  addStaffURL = liink.bsaeURL + 'Add_Staff.php';
  addStaff(StaffData:any)
  {
    let payLoad = new HttpParams();
    payLoad = payLoad.append('Ma_NV',StaffData.Ma_NV);
    payLoad = payLoad.append('Ten_NV',StaffData.Ten_NV);
    payLoad = payLoad.append('Ngay_Sinh',StaffData.Ngay_Sinh);
    payLoad = payLoad.append('Gioi_Tinh',StaffData.Gioi_Tinh);
    payLoad = payLoad.append('Dia_Chi',StaffData.Dia_Chi);
    payLoad = payLoad.append('SDT',StaffData.SDT);
    return this.http.post(this.addStaffURL,payLoad);
  }
}
