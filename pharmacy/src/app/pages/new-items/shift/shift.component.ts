import { ShiftService } from './../../../services/shift.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-shift',
  templateUrl: './shift.component.html',
  styleUrls: ['./shift.component.css']
})
export class ShiftComponent implements OnInit {


  validateForm!: FormGroup;
  public dermatologist: any;
  public user: any;
  start: any;
  end: any;
  public warning = false;
  public success = false;
  

  constructor( private fb: FormBuilder, private shiftService: ShiftService) { }

  ngOnInit(): void {
    this.setUpDermatologist();
    this.setupUser();
    this.validateForm = this.fb.group({
      start: [null, [Validators.required]],
      end: [null, [Validators.required]]
    });
   
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private setUpDermatologist(): void {
    this.dermatologist = JSON.parse(localStorage.getItem('dermatologist'));
    console.log(this.dermatologist);
  } 

  submitForm(): void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      startShift: this.validateForm.value.start,
      endShift: this.validateForm.value.end,
      pharmacyId: this.user.pharmacyId,
      dermatologistId: this.dermatologist.id
    }
    this.shiftService.createShift(body).subscribe(data =>{
      this.success = true;
      this.warning = false;
    }, error => {
      this.warning = true;
    })
  }

}
