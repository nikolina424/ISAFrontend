import { PharmacistService } from './../../../services/pharmacist.service';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-complaint-pharmacist',
  templateUrl: './complaint-pharmacist.component.html',
  styleUrls: ['./complaint-pharmacist.component.css']
})
export class ComplaintPharmacistComponent implements OnInit {

  validateForm!: FormGroup;
  public pharmacist: any;
  public pharmacistId: any;
  public pharmacyId: any;
  public user: any;
  public alertSucc = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private complaintService: ComplaintService, private pharmacistService: PharmacistService) { }

  ngOnInit(): void {
    this.setUpPharmacist();
    this.setupUser();
    this.setupPharmacyId();
    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
   
  }

  private setUpPharmacist(): void {
    this.pharmacistId = this.route.snapshot.params.id;
      this.pharmacistService.getPharmacist(this.pharmacistId).subscribe(data => {
        this.pharmacist = data;
        console.log(data);
      })
  }

  private setupPharmacyId(): void {
    this.pharmacyId = JSON.parse(localStorage.getItem('pharmacyId'));
    console.log(this.pharmacyId);
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
      complainingObjectId: this.pharmacistId,
      patientId: this.user.id,
      pharmacyId: this.pharmacyId
    }
    this.complaintService.createPharmacistComplaint(body).subscribe(data =>{
      console.log("Kreirao");
      this.alertSucc = true;
    }, error => {
      console.log("Nisam kreirao");
    })
  }
}
