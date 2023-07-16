import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarFacturasListaComponent } from './gestionar-facturas-lista.component';

describe('GestionarFacturasListaComponent', () => {
  let component: GestionarFacturasListaComponent;
  let fixture: ComponentFixture<GestionarFacturasListaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestionarFacturasListaComponent]
    });
    fixture = TestBed.createComponent(GestionarFacturasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
