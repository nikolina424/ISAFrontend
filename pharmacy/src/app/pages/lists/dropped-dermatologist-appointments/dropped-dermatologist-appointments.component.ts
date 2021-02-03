import { PharmacistService } from './../../../services/pharmacist.service';
import { RatingService } from './../../../services/rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DermatologistAppointmentService } from './../../../services/dermatologist-appointment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropped-dermatologist-appointments',
  templateUrl: './dropped-dermatologist-appointments.component.html',
  styleUrls: ['./dropped-dermatologist-appointments.component.css']
})
export class DroppedDermatologistAppointmentsComponent implements OnInit {

  public appointments = [] as any;
  public patientId: any;
  tooltips = ['1', '2', '3', '4', '5'];
  ratingsDermatologist = [] as any;
  ratingsPharmacy = [] as any;

  constructor(private router: Router, private ratingService: RatingService, private route: ActivatedRoute, private daService: DermatologistAppointmentService) { }

  ngOnInit(): void {
    this.setupAppointments();
  }

  setupAppointments(): void {
      this.patientId = this.route.snapshot.params.id;
      this.daService.getAllDroppedReservationByPatientId(this.patientId).subscribe(data => {
        data.forEach(appointment => {
          this.appointments.push(appointment);
          let ratingDermatologist = {
            dermatologistId: appointment.dermatologist.id,
            appId: appointment.id,
            value: 0,
            done: false
          }
          let ratingPharmacy = {
            pharmacyId: appointment.pharmacy.id,
            dermatologistId: appointment.dermatologist.id,
            appId: appointment.id,
            value: 0,
            done: false
          }
          this.ratingsDermatologist.push(ratingDermatologist);
          this.ratingsPharmacy.push(ratingPharmacy);
        });
      })
  }

  rateDermatologist(dermatologistId, appId): void {
    console.log(dermatologistId);
    let grade;
    this.ratingsDermatologist.forEach(rating => {
      if(dermatologistId === rating.dermatologistId){
        if(appId === rating.appId){
          grade = rating.value;
          console.log("Rating");

          console.log(rating);
          rating.done = true;
        }
        
      }
    });
    let body = {
      id: dermatologistId,
      grade: grade
    }
    console.log(body);
    this.ratingService.rateDermatologist(body).subscribe(data => {
      
      console.log("Uspesno");
     
    }, error => {
    })
  }

  complaintDermatologist(id, pharmacyId): void {
    localStorage.setItem('pharmacyId', JSON.stringify(pharmacyId));
    this.router.navigateByUrl(`homepage/new-items/complaint-dermatologist/${id}`);
  }

  complaintPharmacy(id): void {
    this.router.navigateByUrl(`homepage/new-items/complaint-pharmacy/${id}`);
  }

  ratePharmacy(pharmacyId, dermatologistId, appId): void {
    let grade;
    this.ratingsPharmacy.forEach(rating => {
      if(pharmacyId === rating.pharmacyId){
        if(dermatologistId === rating.dermatologistId){
          if(appId === rating.appId){
            grade = rating.value;
            rating.done = true;
          }
         
        }
      }
    });
    let body = {
      id: pharmacyId,
      grade: grade
    }
    console.log(body);

    this.ratingService.ratePharmacy(body).subscribe(data => {
      console.log("Uspesno");
    }, error => {
      alert("Error");
    })
  }

}
