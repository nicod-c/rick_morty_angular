import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonajesListadoComponent } from './personajes-listado.component';

describe('PersonajesListadoComponent', () => {
  let component: PersonajesListadoComponent;
  let fixture: ComponentFixture<PersonajesListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonajesListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonajesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
