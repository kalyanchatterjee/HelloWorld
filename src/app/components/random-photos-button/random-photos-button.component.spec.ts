import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomPhotosButtonComponent } from './random-photos-button.component';

describe('RandomPhotosButtonComponent', () => {
  let component: RandomPhotosButtonComponent;
  let fixture: ComponentFixture<RandomPhotosButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomPhotosButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomPhotosButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
