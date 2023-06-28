import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDbzListComponent } from './character-dbz-list.component';

describe('CharacterDbzListComponent', () => {
  let component: CharacterDbzListComponent;
  let fixture: ComponentFixture<CharacterDbzListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterDbzListComponent]
    });
    fixture = TestBed.createComponent(CharacterDbzListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
