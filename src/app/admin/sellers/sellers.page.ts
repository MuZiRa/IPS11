import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.page.html',
  styleUrls: ['./sellers.page.scss'],
})
export class SellersPage implements OnInit {

    //mock data for seller
    sellers: any = [
      {
        "username": "Noor Aiman",
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

  listOfSellers: any;

  constructor(public navCtrl: NavController) {
              this.listOfSellers = this.sellers;
   }

      //to filter sellers by username 
      searchSeller(ev: any) {
        let val = ev.target.value;
      
        if (val && val.trim() !== '') {
          this.listOfSellers = this.sellers.filter((seller) => {
            return seller.username.toLowerCase().includes(val.toLowerCase());
          });
        } else {
          this.listOfSellers = this.sellers;
        }
        }

  ngOnInit() {
  }



}
