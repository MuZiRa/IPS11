import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.page.html',
  styleUrls: ['./vendors.page.scss'],
})
export class VendorsPage implements OnInit {

    //mock data for seller
    vendors: any = [
      {
        "username": "Noor Naim",
        "potrait": "assets/potraits/pro2.png",
        "company": "EcoThrifty Company"
      },
      {
        "username": "Farah Amani",
        "potrait": "assets/potraits/pro5.png",
        "company": "DeThrift Company"
      },
      {
        "username": "Siti Ropeah",
        "potrait": "assets/potraits/pro4.png",
        "company": "KlothThrift Company"
      },
      {
        "username": "Abdul Aziz",
        "potrait": "assets/potraits/pro3.png",
        "company": "LocalThrift Company"
      },
      {
        "username": "Ahmad Azim",
        "potrait": "assets/potraits/pro7.png",
        "company": "ThriftTah Company"
      },
    ];

  listOfVendors: any;

  constructor(public navCtrl: NavController) {
              this.listOfVendors = this.vendors;
   }

      //to filter vendors by username 
      searchSeller(ev: any) {
        let val = ev.target.value;
      
        if (val && val.trim() !== '') {
          this.listOfVendors = this.vendors.filter((seller) => {
            return seller.username.toLowerCase().includes(val.toLowerCase());
          });
        } else {
          this.listOfVendors = this.vendors;
        }
        }

  ngOnInit() {
  }



}
