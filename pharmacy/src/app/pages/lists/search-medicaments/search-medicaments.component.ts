import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { MedicamentService } from './../../../services/medicament.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-search-medicaments',
  templateUrl: './search-medicaments.component.html',
  styleUrls: ['./search-medicaments.component.css']
})
export class SearchMedicamentsComponent implements OnInit {

  public medicaments = [];
  validateForm!: FormGroup;
  public isPatient: boolean = false;
  public user: any;

  constructor(private router: Router,private medicamentService: MedicamentService, private searchService: SearchService, private mService: MedicamentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllMedicaments();
    this.setupUser();
    this.setupUserType();
    this.validateForm = this.fb.group({
      name: [""],
      type: [""]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 
  
  private setupUserType(): void {
    if(this.user == null){

    }else{
      if(this.user.userRole === 'PATIENT'){
        this.isPatient = true;
      }
      
    }
   
  }

  private getAllMedicaments(): void {
    this.medicamentService.getAllMedicaments().subscribe(data => {
      this.medicaments = data;

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
    this.searchService.searchMedicaments(data).subscribe(data => {
      console.log(data);
     this.medicaments = data.medicamentResponses;
    }, error => {
     
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllMedicaments();
  }

  checkAvailability(id): void {
    this.router.navigateByUrl(`homepage/lists/medicament-pharmacies/${id}`);
  }

}
