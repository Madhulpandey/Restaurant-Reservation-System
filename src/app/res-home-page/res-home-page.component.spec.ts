import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResHomePageComponent } from './res-home-page.component';

describe('ResHomePageComponent', () => {
  let component: ResHomePageComponent;
  let fixture: ComponentFixture<ResHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
