import { PharmacyService } from './../../../services/pharmacy.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-pharmacy',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css']
})
export class PharmacyComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private pharmacyService: PharmacyService, private fb: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      about: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  submitForm(): void{
    
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      name: this.validateForm.value.name,
      about: this.validateForm.value.about,
      address:this.validateForm.value.address
    }
    this.pharmacyService.registerPharmacy(body).subscribe(data =>{
      alert('Uspesno dodata apoteka!');
    })
  }

}
