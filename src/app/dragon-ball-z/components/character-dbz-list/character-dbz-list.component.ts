import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './character-dbz-list.component.html',
  styleUrls: ['./character-dbz-list.component.css']
})
export class CharacterDbzListComponent {
  @Input() personajes:Array<Character> = [];
  @Output() onDeleteCharacter:EventEmitter<string> = new EventEmitter<string>();

  deleteCharacter(id:string){
    this.onDeleteCharacter.emit(id);
  }
}
