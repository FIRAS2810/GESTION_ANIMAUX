import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegimeComponent } from './update-regime.component';

describe('UpdateRegimeComponent', () => {
  let component: UpdateRegimeComponent;
  let fixture: ComponentFixture<UpdateRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRegimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
