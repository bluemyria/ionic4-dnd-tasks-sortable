import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';;

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SkyhookDndModule, DRAG_DROP_BACKEND } from '@angular-skyhook/core';
import { SkyhookMultiBackendModule } from "@angular-skyhook/multi-backend";
import { SkyhookSortableModule } from "@angular-skyhook/sortable";

import { customMultiBackend } from '../customMultiBackend';

import { SimpleComponent } from "../simple/simple.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkyhookDndModule,
    SkyhookMultiBackendModule,
    SkyhookSortableModule,
    SkyhookDndModule.forRoot({ backendFactory: customMultiBackend }),
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, SimpleComponent]
})
export class HomePageModule { }
