import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { DermatologistService } from './../../../services/dermatologist.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-pharmacy-dermatologists',
  templateUrl: './pharmacy-dermatologists.component.html',
  styleUrls: ['./pharmacy-dermatologists.component.css']
})
export class PharmacyDermatologistsComponent implements OnInit {

  public dermatologists = [];
  validateForm!: FormGroup;
  public worksHere = false;
  public user: any;
  public pharmacyId: any;
  public pharmacies = [];
  public dermatologist: any;
  public alreadyHere = false;

  constructor(private router: Router, private dermatologistService: DermatologistService, private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllDermatologists();
    console.log("ne kontam");


    this.validateForm = this.fb.group({
      firstName: [""],
      lastName: [""]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.pharmacyId = this.user.pharmacyId;
  } 

  getAllDermatologists(): void{
    this.dermatologistService.getAllDermatologistByPharmacyId(this.pharmacyId).subscribe(data => {
      this.dermatologists = data;
    }, error => {
      alert("Error");
    })
  }




  search():void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let data = {
      firstName: this.validateForm.value.firstName == null ? "" : this.validateForm.value.firstName,
      lastName:  this.validateForm.value.lastName == null ? "" : this.validateForm.value.lastName
    }
    this.searchService.searchDermatologists(data).subscribe(data => {
      this.dermatologists = data.dermatologistResponses;
    }, error => {
      alert(error.error.text);
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllDermatologists();
  }


  add(id): void {
    console.log("ne kontam");
    this.router.navigateByUrl(`homepage/new-items/dermatologist-available-appointment/${id}`);
  }
  
}
