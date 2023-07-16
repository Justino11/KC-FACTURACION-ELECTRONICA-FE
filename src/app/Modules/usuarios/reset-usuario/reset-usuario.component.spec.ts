import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetUsuarioComponent } from './reset-usuario.component';

describe('ResetUsuarioComponent', () => {
  let component: ResetUsuarioComponent;
  let fixture: ComponentFixture<ResetUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResetUsuarioComponent]
    });
    fixture = TestBed.createComponent(ResetUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
