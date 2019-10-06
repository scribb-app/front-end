import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { PrimaryLayoutModule } from '../layouts/primary-layout/primary-layout.module';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimaryLayoutModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
