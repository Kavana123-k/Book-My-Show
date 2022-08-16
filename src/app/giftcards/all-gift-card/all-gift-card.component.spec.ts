import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGiftCardComponent } from './all-gift-card.component';

describe('AllGiftCardComponent', () => {
  let component: AllGiftCardComponent;
  let fixture: ComponentFixture<AllGiftCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllGiftCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
