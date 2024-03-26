import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulterCongeComponent } from './consulter-conge.component';

describe('ConsulterCongeComponent', () => {
  let component: ConsulterCongeComponent;
  let fixture: ComponentFixture<ConsulterCongeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsulterCongeComponent]
    });
    fixture = TestBed.createComponent(ConsulterCongeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
