import { MedicamentService } from './../../../services/medicament.service';
import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medicament',
  templateUrl: './medicament.component.html',
  styleUrls: ['./medicament.component.css']
})
export class MedicamentComponent implements OnInit {

  validateForm!: FormGroup;
  public user: any;

  constructor(private router:Router,private fb: FormBuilder, private medicamentService: MedicamentService) {}


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
    name: this.validateForm.value.name,
    code: this.validateForm.value.code,
    shape: this.validateForm.value.shape,
    type: this.validateForm.value.type,
    replacement: this.validateForm.value.replacement,
    contraindications: this.validateForm.value.contraindications,
    ingredients: this.validateForm.value.ingredients,
    manufacturer: this.validateForm.value.manufacturer,
    issuance: this.validateForm.value.issuance,
    notes: this.validateForm.value.notes
  }
  this.medicamentService.createMedicament(body).subscribe(data => {
    this.router.navigateByUrl(`homepage`);
    location.reload();
    
  }, error => {
    console.log(error);
  
    alert('Error')
  })
  }


  ngOnInit(): void {
    this.setupUser();
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      shape: [null, [Validators.required]],
      replacement: [null, [Validators.required]],
      type: [null, [Validators.required]],
      contraindications: [null, [Validators.required]],
      ingredients: [null, [Validators.required]],
      manufacturer: [null, [Validators.required]],
      issuance: [null, [Validators.required]],
      notes: []
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 


}
