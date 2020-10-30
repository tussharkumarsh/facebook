import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leyout1Component } from './leyout1.component';

describe('Leyout1Component', () => {
  let component: Leyout1Component;
  let fixture: ComponentFixture<Leyout1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leyout1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leyout1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
