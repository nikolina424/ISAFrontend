import { PharmacyService } from './../../../services/pharmacy.service';
import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-search-pharmacies',
  templateUrl: './search-pharmacies.component.html',
  styleUrls: ['./search-pharmacies.component.css']
})
export class SearchPharmaciesComponent implements OnInit {

  public pharmacies = [];
  validateForm!: FormGroup;

  constructor(private router: Router, private searchService: SearchService, private pharmacyService: PharmacyService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllPharmacies();
    this.validateForm = this.fb.group({
      name: [""]
    });
  }

  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;

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
      name: this.validateForm.value.name == null ? "" : this.validateForm.value.name
    }
    this.searchService.searchPharmacies(data).subscribe(data => {
     this.pharmacies = data.pharmacyResponses;
     console.log(data);
     console.log("Ovo su filtrirani");
    }, error => {
     
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllPharmacies();
  }

  profilePharmacy(id){
    this.router.navigateByUrl(`frontpage/profile-pharmacy/${id}`);
  }

}
