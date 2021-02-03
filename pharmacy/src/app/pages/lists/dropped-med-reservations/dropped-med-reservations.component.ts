import { RatingService } from './../../../services/rating.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentReservationService } from './../../../services/medicament-reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropped-med-reservations',
  templateUrl: './dropped-med-reservations.component.html',
  styleUrls: ['./dropped-med-reservations.component.css']
})
export class DroppedMedReservationsComponent implements OnInit {

  public patientId: any;
  public reservations= [] as  any;
  tooltips = ['1', '2', '3', '4', '5'];
  public ratings = [];
  value = 0;
  savedId: any;
  savedReservations= [] as any;
  ratingsMedicament = [] as any;
  ratingsPharmacy = [] as any;
  res = false;


  constructor( private router: Router, private ratingService: RatingService, private route: ActivatedRoute, private mrService: MedicamentReservationService) { }

  ngOnInit(): void {
    this.setupReservations();
  }

  setupReservations(): void{
    this.patientId = this.route.snapshot.params.id;
    this.mrService.getDroppedByPatientId(this.patientId).subscribe(data => {
        data.forEach(reservation => {
          this.reservations.push(reservation);
         
          let ratingMed = {
            medId: reservation.pharmacyMedicament.medicament.id,
            value: 0,
            done: false
          }
          let ratingPharmacy = {
            pharmacyId: reservation.pharmacyMedicament.pharmacy.id,
            medicamentId: reservation.pharmacyMedicament.medicament.id,
            value: 0,
            done: false
          }
          this.ratingsMedicament.push(ratingMed);
          this.ratingsPharmacy.push(ratingPharmacy);
        });
        console.log(this.reservations);
        //console.log(this.ratingsMedicament);
        //console.log(this.ratingsPharmacy);
    })

  }

  rateMedicament(medicamentId): void {
    console.log(medicamentId);
    let grade;
    this.ratingsMedicament.forEach(rating => {
      if(medicamentId === rating.medId){
        grade = rating.value;
        rating.done = true;
      }
    });
    let body = {
      id: medicamentId,
      grade: grade
    }
    this.ratingService.rateMedicament(body).subscribe(data => {
      
      console.log("Uspesno");
     
    }, error => {
    })
  }

  ratePharmacy(pharmacyId, medicamentId): void {
    let grade;
    this.ratingsPharmacy.forEach(rating => {
      if(pharmacyId === rating.pharmacyId){
        if(medicamentId === rating.medicamentId){
          grade = rating.value;
          rating.done = true;
        }
      }
    });
    let body = {
      id: pharmacyId,
      grade: grade
    }
    this.ratingService.ratePharmacy(body).subscribe(data => {
      console.log("Uspesno");
    }, error => {
      alert("Error");
    })
  }

  complaint(id): void{
    this.router.navigateByUrl(`homepage/new-items/complaint-pharmacy/${id}`);
  }


}
