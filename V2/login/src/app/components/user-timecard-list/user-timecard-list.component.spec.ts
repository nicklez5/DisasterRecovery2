import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTimecardListComponent } from './user-timecard-list.component';

describe('UserTimecardListComponent', () => {
  let component: UserTimecardListComponent;
  let fixture: ComponentFixture<UserTimecardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTimecardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTimecardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
