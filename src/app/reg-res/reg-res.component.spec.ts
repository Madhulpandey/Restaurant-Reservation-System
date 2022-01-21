import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegResComponent } from './reg-res.component';

describe('RegResComponent', () => {
  let component: RegResComponent;
  let fixture: ComponentFixture<RegResComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegResComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
