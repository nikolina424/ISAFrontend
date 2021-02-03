import { PharmacistService } from './../../../services/pharmacist.service';
import { RatingService } from './../../../services/rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DermatologistAppointmentService } from './../../../services/dermatologist-appointment.service';
import { Component, OnInit } from '@angular/core';
import { PharmacistAppointmentService } from 'src/app/services/pharmacist-appointment.service';

@Component({
  selector: 'app-dropped-pharmacist-appointments',
  templateUrl: './dropped-pharmacist-appointments.component.html',
  styleUrls: ['./dropped-pharmacist-appointments.component.css']
})
export class DroppedPharmacistAppointmentsComponent implements OnInit {

  public appointments = [] as any;
  public patientId: any;
  tooltips = ['1', '2', '3', '4', '5'];
  ratingsPharmacist = [] as any;
  ratingsPharmacy = [] as any;

  constructor(private router: Router, private ratingService: RatingService, private route: ActivatedRoute, private paService: PharmacistAppointmentService) { }

  ngOnInit(): void {
    this.setupAppointments();
  }

  setupAppointments(): void {
      this.patientId = this.route.snapshot.params.id;
      this.paService.getAllDroppedReservationByPatientId(this.patientId).subscribe(data => {
        data.forEach(appointment => {
          this.appointments.push(appointment);
          let ratingPharmacist = {
            pharmacistId: appointment.shiftPharmacistResponse.pharmacistResponse.id,
            appId: appointment.id,
            value: 0,
            done: false
          }
          let ratingPharmacy = {
            pharmacyId: appointment.shiftPharmacistResponse.pharmacyResponse.id,
            pharmacistId: appointment.shiftPharmacistResponse.pharmacistResponse.id,
            appId: appointment.id,
            value: 0,
            done: false
          }
          this.ratingsPharmacist.push(ratingPharmacist);
          this.ratingsPharmacy.push(ratingPharmacy);
         
          console.log(ratingPharmacist);
          console.log(ratingPharmacy);
          console.log("Ovo su dropovani app");
        });
        
      
      })
  }

  ratePharmacist(pharmacistId, appId): void {
    console.log(pharmacistId);
    let grade;
    this.ratingsPharmacist.forEach(rating => {
      if(pharmacistId === rating.pharmacistId){
        if(appId === rating.appId){
          grade = rating.value;
          console.log("Rating");

          console.log(rating);
          rating.done = true;
        }
        
      }
    });
    let body = {
      id: pharmacistId,
      grade: grade
    }
    console.log(body);
    this.ratingService.ratePharmacist(body).subscribe(data => {
      
      console.log("Uspesno");
     
    }, error => {
    })
  }

  complaintPharmacist(id, pharmacyId): void {
    localStorage.setItem('pharmacyId', JSON.stringify(pharmacyId));
    this.router.navigateByUrl(`homepage/new-items/complaint-pharmacist/${id}`);
  }

  complaintPharmacy(id): void {
    this.router.navigateByUrl(`homepage/new-items/complaint-pharmacy/${id}`);
  }

  ratePharmacy(pharmacyId, pharmacistId, appId): void {
    let grade;
    this.ratingsPharmacy.forEach(rating => {
      if(pharmacyId === rating.pharmacyId){
        if(pharmacistId === rating.pharmacistId){
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
