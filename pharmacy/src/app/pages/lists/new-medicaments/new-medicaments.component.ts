import { Router } from '@angular/router';
import { PharmacyMedicamentService } from './../../../services/pharmacy-medicament.service';
import { MedicamentService } from './../../../services/medicament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-medicaments',
  templateUrl: './new-medicaments.component.html',
  styleUrls: ['./new-medicaments.component.css']
})
export class NewMedicamentsComponent implements OnInit {

  public user: any;
  public pharmacyId: any;
  public medicaments = [];
  public pharmacyMedicaments = [];
  public exists : boolean = false;

  constructor(private router: Router, private pmService: PharmacyMedicamentService, private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllMedicaments();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
    this.pharmacyId = this.user.pharmacyId;
  } 

  private getAllMedicaments(): void {
    this.medicamentService.getAllMedicaments().subscribe(data => {
      this.medicaments = data;

    }, error => {
      alert("Error");
    })
  }

  public add(medicament): void {
      this.pmService.getAllMedicamentsByPharmacyId(this.pharmacyId).subscribe(data=>{
        this.pharmacyMedicaments = data;
        console.log("Uzeo sam podatke");
        console.log(this.pharmacyMedicaments);
        this.pharmacyMedicaments.forEach(pharmacyMedicament => {
          
          if(pharmacyMedicament.medicament.name !== medicament.name){
              console.log("Usao sam u krug i ne zovem se kao tvoj lek ")
          }else{
              console.log("U ovom kruvu sam ispao jer postojim kod tebe");
              this.exists = true;
          }
        });
        if(this.exists === true){
          console.log("Ne mozes me ubaciti jer sam vec tu");
          this.exists = false;
        }else{
          console.log("Mozes me ubaciti");
          this.router.navigateByUrl(`homepage/new-items/new-pharmacy-medicament/${medicament.id}`);
        }
      }, error => {
       console.log("Nisam uspeo da izvucem podatke odmah");
      })
    
  }


}
