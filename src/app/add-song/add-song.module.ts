import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSongPageRoutingModule } from './add-song-routing.module';

import { AddSongPage } from './add-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSongPageRoutingModule, FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddSongPage]
})
export class AddSongPageModule {}
