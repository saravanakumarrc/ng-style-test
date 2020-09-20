import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmSplashComponent } from './pm-splash.component';

describe('PmSplashComponent', () => {
  let component: PmSplashComponent;
  let fixture: ComponentFixture<PmSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
