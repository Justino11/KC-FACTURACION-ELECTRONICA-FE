import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoralFacturasProcesadasDetallesComponent } from './historal-facturas-procesadas-detalles.component';

describe('HistoralFacturasProcesadasDetallesComponent', () => {
  let component: HistoralFacturasProcesadasDetallesComponent;
  let fixture: ComponentFixture<HistoralFacturasProcesadasDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoralFacturasProcesadasDetallesComponent]
    });
    fixture = TestBed.createComponent(HistoralFacturasProcesadasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
