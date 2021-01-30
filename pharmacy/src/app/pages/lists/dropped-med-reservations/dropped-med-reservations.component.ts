import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute, private mrService: MedicamentReservationService) { }

  ngOnInit(): void {
    this.setupReservations();
  }

  setupReservations(): void{
    this.patientId = this.route.snapshot.params.id;
    this.mrService.getDroppedByPatientId(this.patientId).subscribe(data => {
        this.reservations = data;
        console.log(data);
    })

  }


}
