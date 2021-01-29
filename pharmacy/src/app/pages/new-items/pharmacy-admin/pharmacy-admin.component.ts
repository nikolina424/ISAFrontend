import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-pharmacy-admin',
  templateUrl: './pharmacy-admin.component.html',
  styleUrls: ['./pharmacy-admin.component.css']
})
export class PharmacyAdminComponent implements OnInit {

  validateForm!: FormGroup;
  public pharmacyId: any;
  public user: any;
 
  constructor(private route: ActivatedRoute, private router:Router,private fb: FormBuilder, private authService: AuthService) {}

  submitForm(): void {
    this.pharmacyId = this.route.snapshot.params.id;
    console.log(this.pharmacyId);
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
      rePassword: this.validateForm.value.rePassword,
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName,
      pharmacyId: this.pharmacyId
  }
  console.log(body);
  this.authService.registerPharmacyAdmin(body).subscribe(data => {
    //this.router.navigateByUrl(`homepage`);
   // location.reload();
    
  }, error => {
    console.log(error);
  
    alert('Error')
  })
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  

  ngOnInit(): void {
    this.setupUser();
    this.validateForm = this.fb.group({
      username: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 


}
