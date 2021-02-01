import { DermatologistAppointmentService } from './../../../services/dermatologist-appointment.service';
import { DermatologistService } from './../../../services/dermatologist.service';
import { ActivatedRoute } from '@angular/router';
import { ShiftService } from './../../../services/shift.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dermatologist-available-appointment',
  templateUrl: './dermatologist-available-appointment.component.html',
  styleUrls: ['./dermatologist-available-appointment.component.css']
})
export class DermatologistAvailableAppointmentComponent implements OnInit {

  public dermatologistId: any;
  public dermatologist: any;
  public user: any;
  public pharmacyId: any;
  public shift: any
  validateForm!: FormGroup;
  public created = false;
  public notCreated = false;
  price: number = 0;


  constructor(private daService: DermatologistAppointmentService, private fb: FormBuilder, private dermatologistService: DermatologistService, private route: ActivatedRoute, private shiftService: ShiftService) { }

  ngOnInit(): void {
    this.setupUser();
    this.setShift();
    this.validateForm = this.fb.group({
      startTimeExamination: [null, [Validators.required]],
      endTimeExamination: [null, [Validators.required]],
      dateExamination: [null, [Validators.required]],
      price: [0, [Validators.required]]
    });
  }

  private setShift(): void{
    this.dermatologistId = this.route.snapshot.params.id;

    let data = {
      pharmacyId: this.pharmacyId,
      dermatologistId: this.dermatologistId
    }
      this.shiftService.getOneDermatologistOnePharmacyShift(data).subscribe(data => {
        this.shift = data;
        console.log(this.shift);
       }, error => {
        
       })
  }

  private setupUser(): void {
    this.dermatologistId = this.route.snapshot.params.id;
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.pharmacyId = this.user.pharmacyId;
    this.dermatologistService.getDermatologistById(this.dermatologistId).subscribe(data => {
      this.dermatologist = data;
    })
  } 

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    let data = {
      pharmacyId: this.pharmacyId,
      dermatologistId: parseInt(this.dermatologistId),
      startTimeExamination: this.validateForm.value.startTimeExamination == null ? "" : this.validateForm.value.startTimeExamination,
      endTimeExamination: this.validateForm.value.endTimeExamination == null ? "" : this.validateForm.value.endTimeExamination,
      price: this.validateForm.value.price == 0 ? 0 : this.validateForm.value.price,
      dateExamination:this.validateForm.value.dateExamination == null ? "" : this.validateForm.value.dateExamination
    }
    console.log(data);
    this.daService.createAvailableExamination(data).subscribe(data => {
      this.created = true;
      this.notCreated = false;

     }, error => {
      this.notCreated = true;
      this.created = false;
     })
  }
   

}
