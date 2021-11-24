import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserItemSidebarComponent } from './user-item-sidebar.component';

describe('UserItemSidebarComponent', () => {
  let component: UserItemSidebarComponent;
  let fixture: ComponentFixture<UserItemSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserItemSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserItemSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
