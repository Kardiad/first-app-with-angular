import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDbzNewCharacterComponent } from './character-dbz-new-character.component';

describe('CharacterDbzNewCharacterComponent', () => {
  let component: CharacterDbzNewCharacterComponent;
  let fixture: ComponentFixture<CharacterDbzNewCharacterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDbzNewCharacterComponent]
    });
    fixture = TestBed.createComponent(CharacterDbzNewCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
