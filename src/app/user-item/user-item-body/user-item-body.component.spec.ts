import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemBodyComponent } from './user-item-body.component';

describe('UserItemBodyComponent', () => {
  let component: UserItemBodyComponent;
  let fixture: ComponentFixture<UserItemBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
