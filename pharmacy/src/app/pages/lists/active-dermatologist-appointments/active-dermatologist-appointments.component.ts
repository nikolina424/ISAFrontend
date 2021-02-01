import { DermatologistService } from './../../../services/dermatologist.service';
import { RatingService } from './../../../services/rating.service';
import { ActivatedRoute } from '@angular/router';
import { DermatologistAppointmentService } from './../../../services/dermatologist-appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-dermatologist-appointments',
  templateUrl: './active-dermatologist-appointments.component.html',
  styleUrls: ['./active-dermatologist-appointments.component.css']
})
export class ActiveDermatologistAppointmentsComponent implements OnInit {

  public appointments = [] as any;
  public patientId: any;
  public check = true;

  constructor( private route: ActivatedRoute, private daService: DermatologistAppointmentService) { }

  ngOnInit(): void {
    this.setupAppointments();

  }

  setupAppointments(): void {
    this.patientId = this.route.snapshot.params.id;
    this.daService.getAllActiveReservationByPatientId(this.patientId).subscribe(data => {
      data.forEach(appointment => {
        this.appointments.push(appointment);
      });
    })
}

cancel(id): void {
  let body = {
    id: id
  }
  this.daService.cancelReservation(body).subscribe(data =>{
      this.check = data;
      if(this.check === true){
        location.reload();
      }
      console.log(data);
  })
}
}
