import { logging } from 'protractor';
import { AuthService } from './../../services/auth.service';
import { RegistrationRequestService } from './../../services/registration-request.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorLogin: boolean = false;
  validateForm!: FormGroup;

  constructor(private route: ActivatedRoute,  private rrService: RegistrationRequestService,private router:Router,private fb: FormBuilder, private authService: AuthService) {}

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    const body = {
        username: this.validateForm.value.username,
        password: this.validateForm.value.password
    }
    this.authService.login(body).subscribe(data => {
      const user = data;
      localStorage.setItem('user', JSON.stringify(user));
      this.router.navigate(['homepage']);
      console.log(data);
    
    }, error => { 
      this.errorLogin = true;   
    })
  }

  

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });

    const id = this.route.snapshot.params.id;
    console.log(id);
    if(id != undefined){
      const body = {
        id: id
      }
      this.rrService.confirmRegistrationRequest(body).subscribe(() => {
        alert('Uspešno ste se registrovali!');
        this.router.navigateByUrl(`frontpage/login`);
      },
      error => {
        alert("Error login");
      });
    }
  }

  onButtonClickRegistration(){
    this.router.navigate(['register-patient']);
  }

}
