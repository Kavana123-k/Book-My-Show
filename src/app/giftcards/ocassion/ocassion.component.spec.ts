import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OcassionComponent } from './ocassion.component';

describe('OcassionComponent', () => {
  let component: OcassionComponent;
  let fixture: ComponentFixture<OcassionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OcassionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OcassionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
