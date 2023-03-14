import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesservice/notes.service';

@Component({
  selector: 'app-bookingdashboard',
  templateUrl: './bookingdashboard.component.html',
  styleUrls: ['./bookingdashboard.component.scss']
})
export class BookingdashboardComponent implements OnInit {

  constructor(private note:NotesService) { }
  users:any
  ngOnInit(): void {
    this.getallBookings()
  }

  getallBookings(){
    this.note.usergetallBookings().subscribe((response:any)=>{
      console.log('Getting All Booking List',response)
      this.users=response.response;
    })
  }

}
