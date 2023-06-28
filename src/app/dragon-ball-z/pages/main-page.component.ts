import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainDBZcomponent {

  constructor(private service:DbzService){}

 /*
 sería una forma pero realmente no es la mejor porque sería hacer 
 públic el servicio. 
 get getService():DbzService{
    return this.service;
}
*/

  get characters():Array<Character>{
    return this.service.characters;
  }

  onDeleteCharacter(id:string):void{
    this.service.deleteCharacter(id);
  }

  onAddCharacter(character:Character):void{
    this.service.addChara(character);
  }

}