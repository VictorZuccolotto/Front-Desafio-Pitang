import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationNavItemComponent } from './notification-nav-item.component';

describe('NotificationNavItemComponent', () => {
  let component: NotificationNavItemComponent;
  let fixture: ComponentFixture<NotificationNavItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationNavItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
