import { Component, inject } from '@angular/core';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bookings',
  templateUrl: './new-bookings.component.html',
  styleUrl: './new-bookings.component.css'
})
export class NewBookingsComponent {
  calendar = inject(NgbCalendar);

	hoveredDate: NgbDate | null = null;
	fromDate: NgbDate = this.calendar.getToday();
	toDate: NgbDate | null = this.calendar.getNext(this.fromDate, 'd', 10);

 hostels:any
 hostelId:any=0
 guest:any=1
 constructor(private base:BaseService, private router:Router){
  this.base.getHostes().subscribe(
    (res)=>this.hostels=res
  )
 }

 dateConverter(date:any){
   return date.year+"-"+ (date.month<10?"0"+date.month:date.month) +"-"+
   (date.day<10?"0"+date.day:date.day)
 }

 addBooking(){
  const body={
    checkIn:this.dateConverter(this.fromDate),
    checkOut:this.dateConverter(this.toDate),
    guest:this.guest,
    hostelId:Number(this.hostelId)
  }
  console.log(body)
  this.base.addBooking(body).subscribe(
    {
      next:()=> this.router.navigate(['/hostels']),
      error:(err)=>console.log("Foglalási hiba:",err)
    }
  )
 }

	onDateSelection(date: NgbDate) {
		if (!this.fromDate && !this.toDate) {
			this.fromDate = date;
		} else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
			this.toDate = date;
		} else {
			this.toDate = null;
			this.fromDate = date;
		}
	}

	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
		);
	}

	isInside(date: NgbDate) {
		return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
	}

	isRange(date: NgbDate) {
		return (
			date.equals(this.fromDate) ||
			(this.toDate && date.equals(this.toDate)) ||
			this.isInside(date) ||
			this.isHovered(date)
		);
	}
}
