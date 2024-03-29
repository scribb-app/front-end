import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { PrimaryLayoutModule } from '../../layouts/primary-layout/primary-layout.module';

import { NotesPage } from './notes.page';

const routes: Routes = [
  {
    path: '',
    component: NotesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrimaryLayoutModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NotesPage]
})
export class NotesPageModule {}
