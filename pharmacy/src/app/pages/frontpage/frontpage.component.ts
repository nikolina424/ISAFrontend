import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  public user: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.setupUser();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user)
  } 

  loginForm():void{
    this.router.navigate(['frontpage/login']);
  }

  registrationForm():void{
    this.router.navigate(['frontpage/register-patient']);
  }

  searchPharmacies(): void{
    this.router.navigate(['frontpage/lists/search-pharmacies']);
  }

  searchMedicaments(): void{
    this.router.navigate(['frontpage/lists/search-medicaments']);
  }
}
