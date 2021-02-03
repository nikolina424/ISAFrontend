import { ActivatedRoute } from '@angular/router';
import { DermatologistService } from './../../../services/dermatologist.service';
import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-complaint-dermatologist',
  templateUrl: './complaint-dermatologist.component.html',
  styleUrls: ['./complaint-dermatologist.component.css']
})
export class ComplaintDermatologistComponent implements OnInit {

  validateForm!: FormGroup;
  public dermatologist: any;
  public dermatologistId: any;
  public user: any;
  public pharmacyId: any;
  public alertSucc = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private complaintService: ComplaintService, private dermatologistService: DermatologistService) { }

  ngOnInit(): void {
    this.setUpDermatologist();
    this.setupUser();
    this.setupPharmacyId();
    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
   
  }

  private setupPharmacyId(): void {
    this.pharmacyId = JSON.parse(localStorage.getItem('pharmacyId'));
    console.log(this.pharmacyId);
  } 

  private setUpDermatologist(): void {
    this.dermatologistId = this.route.snapshot.params.id;
      this.dermatologistService.getDermatologistById(this.dermatologistId).subscribe(data => {
        this.dermatologist = data;
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
      complainingObjectId: this.dermatologistId,
      patientId: this.user.id,
      pharmacyId: this.pharmacyId
    }
    this.complaintService.createDermatologistComplaint(body).subscribe(data =>{
      console.log("Kreirao");
      this.alertSucc = true;
    }, error => {
      console.log("Nisam kreirao");
    })
  }


}
