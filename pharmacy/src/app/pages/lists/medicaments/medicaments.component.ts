import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { MedicamentService } from './../../../services/medicament.service';
import { PharmacyMedicamentService } from './../../../services/pharmacy-medicament.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-medicaments',
  templateUrl: './medicaments.component.html',
  styleUrls: ['./medicaments.component.css']
})
export class MedicamentsComponent implements OnInit {

  public user: any;
  public pharmacyId: any;
  public pharmacyMedicaments = [];
  public medicament: any;
  validateForm!: FormGroup;
  public alert = true;
  public alertSucc = false;

  constructor(private pharmacyMedicamentService: PharmacyMedicamentService, private router: Router, private searchService: SearchService, private pmService: PharmacyMedicamentService, private mService: MedicamentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllMedicamentsByPharmacyId(this.pharmacyId);

    this.validateForm = this.fb.group({
      name: [""],
      type: [""]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.pharmacyId = this.user.pharmacyId;
  } 

  private getAllMedicamentsByPharmacyId(id): void {
    this.pmService.getAllMedicamentsByPharmacyId(id).subscribe(data => {
      this.pharmacyMedicaments = data;

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
      name: this.validateForm.value.name == null ? "" : this.validateForm.value.name,
      type:  this.validateForm.value.type == null ? "" : this.validateForm.value.type
    }
    this.searchService.searchPharmacyMedicaments(data).subscribe(data => {
     this.pharmacyMedicaments = data.pharmacyMedicamentResponses;
     console.log("Ovo su filtrirani");
    }, error => {
     
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllMedicamentsByPharmacyId(this.pharmacyId);
  }

  change(id): void {
    this.router.navigateByUrl(`homepage/updates/update-pharmacy-medicament/${id}`);
  }

  add(): void {
    this.router.navigateByUrl(`homepage/lists/new-medicaments`);
  }

  remove(id): void {
    let body = {
      pharmacyId: this.pharmacyId,
      itemId: id
    }
    this.pharmacyMedicamentService.removeMedicamentFromPharmacy(body).subscribe(data => {
        this.alert = data;
        console.log(data);
        this.alertSucc = data;
        this.getAllMedicamentsByPharmacyId(this.pharmacyId);
    })
  }

}
