import { MedicamentReservationService } from './../../../services/medicament-reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-medicament-reservation',
  templateUrl: './medicament-reservation.component.html',
  styleUrls: ['./medicament-reservation.component.css']
})
export class MedicamentReservationComponent implements OnInit {

  validateForm!: FormGroup;
  private pharmacyMedicamentId: any;
  public user: any;
  constructor(private mrService: MedicamentReservationService, private fb: FormBuilder,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupMedicament();
    this.validateForm = this.fb.group({
      dateToPick: [null, [Validators.required]]
    });
  }

  setupMedicament(): void{
    this.pharmacyMedicamentId = this.route.snapshot.params.id;

  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      dateToPick: this.validateForm.value.dateToPick,
      pharmacyMedicamentId: this.pharmacyMedicamentId,
      patientId: this.user.id
    }
    this.mrService.createReservation(body).subscribe(data =>{
     
    }, error => {
  
    })
  }

}
