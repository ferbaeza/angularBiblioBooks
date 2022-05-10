import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearUssuarioComponent } from './crear-ussuario.component';

describe('CrearUssuarioComponent', () => {
  let component: CrearUssuarioComponent;
  let fixture: ComponentFixture<CrearUssuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearUssuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearUssuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
