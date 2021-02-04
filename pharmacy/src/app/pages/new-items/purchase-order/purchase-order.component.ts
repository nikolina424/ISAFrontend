import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseOrderService } from './../../../services/purchase-order.service';
import { MedicamentService } from './../../../services/medicament.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {

  loading = false;
  public medicaments = [] as any;
  checked = false;
  setOfCheckedId = new Set<number>();
  medicamentOrders = [] as any;
  purchaseId: any;
  pharmacyId: any;
  date: any;
  public user: any;

  constructor(private router: Router, private route: ActivatedRoute, private poService: PurchaseOrderService, private medicamentService: MedicamentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllMedicaments();
  }

  getAllMedicaments(): void {
    this.medicamentService.getAllMedicaments().subscribe(data => {
      data.forEach(medicament => {
        this.medicaments.push(medicament);
       
        let medOrder = {
          medId: medicament.id,
          quantity: 0,
          new: false
        }
        
        this.medicamentOrders.push(medOrder);
      });
       
    })
  }
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user')!);
  } 

  sendRequest(): void{
    console.log(this.date);
    this.pharmacyId = this.route.snapshot.params.id;
    let body = {
      pharmacyId: this.pharmacyId,
      limitDate: this.date,
      pharmacistId: this.user.id
    }
    this.poService.createPurchaseOrder(body).subscribe(data => {
      this.purchaseId = data.id;
      console.log(data);
      this.medicamentOrders.forEach(medOrder => {
        if(medOrder.new){
          let b = {
            quantity: medOrder.quantity,
            purchaseOrderId: this.purchaseId,
            medicamentId: medOrder.medId
          }
          console.log(this.purchaseId);
          this.poService.createOrderMedicament(b).subscribe(data =>{
            this.router.navigate([`homepage`]);

          })
          console.log(medOrder);
        }
       
      });
    })
    
  }


  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
    this.medicamentOrders.forEach(medOrder => {
      if(id === medOrder.medId){
        medOrder.new = true;
      }
    });
  }

  refreshCheckedStatus(): void {
    const medicaments = this.medicaments.filter(({ disabled }) => !disabled);
    this.checked = medicaments.every(({ id }) => this.setOfCheckedId.has(id));
   // this.indeterminate = medicaments.some(({ id }) => this.setOfCheckedId.has(id)) && !this.checked;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }
}
