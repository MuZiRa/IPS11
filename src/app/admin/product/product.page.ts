import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  loadedBookings: Product[];
  private bookingSub: Subscription;

  constructor() { }

  ngOnInit() {
  }

}
