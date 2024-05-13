import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostEmpComponent } from './admin-post-emp.component';

describe('AdminPostEmpComponent', () => {
  let component: AdminPostEmpComponent;
  let fixture: ComponentFixture<AdminPostEmpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPostEmpComponent]
    });
    fixture = TestBed.createComponent(AdminPostEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
