import { Router } from '@angular/router';
import { SearchService } from './../../../services/search.service';
import { MedicamentService } from './../../../services/medicament.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-search-medicaments',
  templateUrl: './search-medicaments.component.html',
  styleUrls: ['./search-medicaments.component.css']
})
export class SearchMedicamentsComponent implements OnInit {

  public medicaments = [];
  validateForm!: FormGroup;

  constructor(private router: Router,private medicamentService: MedicamentService, private searchService: SearchService, private mService: MedicamentService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAllMedicaments();
    this.validateForm = this.fb.group({
      name: [""],
      type: [""]
    });
  }

  private getAllMedicaments(): void {
    this.medicamentService.getAllMedicaments().subscribe(data => {
      this.medicaments = data;

    }, error => {
      alert("Error");
    })
  }

  search():void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let data = {
      name: this.validateForm.value.name == null ? "" : this.validateForm.value.name,
      type:  this.validateForm.value.type == null ? "" : this.validateForm.value.type
    }
    this.searchService.searchMedicaments(data).subscribe(data => {
      console.log(data);
     this.medicaments = data.medicamentResponses;
     console.log("Ovo su filtrirani");
    }, error => {
     
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllMedicaments();
  }

}
