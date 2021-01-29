import { MedicamentService } from './../../../services/medicament.service';
import { PharmacyMedicamentService } from './../../../services/pharmacy-medicament.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-new-pharmacy-medicament',
  templateUrl: './new-pharmacy-medicament.component.html',
  styleUrls: ['./new-pharmacy-medicament.component.css']
})
export class NewPharmacyMedicamentComponent implements OnInit {

  public user: any;
  public pharmacyId: any;
  validateForm!: FormGroup;
  public medicament: any;
  quantity: any;
  public medicamentId: any;
  public medicamentAdd = false;


  constructor(private fb: FormBuilder, private route: ActivatedRoute, private phService: PharmacyMedicamentService, private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setUpMedicament();
    this.validateForm = this.fb.group({
      quantity: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.pharmacyId = this.user.pharmacyId;
    this.medicamentId = this.route.snapshot.params.id;
  } 

  private setUpMedicament(): void {
     this.medicamentService.getMedicamentById(this.medicamentId).subscribe(data =>{
      this.medicament = data;
    })
  }

  submitForm(): void{
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      pharmacyId: this.pharmacyId,
      medicamentId: this.medicamentId,
      quantity:this.validateForm.value.quantity
    }
    this.phService.addMedicamentToPharmacy(body).subscribe(data =>{
      this.medicamentAdd = true;
    })
  }
}
