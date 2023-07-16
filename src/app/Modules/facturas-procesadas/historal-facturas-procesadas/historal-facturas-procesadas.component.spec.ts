import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoralFacturasProcesadasComponent } from './historal-facturas-procesadas.component';

describe('HistoralFacturasProcesadasComponent', () => {
  let component: HistoralFacturasProcesadasComponent;
  let fixture: ComponentFixture<HistoralFacturasProcesadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoralFacturasProcesadasComponent]
    });
    fixture = TestBed.createComponent(HistoralFacturasProcesadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
