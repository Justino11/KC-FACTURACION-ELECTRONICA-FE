import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarFacturasDetallesComponent } from './gestionar-facturas-detalles.component';

describe('GestionarFacturasDetallesComponent', () => {
  let component: GestionarFacturasDetallesComponent;
  let fixture: ComponentFixture<GestionarFacturasDetallesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarFacturasDetallesComponent]
    });
    fixture = TestBed.createComponent(GestionarFacturasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
