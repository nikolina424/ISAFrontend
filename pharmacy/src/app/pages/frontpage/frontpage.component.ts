import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginForm():void{
    this.router.navigate(['frontpage/login']);
  }

  registrationForm():void{
    this.router.navigate(['frontpage/register-patient']);
  }
}
