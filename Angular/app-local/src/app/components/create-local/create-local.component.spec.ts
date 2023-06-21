import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocalComponent } from './create-local.component';

describe('CreateLocalComponent', () => {
  let component: CreateLocalComponent;
  let fixture: ComponentFixture<CreateLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLocalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
