import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LovepointStorePage } from './lovepoint-store';

@NgModule({
  declarations: [
    LovepointStorePage,
  ],
  imports: [
    IonicPageModule.forChild(LovepointStorePage),
  ],
})
export class LovepointStorePageModule {}
