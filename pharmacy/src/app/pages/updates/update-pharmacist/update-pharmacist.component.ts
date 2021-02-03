import { PharmacistService } from './../../../services/pharmacist.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-pharmacist',
  templateUrl: './update-pharmacist.component.html',
  styleUrls: ['./update-pharmacist.component.css']
})
export class UpdatePharmacistComponent implements OnInit {

  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private pharmacistService : PharmacistService) { }

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
    this.pharmacistService.getPharmacist(this.user.id).subscribe(data =>{
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
    this.pharmacistService.updatePharmacist(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }
}
