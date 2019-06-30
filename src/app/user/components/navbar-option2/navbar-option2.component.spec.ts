import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOption2Component } from './navbar-option2.component';

describe('NavbarOption2Component', () => {
  let component: NavbarOption2Component;
  let fixture: ComponentFixture<NavbarOption2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarOption2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOption2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
