import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetDeptsComponent } from './admin-get-depts.component';

describe('AdminGetDeptsComponent', () => {
  let component: AdminGetDeptsComponent;
  let fixture: ComponentFixture<AdminGetDeptsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminGetDeptsComponent]
    });
    fixture = TestBed.createComponent(AdminGetDeptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
