import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddTimecardListComponent } from './user-add-timecard-list.component';

describe('UserAddTimecardListComponent', () => {
  let component: UserAddTimecardListComponent;
  let fixture: ComponentFixture<UserAddTimecardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAddTimecardListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddTimecardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
