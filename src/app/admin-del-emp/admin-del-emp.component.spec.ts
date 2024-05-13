import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDelEmpComponent } from './admin-del-emp.component';

describe('AdminDelEmpComponent', () => {
  let component: AdminDelEmpComponent;
  let fixture: ComponentFixture<AdminDelEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDelEmpComponent]
    });
    fixture = TestBed.createComponent(AdminDelEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
