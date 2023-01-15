import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgInicioComponent } from './svg-inicio.component';

describe('SvgInicioComponent', () => {
  let component: SvgInicioComponent;
  let fixture: ComponentFixture<SvgInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
