import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConfirmComponent } from './message-confirm.component';

describe('MessageConfirmComponent', () => {
  let component: MessageConfirmComponent;
  let fixture: ComponentFixture<MessageConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageConfirmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
