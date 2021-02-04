import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacy-consultation',
  templateUrl: './pharmacy-consultation.component.html',
  styleUrls: ['./pharmacy-consultation.component.css']
})
export class PharmacyConsultationComponent implements OnInit {

  public pharmacies = [];
  validateForm!: FormGroup;
  public search = false;
  public sendData: any;


  constructor(private router: Router, private fb: FormBuilder, private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    console.log("nnnnn");
    this.getAllPharmacies();
    this.validateForm = this.fb.group({
      dateExamination: [""],
      startExamination: [""],
      endExamination: [""]
    });
  }

  private getAllPharmacies(): void {
    this.pharmacyService.getAllPharmacies().subscribe(data => {
      this.pharmacies = data;

    }, error => {
      alert("Error");
    })
  }

  findPharmacies():void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let data = {
      dateExamination: this.validateForm.value.dateExamination == null ? "" : this.validateForm.value.dateExamination,
      startExamination: this.validateForm.value.startExamination == null ? "" : this.validateForm.value.startExamination,
      endExamination: this.validateForm.value.endExamination == null ? "" : this.validateForm.value.endExamination,
    }
    this.sendData = data;
    console.log(data);
    this.pharmacyService.getPharmaciesByDate(data).subscribe(data => {
     this.pharmacies = data;
     this.search = true;
     console.log(data);
     console.log("Ovo su filtrirani");
    }, error => {
     
    })
  }
  redirect(id): void{
    console.log(this.sendData);
    localStorage.setItem('sendData', JSON.stringify(this.sendData));
    this.router.navigateByUrl(`homepage/lists/pharmacist-consultation/${id}`);
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllPharmacies();
    this.search = false;
  }

}
