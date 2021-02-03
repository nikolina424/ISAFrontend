import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-password-pharmacist',
  templateUrl: './update-password-pharmacist.component.html',
  styleUrls: ['./update-password-pharmacist.component.css']
})
export class UpdatePasswordPharmacistComponent implements OnInit {

  public user: any;
  validateForm!: FormGroup;
  public alert = false;
 
  constructor(private router:Router,private fb: FormBuilder, private authService: AuthService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      oldPassword: this.validateForm.value.oldPassword,
      password: this.validateForm.value.password,
      rePassword: this.validateForm.value.rePassword
  }
  console.log(body);
  this.authService.changePasswordForPharmacist(this.user.id, body).subscribe(data => {
   this.alert = true;
    this.router.navigateByUrl(`homepage`);
    
  }, error => {
    console.log(error);
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
      oldPassword: [null, [Validators.email, Validators.required]],
      password: [null, [Validators.required]],
      rePassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 

}
