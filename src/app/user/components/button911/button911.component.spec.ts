import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Button911Component } from './button911.component';

describe('Button911Component', () => {
  let component: Button911Component;
  let fixture: ComponentFixture<Button911Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Button911Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Button911Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
