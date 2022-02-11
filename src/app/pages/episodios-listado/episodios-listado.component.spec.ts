import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosListadoComponent } from './episodios-listado.component';

describe('EpisodiosListadoComponent', () => {
  let component: EpisodiosListadoComponent;
  let fixture: ComponentFixture<EpisodiosListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodiosListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodiosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
