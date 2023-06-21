import { TestBed } from '@angular/core/testing';

import { SessionGuard } from './session.guard';
import { RouterTestingModule } from '@angular/router/testing';

//Es el nombre de la prueba "Examen del Session Guard"
describe('Testing of Session Guard', () => {
  let guard: SessionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
        ]
    });
    guard = TestBed.inject(SessionGuard);
  });

  //La primera pregunta de ese gran examen
  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

});
