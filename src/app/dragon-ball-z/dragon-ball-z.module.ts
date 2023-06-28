import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainDBZcomponent } from './pages/main-page.component';
import { CharacterDbzListComponent } from './components/character-dbz-list/character-dbz-list.component';
import { CharacterDbzNewCharacterComponent } from './components/character-dbz-new-character/character-dbz-new-character.component';


@NgModule({
  declarations: [
    MainDBZcomponent,
    CharacterDbzListComponent,
    CharacterDbzNewCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MainDBZcomponent,
  ]
})

export class DragonBallZModule { }
