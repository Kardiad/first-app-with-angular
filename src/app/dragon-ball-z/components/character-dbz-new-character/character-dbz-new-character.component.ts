import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-new-character',
  templateUrl: './character-dbz-new-character.component.html',
  styleUrls: ['./character-dbz-new-character.component.css']
})
export class CharacterDbzNewCharacterComponent {

  @Output() onNewCharacter:EventEmitter<Character> = new EventEmitter<Character>();

  public character:Character = {
    id:'',
    name : '',
    power: 0
  };

  emitCharacter():void{
    if(this.character.name==='') return;
    //{...this.character} está creando una copia del objeto.
    this.onNewCharacter.emit({...this.character});
    this.character.name = '';
    this.character.power = 0;
  }

}
