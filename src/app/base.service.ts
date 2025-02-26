import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private http:HttpClient) { }

  getHostes(){
    return this.http.get("https://172.16.16.148:7000/api/Hostels")
  }

  addBooking(booking:any){
    return this.http.post("https://172.16.16.148:7000/api/Bookings", booking)
  }
}
