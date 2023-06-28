import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Array<Character> = [];

  addChara(character:Character):void{
   character.id = uuid();
   this.characters.push(character);
   console.log(this.characters)
  }

  deleteCharacter(id:string):void{
   this.characters = this.characters.filter(character => character.id!==id);
  }

}
