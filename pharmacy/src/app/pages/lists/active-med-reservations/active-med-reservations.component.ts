import { ActivatedRoute } from '@angular/router';
import { MedicamentReservationService } from './../../../services/medicament-reservation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-med-reservations',
  templateUrl: './active-med-reservations.component.html',
  styleUrls: ['./active-med-reservations.component.css']
})
export class ActiveMedReservationsComponent implements OnInit {

  public patientId: any;
  public reservations= [] as  any;
  public check = true;

  constructor(private route: ActivatedRoute, private mrService: MedicamentReservationService) { }

  ngOnInit(): void {
    this.setupReservations();
  }

  setupReservations(): void{
    this.patientId = this.route.snapshot.params.id;
    this.mrService.getActiveByPatientId(this.patientId).subscribe(data => {
        this.reservations = data;
        console.log(data);
    })

  }

  cancel(id): void{
    let body = {
      id: id
    }
    this.mrService.cancelReservation(body).subscribe(data =>{
        this.check = data;
        if(this.check === true){
        
          location.reload();
        }
       
        console.log(data);
    })
  }
}
