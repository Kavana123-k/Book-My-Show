import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListyourshowComponent } from './listyourshow.component';

describe('ListyourshowComponent', () => {
  let component: ListyourshowComponent;
  let fixture: ComponentFixture<ListyourshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListyourshowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListyourshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
