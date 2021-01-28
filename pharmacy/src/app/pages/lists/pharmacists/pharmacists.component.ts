import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { PharmacistService } from './../../../services/pharmacist.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';


@Component({
  selector: 'app-pharmacists',
  templateUrl: './pharmacists.component.html',
  styleUrls: ['./pharmacists.component.css']
})
export class PharmacistsComponent implements OnInit {

  public pharmacists = [];
  public user: any;
  public pharmacyId: any;
  validateForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private pharmacistSerice: PharmacistService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPharmacistByPharmacyId(this.pharmacyId);

    this.validateForm = this.fb.group({
      firstName: [""],
      lastName: [""]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.pharmacyId = this.user.pharmacyId;
  } 

  getAllPharmacistByPharmacyId(id): void{
    this.pharmacistSerice.getAllPharmacistByPharmacyId(id).subscribe(data => {
      this.pharmacists = data;
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
    this.searchService.searchPharmacists(data).subscribe(data => {
      this.pharmacists = data.pharmacistResponses;
      console.log(data);
    }, error => {
      alert(error.error.text);
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllPharmacistByPharmacyId(this.pharmacyId);
  }

  remove(id): void{

  }

  add(): void{
    this.router.navigateByUrl(`homepage/new-items/pharmacist`);
  }


}
