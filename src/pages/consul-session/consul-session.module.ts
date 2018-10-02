import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsulSessionPage } from './consul-session';

@NgModule({
  declarations: [
    ConsulSessionPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsulSessionPage),
  ],
})
export class ConsulSessionPageModule {}
