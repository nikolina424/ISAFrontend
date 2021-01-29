import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dermatologist',
  templateUrl: './dermatologist.component.html',
  styleUrls: ['./dermatologist.component.css']
})
export class DermatologistComponent implements OnInit {

  validateForm!: FormGroup;
  public user: any;
  public username = false;

  constructor(private router:Router,private fb: FormBuilder, private authService: AuthService) {}


  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

  const body = {
      username: this.validateForm.value.username,
      password: this.validateForm.value.password,
      rePassword: this.validateForm.value.rePassword,
      number: this.validateForm.value.number,
      address: this.validateForm.value.address,
      firstName: this.validateForm.value.firstName,
      lastName: this.validateForm.value.lastName
  }
  console.log(body);
  this.authService.registerDermatologist(body).subscribe(data => {
    this.router.navigateByUrl(`homepage`);    
  }, error => {
    this.username = true;
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
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      number: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 


}
