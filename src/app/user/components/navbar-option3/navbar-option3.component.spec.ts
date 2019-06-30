import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOption3Component } from './navbar-option3.component';

describe('NavbarOption3Component', () => {
  let component: NavbarOption3Component;
  let fixture: ComponentFixture<NavbarOption3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarOption3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarOption3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
