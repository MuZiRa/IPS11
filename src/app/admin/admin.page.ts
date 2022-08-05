import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  constructor(private router: Router) { }

      //when navigate to dashboard page
      toDash(){

        this.router.navigateByUrl('/admin/dashboard');
      }
    
      //when navigate to product page
      toProduct(){

        this.router.navigateByUrl('/admin/product');
      }
  
    //when navigate to sellers page
      toSeller(){

        this.router.navigateByUrl('/admin/sellers');
      }
  
     //when navigate to orders page
     toOrder(){
      this.router.navigateByUrl('/admin/orders');
    }
  
     //when navigate to shipments page
     toShip(){
      this.router.navigateByUrl('/admin/shipments');
    }

     //when navigate to reviews page
      toReviews(){
      this.router.navigateByUrl('/admin/reviews');
    }

     //when navigate to invoice page
     toInvoice(){
      this.router.navigateByUrl('/admin/invoice');
    }
    

  ngOnInit() {
  }

}
