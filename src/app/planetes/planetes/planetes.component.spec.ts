import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetesComponent } from './planetes.component';

describe('PlanetesComponent', () => {
  let component: PlanetesComponent;
  let fixture: ComponentFixture<PlanetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
