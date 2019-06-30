import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyButtonComponent } from './family-button.component';

describe('FamilyButtonComponent', () => {
  let component: FamilyButtonComponent;
  let fixture: ComponentFixture<FamilyButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
