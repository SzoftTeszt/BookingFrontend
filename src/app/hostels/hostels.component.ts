import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-hostels',
  templateUrl: './hostels.component.html',
  styleUrl: './hostels.component.css'
})
export class HostelsComponent {

  hostels:any

  constructor(private base:BaseService){
    this.base.getHostes().subscribe(
      (res:any)=>{
        this.hostels=[]
        for (const element of res) {
          this.hostels.push({visible:false, ...element})
        }
      }
        
    )
  }
}
