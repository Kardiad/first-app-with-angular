import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './hero/hero.module';
import { DragonBallZModule } from './dragon-ball-z/dragon-ball-z.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroModule, 
    DragonBallZModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
