import { MedicamentReservationService } from './../../../services/medicament-reservation.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { PharmacyMedicamentService } from 'src/app/services/pharmacy-medicament.service';


@Component({
  selector: 'app-medicament-reservation',
  templateUrl: './medicament-reservation.component.html',
  styleUrls: ['./medicament-reservation.component.css']
})
export class MedicamentReservationComponent implements OnInit {

  validateForm!: FormGroup;
  public pharmacyMedicamentId: any;
  public user: any;
  public pharmacyMedicament = [] as any;
  res = false;
  constructor(private pmService: PharmacyMedicamentService, private mrService: MedicamentReservationService, private fb: FormBuilder,private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupMedicament();
    this.validateForm = this.fb.group({
      dateToPick: [null, [Validators.required]]
    });
  }

  setupMedicament(): void{
    this.pharmacyMedicamentId = this.route.snapshot.params.id;
    this.pmService.getPharmacyMedicament(this.pharmacyMedicamentId).subscribe(data =>{
      this.pharmacyMedicament = data;
    })
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
     console.log("Uspeo");
     this.res = true;
    }, error => {
        console.log("Nisam uspeo");
        this.res = false;
    })
  }

}
