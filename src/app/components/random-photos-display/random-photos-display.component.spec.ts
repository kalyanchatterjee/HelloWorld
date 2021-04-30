import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPhotosDisplayComponent } from './random-photos-display.component';

describe('RandomPhotosDisplayComponent', () => {
  let component: RandomPhotosDisplayComponent;
  let fixture: ComponentFixture<RandomPhotosDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPhotosDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPhotosDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
