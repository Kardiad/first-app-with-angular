import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:string = "Batman";
  public realname:string = "Bruce Wayn";
  public age:number = 30;
  

  poder():number{
    return this.age *25 +100 ;
  }

  changeHero():void{
    this.name = "Spiderman";
    this.realname = "Peter Parker";
   
  }

  changeAge():void{
    this.age = 20;

  }

  reset(){
    this.name = 'Batman';
    this.age = 30;
  }

}
