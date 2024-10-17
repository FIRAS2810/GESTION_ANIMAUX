import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParRegimeComponent } from './recherche-par-regime.component';

describe('RechercheParRegimeComponent', () => {
  let component: RechercheParRegimeComponent;
  let fixture: ComponentFixture<RechercheParRegimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheParRegimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechercheParRegimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
