import { PharmacyService } from './../../../services/pharmacy.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-update-pharmacy',
  templateUrl: './update-pharmacy.component.html',
  styleUrls: ['./update-pharmacy.component.css']
})
export class UpdatePharmacyComponent implements OnInit {

  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private pharmacyService : PharmacyService) { }
 
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
      name: [null, [Validators.required]],
      address: [null, [Validators.required]],
      about: [null, [Validators.required]]
    });
  }


  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.pharmacyService.getPharmacy(this.id).subscribe(data =>{
      const formValues = {
        name: data.name,
        about: data.about,
        address: data.address
      }
      this.validateForm.setValue(formValues);
      console.log(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.pharmacyService.updatePharmacy(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }

}
