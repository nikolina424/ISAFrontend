import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PharmacistAppointmentService } from 'src/app/services/pharmacist-appointment.service';

@Component({
  selector: 'app-active-pharmacist-appointments',
  templateUrl: './active-pharmacist-appointments.component.html',
  styleUrls: ['./active-pharmacist-appointments.component.css']
})
export class ActivePharmacistAppointmentsComponent implements OnInit {

  public appointments = [] as any;
  public patientId: any;

  constructor(private route: ActivatedRoute, private paService: PharmacistAppointmentService) { }

  ngOnInit(): void {
    this.setupAppointments();
  }

  setupAppointments(): void {
      this.patientId = this.route.snapshot.params.id;
      this.paService.getAllActiveReservationByPatientId(this.patientId).subscribe(data => {
        console.log(data);
        console.log("ovde smo");
        data.forEach(appointment => {
          this.appointments.push(appointment);
        });
        
      
      })
  }

  cancelReservation(id): void {

  }

}
