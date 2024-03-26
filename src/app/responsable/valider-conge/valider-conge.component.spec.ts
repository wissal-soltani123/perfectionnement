import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValiderCongeComponent } from './valider-conge.component';

describe('ValiderCongeComponent', () => {
  let component: ValiderCongeComponent;
  let fixture: ComponentFixture<ValiderCongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValiderCongeComponent]
    });
    fixture = TestBed.createComponent(ValiderCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
