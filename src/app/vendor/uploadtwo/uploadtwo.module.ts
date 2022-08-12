import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadtwoPageRoutingModule } from './uploadtwo-routing.module';

import { UploadtwoPage } from './uploadtwo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadtwoPageRoutingModule
  ],
  declarations: [UploadtwoPage]
})
export class UploadtwoPageModule {}
