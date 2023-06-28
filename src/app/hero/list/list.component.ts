import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: Array<string> = ['Spiderman', 'Thor', 'Hulk', 'Batman', 'Sida']
  public ultimoBorrado: string | undefined = '';

  public borrarUltimo():void{
    this.ultimoBorrado = this.heroes.pop()??'';
  }

}
