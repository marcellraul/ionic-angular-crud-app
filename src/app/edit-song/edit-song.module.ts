import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditSongPageRoutingModule } from './edit-song-routing.module';

import { EditSongPage } from './edit-song.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditSongPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditSongPage]
})
export class EditSongPageModule {}
