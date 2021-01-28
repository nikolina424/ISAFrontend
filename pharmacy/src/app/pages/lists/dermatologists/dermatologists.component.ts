import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { DermatologistService } from './../../../services/dermatologist.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-dermatologists',
  templateUrl: './dermatologists.component.html',
  styleUrls: ['./dermatologists.component.css']
})
export class DermatologistsComponent implements OnInit {

  public dermatologists = [];
  validateForm!: FormGroup;
  public worksHere = false;
  public user: any;
  public pharmacyId: any;
  public pharmacies = [];
  public dermatologist: any;

  constructor(private router: Router, private dermatologistService: DermatologistService, private fb: FormBuilder, private searchService: SearchService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllDermatologists();

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
    this.dermatologistService.getAllDermatologists().subscribe(data => {
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


  public add(id): void {
    this.worksHere = false;
      this.dermatologistService.getDermatologistById(id).subscribe(data => {
          this.pharmacies = data.pharmacyResponses;
          this.dermatologist = data;
          if(this.pharmacies.length === 0){
            this.navigate(this.dermatologist);
          }else{
            this.pharmacies.forEach(pharmacy => {
              if(pharmacy.id === this.pharmacyId){
                this.worksHere = true;
              }
              this.navigate(this.dermatologist);
            });  
          } 
      })
  }
  
  public navigate(body): void{
    if(this.worksHere === false){
      localStorage.setItem('dermatologist', JSON.stringify(body));
      console.log(body);
      this.router.navigateByUrl(`homepage/new-items/shift`);
    }else{
      console.log("True sam i uspeo sam");
    }
  }


  public remove(id): void {
    this.worksHere = false;
    this.dermatologistService.getDermatologistById(id).subscribe(data => {
        this.pharmacies = data.pharmacyResponses;
        console.log(this.pharmacies);
        if(this.pharmacies.length === 0){
        console.log("Zao mi jeeee ali ne pripadam ovde");
        }else{
          this.pharmacies.forEach(pharmacy => {
            if(pharmacy.id === this.pharmacyId){
              this.worksHere = true;
            }
            this.removeDermatologist(id);
          });  
        } 
    })
  }

  public removeDermatologist(id): void {
      if(this.worksHere === true){
        console.log("Remuvuj me jer sam ovde");
      }else{
        console.log("Ne mozes mi nista");
      }
  }

}
