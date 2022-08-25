import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvellePageDonneesComponent } from './nouvelle-page-donnees.component';

describe('NouvellePageDonneesComponent', () => {
  let component: NouvellePageDonneesComponent;
  let fixture: ComponentFixture<NouvellePageDonneesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvellePageDonneesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvellePageDonneesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
