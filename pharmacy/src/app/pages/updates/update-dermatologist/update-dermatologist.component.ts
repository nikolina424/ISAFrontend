import { DermatologistService } from './../../../services/dermatologist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-dermatologist',
  templateUrl: './update-dermatologist.component.html',
  styleUrls: ['./update-dermatologist.component.css']
})
export class UpdateDermatologistComponent implements OnInit {

  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private dermatologistService: DermatologistService, private route: ActivatedRoute, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setupUser();
    this.setupForm();
    this.getDetails();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 

  public setupForm(): void {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      number: [null, [Validators.required]],
      address: [null, [Validators.required]]
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.dermatologistService.getDermatologistById(this.user.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        firstName: data.firstName,
        lastName: data.lastName,
        number: data.number,
        address: data.address
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.dermatologistService.updateDermatologist(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }
}
