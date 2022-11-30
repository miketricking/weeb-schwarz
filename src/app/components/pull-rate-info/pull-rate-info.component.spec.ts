import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRateInfoComponent } from './pull-rate-info.component';

describe('PullRateInfoComponent', () => {
  let component: PullRateInfoComponent;
  let fixture: ComponentFixture<PullRateInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PullRateInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRateInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
