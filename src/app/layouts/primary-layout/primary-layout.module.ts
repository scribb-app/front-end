import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PrimaryLayoutComponent } from './primary-layout.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
  ],
  declarations: [PrimaryLayoutComponent],
  exports: [PrimaryLayoutComponent]
})
export class PrimaryLayoutModule {}
