import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRegimesComponent } from './liste-regimes.component';

describe('ListeRegimesComponent', () => {
  let component: ListeRegimesComponent;
  let fixture: ComponentFixture<ListeRegimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListeRegimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeRegimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
