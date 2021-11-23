import { Injectable } from '@angular/core';
import {liink} from '../../../../Link/link';
import {HttpClient,HttpParams} from '@angular/common/http';
import {Staff} from '../../../../Model/staff.model';
@Injectable({
  providedIn: 'root'
})
export class ShowStaffService {

  constructor(private http:HttpClient) { }

  //Show All Staff
  staffURL = liink.bsaeURL + 'Show_Staff.php';
  //staff!: Staff[];
  showAllStaff()
  {
    return this.http.get<Staff[]>(this.staffURL).pipe();
  }

}
