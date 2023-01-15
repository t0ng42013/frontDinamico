import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgEndComponent } from './svg-end.component';

describe('SvgEndComponent', () => {
  let component: SvgEndComponent;
  let fixture: ComponentFixture<SvgEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SvgEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
