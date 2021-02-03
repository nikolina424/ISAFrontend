import { SystemAdminService } from './../../../services/system-admin.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-system-admin',
  templateUrl: './update-system-admin.component.html',
  styleUrls: ['./update-system-admin.component.css']
})
export class UpdateSystemAdminComponent implements OnInit {

  private id : any;
  validateForm: FormGroup
  public user: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder, private router: Router, private saService : SystemAdminService) { }

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
    this.saService.getSystemAdmin(this.user.id).subscribe(data =>{
      console.log(data);
      const formValues = {
        firstName: data.firstName,
        lastName: data.lastName
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    console.log(this.validateForm.value);
    this.saService.updateSystemAdmin(this.user.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`homepage`);
    }, error => {
      alert('Error');
    })
  }

}
