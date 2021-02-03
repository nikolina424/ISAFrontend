import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from './../../../services/complaint.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-complaint-pharmacy',
  templateUrl: './complaint-pharmacy.component.html',
  styleUrls: ['./complaint-pharmacy.component.css']
})
export class ComplaintPharmacyComponent implements OnInit {

  validateForm!: FormGroup;
  public pharmacy: any;
  public pharmacyId: any;
  public user: any;
  public alertSucc = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private complaintService: ComplaintService, private pharmacyService: PharmacyService) { }

  ngOnInit(): void {
    this.setUpPharmacy();
    this.setupUser();
    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
   
  }

  private setUpPharmacy(): void {
    this.pharmacyId = this.route.snapshot.params.id;
      this.pharmacyService.getPharmacy(this.pharmacyId).subscribe(data => {
        this.pharmacy = data;
        console.log(data);
      })
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      text: this.validateForm.value.text,
      complainingObjectId: this.pharmacyId,
      patientId: this.user.id,
      pharmacyId: this.pharmacyId
    }
    this.complaintService.createPharmacyComplaint(body).subscribe(data =>{
      console.log("Kreirao");
      this.alertSucc = true;
    }, error => {
      console.log("Nisam kreirao");
    })
  }

}
