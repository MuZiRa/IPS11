import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then( m => m.OrdersPageModule)
  },
  {
    path: 'sellers',
    loadChildren: () => import('./sellers/sellers.module').then( m => m.SellersPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'reviews',
    loadChildren: () => import('./reviews/reviews.module').then( m => m.ReviewsPageModule)
  },
  {
    path: 'shipments',
    loadChildren: () => import('./shipments/shipments.module').then( m => m.ShipmentsPageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./invoice/invoice.module').then( m => m.InvoicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
