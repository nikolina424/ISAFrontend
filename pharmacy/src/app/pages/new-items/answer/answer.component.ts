import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from './../../../services/complaint.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  validateForm!: FormGroup;
  public complaintId: any;
  public user: any;
  public patientId: any;
  public alertSucc = false;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private complaintService: ComplaintService) { }

  ngOnInit(): void {
    this.setupPatientId();
    this.validateForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  private setupPatientId(): void {
    this.patientId = JSON.parse(localStorage.getItem('patientId'));
    console.log(this.patientId);
  } 

  submitForm(): void{
    this.complaintId = this.route.snapshot.params.id;
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    const body = {
      text: this.validateForm.value.text,
      complaintId: this.complaintId,
      patientId: this.patientId
    }
    this.complaintService.answer(body).subscribe(data =>{
      console.log("Kreirao");
      this.alertSucc = true;
    }, error => {
      console.log("Nisam kreirao");
    })
  }


}
