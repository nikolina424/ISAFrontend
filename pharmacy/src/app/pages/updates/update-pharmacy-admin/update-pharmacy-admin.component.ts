import { PharmacyAdminService } from './../../../services/pharmacy-admin.service';
import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-pharmacy-admin',
  templateUrl: './update-pharmacy-admin.component.html',
  styleUrls: ['./update-pharmacy-admin.component.css']
})
export class UpdatePharmacyAdminComponent implements OnInit {

  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private pharmacyAdminService : PharmacyAdminService) { }
 
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
      lastName: [null, [Validators.required]]
    });
  }


  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.pharmacyAdminService.getPharmacyAdmin(this.id).subscribe(data =>{
      const formValues = {
        firstName: data.firstName,
        lastName: data.lastName
      }
      this.validateForm.setValue(formValues);
      console.log(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.pharmacyAdminService.updatePharmacyAdmin(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }

}
