import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrl: './hostels.component.css'
})
export class HostelsComponent {

  hostels:any

  constructor(private base:BaseService, private router:Router){
    this.base.getHostes().subscribe(
      (res:any)=>{
        this.hostels=[]
        for (const element of res) {
          this.hostels.push({visible:false, ...element})
        }
      }        
    )
  }
  addBooking(){
    this.router.navigate(['/newbooking'])
  }
}
